import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Typography } from '@mui/material';

// BasicBars Component
export default function BasicBars() {
    return (
        <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
                Bar Chart Example
            </Typography>
            <BarChart
            
                xAxis={[{ scaleType: 'band', data: ['Group A', 'Group B', 'Group C'] }]}
                series={[
                    { label: 'Series 1', data: [4, 3, 5] },
                    { label: 'Series 2', data: [1, 6, 3] },
                    { label: 'Series 3', data: [2, 5, 6] }
                ]}
                width={500}
                height={300}


            />
        </Box>
    );
}
