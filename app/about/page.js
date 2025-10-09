'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"


export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
        <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="About Us">

       {/*About One Start */}
       <section className="about-One">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-One__left  wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="about-One__img-box">
                                <div className="about-One__img">
                                    <img src="assets/images/resources/about-one-img-1.jpg" alt=""/>
                                </div>
                                <div className="about-One__img-2">
                                    <img src="assets/images/resources/about-one-img-2.jpg" alt=""/>
                                </div>
                                <div className="about-One__provide-box wow zoomIn animated animated" data-wow-delay="500ms"
                                    data-wow-duration="2500ms">
                                    <div className="about-One__provide-icon">
                                        <span className="icon-pet-care"></span>
                                    </div>
                                    <div className="about-One__provide-content">
                                        <div className="about-One__provide-count count-box">
                                            <h3 className="count-text">250</h3>
                                            <span>+</span>
                                        </div>
                                        <p className="about-One__provide-count-text">Services we provide</p>
                                    </div>
                                </div>
                                <div className="about-One__shape-1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-One__right wow fadeInRight" data-wow-delay="300ms">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">About Us</span>
                                </div>
                                <h2 className="section-title__title title-animation">Unite for a Cause
                                    <br/> Change the World</h2>
                            </div>
                            <div className="about-One__vission-mission">
                                <div className="about-One__tab-box tabs-box">
                                    <ul className="tab-buttons clearfix list-unstyled">
                                        <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}><span>Our Mission</span></li>
                                        <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}><span>Our Vision</span></li>
                                        <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}><span>Our Goal</span></li>
                                    </ul>
                                    <div className="tabs-content">
                                        {/*tab*/}
                                        <div className={activeIndex == 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                            <div className="tabs-content__inner">
                                                <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                                    aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt
                                                    explicabo. Nemo enim ipsam voluptatem quia voluptas.</p>
                                            </div>
                                        </div>
                                        {/*tab*/}
                                        {/*tab*/}
                                        <div className={activeIndex == 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                            <div className="tabs-content__inner">
                                                <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                                    aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt
                                                    explicabo. Nemo enim ipsam voluptatem quia voluptas.</p>
                                            </div>
                                        </div>
                                        {/*tab*/}
                                        {/*tab*/}
                                        <div className={activeIndex == 3 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                            <div className="tabs-content__inner">
                                                <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                                    aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt
                                                    explicabo. Nemo enim ipsam voluptatem quia voluptas.</p>
                                            </div>
                                        </div>
                                        {/*tab*/}
                                    </div>
                                </div>
                            </div>
                            <div className="about-One__btn-and-need-help">
                                <div className="about-One__btn-box">
                                    <Link href="donation-details?id=1" className="about-One__btn thm-btn">Donate Now<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                                <div className="about-One__need-help">
                                    <div className="icon">
                                        <span className="icon-phone-call"></span>
                                    </div>
                                    <div className="content">
                                        <p>Need help?</p>
                                        <h4><Link href="tel:3195550115">080 123123 </Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End */}

        {/*Donate One Start */}
        <section className="donate-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div className="donate-one__single">
                            <div className="donate-one__single-bg"
                                style={{ backgroundImage: ' url(assets/images/backgrounds/donate-one-single-bg.jpg)' }} >
                            </div>
                            <h3 className="donate-one__title"><Link href="donation-details?id=1">Help Them With Donation</Link>
                            </h3>
                            <p className="donate-one__text">Dicta sunt explicabo. Nemo enim ipsam voluptatem<br/> quia
                                voluptas
                                sit aspernaturaut odit aut fugit, sed<br/> quia consequuntur. Dicta sunt explicabo. Nemo
                            </p>
                            <div className="donate-one__btn-box">
                                <Link href="donation-details?id=1" className="donate-one__btn thm-btn">Donate Now<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div className="donate-one__single donate-one__single-2">
                            <div className="donate-one__single-bg"
                                style={{ backgroundImage: ' url(assets/images/backgrounds/donate-one-single-bg-two.jpg)' }} >
                            </div>
                            <h3 className="donate-one__title"><Link href="register">Join With Us To Serve As
                                    Volenteer</Link></h3>
                            <p className="donate-one__text">Dicta sunt explicabo. Nemo enim ipsam voluptatem<br/> quia
                                voluptas
                                sit aspernaturaut odit aut fugit, sed<br/> quia consequuntur. Dicta sunt explicabo. Nemo
                            </p>
                            <div className="donate-one__btn-box">
                                <Link href="register" className="donate-one__btn thm-btn">Join Now<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Donate One End */}

        {/*Who We Are Start */}
        <section className="who-we-are">
            <div className="who-we-are__shape-3 float-bob-y">
                <img src="assets/images/shapes/who-we-are-shape-3.png" alt=""/>
            </div>
            <div className="who-we-are__shape-4 float-bob-x">
                <img src="assets/images/shapes/who-we-are-shape-4.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="who-we-are__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Who We Are</span>
                                </div>
                                <h2 className="section-title__title title-animation">Supporting Dreams Changing
                                    Lives</h2>
                            </div>
                            <p className="who-we-are__text">Lorem Ipsum is simply dummy a of the printing and type setting
                                industry Loreaim Ipsum has been the industry's standard dummy</p>
                            <div className="who-we-are__progress-box">
                                <ul className="who-we-are__progress-list list-unstyled">
                                    <li>
                                        <div className="who-we-are__progress-single">
                                            <p>Total Fund Worth: <span>450,896,070$</span></p>
                                            <div className="who-we-are__progress">
                                                <div className="bar">
                                                    <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="who-we-are__progress-single">
                                            <p>Total Cases Helped: <span>200+</span></p>
                                            <div className="who-we-are__progress">
                                                <div className="bar">
                                                    <div className="bar-inner count-bar" data-percent="80%" style={{ width: '80%' }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="who-we-are__btn-box">
                                <Link href="donation-details?id=1" className="who-we-are__btn thm-btn">Donate Now<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div className="who-we-are__right">
                            <div className="who-we-are__img-box">
                                <div className="who-we-are__img">
                                    <img src="assets/images/resources/who-we-are-img-1.jpg" alt=""/>
                                </div>
                                <div className="who-we-are__img-2">
                                    <img src="assets/images/resources/who-we-are-img-2.jpg" alt=""/>
                                </div>
                                <div className="who-we-are__shape-1 img-bounce"></div>
                                <div className="who-we-are__shape-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Who We Are End */}

        </Layout>
        </>
    )
}


