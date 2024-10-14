"use client"
import React from 'react';
import { Box, Grid } from '@mui/material';
import BasicBars from './sample/basicChart';
import BoxData from './sample/box';
import DataGridDemo from './sample/dataSection';

export default function Page() {

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'white',
        padding: { xs: 2, sm: 3, md: 4 },
        paddingTop: { xs: '80px', sm: '90px', md: '100px' },
        paddingLeft: { xs: 2, sm: 3, md: 15 },
        paddingRight: { xs: 2, sm: 3, md: 4 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          borderRadius: 2,
          padding: { xs: 2, sm: 3, md: 4 },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Grid item xs={12}
          sx={{
            borderRadius: 2,
            padding: { xs: 2, sm: 3, md: 4 },
            display: 'flex',
            justifyContent: 'center',
          }}>
          <DataGridDemo />
        </Grid>
        <Grid container item xs={6} sx={{ justifyContent: 'center', display: 'flex' }}>
          <Grid item xs={12} sm={10} md={6} sx={{ justifyContent: 'center', display: 'flex' }}>
            <BasicBars />
          </Grid>
        </Grid>
        <Grid container item  sx={{ justifyContent: 'center', display: 'flex', width: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', width: '100%', marginTop: 8, }}>
            <BoxData title="Revenue" amount="$3,500" percentage="-10.5%" isPositive={false} />
            <BoxData title="Expenses" amount="$1,200" percentage="+5.3%" isPositive={true} />
            <BoxData title="Profit" amount="$2,300" percentage="-2.1%" isPositive={false} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
