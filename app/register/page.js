"use client";
import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import Layout from "@/components/layout/Layout";

import {registerUserServices} from "@/services/apiServices";

export default function Home() {
	const [data, setData] = React.useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
		nrc: "",
		phone: "",
	});

	const [error, setError] = React.useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
		nrc: "",
		phone: "",
		register: "",
	});

	const [success, setSuccess] = React.useState("");
	const router = useRouter();

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		const isValid = validateForm();
		if (!isValid) return;

		try {
			const response = await registerUserServices(data);
			
			// Handle successful registration
			setError((prevError) => ({
				...prevError,
				register: "",
			}));
			
			if (response && response.message) {
				setSuccess("Registration successful! You can now login.");
				setData({
					username: "",
					email: "",
					password: "",
					confirmPassword: "",
					nrc: "",
					phone: "",
				});
				
				// Redirect to login after 2 seconds
				setTimeout(() => {
					router.push("/login");
				}, 2000);
			} else {
				setError((prevError) => ({
					...prevError,
					register: response.error || "Registration failed. Please try again.",
				}));
			}
		} catch (error) {
			setError((prevError) => ({
				...prevError,
				register: error.message || "Registration failed. Please try again.",
			}));
		}
	};

	const handleDataChange = (e) => {
		const {name, value} = e.target;
		setData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const validateForm = () => {
		let isValid = true;
		
		if (!data || !data.username) {
			setError((prevError) => ({
				...prevError,
				username: "Username is required",
			}));
			isValid = false;
		} else {
			setError((prevError) => ({
				...prevError,
				username: "",
			}));
		}

		if (!data || !data.email) {
			setError((prevError) => ({
				...prevError,
				email: "Email is required",
			}));
			isValid = false;
		} else {
			setError((prevError) => ({
				...prevError,
				email: "",
			}));
		}

		if (!data || !data.phone) {
			setError((prevError) => ({
				...prevError,
				phone: "Phone number is required",
			}));
			isValid = false;
		} else {
			setError((prevError) => ({
				...prevError,
				phone: "",
			}));
		}

		if (!data || !data.nrc) {
			setError((prevError) => ({
				...prevError,
				nrc: "NRC is required",
			}));
			isValid = false;
		} else {
			setError((prevError) => ({
				...prevError,
				nrc: "",
			}));
		}

		if (!data || !data.password) {
			setError((prevError) => ({
				...prevError,
				password: "Password is required",
			}));
			isValid = false;
		} else {
			setError((prevError) => ({
				...prevError,
				password: "",
			}));
		}

		if (!data || !data.confirmPassword) {
			setError((prevError) => ({
				...prevError,
				confirmPassword: "Confirm password is required",
			}));
			isValid = false;
		} else if (data.password !== data.confirmPassword) {
			setError((prevError) => ({
				...prevError,
				confirmPassword: "Passwords do not match",
			}));
			isValid = false;
		} else {
			setError((prevError) => ({
				...prevError,
				confirmPassword: "",
			}));
		}

		return isValid;
	};

	return (
		<>
			<Layout breadcrumbTitle="Account">
				{/*Account Start*/}
				<section className="account">
					<div className="container">
						<div className="account__main-tab-box tabs-box border border-1 rounded-3 p-5">
							<h4 className="tab-btn mb-5">Create a new account</h4>
							<form className="account__form" onSubmit={handleFormSubmit}>
								<div className="account__form-input-box">
									<input
										type="text"
										placeholder="Username"
										name="username"
										value={data.username}
										onChange={handleDataChange}
									/>
									{error.username && (
										<p className="text-danger">{error.username}</p>
									)}
								</div>
								
								<div className="account__form-input-box">
									<input
										type="email"
										placeholder="Email"
										name="email"
										value={data.email}
										onChange={handleDataChange}
									/>
									{error.email && (
										<p className="text-danger">{error.email}</p>
									)}
								</div>

								<div className="account__form-input-box">
									<input
										type="tel"
										placeholder="Phone Number"
										name="phone"
										value={data.phone}
										onChange={handleDataChange}
									/>
									{error.phone && (
										<p className="text-danger">{error.phone}</p>
									)}
								</div>

								<div className="account__form-input-box">
									<input
										type="text"
										placeholder="NRC (12/KaTa(N)123456)"
										name="nrc"
										value={data.nrc}
										onChange={handleDataChange}
									/>
									{error.nrc && (
										<p className="text-danger">{error.nrc}</p>
									)}
								</div>

								<div className="account__form-input-box">
									<input
										type="password"
										placeholder="Password"
										name="password"
										value={data.password}
										onChange={handleDataChange}
									/>
									{error.password && (
										<p className="text-danger">{error.password}</p>
									)}
								</div>

								<div className="account__form-input-box">
									<input
										type="password"
										placeholder="Confirm Password"
										name="confirmPassword"
										value={data.confirmPassword}
										onChange={handleDataChange}
									/>
									{error.confirmPassword && (
										<p className="text-danger">{error.confirmPassword}</p>
									)}
								</div>

								{error.register && (
									<div className="text-danger mb-3">{error.register}</div>
								)}

								{success && (
									<div className="text-success mb-3">{success}</div>
								)}

								<div className="account__form-btn-box">
									<button
										type="submit"
										className="thm-btn account__form-btn mt-3"
									>
										<span></span>Register now
									</button>
								</div>
								
								<div className="account__form-forgot-password">
									<Link href="/login">Already have an account?</Link>
								</div>
							</form>
						</div>
					</div>
				</section>
				{/*Account End*/}
			</Layout>
		</>
	);
}
