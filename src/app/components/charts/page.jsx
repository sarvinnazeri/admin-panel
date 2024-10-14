import React from 'react';
import TwoLevelPieChart from './sample/pie';
import BasicLineChart from './sample/line';
import BasicBars from './sample/bars';
import { Box, Typography } from '@mui/material';

// Main Page Component
export default function Page() {
    return (
        <Box sx={{ padding: 3, paddingLeft: 15 }}>
            {/* Page Title */}
            <Typography variant="h4" gutterBottom>
                Charts Dashboard
            </Typography>

            {/* Charts Section */}
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 4, display: 'flex', flexWrap: 'wrap', }}>
                    {/* Pie Chart Section */}
                    <Box sx={{ flex: '1 1 45%', minWidth: 300 }}>
                        <TwoLevelPieChart />
                    </Box>

                    {/* Line Chart Section */}
                    <Box sx={{ flex: '1 1 45%', minWidth: 300 }}>
                        <BasicLineChart />
                    </Box>
                    {/* Bar Chart Section */}
                    <Box sx={{ flex: '1 1 45%', minWidth: 300 }}>
                        <BasicBars />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
