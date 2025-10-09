"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import Layout from "@/components/layout/Layout";
import {useSearchParams} from "next/navigation";
import {getCause, getDonationsServices} from "@/services/apiServices";
import Card from "@/components/elements/Card";

export default function CauseDetails() {
	const params = useSearchParams();

	const id = params.get("id");
	const causeid = params.get("id");
	const [cause, setCause] = useState(null);
	const [donationList, setDonationList] = useState([]);

	useEffect(() => {
		const fetchCause = async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/causes/${id}`);
			const data = await res.json();
			setCause(data);
		};
		fetchCause();
	}, [id]);

	useEffect(() => {
		const fetchDonations = async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/campaigns/bycauseid/${causeid}`);
			const data = await res.json();
			setDonationList(data);
		};
		fetchDonations();
	}, [id]);

	return (
		<>
			<Layout breadcrumbTitle="Project Details">
				{/*Product Details Start*/}
				<div className="col-12">
					<div className="product-details__img">
						<img src={cause?.banner_img} alt="" />
					</div>
				</div>
				<section className="product-details">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="product-details__top">
									<h3 className="product-details__title">{cause?.name}</h3>
								</div>
								<div className="product-details__content">
									<p className="product-details__content-text1">
										{cause?.sub_title}
									</p>
									<p className="product-description__text1">
										{cause?.description}
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Product Details End*/}

				<section>
					<div className="container">
						<div className="row">
							{donationList.map((item, index) => (
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
			</Layout>
		</>
	);
}



// "use client";

// import Link from "next/link";
// import {useEffect, useState} from "react";
// import Layout from "@/components/layout/Layout";
// import {useSearchParams} from "next/navigation";
// import {getCause, getDonationsServices} from "@/services/apiServices";
// import Card from "@/components/elements/Card";

// export default function CauseDetails() {
// 	const params = useSearchParams();

// 	const id = params.get("id");
// 	const [cause, setCause] = useState(null);
// 	const [donationList, setDonationList] = useState([]);

// 	useEffect(() => {
// 		const fetchCause = async () => {
// 			const res = await fetch(`/api/causes/${id}`);
// 			const data = await res.json();
// 			setCause(data);
// 		};
// 		fetchCause();
// 	}, [id]);

// 	useEffect(() => {
// 		const fetchDonations = async () => {
// 			const res = await fetch(`/api/causes/${id}/donations`);
// 			const data = await res.json();
// 			setDonationList(data);
// 		};
// 		fetchDonations();
// 	}, [id]);

// 	return (
// 		<>
// 		<Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Product Details">
// 		{/*Project Details Start*/}
// 		<section className="project-details">
// 			<div className="container">
// 				<div className="project-details__img">
// 					<img src="assets/images/project/project-details-img-1.jpg" alt=""/>
// 					<div className="project-details__info-box">
// 						<div className="project-details__info-title-box">
// 							<h3 className="project-details__info-title">Project Details</h3>
// 						</div>
// 						<div className="project-details__info-and-social">
// 							<div className="project-details__info">
// 								<ul className="project-details__info-list list-unstyled">
// 									<li>
// 										<p>Name:<span>{cause?.name}</span></p>
// 									</li>
// 									<li>
// 										<p>Raised:<span>{cause?.raised}</span></p>
// 									</li>
// 								</ul>
// 								<ul className="project-details__info-list list-unstyled">
// 									<li>
// 										<p>Date:<span>{cause?.date}</span></p>
// 									</li>
// 									<li>
// 										<p>Goal:<span>{cause?.goal}</span></p>
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="row">
// 					<div className="col-xl-8 col-lg-7">
// 						<div className="project-details__left">
// 							<h3 className="project-details__title-1">Supporting Health Initiatives</h3>
// 							<p className="project-details__text-1">Lorem Ipsum is simply dummy text of the printing and
// 								typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
// 								the 1500s, when an unknown printer took a galltype and scrambled it to make a type
// 								specimen book. It has survived not only five centuries tinto electronic typesetting
// 								remaining essentially unchanged</p>
// 							<p className="project-details__text-2">Lorem Ipsum is simply dummy text of the printing and
// 								typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
// 								the 1500s, when an unknown print</p>
// 							<ul className="project-details__points list-unstyled">
// 								<li>
// 									<div className="icon">
// 										<span className="icon-check"></span>
// 									</div>
// 									<p>Hope Restoration</p>
// 								</li>
// 								<li>
// 									<div className="icon">
// 										<span className="icon-check"></span>
// 									</div>
// 									<p>Giving Back</p>
// 								</li>
// 								<li>
// 									<div className="icon">
// 										<span className="icon-check"></span>
// 									</div>
// 									<p>Positive Impact</p>
// 								</li>
// 							</ul>
// 							<h3 className="project-details__title-2">Elevate Your Business with IT Solutions</h3>
// 							<p className="project-details__text-3">Lorem Ipsum is simply dummy text of the printing and
// 								typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
// 								the 1500s, when an unknown printer took a galltype and scrambled it to make a type
// 								specimen book. It has survived not only five centuries tinto electronic typesetting
// 								remaining essentially unchanged</p>
// 						</div>
// 					</div>
// 					<div className="col-xl-4 col-lg-5">
// 						<div className="project-details__right">
// 							<div className="project-details__right-img-1">
// 								<img src="assets/images/project/project-details-right-img-1.jpg" alt=""/>
// 							</div>
// 							<div className="project-details__right-img-2">
// 								<img src="assets/images/project/project-details-right-img-2.jpg" alt=""/>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="project-details__pagination">
// 					<ul className="pg-pagination list-unstyled">
// 						<li className="prev">
// 							<Link href="#" aria-label="prev"><i className="icon-right-arrow"></i>Previous</Link>
// 						</li>
// 						<li className="next">
// 							<Link href="#" aria-label="Next">Next<i className="icon-right-arrow"></i></Link>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</section>
// 		{/*Project Details End*/}

// 			</Layout>
// 		</>
// 	)
// }