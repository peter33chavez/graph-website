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
import {
  refreshOptions,
  timePeriodOptions,
  apiTargetOptions,
} from "../helpers/ApiFilterOptions";
import DropDownMenu from "./DropDownMenu";

ChartJS.register(BarController, BarElement, LinearScale, Title);

const BarChart = ({
  options,
  data,
  setRefreshRate,
  setDataTimePeriod,
  setCurrentTarget,
}) => {
  return (
    <BarContainer>
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
