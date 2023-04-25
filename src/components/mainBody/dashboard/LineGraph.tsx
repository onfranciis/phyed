import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  ChartArea,
} from "chart.js";
import { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import faker from "faker";

interface ChartDataType {
  labels: string[];
  datasets: {
    fill: boolean;
    label: string;
    data: any[];
    borderColor: string;
    backgroundColor: CanvasGradient;
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

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = "rgba(255, 84, 3, 0)";
  const colorEnd = "rgba(255, 84, 3, 0.4)";

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

const LineGraph = () => {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartDataType>({
    labels,
    datasets: [],
  });
  const chart = chartRef.current;

  useEffect(() => {
    if (!chart) {
      return;
    }

    const data = {
      labels,
      datasets: [
        {
          fill: true,
          label: "",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          borderColor: "rgba(255, 84, 3, 0.3)",
          backgroundColor: createGradient(chart.ctx, chart.chartArea),
        },
      ],
    };

    setChartData(data);
  }, []);

  return (
    <div className="LineGraphCanvasParent">
      <Line options={options} data={chartData} ref={chartRef} />
    </div>
  );
};

export default LineGraph;
