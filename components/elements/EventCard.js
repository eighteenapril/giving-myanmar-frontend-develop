import Link from "next/link";
import AuthenticatedLink from "./AuthenticatedLink";

/**
 * EventCard Component
 * Props:
 * - title: Title of the EventCard
 * - description: Description text
 * - img1: Primary image URL
 * - img2: Secondary image URL (for hover effect)
 * - url: Link URL for the EventCard
 * - buttonText: Text for the action button
 * - raised: Amount raised (number or string with currency symbol)
 * - goal: Goal amount (number or string with currency symbol)
 * - isPublic: Boolean to determine if the link is public or requires authentication
 **/

const EventCard = ({
	description,
	title,
	img1,
	img2,
	url,
	buttonText,
	raised,
	goal,
	location,
	date
}) => {
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
				<div>
					<p className="donate-two__text">Location: {location}</p>
					<p className="donate-two__text">Date: {date}</p>
				</div>
				<div className="donate-two__goals">
					{raised && (
						<div className="donate-two__raised">
							<p>Joined:</p>
							<span>{raised}</span>
						</div>
					)}
					{goal && (
						<div className="donate-two__raised">
							<p>Total Spot Left:</p>
							<span>{goal - raised}</span>
						</div>
					)}
				</div>
				<div className="donate-two__btn-box-2 mt-4">
					<Link href={url} className="donate-two__btn-2 thm-btn">
						{buttonText}
						<span>
							<i className="icon-arrow-right"></i>
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default EventCard;
