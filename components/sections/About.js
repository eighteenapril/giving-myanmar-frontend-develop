"use client";
import CounterUp from "@/components/elements/CounterUp";
import Link from "next/link";
export default function About() {
	return (
		<>
			{/*About Two Start */}
			<section className="about-two">
				<div className="container">
					<div className="row">
						<div
							className="col-xl-6 wow slideInLeft"
							data-wow-delay="100ms"
							data-wow-duration="2500ms"
						>
							<div className="about-two__left">
								<div className="about-two__img">
									<img
										src="assets/images/resources/about-two-img-1.png"
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
							<div className="about-two__right">
								<div className="section-title-two text-left sec-title-animation animation-style2">
									<div className="section-title-two__tagline-box">
										<span className="section-title-two__tagline">About Us</span>
									</div>
									<h2 className="section-title-two__title title-animation">
										Helping To Make Our World
										<span>
											Better
											<img
												src="assets/images/shapes/section-title-shape.png"
												alt=""
											/>
										</span>{" "}
										Living{" "}
									</h2>
								</div>
								<p className="about-two__text">
									Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
									sit aspernaturaut odit aut fugit, sed quia consequuntur. Dicta
									sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
								</p>
								<div className="about-two__counter-box">
									<div className="row">
										{/*About Two Counter Single Start*/}
										<div
											className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp"
											data-wow-delay="100ms"
										>
											<div className="about-two__counter-single">
												<div className="about-two__icon">
													<span className="icon-hand"></span>
												</div>
												<h4 className="about-two__title">
													<Link href="#">Our Team Member</Link>
												</h4>
												<div className="about-two__count count-box">
													<h2>
														{" "}
														<CounterUp end={40000} />{" "}
													</h2>
													<span>+</span>
												</div>
											</div>
										</div>
										{/*About Two Counter Single End*/}
										{/*About Two Counter Single Start*/}
										<div
											className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp"
											data-wow-delay="200ms"
										>
											<div className="about-two__counter-single about-two__counter-single-2">
												<div className="about-two__icon">
													<span className="icon-love"></span>
												</div>
												<h4 className="about-two__title">
													<Link href="#">Total Donated</Link>
												</h4>
												<div className="about-two__count count-box">
													<p>$</p>
													<h2>
														{" "}
														<CounterUp end={509953} />{" "}
													</h2>
													<span>+</span>
												</div>
											</div>
										</div>
										{/*About Two Counter Single End*/}
										{/*About Two Counter Single Start*/}
										<div
											className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp"
											data-wow-delay="300ms"
										>
											<div className="about-two__counter-single about-two__counter-single-3">
												<div className="about-two__icon">
													<span className="icon-dolor"></span>
												</div>
												<h4 className="about-two__title">
													<Link href="#">Total Fund Raised</Link>
												</h4>
												<div className="about-two__count count-box">
													<h2>
														{" "}
														<CounterUp end={4442471} />{" "}
													</h2>
												</div>
											</div>
										</div>
										{/*About Two Counter Single End*/}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*About Two End */}
		</>
	);
}
