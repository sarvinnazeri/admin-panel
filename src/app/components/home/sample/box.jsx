// BoxData.js
import React from 'react';
import { Box, Typography, SvgIcon } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const BoxData = ({ title, amount, percentage, isPositive }) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { md: '33%', lg: '18rem' },
        borderRadius: '1rem',
        height: '12rem',
        backgroundColor: 'white',
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin:2,
      }}
      
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{ color: 'black', fontWeight: 'bold', marginTop: 2 }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          marginTop: 2,
        }}
      >
        <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>
          {amount}
        </Typography>
        <Box
          sx={{ display: 'flex', alignItems: 'center', color: isPositive ? 'green' : 'red' }}
        >
          <Typography variant="h6" sx={{ color: isPositive ? 'green' : 'red' }}>
            {percentage}
          </Typography>
          <SvgIcon component={isPositive ? ArrowUpwardIcon : ArrowDownwardIcon} />
        </Box>
      </Box>
      <Typography variant="body2" sx={{ color: 'gray', marginTop: 1 }}>
        compared to last month
      </Typography>
    </Box>
  );
};

export default BoxData;



