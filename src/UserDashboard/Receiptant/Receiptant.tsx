import ReceipentSidenav from "../../sidenavlayout/RecipientSidenav";

interface ReceiptantOverviewItem {
  year: number;
  month: number;
  count: number;
}
import Bgbubble from "../../Components/Bgbubble";
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import { UseReceiptantOverview } from "../../hooks/Usereceiptantoverview";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Receiptant = () => {
  const { data: receiptantoverview, isLoading, isError } = UseReceiptantOverview();
  interface ChartData {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  }
  
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    if (receiptantoverview) {
      const labels: string[] = receiptantoverview.data.map(
        (item: ReceiptantOverviewItem) => `${item.year}-${item.month}`
      );
      const data: number[] = receiptantoverview.data.map((item: ReceiptantOverviewItem) => item.count);

      const backgroundColors: string[] = receiptantoverview.data.map((item: ReceiptantOverviewItem) => {
        switch (item.month) {
          case 1: return 'rgba(75, 192, 192, 0.6)';
          case 2: return 'rgba(153, 102, 255, 0.6)';
          case 3: return 'rgba(255, 159, 64, 0.6)';
          case 4: return 'rgba(54, 162, 235, 0.6)';
          case 5: return 'rgba(255, 99, 132, 0.6)';
          case 6: return 'rgba(255, 206, 86, 0.6)';
          case 7: return 'rgba(75, 192, 192, 0.6)';
          case 8: return 'rgba(153, 255, 102, 0.6)';
          case 9: return 'rgba(255, 99, 71, 0.6)';
          case 10: return 'rgba(0, 204, 255, 0.6)';
          case 11: return 'rgba(255, 165, 0, 0.6)';
          case 12: return 'rgba(255, 0, 255, 0.6)';
          default: return 'rgba(0, 0, 0, 0.6)';
        }
      });

      setChartData({
        labels,
        datasets: [
          {
            label: 'Recipients by Month',
            data,
            backgroundColor: backgroundColors,
          },
        ],
      });
    }
  }, [receiptantoverview]);

  return (
    <div className="flex flex-col md:flex-row">
      <ReceipentSidenav userid={""} />

      <div className="flex-1 p-4 relative">
        <Bgbubble />

        <h1 className="text-xl md:text-4xl font-semibold mt-4 text-center">
          Recipient Overview
        </h1>

        {isLoading ? (
          <div className="flex items-center justify-center h-80">
            <p className="text-lg font-medium">Loading...</p>
          </div>
        ) : isError ? (
          <div className="flex items-center justify-center h-80">
            <p className="text-lg font-medium text-red-600">
              Error loading data. Please try again.
            </p>
          </div>
        ) : chartData ? (
          <div className="mt-6 relative" style={{ height: '400px' }}>
            <Bar
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Month',
                    },
                    ticks: {
                      maxRotation: 90,
                      minRotation: 45,
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Number of Recipients',
                    },
                  },
                },
                elements: {
                  bar: {
                    borderRadius: 10,
                  },
                },
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  tooltip: {
                    enabled: true,
                  },
                },
              }}
              className="w-full h-full"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-80">
            <p className="text-lg font-medium">No data available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Receiptant;
