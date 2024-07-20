import { useParams } from 'react-router-dom';
import { UseViewHistory } from '../hooks/Useviewhistory';
import Bgbubble from '../Components/Bgbubble';
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography} from '@mui/material';

interface HistoryType {
  _id: string;
  fullName: string;
  email: string;
  status: string;
  bloodGroup: string;
}

const Viewuserhistory = () => {
  const { id } = useParams();
  const { data, error, isLoading } = UseViewHistory(id || '');

  if (isLoading) {
    return <div className='flex flex-col justify-center items-center py-12'><CircularProgress size={30} color='primary' /></div>;
  }

  if (error) {
    return <div className='text-red-500'>Error: {error.message}</div>;
  }

  return (
    <div>
      <Bgbubble />
      <section className='flex flex-col items-center justify-end'>
        <Typography variant="h4" gutterBottom>
          User Profile History
        </Typography>

        <TableContainer component={Paper} style={{ maxWidth: '90%', marginTop: '20px' }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Blood Group</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data.length > 0 ? (
                data.map((history: HistoryType) => (
                  <TableRow key={history._id}>
                    <TableCell>{history.fullName}</TableCell>
                    <TableCell>{history.email}</TableCell>
                    <TableCell>{history.status}</TableCell>
                    <TableCell>{history.bloodGroup}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    Data not found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </div>
  );
};

export default Viewuserhistory;
