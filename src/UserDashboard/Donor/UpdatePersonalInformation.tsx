import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Box, Grid } from '@mui/material';
import { UseUserInfoUpdate } from '../../hooks/Updateinfo';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';
interface DonorInfo {
  fullName: string;
email: string;
phoneNumber:string;
}

interface updateProps {
  userid: string; // Explicitly type the userid as a string
}

const UpdatePersonalInformation: React.FC<updateProps> = ({userid}) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<DonorInfo>();
const mutation = UseUserInfoUpdate(userid);

  const onSubmit = (data: DonorInfo) => {
    mutation.mutate(data);
 
  };

  const onCancel = () => {
    console.log('Form cancelled');
    navigate("/donor");
   
  };



  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 3 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="donorname"
            label="Name"
            {...register('fullName', { required: 'Name is required' })}
            error={!!errors.fullName}
            helperText={errors.fullName ? errors.fullName.message : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="donoremail"
            label="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address'
              }
            })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="donornumber"
            label="Phone Number"
            {...register('phoneNumber', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Phone number must be 10 digits'
              }
            })}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber ? errors.phoneNumber.message : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
          >
            {mutation.isPending?<CircularProgress size={30} color='secondary' />:'Update'}
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <ToastContainer position='top-center' theme='light'/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UpdatePersonalInformation;
