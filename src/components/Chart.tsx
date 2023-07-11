import { useEffect, useState } from 'react';
import Papa, { ParseResult } from 'papaparse';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Data = {
  year: number;
  cases: number;
};

export default function Chart() {
  // Get value in CSV file
  const [values, setValues] = useState<Data[] | undefined>();

  const getCSV = () => {
    Papa.parse('/src/assets/data/112-cases-by-year.csv', {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ',',
      complete: (results: ParseResult<Data>) => {
        setValues(results.data);
      },
    });
  };

  useEffect(() => {
    getCSV();
  }, []);

  useEffect(() => {
    console.log(values);
  }, [values]);

  // Map value in CSV to chart

  const options = {
    plugins: {
      legend: {
        display: false,
        position: 'bottom' as const,
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        titleColor: '#000',
        bodyColor: '#000',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    aspectRatio: 4 / 3,
  };

  const chartData = {
    labels: values?.map((e) => e.year),
    datasets: [
      {
        label: 'Dataset 1',
        data: values?.map((e) => e.cases),
        borderColor: 'rgba(0, 0, 0, 1)',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
      },
    ],
  };

  const chart = <Bar options={options} data={chartData} />;

  return (
    <>
      <div style={{ width: '100%', height: '100%' }}>{chart}</div>
    </>
  );
}
