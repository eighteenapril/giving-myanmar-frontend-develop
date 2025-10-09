"use client";

import {useEffect, useState} from "react";
import EventCard from "@/components/elements/EventCard";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

import {getDonationsServices, getEventsServices} from "@/services/apiServices";

export default function Home() {
	const [eventList, setEventList] = useState([]);

	useEffect(() => {
		const fetchEvents = async () => {
			const data = await getEventsServices();
			setEventList(data);
		};
		fetchEvents();
	}, []);

	return (
		<>
			<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Donation">
				<section className="donation-page">
					<div className="container">
						<h2 className="section-title-two__title title-animation mb-4">
							Explore {" "}
							<span>
								Events
								<img
									src="assets/images/shapes/section-title-shape.png"
									alt=""
								/>
							</span>
						</h2>
						<div className="row">
							{eventList?.map((item, index) => (
								<div className="col-xl-4 col-lg-4 col-md-6" key={index}>
									<EventCard
										title={item.name}
										description={item.description}
										img1={item.img}
										img2={item.img}
										raised={item.current_participants}
										goal={item.max_participants}
										url={`/event-details?id=${item.id}`}
										buttonText="Join Now"
										location={item.location}
										date={item.date}
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
