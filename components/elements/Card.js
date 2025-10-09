import Link from "next/link";
import AuthenticatedLink from "./AuthenticatedLink";

/** 
* Card Component
* Props:
* - title: Title of the card
* - description: Description text
* - img1: Primary image URL
* - img2: Secondary image URL (for hover effect)
* - url: Link URL for the card
* - buttonText: Text for the action button
* - raised: Amount raised (number or string with currency symbol)
* - goal: Goal amount (number or string with currency symbol)
* - isPublic: Boolean to determine if the link is public or requires authentication
**/

const Card = ({
	description,
	title,
	img1,
	img2,
	url,
	buttonText,
	raised,
	goal,
	isPublic,
}) => {
	const parseAmount = (amount) => {
		if (typeof amount === "number") return amount;
		if (typeof amount === "string") {
			return parseFloat(amount.replace(/[$,]/g, "")) || 0;
		}
		return 0;
	};

	const raisedAmount = parseAmount(raised); // 5000
	const goalAmount = parseAmount(goal); // 1000
	const progress = goalAmount > 0 ? (raisedAmount / goalAmount) * 100 : 0;

	const formatCurrency = (amount) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
		}).format(amount);
	};

	return (
		<div className="donate-two__single">
			<div className="donate-two__img-box">
				<div className="donate-two__img">
					<img src={img1} alt="" />
					<img src={img2} alt="" />
				</div>
			</div>
			<div className="donate-two__content">
				<h3 className="donate-two__title">
					<Link href={url}>{title}</Link>
				</h3>
				<p className="donate-two__text">{description}</p>
				<div className="donate-two__goals">
					{raised && (
						<div className="donate-two__raised">
							<p>Raised:</p>
							<span>{formatCurrency(raised)}</span>
						</div>
					)}
					{goal && (
						<div className="donate-two__raised">
							<p>Goal:</p>
							<span>{formatCurrency(goal)}</span>
						</div>
					)}
				</div>
				{goal && raised && (
					<div className="donate-two__progress">
						<div className="bar">
							<div
								className="bar-inner count-bar"
								data-percent={`${progress.toFixed(1)}%`}
								style={{width: `${progress}%`}}
							></div>
						</div>
					</div>
				)}
				{isPublic && (
					<div className="donate-two__btn-box-2">
						<Link href={url} className="donate-two__btn-2 thm-btn">
							{buttonText}
							<span>
								<i className="icon-arrow-right"></i>
							</span>
						</Link>
					</div>
				)}
				{!isPublic && (
					<div className="donate-two__btn-box-2">
						<AuthenticatedLink href={url} className="donate-two__btn-2 thm-btn">
							{buttonText}
							<span>
								<i className="icon-arrow-right"></i>
							</span>
						</AuthenticatedLink>
					</div>
				)}
			</div>
		</div>
	);
};
export default Card;
