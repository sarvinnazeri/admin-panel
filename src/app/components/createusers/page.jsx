'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import LoginForm from './login';

const columns = (handleDelete, handleEdit) => [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'username', headerName: 'Username', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'password', headerName: 'Password', width: 200 },
  { field: 'phone', headerName: 'Phone', width: 200 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <>
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => handleEdit(params.row)}
        />
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => handleDelete(params.id)}
        />
      </>
    ),
  },
];

export default function DataGridDemo() {
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [key, setKey] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [currentRow, setCurrentRow] = React.useState(null);

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

  React.useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [rows]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://66c3a13cd057009ee9c0dbaf.mockapi.io/user/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete the row');
      }
      await response.json();
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    } catch (error) {
      console.error('Failed to delete the row:', error);
    }
  };

  const handleEdit = (row) => {
    setCurrentRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentRow(null);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`https://66c3a13cd057009ee9c0dbaf.mockapi.io/user/${currentRow.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentRow),
      });
      if (!response.ok) {
        throw new Error('Failed to update the row');
      }
      const updatedData = await response.json();
      setRows((prevRows) => prevRows.map((r) => (r.id === currentRow.id ? updatedData : r)));
      handleClose();
    } catch (error) {
      console.error('Failed to update the row:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentRow((prevRow) => ({ ...prevRow, [name]: value }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return 

    return (
        <Box sx={{overflow: 'hidden', paddingTop: 10, paddingLeft: 15, paddingRight: 7, display: 'flex', justifyItems: 'center', alignItems: 'center', alignContent: 'center', flexWrap: 'wrap' }}>
            <Box sx={{ width: '100%', height: '40' }}>
                <LoginForm  />
            </Box>
            <Box sx={{ height: 400, width: '100%', }} xs={12} md={12}>
                <DataGrid
                    key={key} 
                    sx={{ background: 'white' }}
                    rows={rows}
                    columns={columns(handleDelete, handleEdit)}
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
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit User</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        name="username"
                        label="Username"
                        type="text"
                        fullWidth
                        value={currentRow?.username || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={currentRow?.email || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        value={currentRow?.password || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        label="Phone"
                        type="text"
                        fullWidth
                        value={currentRow?.phone || ''}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}







