"use client"

import * as React from 'react';
import { Pie } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Padding, WidthFull } from '@mui/icons-material';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const data = {
  labels: ['Group A', 'Group B', 'Group C', 'Group D', 'Group E', 'Group F'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [400, 300, 300, 200, 278, 189],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  layout: {
    padding: {
      Padding: {
        left: 50
      }
    },
  },
  plugins: {
    legend: {
      position: 'right',
      labels: {
        padding: 10, // Adds space between legend items
        boxWidth: 40, // Adjusts the width of the legend box
      },
    },
    tooltip: {
      padding: 20, // Adds padding inside the tooltip
    },
  },
};




export default function StraightAnglePieChart() {
  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: '#f5f5f5',
        borderRadius: 2,
        width: {
          xs: '100%',
          sm: '100%',
          md: 500,
        },
        height: {
          xs: 300,
          sm: 300,
          md: 300,
        },
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ color: 'black', }}>
        Pie Chart Example
      </Typography>
      <Pie data={data} options={options} />
    </Box>
  );
}
