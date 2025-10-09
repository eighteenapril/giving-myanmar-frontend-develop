"use client";
import { useEffect, useState } from "react";
import { getCampaignsServices } from "@/services/apiServices";
import Card from "../elements/Card";
import Link from "next/link";

export default function Donate() {

	const [donationList, setDonationList] = useState([]);

	useEffect(() => {
		const fetchDonations = async () => {
			const donations = await getCampaignsServices();
			setDonationList(donations);
		}
		fetchDonations();
	}, []); // first load

	return (
		<>
			<section className="donate-two">
				<div className="donate-two__bg-box">
					<div
						className="donate-two__bg-shape"
						style={{
							backgroundImage:
								" url(assets/images/shapes/donate-two-bg-shape.png)",
						}}
					></div>
				</div>
				<div className="container">
					<div className="donate-two__top">
						<div className="section-title-two text-left sec-title-animation animation-style2">
							<div className="section-title-two__tagline-box">
								<span className="section-title-two__tagline">
									Featured Donations
								</span>
							</div>
							<h2 className="section-title-two__title title-animation">
								Explore {" "}
								<span>
									Donations
									<img
										src="assets/images/shapes/section-title-shape.png"
										alt=""
									/>
								</span>
							</h2>
						</div>
						<div className="donate-two__btn-box">
							<Link href="donation" className="donate-two__btn thm-btn">
								Discover more
								<span>
									<i className="icon-arrow-right"></i>
								</span>
							</Link>
						</div>
					</div>
				
					<div className="row">
						{donationList.splice(0, 3).map((item, index) => (
							<div className="col-xl-4 col-lg-4 col-md-6" key={index}>
								<Card
									title={item.name}
									description={item.description}
                                    img1={item.img}
                                    img2={item.img}
                                    raised={item.raised}
                                    goal={item.goal}
									url={`/donation-details?id=${item.id}`}
									buttonText="Donate Now"
									isPublic={false}
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
