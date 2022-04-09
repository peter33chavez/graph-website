import { useEffect, useState } from "react";
import styled from "styled-components";
import { baseUrl } from "./api/ApiRequests";
import "./App.css";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import {
  refreshOptions,
  timePeriodOptions,
  apiTargetOptions,
} from "./helpers/ApiFilterOptions";
import {
  pieConfig,
  barConfig,
  lineConfig,
  formatAllData,
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

  useEffect(() => {
    const fetchData = async () => {
      console.log(currentTarget);
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

    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, refreshRate.value);
  }, [refreshRate, dataTimePeriod, currentTarget]);
  console.log(currentTarget, refreshRate, dataTimePeriod);
  return (
    <>
      <TitleCard>
        <h1>Chart Project</h1>
      </TitleCard>
      <FilterOptions
        setRefreshRate={setRefreshRate}
        refreshRate={refreshRate}
        setDataTimePeriod={setDataTimePeriod}
        dataTimePeriod={dataTimePeriod}
        setCurrentTarget={setCurrentTarget}
        currentTarget={currentTarget}
      />
      <ChartContainer>
        <LineChart
          options={lineConfig(dataTimePeriod.label)}
          data={chartData}
        />
        <BarChart options={barConfig(dataTimePeriod.label)} data={chartData} />
        <PieChart options={pieConfig(dataTimePeriod.label)} data={pieData} />
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
