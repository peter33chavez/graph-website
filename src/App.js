import { useEffect, useState } from "react";
import { baseUrl, apiTargets } from "./api/ApiRequests";
import "./App.css";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
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
  //TODOs:
  //one pie chart
  //and anymore charts that I want.

  //filter xAxis data to only give specific points
  // last hour should give points every minute;
  // last 7 days should give points at every day at same time;
  // last 30 days should give points at every day at same time;

  //create README.md with instructions on how to run app locally
  //host app somewhere

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
  useEffect(() => {
    const fetchData = async () => {
      console.log("refreshed");
      const data = await fetch(
        baseUrl(currentTarget.value, dataTimePeriod.value)
      );
      const res = await data.json();

      const datapoints = res[0].datapoints.map((yAxis) => yAxis[0]);
      let unixTime = res[0].datapoints.map((xAxis) => xAxis[1]);
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
  }, [refreshRate, dataTimePeriod, currentTarget]);

  return (
    <div className="App">
      <h1>Graph Project</h1>
      <LineChart
        options={chartOptions}
        data={chartData}
        setRefreshRate={setRefreshRate}
        setDataTimePeriod={setDataTimePeriod}
        setCurrentTarget={setCurrentTarget}
      />
      <PieChart options={chartOptions} data={chartData} />
    </div>
  );
}

export default App;
