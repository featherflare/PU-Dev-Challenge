import { MutableRefObject, useRef, useEffect, useState } from 'react';
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
import { Line, Bar } from 'react-chartjs-2';

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

type Values = {
  data: Data[];
};

export default function Chart() {
  const cRef: MutableRefObject<any> = useRef();
  const [values, setValues] = useState<Data[] | undefined>();

  const getCSV = () => {
    Papa.parse('/src/assets/data/112-cases-by-year.csv', {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ',',
      complete: (results: ParseResult<Data>) => {
        console.log(results.data); // Check if the parsed data is correct
        setValues(results.data);
      },
    });
  };

  const options2 = {
    // indexAxis: 'y' as const,
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

  useEffect(() => {
    getCSV();
  }, []);

  useEffect(() => {
    console.log(values);
  }, [values]);

  const chart = <Bar options={options2} data={chartData} />;

  return (
    <>
      <div style={{ width: '100%', height: '100%' }}>{chart}</div>
    </>
  );
}
