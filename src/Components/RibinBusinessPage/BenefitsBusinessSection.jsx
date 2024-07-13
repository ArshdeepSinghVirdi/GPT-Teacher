import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import ThreePhonesImg from '../../assets/ThreePhones.png'
import Image from '../Image'
import Angel from '../../assets/angle.png'
import Graph from '../../assets/graph.png'
import Gift from '../../assets/gift.png'
import Roi from '../../assets/ROI.png'
import User from '../../assets/usercheck.png'
import Gold from '../../assets/gold.png'



const BenefitsBusinessSection = () => {
    return (
        <Stack sx={{ paddingX: '2%', paddingY: '2%', position: 'relative', mt: '5rem' }}>
            <Stack gap={4}>
                <Stack direction='column' alignItems='center' justifyContent='center'>
                    <Typography sx={{ color: '#581781', fontWeight: '700', textAlign: 'center', fontSize: { xs: '31px', md: '60px' } }}>Benefits For Businesses</Typography>
                    <Typography sx={{ fontWeight: '700', fontSize: { xs: '20px', md: '32px' }, width: { xs: '100%', md: '58%' }, textAlign: 'center' }}>We help businesses scale up both in sales and scope</Typography>
                </Stack>
                <Stack direction={{xs: 'column', md: 'row'}} justifyContent='space-between' alignItems='center' rowGap={6}>
                    <Stack gap={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                            <Box sx={{ bgcolor: '#EBCCFF', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                                <Image src={Graph} alt='image' sx={{}} />
                            </Box>
                            <Typography sx={{ fontWeight: '600', fontSize: '100%', textAlign: 'center' }}>Increase in-store traffic</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                            <Box sx={{ bgcolor: '#EBCCFF', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                                <Image src={Angel} alt='image' sx={{}} />
                            </Box>
                            <Typography sx={{ fontWeight: '600', fontSize: '100%', textAlign: 'center' }}>Drive customer engagement</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                            <Box sx={{ bgcolor: '#EBCCFF', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                                <Image src={Gift} alt='image' sx={{}} />
                            </Box>
                            <Typography sx={{ fontWeight: '600', fontSize: '100%', textAlign: 'center' }}>Free Gifting
                                Infrastructure</Typography>
                        </Box>
                    </Stack>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                        <Image src={ThreePhonesImg} alt='phones' sx={{width: '100%'}}/>
                    </Box>
                    <Stack gap={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                            <Box sx={{ bgcolor: '#EBCCFF', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                                <Image src={Gold} alt='image' sx={{}} />
                            </Box>
                            <Typography sx={{ fontWeight: '600', fontSize: '100%', textAlign: 'center' }}>Maximize Revenue</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                            <Box sx={{ bgcolor: '#EBCCFF', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                                <Image src={Roi} alt='image' sx={{}} />
                            </Box>
                            <Typography sx={{ fontWeight: '600', fontSize: '100%', textAlign: 'center' }}>Higher ROI on marketing</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                            <Box sx={{ bgcolor: '#EBCCFF', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                                <Image src={User} alt='image' sx={{}} />
                            </Box>
                            <Typography sx={{ fontWeight: '600', fontSize: '100%', textAlign: 'center' }}>Increase Customer Retention</Typography>
                        </Box>
                    </Stack>
                </Stack>

            </Stack>
        </Stack>
    )
}

export default BenefitsBusinessSection
