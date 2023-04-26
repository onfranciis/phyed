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
import axios from "axios";
import { ResponseType } from "../../../hooks/fetchData";

interface ChartDataType {
  labels: string[];
  datasets: {
    fill: boolean;
    label: string;
    data: any[];
    borderColor: string;
    backgroundColor?: CanvasGradient | string;
  }[];
}

interface LineGraphPropType {
  setAllTime: (data: number) => void;
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

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = "rgba(255, 84, 3, 0)";
  const colorEnd = "rgba(255, 84, 3, 0.4)";

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

const LineGraph = ({ setAllTime }: LineGraphPropType) => {
  const chartRef = useRef<any>(null);
  const [lineData, setLineData] = useState({});
  const labels = Object.keys(lineData);
  const [chartData, setChartData] = useState<ChartDataType>({
    labels: labels.map((label) => label.toString()),
    datasets: [
      {
        fill: true,
        label: "",
        data: Object.values(lineData),
        borderColor: "rgba(255, 84, 3, 0.3)",
        backgroundColor: "rgba(255, 84, 3, 0.3)",
      },
    ],
  });
  const chart = chartRef.current;

 // This effect runs a code that sets the gradient color when the canvas is ready

  useEffect(() => {
    setTimeout(() => {
      if (chart) {
        const data = {
          labels,
          datasets: [
            {
              fill: true,
              label: "",
              data: Object.values(lineData),
              borderColor: "rgba(255, 84, 3, 0.3)",
              backgroundColor: createGradient(chart.ctx, chart.chartArea),
            },
          ],
        };
        setChartData(data);
      }
    }, 1000);
  }, [lineData]);

  useEffect(() => {
    axios
      .get("https://fe-task-api.mainstack.io/")
      .then((res) => res.data)
      .then((res: ResponseType) => {
        setLineData(res.graph_data.views);
        setAllTime(Object.values(res.graph_data.views).reduce((a, b) => a + b));
      });
  }, []);

  return (
    <div className="LineGraphCanvasParent">
      <Line options={options} data={chartData} ref={chartRef} />
    </div>
  );
};

export default LineGraph;
