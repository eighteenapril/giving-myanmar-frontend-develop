"use client";
import { useEffect, useState } from "react";
import { getCause, getCausesServices } from "@/services/apiServices";
import Card from "../elements/Card";
import Link from "next/link";

export default function Donate() {

	const [causesList, setCausesList] = useState([]);

	useEffect(() => {

		const fetchDonations = async () => {
			const causes = await getCausesServices();
			setCausesList(causes);
		}
		fetchDonations();

	}, []);
	// dom.ready - first load

	return (
		<>
			<section className="donate-two">
				<div className="donate-two__bg-box">
					<div
						className="donate-two__bg-shape"
						style={{
							backgroundImage:
								" url(assets/images/shapes/about-three-shape-1.png)",
						}}
					></div>
				</div>
				<div className="container">
					<div className="donate-two__top">
						<div className="section-title-two text-left sec-title-animation animation-style2">
							<div className="section-title-two__tagline-box">
								<span className="section-title-two__tagline">
									Featured Causes
								</span>
							</div>
							<h2 className="section-title-two__title title-animation">
								Together We Can <br />
								<span>
									Make
									<img
										src="assets/images/shapes/section-title-shape.png"
										alt=""
									/>
								</span>{" "}
								Difference{" "}
							</h2>
						</div>
					</div>

					<div className="row">
						{causesList.map((item, index) => (
							<div className="col-xl-4 col-lg-4 col-md-6" key={index}>
								<Card
									title={item.name}
									description={item.description}
                                    img1={item.img}
                                    img2={item.img}
									url={`/cause-details?id=${item.id}`}
									buttonText="View Details"
									isPublic={true}
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
