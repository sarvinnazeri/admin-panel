'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'title', headerName: 'Title', width: 150, editable: true },
  { field: 'price', headerName: 'Price', type: 'number', width: 110, editable: true },
  { field: 'category', headerName: 'Category', width: 150, editable: true },
  { field: 'description', headerName: 'Description', width: 300, editable: true },
  { field: 'image', headerName: 'Image', width: 150, renderCell: (params) => (
    <img src={params.value} alt={params.row.title} style={{ width: '100%', height: 'auto' }} />
  ) },
];

const DataGridDemo = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
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

  // Transform the fetched data to match the columns
  const rows = data.map((item) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    category: item.category,
    description: item.description,
    image: item.image,
  }));

    return (
        <Box sx={{height: 700, width: '100%', paddingTop: 10, paddingLeft: 15, paddingRight: 7, background: 'white' }}>
            <DataGrid
                sx={{ background: 'white', width: '100%' }}
                rows={rows}
                columns={columns}
                rowHeight={102}  
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
    );
};

export default DataGridDemo;
