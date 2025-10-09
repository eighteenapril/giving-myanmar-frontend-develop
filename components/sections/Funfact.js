'use client'
import CounterUp from "@/components/elements/CounterUp"
export default function Funfact() {
    return (
        <>
       {/*Counter One Start */}
       <section className="counter-one">
            <div className="container">
                <div className="counter-one__top">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="counter-one__needy">
                                <div className="counter-one__needy-bg"
                                    style={{ backgroundImage: ' url(assets/images/backgrounds/counter-one-needy-bg.jpg)' }} >
                                </div>
                                <h2 className="counter-one__needy-title">Raise Your Hand To <span>Help
                                        <img src="assets/images/shapes/counter-one-needy-shape.png" alt=""/>
                                    </span><br/>The Needy One</h2>
                                <div className="counter-one__needy-btn-box">
                                    <Link href="donation-details" className="counter-one__needy-btn thm-btn">Donate
                                        Now<span><i className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 wow fadeInRight" data-wow-delay="300ms">
                            <div className="counter-one__author-box">
                                <div className="counter-one__author-box-shape">
                                    <img src="assets/images/shapes/counter-one-author-box-shape.png" alt=""/>
                                </div>
                                <div className="counter-one__author-info">
                                    <div className="counter-one__author-img">
                                        <img src="assets/images/resources/counter-one-author-img.jpg" alt=""/>
                                    </div>
                                    <div className="counter-one__author-content">
                                        <h3>Alex Smith</h3>
                                        <span>Coaching of Halal Lab</span>
                                    </div>
                                </div>
                                <div className="counter-one__count-box">
                                    <div className="counter-one__count count-box">
                                        <h1> <CounterUp end={89} /> </h1>
                                        <span>%</span>
                                    </div>
                                    <h3 className="counter-one__text">Of Recommend </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="counter-one__bottom">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                                    <div className="counter-one__single counter-one__single-1">
                                        <div className="counter-one__single-shape-1">
                                            <img src="assets/images/shapes/counter-one-single-shape-1.png" alt=""/>
                                        </div>
                                        <div className="counter-one__count-box-2">
                                            <div className="counter-one__count-2 count-box">
                                            <h1> <CounterUp end={400} /> </h1>
                                                <span>+</span>
                                            </div>
                                            <p className="counter-one__text-2">Team member</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                                    <div className="counter-one__single counter-one__single-2">
                                        <div className="counter-one__single-shape-1">
                                            <img src="assets/images/shapes/counter-one-single-shape-1.png" alt=""/>
                                        </div>
                                        <div className="counter-one__count-box-2">
                                            <div className="counter-one__count-2 count-box">
                                                <h1> <CounterUp end={40} /> </h1>
                                                <span>+</span>
                                            </div>
                                            <p className="counter-one__text-2">Winning award</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                                    <div className="counter-one__single counter-one__single-3">
                                        <div className="counter-one__single-shape-1">
                                            <img src="assets/images/shapes/counter-one-single-shape-1.png" alt=""/>
                                        </div>
                                        <div className="counter-one__count-box-2">
                                            <div className="counter-one__count-2 count-box">
                                            <h1> <CounterUp end={80} /> </h1>
                                                <span>k</span>
                                                <span>+</span>
                                            </div>
                                            <p className="counter-one__text-2">Client review</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                                    <div className="counter-one__single counter-one__single-4">
                                        <div className="counter-one__single-shape-1">
                                            <img src="assets/images/shapes/counter-one-single-shape-1.png" alt=""/>
                                        </div>
                                        <div className="counter-one__count-box-2">
                                            <div className="counter-one__count-2 count-box">
                                            <h1> <CounterUp end={105} /> </h1>
                                                <span>+</span>
                                            </div>
                                            <p className="counter-one__text-2">Complete project</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="800ms">
                            <div className="counter-one__bottom-img">
                                <img src="assets/images/resources/counter-one-bottom-img.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Counter One End */}
        </>
    )
}
