"use client";
import Link from "next/link";
import {useState} from "react";

const MobileMenu = ({isSidebar, handleMobileMenu, handleSidebar}) => {
	const [isActive, setIsActive] = useState({
		status: false,
		key: "",
		subMenuKey: "",
	});

	const handleToggle = (key, subMenuKey = "") => {
		if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
			setIsActive({
				status: false,
				key: "",
				subMenuKey: "",
			});
		} else {
			setIsActive({
				status: true,
				key,
				subMenuKey,
			});
		}
	};
	return (
		<>
			<div className="mobile-nav__wrapper">
				<div
					className="mobile-nav__overlay mobile-nav__toggler"
					onClick={handleMobileMenu}
				></div>
				<div className="mobile-nav__content">
					<span
						className="mobile-nav__close mobile-nav__toggler"
						onClick={handleMobileMenu}
					>
						<i className="fa fa-times"></i>
					</span>

					<div className="logo-box">
						<Link href="/" aria-label="logo image">
							<img
								src="assets/images/resources/logo-2.png"
								width="150"
								alt=""
							/>
						</Link>
					</div>

					<div className="mobile-nav__container">
						<div
							className="collapse navbar-collapse show clearfix"
							id="navbarSupportedContent"
						>
							<ul className="main-menu__list">
								<li>
									<Link href="/about">About Us</Link>
								</li>
								<li>
									<Link href="/donation">Donation</Link>
								</li>
								<li>
									<Link href="/events">Events</Link>
								</li>
								<li>
									<Link href="/faq">FAQ</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default MobileMenu;
