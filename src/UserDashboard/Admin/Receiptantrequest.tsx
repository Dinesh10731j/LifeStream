import AdminSidenav from "../../sidenavlayout/AdminSidenav";
import Bgbubble from "../../Components/Bgbubble";

import { UseManageBloodRequest } from "../../hooks/Usemanagebloodrequest";

import { CircularProgress } from "@mui/material";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UseAcceptRequest } from "../../hooks/Useacceptrequest";
interface ReceipientRequestData {
  _id: string;
  fullName: string;
  urgency: string;
  email: string;
  quantity: string;
  bloodGroup: string;
  requestdate: string;
  message: string;
  status:string;
}

const Receiptantrequest = () => {
  const Managebloodrequest = UseManageBloodRequest();
const acceptMutation = UseAcceptRequest();
  const handleAccept = (acceptId: string) => {
    acceptMutation.mutate(acceptId);
  };

  const handleReject = (rejectId: string) => {
    console.log(rejectId);
  };

  return (
    <>
      <Bgbubble />
      <AdminSidenav userid={""} />
      <section className="flex flex-wrap p-3 justify-center items-center w-full md:px-56 py-14 md:py-5">
        {Managebloodrequest.isLoading ? (
          <div className="flex justify-center items-center w-full">
            <CircularProgress />
          </div>
        ) : Managebloodrequest.isError ? (
          <p className="text-2xl md:4xl ">There is no receiptant request</p>
        ) : (
          Managebloodrequest.data?.map((request: ReceipientRequestData) => (
            <div
              key={request._id}
              className="request-card m-2 p-4 border rounded shadow-md w-full sm:w-80 md:w-96 lg:w-[400px] h-auto z-10 font-sans "
            >
              <p>
                <strong>Full Name:</strong> {request.fullName}
              </p>
              <p>
                <strong>Urgency:</strong> {request.urgency}
              </p>
              <p>
                <strong>Email:</strong> {request.email}
              </p>
              <p>
                <strong>Quantity:</strong> {request.quantity}
              </p>
              <p>
                <strong>Blood Group:</strong> {request.bloodGroup}
              </p>
              <p>
                <strong>Request Date:</strong>{" "}
                {new Date(request.requestdate).toLocaleString()}
              </p>
              <p>
                <strong>Message:</strong> {request.message}
              </p>

              <p>
              <strong>Status:</strong> 
<span className={
  request.status === 'Pending' 
    ? 'text-yellow-400' 
    : request.status === 'Completed' 
    ? 'text-green-600' 
    : request.status === 'Rejected' 
    ? 'text-red-700' 
    : ''
}>
  {request.status}
</span>

              </p>
              <div className="flex justify-between mt-2">
                <button
                  className=" p-2 bg-green-500 text-white rounded cursor-pointer"
                  onClick={() => handleAccept(request?._id)}
                >
                  Accept
                </button>
                <button
                  className=" p-2 bg-red-500 text-white rounded cursor-pointer"
                  onClick={() => handleReject(request._id)}
                >
               
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </section>

      <ToastContainer theme="light" position="top-center" />
    </>
  );
};

export default Receiptantrequest;
