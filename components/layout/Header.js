import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

export default function Header({
	scroll,
	handlePopup,
	handleSidebar,
	handleMobileMenu,
}) {
	// Logo change - change in two places
	// Account change - change in two places
	return (
		<>
			<header className="main-header-two">
				<nav className="main-menu main-menu-two">
					<div className="main-menu-two__wrapper">
						<div className="main-menu-two__wrapper-inner">
							<div className="main-menu-two__left">
								<div className="main-menu-two__logo">
									<Link href="/">
										<img src="assets/images/resources/logo-1.png" alt="" />
									</Link>
								</div>
								<div className="main-menu-two__main-menu-box">
									<Link
										href="#"
										className="mobile-nav__toggler"
										onClick={handleMobileMenu}
									>
										<i className="fa fa-bars"></i>
									</Link>
									<Menu />
								</div>
							</div>
							<div className="main-menu-two__right">
								<div className="main-menu-two__btn-box">
									<Link href="/account" className="main-menu-two__btn thm-btn">
										Account
										<span>
											<i className="icon-user"></i>
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>

			<div
				className={`stricky-header stricked-menu main-menu main-menu-two ${
					scroll ? "stricky-fixed" : ""
				}`}
			>
				<div className="sticky-header__content">
					<nav className="main-menu main-menu-two">
						<div className="main-menu-two__wrapper">
							<div className="main-menu-two__wrapper-inner">
								<div className="main-menu-two__left">
									<div className="main-menu-two__logo">
										<Link href="/">
											<img src="assets/images/resources/logo-1.png" alt="" />
										</Link>
									</div>
									<div className="main-menu-two__main-menu-box">
										<Link
											href="#"
											className="mobile-nav__toggler"
											onClick={handleMobileMenu}
										>
											<i className="fa fa-bars"></i>
										</Link>
										<Menu />
									</div>
								</div>
								<div className="main-menu-two__right">
									<div className="main-menu-two__btn-box">
										<Link
											href="/account"
											className="main-menu-two__btn thm-btn"
										>
											Account
											<span>
												<i className="icon-user"></i>
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</div>
				{/*.sticky-header__content */}
			</div>
			{/*.stricky-header */}
			<MobileMenu handleMobileMenu={handleMobileMenu} />
		</>
	);
}
