
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Bgbubble from '../../Components/Bgbubble';
import ReceipentSidenav from '../../sidenavlayout/RecipientSidenav';
import { useForm } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import { Typography } from '@mui/material';
import { UseUserBloodRequest } from '../../hooks/Usebloodrequest';
import CircularProgress from '@mui/material/CircularProgress';

const Request = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
const mutation = UseUserBloodRequest();
  const onSubmit = (data:any) => {
   mutation.mutate(data);
   console.log(data);
  };

  return (
    <>
      <Bgbubble />
      <ReceipentSidenav userid={""} />
     
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
    
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '80%', maxWidth: '600px' }}>
        <Typography variant="h4" align="center">
        Request Blood 
        </Typography>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Full Name"
              {...register("fullName", { required: "Full Name is required" })}
              error={!!errors.fullName}
              helperText={errors.fullName &&  'Full Name is required'}
              variant="outlined"
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Email"
              {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address" } })}
              error={!!errors.email}
              helperText={errors.email && 'Email is required'}
              type="email"
              variant="outlined"
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Blood Group"
              {...register("bloodGroup", { required: "Blood Group is required" })}
              error={!!errors.bloodGroup}
              helperText={errors.bloodGroup && 'Blood Group is required'}
              variant="outlined"
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Quantity"
              {...register("quantity", { required: "Quantity is required", pattern: { value: /^[1-9][0-9]*$/, message: "Invalid quantity" } })}
              error={!!errors.quantity}
              helperText={errors.quantity && 'Quantity is required'}
              type="number"
              variant="outlined"
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Urgency"
              {...register("urgency", { required: "Urgency is required" })}
              error={!!errors.urgency}
              helperText={errors.urgency && 'Urgency is required'}
              variant="outlined"
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Message"
              {...register("message")}
              multiline
              rows={4}
              variant="outlined"
            />
          </FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <Button variant="contained" color="primary" type="submit">
              {mutation.isPending?<CircularProgress/>:'Submit'}
            </Button>
            <Button variant="contained" color="secondary" type="button" onClick={() => console.log("Cancelled")}>
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Request;
