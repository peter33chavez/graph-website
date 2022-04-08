import { useEffect, useState } from "react";
import styled from "styled-components";
import { baseUrl, apiTargets } from "./api/ApiRequests";
import "./App.css";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import SideMenu from "./components/SideMenu";
import {
  refreshOptions,
  timePeriodOptions,
  apiTargetOptions,
} from "./helpers/ApiFilterOptions";
import {
  chartDataConfig,
  chartOptionsConfig,
  convertTime,
} from "./helpers/ChartConfig";

function App() {
  const [chart, setChart] = useState("line");
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [refreshRate, setRefreshRate] = useState(refreshOptions.options[0]);
  const [dataTimePeriod, setDataTimePeriod] = useState(
    timePeriodOptions.options[0]
  );
  const [currentTarget, setCurrentTarget] = useState(apiTargets[0]);

  const [chartOptions, setChartOptions] = useState(
    chartOptionsConfig("Last Hour")
  );

  //filter xAxis data to only give specific points
  // last hour should give points every minute;
  // last 7 days should give points at every day at same time;
  // last 30 days should give points at every day at same time;

  useEffect(() => {
    const fetchData = async () => {
      console.log("refreshed");
      const data = await fetch(
        baseUrl(currentTarget.value, dataTimePeriod.value)
      );
      const res = await data.json();

      const datapoints = res[0].datapoints.map(
        (yAxis) => yAxis[0] !== null && yAxis[0]
      );
      let unixTime = res[0].datapoints.map(
        (xAxis) => xAxis[0] !== null && xAxis[1]
      );
      const labels = unixTime.map((unix) =>
        convertTime(unix, dataTimePeriod.title)
      );
      setChartData(chartDataConfig(labels, currentTarget.title, datapoints));
    };
    setChartOptions(chartOptionsConfig(dataTimePeriod.title));
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, refreshRate.value);
  }, [refreshRate, dataTimePeriod, currentTarget, chart]);

  return (
    <BaseContainer>
      <SideMenu setChart={setChart} chart={chart} />
      <h1>Graph Project</h1>
      <ChartContainer>
        {chart === "line" && (
          <LineChart
            options={chartOptions}
            data={chartData}
            setRefreshRate={setRefreshRate}
            setDataTimePeriod={setDataTimePeriod}
            setCurrentTarget={setCurrentTarget}
          />
        )}
        {chart === "pie" && (
          <PieChart
            options={chartOptions}
            data={chartData}
            setRefreshRate={setRefreshRate}
            setDataTimePeriod={setDataTimePeriod}
            setCurrentTarget={setCurrentTarget}
          />
        )}
        {chart === "bar" && <p>pie</p>}
      </ChartContainer>
    </BaseContainer>
  );
}

export default App;

const ChartContainer = styled.div`
  margin: 0 2em;
`;
const BaseContainer = styled.div``;
