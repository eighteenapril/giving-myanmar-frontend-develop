import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";

const AuthenticatedLink = ({ href, children, ...props }) => {

	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		setIsAuthenticated(!!token);
	}, []);

	if (isAuthenticated) {
		return (
			<Link href={href} {...props}>
				{children}
			</Link>
		);
	} else {
		return (
			<Link href={`/login?redirect=${encodeURIComponent(href)}`} {...props}>
				{children}
			</Link>
		);
	}
}

export default AuthenticatedLink;