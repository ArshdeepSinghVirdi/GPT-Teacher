import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import FullImage from '../../assets/AnalyticsImage.png'
import Image from '../Image'


const AnalyticsSection = () => {
    return (
        <Stack sx={{ paddingX: '5%', paddingY: '2%', position: 'relative', mt: '5rem' }}>
            <Stack gap={6}>
                <Stack>
                    <Typography sx={{ color: '#581781', fontWeight: '700', fontSize: {xs: '210%'}, textAlign: 'center' }}>Strength of Analytics </Typography>
                    <Typography sx={{ fontWeight: '600', fontSize: '100%', textAlign: 'center' }}>Ribin's Business Dashboard offers a singular, comprehensive view of crucial analytics, empowering
                        you to make informed decisions and optimize your business.</Typography>
                </Stack>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Image src={FullImage} alt='fullimg' sx={{width: '100%'}}/>
                </Box>
            </Stack>
        </Stack>
    )
}

export default AnalyticsSection
