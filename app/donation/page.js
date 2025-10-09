"use client";

import {useEffect, useState} from "react";
import Card from "@/components/elements/Card";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

import {getCampaignsServices} from "@/services/apiServices";

export default function Home() {
	const [donationList, setDonationList] = useState([]);

	useEffect(() => {
		const fetchDonations = async () => {
			const data = await getCampaignsServices();
			setDonationList(data);
		};
		fetchDonations();
	}, []);

	return (
		<>
			<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Donation">
				<section className="donation-page">
					<div className="container">
						<h2 className="section-title-two__title title-animation mb-4">
							Explore{" "}
							<span>
								Donations
								<img
									src="assets/images/shapes/section-title-shape.png"
									alt=""
								/>
							</span>
						</h2>
						<div className="row">
							{donationList?.map((item, index) => (
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
										donors_count={item.donors_count}
										isPublic={false}
									/>
								</div>
							))}
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}
