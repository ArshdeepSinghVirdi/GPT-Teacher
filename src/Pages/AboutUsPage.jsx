import { Stack } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar'
import FrontSecAbout from '../Components/AboutusPage/FrontSecAbout'
import MissionSectionAbout from '../Components/AboutusPage/MissionSectionAbout'
//import TeamSection from '../Components/AboutusPage/TeamSection'
//import BackedBySection from '../Components/AboutusPage/BackedBySection'
import Footer from '../Components/Footer'

const AboutUsPage = () => {
    return (
        <Stack direction='column'>
            <Navbar />
            <FrontSecAbout />
            <MissionSectionAbout />
            {/* <TeamSection /> */}
            {/* <BackedBySection /> */}
            <Footer />
        </Stack>
    )
}

export default AboutUsPage
