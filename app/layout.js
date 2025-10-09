import "public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { dmSans, libreBaskerville } from '@/lib/font'
export const metadata = {
    title: 'Anity',
    description: 'Charity & Donation react next Js template',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${dmSans.variable} ${libreBaskerville.variable}`}>
            <body>{children}</body>
        </html>
    )
}
