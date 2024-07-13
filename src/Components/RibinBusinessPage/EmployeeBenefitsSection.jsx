import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const EmployeeBenefitsSection = () => {
    return (
        <Stack sx={{ paddingX: '5%', paddingY: '2%', position: 'relative', mt: '5rem' }}>
            <Stack direction='column' alignItems='center' justifyContent='center' gap={7}>
                <Typography sx={{ color: '#581781', fontWeight: '700', fontSize: {xs: '30px', md: '60px'}, textAlign: 'center', lineHeight: {xs:'40px', md: '62px'} }}>
                    Looking For Employee<br /> Benefits Solutions?
                </Typography>
                <Typography sx={{ fontWeight: '500', fontSize: '26px', textAlign: 'justify', lineHeight: '35px' }}>
                    Meet Ribin, a promising solution for Employee Benefits, crafted to cater to the needs of both HR professionals and employees.<br />

                    Ribin's Employee Incentive and Pay Solution leverages state-of-the-art technology and expertise to simplify the management of a wide range of Employee Benefits. These benefits encompass Meal, Clothing, Fitness, Rewards, and more, and also extend to modern offerings such as Wellness, Entertainment, and Gadgets. All of this is conveniently accessible through a single gift card and an advanced mobile app.
                </Typography>
                <Box>
                    <Button variant='contained' sx={{
                        textTransform: 'capitalize', fontWeight: '500', fontSize:{xs:'14px', md:'1.2vw'}, borderRadius: '50px', bgcolor: '#581781', color: 'white',
                        '&:hover': { bgcolor: '#DAA0FF' }
                    }}>
                        Know More
                    </Button>
                </Box>
            </Stack>
        </Stack>
    )
}

export default EmployeeBenefitsSection
