import { useEffect, useState } from "react";
import styled from "styled-components";
import { baseUrl } from "./api/ApiRequests";
import "./App.css";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import GroupedPieChart from "./components/GroupedPieChart";

import {
  refreshOptions,
  timePeriodOptions,
  apiTargetOptions,
  apiGroupingTargetOptions,
} from "./helpers/ApiFilterOptions";
import {
  pieConfig,
  barConfig,
  lineConfig,
  formatAllData,
  customPieChart,
} from "./helpers/ChartConfig";
import FilterOptions from "./components/FilterOptions";

function App() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [refreshRate, setRefreshRate] = useState(refreshOptions.options[0]);

  const [dataTimePeriod, setDataTimePeriod] = useState(
    timePeriodOptions.options[0]
  );
  const [currentTarget, setCurrentTarget] = useState(
    apiTargetOptions.options[0]
  );

  const [pieData, setPieData] = useState({
    datasets: [],
  });

  const [groupPieData, setGroupPieData] = useState({
    datasets: [],
  });
  const [groupingCurrentTarget, setGroupingCurrentTarget] = useState(
    apiGroupingTargetOptions.options[0]
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        baseUrl(currentTarget.value, dataTimePeriod.value)
      );

      const res = await data.json();
      formatAllData(
        res,
        dataTimePeriod.label,
        currentTarget,
        setChartData,
        setPieData
      );
    };
    customPieChart(dataTimePeriod, setGroupPieData, groupingCurrentTarget);
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, refreshRate.value);
    return () => clearInterval(interval);
  }, [refreshRate, dataTimePeriod, currentTarget]);

  return (
    <>
      <TitleCard>
        <h1>Single Target Charts</h1>
      </TitleCard>
      <ChartContainer>
        <FilterOptions
          setRefreshRate={setRefreshRate}
          refreshRate={refreshRate}
          setDataTimePeriod={setDataTimePeriod}
          dataTimePeriod={dataTimePeriod}
          setCurrentTarget={setCurrentTarget}
          currentTarget={currentTarget}
        />

        <LineChart
          options={lineConfig(dataTimePeriod.label)}
          data={chartData}
        />
        <BarChart options={barConfig(dataTimePeriod.label)} data={chartData} />
        <PieChart options={pieConfig(dataTimePeriod.label)} data={pieData} />
        <TitleCard>
          <h1>Group Chart</h1>
        </TitleCard>
        <GroupedPieChart
          options={pieConfig(dataTimePeriod.label)}
          data={groupPieData}
          setGroupPieData={setGroupPieData}
          groupingCurrentTarget={groupingCurrentTarget}
          setGroupingCurrentTarget={setGroupingCurrentTarget}
        />
      </ChartContainer>
    </>
  );
}

export default App;

const ChartContainer = styled.div`
  margin: 0 2em;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
const TitleCard = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`;
