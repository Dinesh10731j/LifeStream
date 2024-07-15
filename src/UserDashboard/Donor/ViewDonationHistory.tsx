import React from 'react';
import { UseUserdonationhistory } from '../../hooks/Usedonationhistory';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, CircularProgress } from '@mui/material';
import Sidenav from '../../sidenavlayout/sidenav';
import Bgbubble from '../../Components/Bgbubble';

interface ViewHistoryProps {
  email: string;
}

const ViewDonationHistory: React.FC<ViewHistoryProps> = ({ email }) => {
  const { isLoading,data,isError } = UseUserdonationhistory(email);

  

  return (
    <>
      <Bgbubble />
      <Sidenav userid={''} />
      <Box 
      
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 4,
          px: 2,
       
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Donation History
        </Typography>
        <TableContainer component={Paper} sx={{ maxWidth: 900 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Donation Type</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>


            {
  isLoading ? (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress size={30} color='primary' />
    </Box>
  ) : isError ? (
    <Typography variant="body1" align="center" color="error">
      Error occurred while fetching data.
    </Typography>
  ) : (
    data?.length > 0 ? (
      data.map((donation: any) => (
        <TableRow key={donation._id}>
          <TableCell>{donation.fullName}</TableCell>
          <TableCell>{donation.email}</TableCell>
          <TableCell>{donation.donationType}</TableCell>
          <TableCell>{donation.phoneNumber}</TableCell>
          <TableCell>{new Date(donation.date).toLocaleDateString()}</TableCell>
          <TableCell
            sx={{
              color: donation.status === 'Pending' ? '#FFA500' : '#28A745',
            }}
          >
            {donation.status}
          </TableCell>
        </TableRow>
      ))
    ) : (
      <TableRow>
        <TableCell colSpan={6} style={{ textAlign: 'center' }}>
          <h1>Donation history not found</h1>
        </TableCell>
      </TableRow>
    )
  )
}


            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default ViewDonationHistory;
