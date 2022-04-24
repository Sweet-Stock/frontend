import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./MoneyChart.css";

export default (props) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = props.dashData?.map((value) => value.month);

  const data = {
    labels,
    datasets: [
      {
        label: "Gasto - Mensais",
        data: props.dashData?.map((value) => value.spent),
        backgroundColor: "#D38C88",
      },
      {
        label: "Lucro - Mensais",
        data: props.dashData?.map((value) => value.profit),
        backgroundColor: "#2F2E41",
      },
    ],
  };

  return (
    <div className="money-chart-body">
      <Bar className="money-chart" options={options} data={data} />
    </div>
  );
};
