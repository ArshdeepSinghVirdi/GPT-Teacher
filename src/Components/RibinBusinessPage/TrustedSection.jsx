import { Stack, Typography } from '@mui/material'
import React from 'react'

const TrustedSection = () => {
  return (
    <Stack sx={{ paddingX: '5%', paddingY: '3%', position: 'relative', mt: '5rem', bgcolor: '#EBCCFF' }}>
      <Stack display='flex' flexDirection='column' alignItems='center' gap={3}>
        <Typography sx={{ color: '#581781', fontWeight: '600', fontSize: { xs: '30px', md: '45px' },textAlign:'center' }}>Trusted by 100+ Businesses</Typography>
        <Typography sx={{ textAlign: 'justify', width: {xs: '100%', md: '70%'}, fontWeight: '500', fontSize: '25px', marginTop: '12px' }}>“The registration process was very easy and the team set up the complete dashboard in just a few minutes. I’ve started getting business through Ribin from the very first week we’ve made a business of Rs. 24000.”
        </Typography>
        <Typography sx={{ fontWeight: '700', fontSize: '30px' }}>Mr. Afzal</Typography>
        <Typography sx={{ color: '#B2279C', fontWeight: '500', fontSize: '190%',textAlign: 'center' }}>Manager @Lallantop Dhaba</Typography>
      </Stack>
    </Stack>
  )
}

export default TrustedSection
