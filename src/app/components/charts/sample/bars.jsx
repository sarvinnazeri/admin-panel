 "use client"
import * as React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },

    },
};

const data = {
    labels: ['Group A', 'Group B', 'Group C'],
    datasets: [
        {
            label: 'Series 1',
            data: [4, 3, 5],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Series 2',
            data: [1, 6, 3],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
        },
        {
            label: 'Series 3',
            data: [2, 5, 6],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
    ],
};

export default function BasicBars() {
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
            <Typography variant="h5" gutterBottom sx={{color:'black',}}>
                Bar Chart Example
            </Typography>
            <Bar options={options} data={data} />
        </Box>
    );
}
