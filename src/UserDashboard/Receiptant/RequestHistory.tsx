
import ReceipentSidenav from '../../sidenavlayout/RecipientSidenav';
import Bgbubble from '../../Components/Bgbubble';
import { UseReceipentrequesthistory } from '../../hooks/Usebloodrequesthistory';
import { CircularProgress } from '@mui/material';

interface HistoryResponse {
  _id: string;
  fullName: string;
  urgency: string;
  email: string;
  quantity: string;
  message: string;
  bloodGroup: string;
}

// Function to determine background color based on urgency or other properties
const getBackgroundColorClass = (urgency: string) => {
  switch (urgency.toLowerCase()) {
    case 'yes':
      return 'bg-pink-300'; // Example color class for 'Yes' urgency
    case 'no':
      return 'bg-[#7bed9f]'; // Example color class for 'No' urgency
    default:
      return 'bg-gray-500'; // Default color class
  }
};

// Function to determine text color based on urgency
const getTextColorClass = (urgency: string) => {
  return urgency.toLowerCase() === 'yes' ? 'text-grey-400' : 'text-white';
};

const RequestHistory = () => {
  const ReceipientantRequesthistory = UseReceipentrequesthistory();


  return (
    <>
      <Bgbubble />
      <ReceipentSidenav userid={''} />
      <section className="flex flex-row justify-center items-center flex-wrap ml-10 gap-5 p-6 md:ml-60 text-[#FFFFFF]">
        {ReceipientantRequesthistory?.isPending ? (
          <CircularProgress size={20} color="primary" />
        ) : ReceipientantRequesthistory?.isError ? (
          <p className="text-center bg-[tomato] text-[#FFFFFF]">Error loading request history</p>
        ) : (
         
          ReceipientantRequesthistory?.data && ReceipientantRequesthistory.data.length > 0 ? (
            ReceipientantRequesthistory.data.map((request: HistoryResponse) => (
              <div
                key={request._id}
                className={`py-4 px-6 ${getBackgroundColorClass(request.urgency)} ${getTextColorClass(request.urgency)} rounded-lg shadow-lg h-[300px] w-[350px] flex flex-col justify-between z-10`}
              >
             
                  <p className="font-sans text-lg">Full Name: {request.fullName}</p>
                  <p className={`${request.urgency.toLowerCase()=='yes'?'bg-red-500':'bg-green-600'} px-2 py-3 w-40 text-center rounded-md`}>Urgency: {request.urgency}</p>
                  <p>Email: {request.email}</p>
                  <p>Quantity: {request.quantity}</p>
                  <p>Message: {request.message}</p>
                  <p className="font-medium">Blood Group: {request.bloodGroup}</p>
               
              </div>
            ))
          ) : (
            <p className="text-center  text-red-500">Blood request history not found</p>
          )
        )}
      </section>
    </>
  );
};

export default RequestHistory;
