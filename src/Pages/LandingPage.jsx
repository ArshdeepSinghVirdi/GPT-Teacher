import React from 'react'
import Navbar from '../Components/Navbar'
import FirstSection from '../Components/FirstSection'
import SecondSection from '../Components/SecondSection'
import ThirdSection from '../Components/ThirdSection'
import FourthSection from '../Components/FourthSection'
import Footer from '../Components/Footer'
import { Stack } from '@mui/material'

const LandingPage = () => {
    return (
        <Stack direction='column'>
            <Navbar />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <Footer />
        </Stack>
    )
}

export default LandingPage
