import styled from "styled-components";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, PieController, LinearScale, Title } from "chart.js";

ChartJS.register(PieController, LinearScale, Title);

const PieChart = ({ options, data }) => {
  return (
    <PieChartContainer>
      <Chart type="pie" data={data} options={options} />
    </PieChartContainer>
  );
};

export default PieChart;

const PieChartContainer = styled.div`
  background: linear-gradient(
    0deg,
    rgba(7, 125, 185, 1) 0%,
    rgba(9, 92, 140, 1) 53%,
    rgba(0, 41, 83, 1) 80%,
    rgba(0, 14, 43, 1) 100%
  );
`;
