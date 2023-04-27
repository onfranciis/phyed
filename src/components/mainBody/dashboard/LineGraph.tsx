import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { useRef } from "react";
import { Line } from "react-chartjs-2";
import faker from "faker";

interface ChartDataType {
  labels: string[];
  datasets: {
    fill: boolean;
    label: string;
    data: any[];
    borderColor: string;
    backgroundColor: CanvasGradient | string;
  }[];
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "18 Dec",
  "19 Dec",
  "20 Dec",
  "21 Dec",
  "22 Dec",
  "23 Dec",
  "24 Dec",
];

const LineGraph = () => {
  const chartRef = useRef<any>(null);
  const chartData = {
    labels,
    datasets: [
      {
        fill: true,
        label: "",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgba(255, 84, 3, 0.3)",
        backgroundColor: "rgba(255, 84, 3, 0.3)",
      },
    ],
  };

  return (
    <div className="LineGraphCanvasParent">
      <Line options={options} data={chartData} ref={chartRef} />
    </div>
  );
};

export default LineGraph;
