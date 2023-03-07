import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const Charts = () => {
  //   const ctx = document.getElementById("myChart").getContext("2d");
  const data = {
    labels: ["Meditation", "Yoga", "Music"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="chart-container">
      {/* <div id="myChart"></div> */}
      <Chart type="doughnut" data={data} />
    </div>
  );
};

export default Charts;
