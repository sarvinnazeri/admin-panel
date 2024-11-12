import React from 'react';
import StraightAnglePieChart from './sample/pie';
import BasicLineChart from './sample/line';
import BasicBars from './sample/bars';
import { Box, Grid } from '@mui/material';

export default function Page() {

    return (
        <Box sx={{
            width: '100%',
            backgroundColor: 'white',
            padding: { xs: 2, sm: 3, md: 4 },
            paddingTop: { xs: '80px', sm: '90px', md: '100px' },
            paddingLeft: { xs: 2, sm: 3, md: 15 },
            paddingRight: { xs: 2, sm: 3, md: 4 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginLeft: { xs: '30px', md: '0' }
        }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: { xs: '90%', md: '100%' } }}>
                <Grid container item xs={12} sx={{
                    justifyContent: { xs: 'center', md: 'start' }, display: 'flex'
                }}>
                    <Grid item xs={12} sm={10} md={6} sx={{ justifyContent: 'center', display: 'flex', marginY: '20px' }}>
                        <BasicBars />
                    </Grid>
                    <Grid item xs={12} sm={10} md={6} sx={{ justifyContent: 'center', display: 'flex', marginY: '20px', }}>
                        <StraightAnglePieChart />
                    </Grid>
                    <Grid item xs={12} sm={10} md={6} sx={{ justifyContent: 'center', display: 'flex', marginY: '20px' }}>
                        <BasicLineChart />
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
}
