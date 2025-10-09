"use client";
import Layout from "@/components/layout/Layout";
import {useEffect, useLayoutEffect, useState} from "react";
import {
	getEventDetailsServices,
	registerEventServices,
} from "@/services/apiServices";
import {useSearchParams} from "next/navigation";

export default function Home() {
	const [event, setEvent] = useState(null);
	const [formData, setFormData] = useState({
		fullName: "",
		phone: "",
		email: "",
		participants: 0,
	});
	const [error, setError] = useState({
		fullName: "",
		phone: "",
		email: "",
		participants: "",
	});
	const [success, setSuccess] = useState("");

	const searchParams = useSearchParams();

	useEffect(() => {
		const fetchEventDetails = async (eventId) => {
			const data = await getEventDetailsServices(eventId);
			setEvent(data);
		};
		const eventId = searchParams.get("id");
		if (eventId) {
			fetchEventDetails(eventId);
		}
	}, []);

	const registerEvent = async (e) => {
		e.preventDefault();

		if (!validateForm()) return;

		const registrationData = {
			event_id: event.id,
			full_name: formData.fullName,
			phone: formData.phone,
			email: formData.email,
			participants: formData.participants,
		};

		const response = await registerEventServices(registrationData);
		if (response) {
			setFormData({fullName: "", phone: "", email: "", participants: 0});
			setError({fullName: "", phone: "", email: "", participants: ""});
			setSuccess("Registration successful!");

		} else {
			alert("Registration failed. Please try again.");
		}
	};

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const validateForm = () => {
		if (!formData) return false;
		if (!formData.fullName) {
			setError((prevError) => ({
				...prevError,
				fullName: "Full Name is required",
			}));
			return;
		} else {
			setError((prevError) => ({
				...prevError,
				fullName: "",
			}));
		}
		if (!formData.phone) {
			setError((prevError) => ({
				...prevError,
				phone: "Phone Number is required",
			}));
			return;
		} else {
			setError((prevError) => ({
				...prevError,
				phone: "",
			}));
		}
		if (!formData.email) {
			setError((prevError) => ({
				...prevError,
				email: "Email is required",
			}));
			return;
		} else {
			setError((prevError) => ({
				...prevError,
				email: "",
			}));
		}
		if (formData.participants <= 0) {
			setError((prevError) => ({
				...prevError,
				participants: "Number of Participants is required",
			}));
			return;
		} else {
			setError((prevError) => ({
				...prevError,
				participants: "",
			}));
		}
		return true;
	};

	return (
		<>
			<Layout breadcrumbTitle="Project Details">
				<div className="col-12">
					<div className="product-details__img">
						<img src={event?.banner_img} alt="" />
					</div>
				</div>
				<section className="product-details">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="product-details__top">
									<h3 className="product-details__title">{event?.title}</h3>
								</div>
								<div className="product-details__content">
									<p className="product-details__content-text1">
										Location: {event?.location} | Date: {event?.date}
									</p>
									<p className="product-description__text1">
										{event?.description}
									</p>
								</div>
								<div className="product-details__bottom">
									<ul className="product-details__bottom-list">
										<li>
											<span>Organizer:</span> {event?.organizer}
										</li>
										<li>
											<span>Registration Fee:</span> {event?.registration_fee}
										</li>
										<li>
											<span>Max Participants:</span> {event?.max_participants}
										</li>
										<li>
											<span>Current Participants:</span>{" "}
											{event?.current_participants}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Product Details End*/}
				{/*Donation Details Start */}
				<section className="">
					<div className="container">
						<div className="donation-details__inner">
							<div className="donation-details__personal-info">
								<h3 className="donation-details__personal-info-title">
									Register for this Event
								</h3>
								<form
									className="contact-form-validated donation-details__form"
									method="post"
									onSubmit={registerEvent}
								>
									<div className="row">
										<div className="col-xl-12 col-lg-12">
											<div className="donation-details__input-box">
												<p className="donation-details__input-box-title">
													Full Name
												</p>
												<input
													type="text"
													name="fullName"
													placeholder="First Name..."
													required=""
													onChange={handleInputChange}
												/>
												{error.fullName && (
													<p className="text-danger">{error.fullName}</p>
												)}
											</div>
										</div>
										<div className="col-xl-12 col-lg-12">
											<div className="donation-details__input-box">
												<p className="donation-details__input-box-title">
													Phone Number
												</p>
												<input
													type="tel"
													name="phone"
													placeholder="Phone..."
													required=""
													onChange={handleInputChange}
												/>
												{error.phone && (
													<p className="text-danger">{error.phone}</p>
												)}
											</div>
										</div>
										<div className="col-xl-12 col-lg-12">
											<div className="donation-details__input-box">
												<p className="donation-details__input-box-title">
													Your E-mail Address
												</p>
												<input
													type="email"
													name="email"
													placeholder="E-mail Address..."
													required=""
													onChange={handleInputChange}
												/>
												{error.email && (
													<p className="text-danger">{error.email}</p>
												)}
											</div>
										</div>
										<div className="col-xl-12 col-lg-12">
											<div className="donation-details__input-box">
												<p className="donation-details__input-box-title">
													No. of Participants
												</p>
												<input
													type="number"
													name="participants"
													placeholder="No. of Participants..."
													required=""
													onChange={handleInputChange}
												/>
												{error.participants && (
													<p className="text-danger">{error.participants}</p>
												)}
											</div>
										</div>
										

										<div className="col-xl-12">
											<div className="donation-details__btn-box">
												<button
													type="submit"
													className="thm-btn donation-details__btn"
												>
													Join Now
													<span>
														<i className="icon-arrow-right"></i>
													</span>
												</button>
											</div>
										</div>
										{success && <p className="text-success text-center mt-4">{success}</p>}
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
				{/*Donation Details End */}
			</Layout>
		</>
	);
}
