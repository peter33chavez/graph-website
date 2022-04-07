import styled from "styled-components";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

const LineChart = ({ options, data }) => {
  return (
    <LineChartContainer>
      <Chart type="line" data={data} options={options} />
    </LineChartContainer>
  );
};

export default LineChart;

const LineChartContainer = styled.div`
  background: linear-gradient(
    0deg,
    rgba(7, 125, 185, 1) 0%,
    rgba(9, 92, 140, 1) 53%,
    rgba(0, 41, 83, 1) 80%,
    rgba(0, 14, 43, 1) 100%
  );
  margin: 5em;
`;
