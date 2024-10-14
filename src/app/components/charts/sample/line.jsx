import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Typography } from '@mui/material';

// BasicLineChart Component
export default function BasicLineChart() {
  return (
    <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        Line Chart Example
      </Typography>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10], label: 'X Axis' }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            label: 'Series 1',
          },
        ]}
        width={500}
        height={300}
        legend={{ position: 'bottom' }}
      />
    </Box>
  );
}
