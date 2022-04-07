import styled from "styled-components";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, PieController, LinearScale, Title } from "chart.js";

ChartJS.register(PieController, LinearScale, Title);

const PieChart = ({ options, data }) => {
  return (
    <PieChartContainer>
      <Chart type="pie" data={data} />
    </PieChartContainer>
  );
};

export default PieChart;

const PieChartContainer = styled.div`
  background: #232323;

  margin: 5em;
`;
