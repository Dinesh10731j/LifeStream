import React from 'react';
import { UseUserdonationhistory } from '../../hooks/Usedonationhistory';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

interface ViewHistoryProps {
  email: string; // Explicitly type the userid as a string
}

const ViewDonationHistory: React.FC<ViewHistoryProps> = ({ email }) => {
  const { isLoading, isError, data } = UseUserdonationhistory(email);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error while fetching donor history</div>;
  }

  return (
    <>
      <Typography variant="h4" align="center">
        Donation History
      </Typography>
      <TableContainer component={Paper} >
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

          {data?.length > 0 ? (
  data.map((donation: any) => (
    <TableRow key={donation._id}>
      <TableCell>{donation.fullName}</TableCell>
      <TableCell>{donation.email}</TableCell>
      <TableCell>{donation.donationType}</TableCell>
      <TableCell>{donation.phoneNumber}</TableCell>
      <TableCell>{new Date(donation.date).toLocaleDateString()}</TableCell>
      <TableCell sx={{
        color: donation.status === 'Pending' ? '#FFA500' : '#28A745'
      }}>
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
)}

        
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ViewDonationHistory;
