import React from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, CircularProgress } from '@mui/material';
import RecipientSidenav from "../../sidenavlayout/RecipientSidenav";
import Bgbubble from "../../Components/Bgbubble";
import { UseUserDonationDetails } from '../../hooks/Usetotaldonation';

const SearchDonor = () => {
  const { isLoading, isError, data } = UseUserDonationDetails();
  const [valueSort, setValueSort] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleValueSortChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setValueSort(event.target.value);
  };

  const handleStatusChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setStatus(event.target.value);
  };

  const handleSearchChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };

  // Filter and sort data
  const filteredData = data?.filter((donor: { fullName: string; status: string; }) => {
    return (
      donor.fullName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (status ? donor.status.toLowerCase() === status.toLowerCase() : true)
    );
  });

  const sortedData = filteredData?.sort((a: { total: number; }, b: { total: number; }) => {
    if (valueSort === 'highest') {
      return b.total - a.total;
    } else if (valueSort === 'lowest') {
      return a.total - b.total;
    } else {
      return 0;
    }
  });

  console.log(data); // Debug the data structure

  return (
    <>
      <Bgbubble />
      <RecipientSidenav userid={""} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 3,
          pt: 8,
          mx: 'auto',
          maxWidth: '900px',
          zIndex: 10 // Adjust the maxWidth and styling as needed
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Search Donor"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="value-sort-label">Sort by Value</InputLabel>
              <Select
                labelId="value-sort-label"
                value={valueSort}
                onChange={handleValueSortChange}
                label="Sort by Value"
              >
                <MenuItem value="highest">Highest</MenuItem>
                <MenuItem value="lowest">Lowest</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                labelId="status-label"
                value={status}
                onChange={handleStatusChange}
                label="Status"
              >
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, width: '100%' }}>
          <Typography variant="h6" align="center" gutterBottom>
            Donor Information
          </Typography>
          <TableContainer component={Paper}>
            {isLoading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
                <CircularProgress />
              </Box>
            ) : isError ? (
              <Typography variant="body1" align="center" color="error">
                Error occurred while fetching data.
              </Typography>
            ) : (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>SN</TableCell>
                    <TableCell>Donor Name</TableCell>
                    <TableCell>Total Donation</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortedData?.map((donor:any, index:number) => (
                    <TableRow key={donor._id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{donor.fullName}</TableCell>
                      <TableCell>{donor.total}</TableCell>
                      <TableCell sx={{
                        color: donor.status === 'Pending' ? '#FFA500' : '#28A745',
                      }}>{donor.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default SearchDonor;
