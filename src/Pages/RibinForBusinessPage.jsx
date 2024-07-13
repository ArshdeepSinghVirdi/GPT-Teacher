import React from 'react'
import FrontSection from '../Components/RibinBusinessPage/FrontSection'
import BenefitsBusinessSection from '../Components/RibinBusinessPage/BenefitsBusinessSection'
import AnalyticsSection from '../Components/RibinBusinessPage/AnalyticsSection'
import TrustedSection from '../Components/RibinBusinessPage/TrustedSection'
import EmployeeBenefitsSection from '../Components/RibinBusinessPage/EmployeeBenefitsSection'
import FAQsSection from '../Components/RibinBusinessPage/FAQsSection'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const RibinForBusinessPage = () => {
    return (
        <div>
            <Navbar />
            <FrontSection />
            <BenefitsBusinessSection />
            <AnalyticsSection />
            <TrustedSection />
            <EmployeeBenefitsSection />
            <FAQsSection />
            <Footer />
        </div>
    )
}

export default RibinForBusinessPage
