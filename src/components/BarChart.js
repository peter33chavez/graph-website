import styled from "styled-components";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  LinearScale,
  Title,
} from "chart.js";

ChartJS.register(BarController, BarElement, LinearScale, Title);

const BarChart = ({ options, data }) => {
  return (
    <BarContainer>
      <Chart type="bar" data={data} options={options} />
    </BarContainer>
  );
};

export default BarChart;

const BarContainer = styled.div`
  background: linear-gradient(
    0deg,
    rgba(7, 125, 185, 1) 0%,
    rgba(9, 92, 140, 1) 53%,
    rgba(0, 41, 83, 1) 80%,
    rgba(0, 14, 43, 1) 100%
  );
`;
