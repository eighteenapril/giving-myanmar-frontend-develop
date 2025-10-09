"use client";
import Layout from "@/components/layout/Layout";
import {useSearchParams} from "next/navigation";
import {useLayoutEffect, useState} from "react";
import { createDonationPaymentServices } from "@/services/apiServices"

const TOPUP_LIST = [10, 20, 50, 100];

const INITIAL_FORM_DATA = {
	amount: 10,
	paymentMethod: "visa",
	cardNumber: "",
	expiryDate: "",
	cvc: "",
	nameOnCard: "",
	billingAddress: "",
}

const INITIAL_ERRORS = {
	nameOnCard: false,
	cardNumber: false,
	expiryDate: false,
	cvc: false,
	billingAddress: false,
	amount: false,
}

export default function Home() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [status, setStatus] = useState()
	const [formData, setFormData] = useState(INITIAL_FORM_DATA);

	const [error, setError] = useState(INITIAL_ERRORS);

	const params = useSearchParams();
	const id = params.get("id");

	const handleFormSubmit = async () => {
		const isValid = validateForm();
		if (!isValid) return;

		const payload = {
			donation_id: id,
			amount: formData.amount,
			payment_method: formData.paymentMethod,
			card_number: formData.cardNumber,
			expiry_date: formData.expiryDate,
			cvc: formData.cvc,
			name_on_card: formData.nameOnCard,
			billing_address: formData.billingAddress,
		};

		// payment api
		const res = await createDonationPaymentServices(payload)
		if(res.success){
			setFormData(INITIAL_FORM_DATA)
			setError(INITIAL_ERRORS)
			setStatus("success")
		}else{
			setStatus("error")
		}

	};

	const handleChangeInput = (e) => {
		const {name, value} = e.target;
		setFormData((prev) => ({...prev, [name]: value}));
	};

	const validateForm = () => {
        setError({
            nameOnCard: false,
            cardNumber: false,
            expiryDate: false,
            cvc: false,
            amount: false,
        });
		if (!formData.nameOnCard) {
            setError((prev) => ({...prev, nameOnCard: true}));
            return false;
        }
        if (!formData.cardNumber) {
            setError((prev) => ({...prev, cardNumber: true}));
            return false;
        }
        if (!formData.expiryDate) {
            setError((prev) => ({...prev, expiryDate: true}));
            return false;
        }
        if (!formData.cvc) {
            setError((prev) => ({...prev, cvc: true}));
            return false;
        }
        if (!formData.amount || formData.amount <= 0) {
            setError((prev) => ({...prev, amount: true}));
            return false;
        }
        return true;
	};

	const handleTopupChange = (index) => {
		handleChangeInput({
			target: {
				name: "amount",
				value: TOPUP_LIST[index],
			},
		})
		setActiveIndex(index)
	}
																

	return (
		<>
			<Layout
				headerStyle={1}
				footerStyle={2}
				breadcrumbTitle="Donation details"
			>
				{/*Donation Details Start */}
				<section className="donation-details">
					<div className="container">
						<div className="donation-details__inner">
							<div className="donation-details__payment-method-box">
								<h3 className="donation-details__payment-method-title">
									Payment Method
								</h3>
								<div className="donation-details__quote-radio">
									<label className="custom-radio">
										<input type="radio" name="myRadios" checked />
										<span className="radio-dot"></span>
										<span className="radio-text">Visa/Master</span>
									</label>
								</div>
							</div>
							<div className="donation-details__personal-info">
								<h3 className="donation-details__personal-info-title">
									Card Information
								</h3>
								<form
									className="contact-form-validated donation-details__form"
									method="post"
									onSubmit={handleFormSubmit}
								>
									<div className="row">
										<div className="col-xl-12 col-lg-12">
											<div className="donation-details__input-box">
												<p className="donation-details__input-box-title">
													Name on card*
												</p>
												<input
													type="text"
													name="nameOnCard"
													placeholder="Name on card..."
													required=""
													value={formData.nameOnCard}
													onChange={handleChangeInput}
												/>
                                                {error.nameOnCard && <span className="text-danger">Name on card is required</span>}
											</div>
										</div>
										<div className="col-xl-12 col-lg-12">
											<div className="donation-details__input-box">
												<p className="donation-details__input-box-title">
													Card Number*
												</p>
												<input
													type="text"
													name="cardNumber"
													placeholder="Card Number..."
													required=""
													value={formData.cardNumber}
													onChange={handleChangeInput}
												/>
                                                {error.cardNumber && <span className="text-danger">Card number is required</span>}
											</div>
										</div>
										<div className="col-xl-6 col-lg-6">
											<div className="donation-details__input-box">
												<p className="donation-details__input-box-title">
													Expiry Date*
												</p>
												<input
													type="text"
													name="expiryDate"
													placeholder="Expiry Date..."
													required=""
													value={formData.expiryDate}
													onChange={handleChangeInput}
												/>
                                                {error.expiryDate && <span className="text-danger">Expiry date is required</span>}
											</div>
										</div>
										<div className="col-xl-6 col-lg-6">
											<div className="donation-details__input-box">
												<p className="donation-details__input-box-title">
													CVC*
												</p>
												<input
													type="number"
													name="cvc"
													placeholder="CVC..."
													required=""
													value={formData.cvc}
													onChange={handleChangeInput}
													maxLength={3}
												/>
                                                {error.cvc && <span className="text-danger">CVC is required</span>}
											</div>
										</div>
										<div className="col-xl-12 col-lg-12">
											<div className="donation-details__input-box">
												<p className="donation-details__input-box-title">
													Billing Address
												</p>
												<input
													type="text"
													name="address"
													placeholder="Billing Address..."
													required=""
													value={formData.address}
													onChange={handleChangeInput}
												/>
											</div>
										</div>
										<div className="col-xl-12 col-lg-12">
											<div className="donation-details__donate-box-outer">
												<div className="donation-details__donate-box">
													<div className="donate-now">
														<p className="donation-details__input-box-title">
															Enter Donation Amount*
														</p>
														<input
															type="text"
															className="addAmount-value"
															placeholder="$ Costume Amount"
															name="amount"
															value={formData.amount}
															onChange={handleChangeInput}
														/>
													</div>
													<h4 className="donation-details__donate-box-divider">
														Or
													</h4>
													<div className="donate-amount">
														<p className="donation-details__input-box-title">
															Select Amount*
														</p>
														{TOPUP_LIST.map((amount, index) => (
															<button
																type="button"
																key={index}
																className={`amount-btn ${
																	activeIndex === index ? "active" : ""
																}`}
																onClick={() => handleTopupChange(index)}
															>
																${amount}
															</button>
														))}
													</div>
                                                    
												</div>
												<h3 className="donation-details__donate-amout">
													<span>Total Amount: </span>${formData.amount}
												</h3>
                                                {error.amount && <span className="text-danger">Amount is required</span>}
											</div>
										</div>
										<div className="col-xl-12">
											<div className="donation-details__btn-box">
												<button
													type="submit"
													className="thm-btn donation-details__btn"
												>
													Donate Now
													<span>
														<i className="icon-arrow-right"></i>
													</span>
												</button>
											</div>
										</div>
										{
											status === "success" && (
												<span className="text-center mt-4 text-success">Donation successful! Thank you for your support.</span>
											)
										}
										{
											status === "error" && (
												<span className="text-center mt-4 text-danger">Payment Failed.</span>
											)
										}
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
