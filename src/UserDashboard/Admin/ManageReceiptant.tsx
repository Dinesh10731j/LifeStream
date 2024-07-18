import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  IconButton, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button,
  FormControl, InputLabel, Select, MenuItem, Typography
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { EllipsisVertical, Trash, Edit } from 'lucide-react';
import Bgbubble from '../../Components/Bgbubble';
import AdminSidenav from '../../sidenavlayout/AdminSidenav';
import { UseManageUsers } from '../../hooks/Usemanageuser';
import { UseChangeUserRole } from '../../hooks/Usechangerole';

interface User {
  name: string;
  _id: string;
  email: string;
  role: string;
}

interface FormData {
  role: string;
  _id: string;
}

const ManageRecipient: React.FC = () => {
  const { data: users } = UseManageUsers();
  const mutation = UseChangeUserRole();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [dialogType, setDialogType] = useState<'edit' | 'viewHistory' | null>(null);
  const [open, setOpen] = useState(false);
  const { control, handleSubmit, reset } = useForm<FormData>();

  const handleOpen = (user: User, type: 'edit' | 'viewHistory') => {
    setSelectedUser(user);
    setDialogType(type);
    setOpen(true);
    reset({ role: user.role, _id: user._id }); // Include _id when resetting the form
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
    reset({ role: '', _id: '' });
  };

  const handleSave = (data: FormData) => {
    if (selectedUser) {
      mutation.mutate(data);
      handleClose();
    }
  };

  const handleDelete = (userId: string) => {
    console.log('Deleted user ID:', userId);
  };

  const handleViewHistory = (userId: string) => {
    console.log('Viewing history for user ID:', userId);
  };

  return (
    <>
      <Bgbubble />
      <AdminSidenav userid={""} />
      <Grid container justifyContent="center" style={{ marginTop: '60px', marginLeft: '0px' }}>
        <Grid item xs={12} md={10} lg={8}>
          <TableContainer component={Paper} style={{ maxHeight: 600 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users && users.map((user: User) => (
                  <TableRow key={user._id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleOpen(user, 'viewHistory')}>
                        <EllipsisVertical />
                      </IconButton>
                      <IconButton onClick={() => handleOpen(user, 'edit')}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(user._id)}>
                        <Trash style={{ color: 'red' }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
          {selectedUser && dialogType === 'viewHistory' && (
            <>
              <Typography variant="h6" gutterBottom>
                {selectedUser.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {selectedUser.email}
              </Typography>
              <Button onClick={() => handleViewHistory(selectedUser._id)}>View History</Button>
            </>
          )}
          {selectedUser && dialogType === 'edit' && (
            <form onSubmit={handleSubmit(handleSave)}>
              <Typography variant="h6" gutterBottom>
                {selectedUser.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {selectedUser.email}
              </Typography>
              <FormControl fullWidth margin="dense">
                <InputLabel>Role</InputLabel>
                <Controller
                  name="role"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field}>
                      <MenuItem value="admin">Admin</MenuItem>
                      <MenuItem value="donor">Donor</MenuItem>
                      <MenuItem value="recipient">Recipient</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" color="primary">Save</Button>
              </DialogActions>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ManageRecipient;
