import Link from "next/link"

export default function Menu() {
    return (
        <>
            <ul className="main-menu__list">
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/causes">Causes</Link>
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
        </>
    )
}
