
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
      return 'bg-red-500'; // Example color class for 'Yes' urgency
    case 'no':
      return 'bg-green-500'; // Example color class for 'No' urgency
    default:
      return 'bg-gray-500'; // Default color class
  }
};

// Function to determine text color based on urgency
const getTextColorClass = (urgency: string) => {
  return urgency.toLowerCase() === 'yes' ? 'text-black' : 'text-white';
};

const RequestHistory = () => {
  const ReceipientantRequesthistory = UseReceipentrequesthistory();
  console.log('This is ', ReceipientantRequesthistory?.data);

  return (
    <>
      <Bgbubble />
      <ReceipentSidenav userid={''} />
      <section className="grid grid-cols-1 md:grid-cols-3 ml-10 gap-5 p-6 md:ml-60">
        {ReceipientantRequesthistory?.isPending ? (
          <CircularProgress size={20} color="primary" />
        ) : ReceipientantRequesthistory?.isError ? (
          <p className="text-center bg-[tomato] text-[#FFFFFF]">Error loading request history</p>
        ) : (
         
          ReceipientantRequesthistory?.data && ReceipientantRequesthistory.data.length > 0 ? (
            ReceipientantRequesthistory.data.map((request: HistoryResponse) => (
              <div
                key={request._id}
                className={`py-4 px-6 ${getBackgroundColorClass(request.urgency)} ${getTextColorClass(request.urgency)} rounded-lg shadow-lg h-[300px] w-[300px] flex flex-col justify-between`}
              >
                <div>
                  <p className="font-semibold text-lg">Full Name: {request.fullName}</p>
                  <p>Urgency: {request.urgency}</p>
                  <p>Email: {request.email}</p>
                  <p>Quantity: {request.quantity}</p>
                </div>
                <div>
                  <p>Message: {request.message}</p>
                  <p className="font-semibold">Blood Group: {request.bloodGroup}</p>
                </div>
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
