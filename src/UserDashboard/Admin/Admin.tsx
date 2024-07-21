import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Bgbubble from "../../Components/Bgbubble";
import AdminSidenav from "../../sidenavlayout/AdminSidenav";
import { UsegetDonationstats } from '../../hooks/Usedonationstats';
import { CircularProgress } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const Admin = () => {
  const { isLoading, data: donationStats, isError,error} = UsegetDonationstats();

  const chartData = donationStats ? {
    labels: donationStats.map((item:any) => item._id),
    datasets: [
      {
        label: 'Donations',
        data: donationStats.map((item: { total: any; }) => item.total),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  } : null;

  return (
    <>
      <Bgbubble />
      <AdminSidenav userid={""} />
      <div className="flex flex-col justify-center items-center h-screen p-4">
        <h1 className='font-sans text-2xl md:text-5xl py-4'>Donation Overview </h1>
        {isLoading && <p><CircularProgress size={30} color='primary'/></p>}
        {isError && <p>Error: {error.message}</p>}
        {chartData && (
          <div className="w-full max-w-md">
            <Doughnut data={chartData} />
          </div>
        )}
      </div>
    </>
  );
};

export default Admin;
