
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Bgbubble from '../../Components/Bgbubble';
import Sidenav from '../../sidenavlayout/sidenav';
import { UseDonorDonationStats } from '../../hooks/Usedonordonationstats';
import { CircularProgress } from '@mui/material';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Donor = () => {
  const { data: donationStats, isLoading, isError } = UseDonorDonationStats();

  const data = {
    labels: ['Total Donations', 'Total Amount', 'Last Donation Date'],
    datasets: [
      {
        label: 'My Donation Overview',
        data: [
          donationStats?.totalDonations || 0,
          donationStats?.totalAmount || 0,
          donationStats?.lastDonationDate ? new Date(donationStats.lastDonationDate).toLocaleDateString() : 'N/A',
        ],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Bgbubble />
      <Sidenav userid={''} />

      {isLoading ? (
        <section className='flex flex-col justify-center items-center h-screen'>
          <CircularProgress size={30} />
          <h1 className='text-2xl mt-4 font-sans'>Loading...</h1>
        </section>
      ) : isError ? (
        <section className='flex flex-col justify-center items-center h-screen'>
          <h1 className='text-4xl mb-8'>Error loading donation stats</h1>
        </section>
      ) : (
        <section className='flex flex-col justify-center items-center h-screen'>
          <h1 className='text-4xl mb-8'>Donor Donation Stats</h1>
          <div className="w-full max-w-4xl">
            <Line data={data} options={options} />
          </div>
        </section>
      )}
    </>
  );
};

export default Donor;
