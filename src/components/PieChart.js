import styled from "styled-components";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, PieController, LinearScale, Title } from "chart.js";
import {
  refreshOptions,
  timePeriodOptions,
  apiTargetOptions,
} from "../helpers/ApiFilterOptions";
import DropDownMenu from "./DropDownMenu";

ChartJS.register(PieController, LinearScale, Title);

const PieChart = ({
  options,
  data,
  setRefreshRate,
  setDataTimePeriod,
  setCurrentTarget,
}) => {
  return (
    <PieChartContainer>
      <DropDownContainer>
        <TargetContainer>
          <DropDownMenu
            values={apiTargetOptions.options}
            name={apiTargetOptions.name}
            label={apiTargetOptions.label}
            setOption={setCurrentTarget}
          />
        </TargetContainer>
        <DataFilterContainer>
          <DropDownMenu
            values={refreshOptions.options}
            name={refreshOptions.name}
            label={refreshOptions.label}
            setOption={setRefreshRate}
          />
          <DropDownMenu
            values={timePeriodOptions.options}
            name={timePeriodOptions.name}
            label={timePeriodOptions.label}
            setOption={setDataTimePeriod}
          />
        </DataFilterContainer>
      </DropDownContainer>
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

  margin: 5em;
`;
const DropDownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em;
`;

const TargetContainer = styled.div``;
const DataFilterContainer = styled.div`
  display: flex;
  gap: 1em;
`;
