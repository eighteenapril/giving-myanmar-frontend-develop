
import Layout from "@/components/layout/Layout"

import About from "@/components/sections/About"
import Banner from "@/components/sections/Banner"
import Feature from "@/components/sections/Feature"
import Donate from "@/components/sections/Donate"
import Causes from "@/components/sections/Cause"

export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <About />
                <Feature />
                {/* API Integration starts here */}
                <Causes />
                <Donate />
            </Layout>
        </>
    )
}