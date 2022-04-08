import { useEffect, useState } from "react";
import styled from "styled-components";
import { baseUrl } from "./api/ApiRequests";
import "./App.css";
import SideMenu from "./components/SideMenu";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import {
  refreshOptions,
  timePeriodOptions,
  apiTargetOptions,
} from "./helpers/ApiFilterOptions";
import {
  chartDataConfig,
  chartConfigChange,
  convertTime,
  pieConfig,
  barConfig,
  lineConfig,
} from "./helpers/ChartConfig";
import FilterOptions from "./components/FilterOptions";

function App() {
  const [chart, setChart] = useState("line");

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

  //filter xAxis data to only give specific points
  // last hour should give points every minute;
  // last 7 days should give points at every day at same time;
  // last 30 days should give points at every day at same time;

  //drop down keeps looping through different values of the last one i used

  //create a chart options config for pie and bar
  //group up all the CPU data memory and network for pie chart;
  //only give the pie chart Data targets access to the group data

  useEffect(() => {
    const fetchData = async () => {
      console.log("refreshed");
      const data = await fetch(
        baseUrl(currentTarget.value, dataTimePeriod.value)
      );

      const res = await data.json();

      const datapoints = res[0].datapoints.map((yAxis) =>
        yAxis[0] !== null ? yAxis[0] : 0
      );

      let unixTime = res[0].datapoints.map((xAxis) => xAxis[1]);

      const labels = unixTime.map((unix) =>
        convertTime(unix, dataTimePeriod.title)
      );

      setChartData(chartDataConfig(labels, currentTarget.label, datapoints));
    };
    console.log(chart);
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, refreshRate.value);
  }, [refreshRate, dataTimePeriod, currentTarget, chart]);
  return (
    <>
      <TitleCard>
        <h1>Graph Project</h1>
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
        <PieChart options={pieConfig(dataTimePeriod.label)} data={chartData} />
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
