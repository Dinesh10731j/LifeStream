import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import AdminSidenav from "../../sidenavlayout/AdminSidenav";
import Bgbubble from "../../Components/Bgbubble";
import { Trash, Edit } from "lucide-react";
import { UseManageBloodRequest } from "../../hooks/Usemanagebloodrequest";
import { CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from "@mui/material";
import { Usedelete } from '../../hooks/Userequestdelete';

interface ReceipientRequestData {
  _id: string;
  fullName: string;
  urgency: string;
  email: string;
  quantity: string;
  bloodGroup: string;
  requestdate: string;
  message: string;
}

const Receiptantrequest = () => {
  const Managebloodrequest = UseManageBloodRequest();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { control, handleSubmit, reset } = useForm<ReceipientRequestData>({
    defaultValues: {
      fullName: '',
      urgency: '',
      email: '',
      quantity: '',
      bloodGroup: '',
      requestdate: '',
      message: ''
    }
  });

  const { mutate: deleteRequest } = Usedelete(); // Destructure mutate function from Usedelete hook

  const handleEditClick = (request: ReceipientRequestData) => {
    reset(request);
    setIsEditOpen(true);
  };

  const handleEditClose = () => {
    setIsEditOpen(false);
  };

  const handleEditSave = (data: ReceipientRequestData) => {
    console.log(data?._id)
    setIsEditOpen(false);
    // Implement logic to update the request data in the backend
  };

  const handleDeleteClick = (requestId: string) => {
    // Call deleteRequest mutation function with requestId
    deleteRequest(requestId);
  };

  return (
    <>
      <Bgbubble />
      <AdminSidenav userid={""} />
      <section className="flex flex-wrap p-3 justify-center items-center w-full md:px-56 py-14 md:py-5">
        {Managebloodrequest.isLoading ? (
          <div className="flex justify-center items-center w-full"><CircularProgress /></div>
        ) : Managebloodrequest.isError ? (
          <p>Sorry, request not found</p>
        ) : (
          Managebloodrequest.data?.map((request: ReceipientRequestData) => (
            <div key={request._id} className="request-card m-2 p-4 border rounded shadow-md w-full sm:w-80 md:w-96 lg:w-[400px] h-auto z-10 font-sans ">
              <p><strong>Full Name:</strong> {request.fullName}</p>
              <p><strong>Urgency:</strong> {request.urgency}</p>
              <p><strong>Email:</strong> {request.email}</p>
              <p><strong>Quantity:</strong> {request.quantity}</p>
              <p><strong>Blood Group:</strong> {request.bloodGroup}</p>
              <p><strong>Request Date:</strong> {new Date(request.requestdate).toLocaleString()}</p>
              <p><strong>Message:</strong> {request.message}</p>
              <div className="flex justify-between mt-2">
                <button className=" p-2 bg-green-500 text-white rounded cursor-pointer" onClick={() => handleEditClick(request)}><Edit /></button>
                <button className=" p-2 bg-red-500 text-white rounded cursor-pointer" onClick={() => handleDeleteClick(request._id)}><Trash /></button>
              </div>
            </div>
          ))
        )}
      </section>

      <Dialog open={isEditOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Request</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(handleEditSave)}>
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="dense"
                  label="Full Name"
                  type="text"
                  fullWidth
                />
              )}
            />
            <Controller
              name="urgency"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="dense"
                  label="Urgency"
                  type="text"
                  fullWidth
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="dense"
                  label="Email"
                  type="email"
                  fullWidth
                />
              )}
            />
            <Controller
              name="quantity"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="dense"
                  label="Quantity"
                  type="number"
                  fullWidth
                />
              )}
            />
            <Controller
              name="bloodGroup"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="dense"
                  label="Blood Group"
                  type="text"
                  fullWidth
                />
              )}
            />
            <Controller
              name="requestdate"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="dense"
                  label="Request Date"
                  type="datetime-local"
                  fullWidth
                />
              )}
            />
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="dense"
                  label="Message"
                  type="text"
                  fullWidth
                />
              )}
            />
            <DialogActions>
              <Button onClick={handleEditClose} color="primary">Cancel</Button>
              <Button type="submit" color="primary">Save</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Receiptantrequest;
