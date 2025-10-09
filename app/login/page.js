"use client";
import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import Layout from "@/components/layout/Layout";

import {loginUserServices, storeToken} from "@/services/apiServices";

export default function Home() {
	const [data, setData] = React.useState({
		username: "",
		password: "",
	});

	const [error, setError] = React.useState({
		username: "",
		password: "",
		login: "",
	});

	const router = useRouter();
	const redirectUrl = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('redirect') : '/';

	const validateForm = () => {
		if (!data || !data.username) {
			setError((prevError) => ({
				...prevError,
				username: "Username is required",
			}));
			return;
		} else {
			setError((prevError) => ({
				...prevError,
				username: "",
			}));
		}
		if (!data || !data.password) {
			setError((prevError) => ({
				...prevError,
				password: "Password is required",
			}));
			return;
		} else {
			setError((prevError) => ({
				...prevError,
				password: "",
			}));
		}
		return true;
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const isValid = validateForm();
		if (!isValid) return;

		loginUserServices(data)
			.then((response) => {

				setError((prevError) => ({
					...prevError,
					login: "",
				}));

				if (response.token) {
					storeToken(response.token);
					router.push("/"); 
				} else {
					setError((prevError) => ({
						...prevError,
						login: response.message || "Token not received. Login failed.",
					}));
				}
			})
			.catch((error) => {
				setError((prevError) => ({
					...prevError,
					login: error.message || "Login failed. Please try again.",
				}));
			});
	};

	const handleDataChange = (e) => {
		const {name, value} = e.target;
		setData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<>
			<Layout breadcrumbTitle="Account">
				{/*Account Start*/}
				<section className="account">
					<div className="container">
						<div className="account__main-tab-box tabs-box border border-1 rounded-3 p-5">
							<h4 className="tab-btn mb-5">Login to your account</h4>
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

								<div className="account__form-btn-box">
									<button
										type="submit"
										className="thm-btn account__form-btn mt-3"
									>
										{" "}
										<span></span>Login now
									</button>
									{/* <div className="checked-box">
										<input type="checkbox" name="skipper2" id="skipper2" />
										<label>
											<span></span>Remember me?
										</label>
									</div> */}
								</div>
								<div className="account__form-forgot-password">
									<Link href="/register">Dont' have an account?</Link>
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
