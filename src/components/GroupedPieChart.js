import styled from "styled-components";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, PieController, LinearScale, Title } from "chart.js";
import { useEffect, useState } from "react";
import { customPieChart } from "../helpers/ChartConfig";
import {
  apiGroupingTargetOptions,
  refreshOptions,
  timePeriodOptions,
} from "../helpers/ApiFilterOptions";
import DropDownMenu from "./DropDownMenu";

ChartJS.register(PieController, LinearScale, Title);

const PieChart = ({
  options,
  data,
  setGroupPieData,
  groupingCurrentTarget,
  setGroupingCurrentTarget,
}) => {
  const [groupingRefreshRate, setGroupingRefreshRate] = useState(
    refreshOptions.options[0]
  );
  const [groupingDataTimePeriod, setGroupingDataTimePeriod] = useState(
    timePeriodOptions.options[0]
  );

  useEffect(() => {
    customPieChart(
      groupingDataTimePeriod,
      setGroupPieData,
      groupingCurrentTarget
    );
    const interval = setInterval(() => {
      customPieChart(
        groupingDataTimePeriod,
        setGroupPieData,
        groupingCurrentTarget
      );
    }, groupingRefreshRate.value);
    return () => clearInterval(interval);
  }, [groupingRefreshRate, groupingDataTimePeriod, groupingCurrentTarget]);

  return (
    <PieChartContainer>
      <DropDownContainer>
        <TargetContainer>
          <DropDownMenu
            values={apiGroupingTargetOptions.options}
            name={apiGroupingTargetOptions.name}
            label={apiGroupingTargetOptions.label}
            setOption={setGroupingCurrentTarget}
            currentVal={groupingCurrentTarget}
          />
        </TargetContainer>
        <DataFilterContainer>
          <DropDownMenu
            values={refreshOptions.options}
            name={refreshOptions.name}
            label={refreshOptions.label}
            setOption={setGroupingRefreshRate}
            currentVal={groupingRefreshRate}
          />
          <DropDownMenu
            values={timePeriodOptions.options}
            name={timePeriodOptions.name}
            label={timePeriodOptions.label}
            setOption={setGroupingDataTimePeriod}
            currentVal={groupingDataTimePeriod}
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
`;
const DropDownContainer = styled.div`
  background: rgb(18, 36, 72) 100%;

  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  margin: 2em;
  padding: 0 1em;
`;

const TargetContainer = styled.div``;
const DataFilterContainer = styled.div`
  display: flex;
  gap: 1em;
`;
