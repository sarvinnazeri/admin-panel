'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'username', headerName: 'username', width: 150, editable: true },
  { field: 'email', headerName: 'email', width: 200 },
  { field: 'password', headerName: 'password', width: 200 },
  { field: 'phone', headerName: 'phone', width: 200 },
];

export default function DataGridDemo() {
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://66c3a13cd057009ee9c0dbaf.mockapi.io/user');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRows(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Box
      sx={{
        paddingTop: 10,
        paddingRight: 7,
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingLeft: 15,
      }}
    >
      <Box sx={{ height: 600, width: '100%', justifyContent: 'center', display: 'flex' }}>
        <DataGrid
          sx={{ background: 'white' }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
}
