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
        data: [100, 45, 97, 78, 51, 26, 35, 84],
        borderColor: "#0E86D4",
        backgroundColor: "#68bae370",
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
