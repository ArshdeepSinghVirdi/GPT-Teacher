import React from 'react';
import Box from '@mui/material/Box';

const Image = ({ src, alt, sx, ...rest }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        ...sx
      }}
      {...rest}
    />
  );
};

export default Image;
