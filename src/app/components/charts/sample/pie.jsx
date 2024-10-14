import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box, Typography } from '@mui/material';

// Data for the Pie Chart
const data = [
  { label: 'Group A', value: 400 },
  { label: 'Group B', value: 300 },
  { label: 'Group C', value: 300 },
  { label: 'Group D', value: 200 },
  { label: 'Group E', value: 278 },
  { label: 'Group F', value: 189 },
];

// StraightAnglePieChart Component
export default function StraightAnglePieChart() {
  return (
    <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        Pie Chart Example
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <PieChart
          series={[
            {
              startAngle: -90,
              endAngle: 90,
              data,
            },
          ]}
          height={300}
        />
      </Box>
    </Box>
  );
}
