import { useForm } from 'react-hook-form';
import { Container, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Typography, Box, Grid } from '@mui/material';
import { UseUserSchedule } from '../../hooks/Usescheduledonation';
import { ToastContainer } from 'react-toastify';
const ScheduleNewDonations = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const mutation =UseUserSchedule();

  const onSubmit = (data:any) => {
    mutation.mutate(data);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4, p: 2, borderRadius: 2, boxShadow: 3, backgroundColor: 'white' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Schedule a Donation
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Full Name"
                  {...register("fullName", { required: true })}
                  error={!!errors.fullName}
                  helperText={errors.fullName && "Full Name is required"}
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Email"
                  type="email"
                  {...register("email", { required: true })}
                  error={!!errors.email}
                  helperText={errors.email && "Email is required"}
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Phone Number"
                  type="tel"
                  {...register("phoneNumber", { required: true })}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber && "Phone Number is required"}
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Donation Type</InputLabel>
                <Select
                  {...register("donationType")}
                  variant="outlined"
                >
                  <MenuItem value="Whole Blood">Whole Blood</MenuItem>
                  <MenuItem value="Plasma">Plasma</MenuItem>
                  <MenuItem value="Platelets">Platelets</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  {...register("date", { required: true })}
                  error={!!errors.date}
                  helperText={errors.date && "Date is required"}
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Time"
                  type="time"
                  InputLabelProps={{ shrink: true }}
                  {...register("time", { required: true })}
                  error={!!errors.time}
                  helperText={errors.time && "Time is required"}
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Location Type</InputLabel>
                <Select
                  {...register("locationType")}
                  variant="outlined"
                >
                  <MenuItem value="Blood Bank">Blood Bank</MenuItem>
                  <MenuItem value="Donation Camp">Donation Camp</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Location Address"
                  {...register("address", { required: true })}
                  error={!!errors.address}
                  helperText={errors.address && "Location Address is required"}
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Health Screening Questions
              </Typography>
              <FormControlLabel
                control={<Checkbox {...register("recentIllness")} />}
                label="Recent Illness or Symptoms"
              />
              <FormControlLabel
                control={<Checkbox {...register("recentTravel")} />}
                label="Recent Travel History"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Medication"
                  {...register("medication")}
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Chronic Diseases"
                  {...register("chronicDiseases")}
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Previous Donation Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  {...register("previousDonationDate")}
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Additional Notes"
                  {...register("notes")}
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Schedule Donation
              </Button>
            </Grid>
          </Grid>
        </form>

      </Box>
      <ToastContainer theme='dark' position='top-right'  className="w-auto"/>
    </Container>
  );
}

export default ScheduleNewDonations;
