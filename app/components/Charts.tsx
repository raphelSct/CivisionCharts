import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface ChartsProps {
  data: Array<{ saison: string; prix: number; niveau: string }>;
}

export default function Charts({ data }: ChartsProps) {
  const barData = {
    labels: data.map((item) => item.saison),
    datasets: [
      {
        label: 'Prix',
        data: data.map((item) => item.prix),
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  const pieData = {
    labels: [...new Set(data.map((item) => item.niveau))],
    datasets: [
      {
        label: 'Nombre',
        data: [...new Set(data.map((item) => item.niveau))].map((niveau) =>
          data.filter((item) => item.niveau === niveau).length
        ),
        backgroundColor: ['red', 'blue', 'green'],
      },
    ],
  };

  return (
    <div className='chart-container'>
      <Bar className='charts' data={barData} />
      <Pie className='charts' data={pieData} />
    </div>
  );
}
