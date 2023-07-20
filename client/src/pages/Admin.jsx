import React from "react";
import { Box, useTheme, Button } from "@mui/material";
import { useGetAdminQuery, useDeleteUserMutation } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetAdminQuery();
  const [deleteUser] = useDeleteUserMutation();
  const navigate = useNavigate();
  // console.log("data", data);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },

    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
    {
      field: "edit",
      headerName: "Edit",
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleEdit(params.row._id)}
        >
          Edit
        </Button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleDelete(params.row._id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  const handleEdit = (id) => {
    // Call your API to delete user from the database
    // console.log(id);
    navigate(`/management/edit/user/${id}`);
  };

  const handleDelete = (id) => {
    // Call your API to delete user from the database

    deleteUser(id);
    alert("User Deleted Successfully");
    window.location.reload();
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Admins" subtitle="List of Admins" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Admin;
