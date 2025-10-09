"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
	getUserProfileServices, 
	getUserDonationHistoryServices, 
	getUserEventHistoryServices,
	checkAuthStatus 
} from "@/services/apiServices";

export default function UserProfile() {
	const [activeTab, setActiveTab] = useState('donations');
	const [userProfile, setUserProfile] = useState(null);
	const [donationHistory, setDonationHistory] = useState([]);
	const [eventHistory, setEventHistory] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				if (typeof window !== 'undefined' && !localStorage.getItem('token')) {
					localStorage.setItem('token', 'demo-token-12345');
				}

				if (!checkAuthStatus()) {
					setError("Please login to view your profile");
					setLoading(false);
					return;
				}

				// Fetch user profile
				const profileData = await getUserProfileServices();
				setUserProfile(profileData);

				// Fetch donation history
				const donationsData = await getUserDonationHistoryServices(profileData.id);
				setDonationHistory(donationsData);

				// Fetch event history
				const eventsData = await getUserEventHistoryServices(profileData.id);
				setEventHistory(eventsData);

			} catch (error) {
				console.error("Error fetching user data:", error);
				setError("Failed to load profile data");
			} finally {
				setLoading(false);
			}
		};

		fetchUserData();
	}, []);

	if (loading) {
		return (
			<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="User Profile">
				<div className="container">
					<div className="text-center py-5">
						<div className="spinner-border" role="status">
							<span className="sr-only">Loading...</span>
						</div>
					</div>
				</div>
			</Layout>
		);
	}

	if (error) {
		return (
			<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="User Profile">
				<div className="container">
					<div className="alert alert-danger text-center">
						{error}
						<br />
						<Link href="/login" className="btn btn-primary mt-3">
							Go to Login
						</Link>
					</div>
				</div>
			</Layout>
		);
	}

	return (
		<>
			<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="User Profile">
				{/* User Profile Start */}
				<section className="user-profile">
					<div className="container">
						<div className="row">
							{/* Profile Sidebar */}
							<div className="col-xl-4 col-lg-4">
								<div className="user-profile__sidebar">
									<div className="user-profile__info">
										<div className="user-profile__details">
											<h3 className="user-profile__name">{userProfile?.username || 'User'}</h3>
											<p className="user-profile__email">{userProfile?.email}</p>
											<p className="user-profile__phone">{userProfile?.phone}</p>
											{userProfile?.nrc && (
												<p className="user-profile__nrc">NRC: {userProfile.nrc}</p>
											)}
										</div>
									</div>
									
									{/* Navigation Tabs */}
									<div className="user-profile__nav">
										<ul className="nav nav-tabs">
											<li className="nav-item">
												<button 
													className={`nav-link ${activeTab === 'donations' ? 'active' : ''}`}
													onClick={() => setActiveTab('donations')}
												>
													<i className="fa fa-heart"></i> Donations ({donationHistory.length})
												</button>
											</li>
											<li className="nav-item">
												<button 
													className={`nav-link ${activeTab === 'events' ? 'active' : ''}`}
													onClick={() => setActiveTab('events')}
												>
													<i className="fa fa-calendar"></i> Events ({eventHistory.length})
												</button>
											</li>
										</ul>
									</div>

									{/* Quick Stats */}
									<div className="user-profile__stats">
										<div className="stats-box">
											<div className="stats-item">
												<h4>{donationHistory.length}</h4>
												<p>Total Donations</p>
											</div>
											<div className="stats-item">
												<h4>
													{donationHistory.reduce((total, donation) => {
														const amount = parseFloat(donation.amount.replace(/[$,]/g, '')) || 0;
														return total + amount;
													}, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
												</h4>
												<p>Total Donated</p>
											</div>
											<div className="stats-item">
												<h4>{eventHistory.length}</h4>
												<p>Events Joined</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Main Content */}
							<div className="col-xl-8 col-lg-8">
								<div className="user-profile__content">

									{/* Donations Tab */}
									{activeTab === 'donations' && (
										<div className="tab-content donations-tab">
											<h4 className="section-title">Donation History</h4>
											{donationHistory.length > 0 ? (
												<div className="donations-list">
													{donationHistory.map((donation) => (
														<div key={donation.id} className="donation-item">
															<div className="donation-card">
																<div className="donation-header">
																	<h5 className="cause-name">{donation.cause_name}</h5>
																	<span className="donation-amount">{donation.amount}</span>
																</div>
																<div className="">
																	<div className="donation-meta">
																		<span className="donation-date">
																			<i className="fa fa-calendar"></i> {donation.date}
																		</span>
																		<span className="payment-method">
																			<i className="fa fa-credit-card"></i> {donation.payment_method}
																		</span>
																	</div>
																</div>
															</div>
														</div>
													))}
												</div>
											) : (
												<div className="empty-state">
													<i className="fa fa-heart-o"></i>
													<h5>No Donations Yet</h5>
													<p>You haven't made any donations yet. Start making a difference today!</p>
													<Link href="/donation" className="btn btn-primary">
														Make a Donation
													</Link>
												</div>
											)}
										</div>
									)}

									{/* Events Tab */}
									{activeTab === 'events' && (
										<div className="tab-content events-tab">
											<h4 className="section-title">Events Joined</h4>
											{eventHistory.length > 0 ? (
												<div className="events-list my-0 py-0">
													{eventHistory.map((event) => (
														<div key={event.id} className="event-item">
															<div className="event-card">
																<div className="event-image">
																	<img 
																		src={event.img || "/assets/images/events/default-event.jpg"} 
																		alt={event.title}
																		onError={(e) => {
																			e.target.src = "/assets/images/events/default-event.jpg";
																		}}
																	/>
																</div>
																<div className="event-content">
																	<h5 className="event-title">{event.title}</h5>
																	<div className="event-meta">
																		<span className="event-date">
																			<i className="fa fa-calendar"></i> {event.date}
																		</span>
																		<span className="event-location">
																			<i className="fa fa-map-marker"></i> {event.location}
																		</span>
																	</div>
																	<p className="event-description">{event.description}</p>
																	<div className="event-actions">
																		<Link href={`/event-details?id=${event.id}`} className="btn btn-outline-primary btn-sm">
																			View Details
																		</Link>
																	</div>
																</div>
															</div>
														</div>
													))}
												</div>
											) : (
												<div className="empty-state">
													<i className="fa fa-calendar-o"></i>
													<h5>No Events Joined</h5>
													<p>You haven't joined any events yet. Check out our upcoming events!</p>
													<Link href="/events" className="btn btn-primary">
														Browse Events
													</Link>
												</div>
											)}
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* User Profile End */}
			</Layout>

			{/* Custom Styles */}
			<style jsx>{`
			
			`}</style>
		</>
	);
}
