"use client"
import * as React from 'react';
import { Line } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
    },
};

const data = {
    labels: [1, 2, 3, 5, 8, 10],
    datasets: [
        {
            label: 'Series 1',
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            borderColor: 'rgba(54, 162, 235, 0.8)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            fill: false,
        },
    ],
};

export default function BasicLineChart() {
    return (
        <Box
            sx={{
                padding: 3,
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
                width: {
                    xs: '100%', // Full width on extra-small screens
                    sm: '100%', // Full width on small screens
                    md: 500, // Fixed width on medium and larger screens
                },
                height: {
                    xs: 300, // Fixed height
                    sm: 300, // Fixed height
                    md: 300, // Fixed height
                },
            }}
        >
            <Typography variant="h5" gutterBottom sx={{ color: 'black', }}>
                Line Chart Example
            </Typography>
            <Line options={options} data={data} />
        </Box>
    );
}
