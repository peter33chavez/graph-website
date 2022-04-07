import { useEffect, useState } from "react";
import { withTheme } from "styled-components";
import {
  linuxCpuIdle,
  linuxCpuSystem,
  packetLoss,
  roundTripAverage,
} from "./api/ApiEndpoints";
import { baseUrl } from "./api/ApiRequests";
import "./App.css";
import DropDownMenu from "./components/DropDownMenu";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { refreshOptions, timePeriodOptions } from "./helpers/ApiFilterOptions";
import {
  chartDataConfig,
  chartOptionsConfig,
  convertTime,
} from "./helpers/ChartConfig";

function App() {
  //TODOs:
  //one pie chart
  //and anymore charts that I want.
  //selector to change targets in one chart
  //connect the data to chartOption Legend
  //ternary operator on xAxis data when data is generated passed 24hrs

  //create README.md with instructions on how to run app locally
  //host app somewhere

  const [chartOptions, setChartOptions] = useState(
    chartOptionsConfig("(Data from 24Hrs)")
  );
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [refreshRate, setRefreshRate] = useState(
    refreshOptions.options[0].value
  );
  const [dataTimePeriod, setDataTimePeriod] = useState(
    timePeriodOptions.options[0].value
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(baseUrl(linuxCpuSystem, dataTimePeriod));
      const res = await data.json();

      const datapoints = res[0].datapoints.map((yAxis) => yAxis[0]);
      let unixTime = res[0].datapoints.map((xAxis) => xAxis[1]);
      const labels = unixTime.map((unix) => convertTime(unix));
      setChartData(chartDataConfig(labels, "Linux CPU", datapoints));
    };
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, refreshRate);
  }, [refreshRate, dataTimePeriod]);

  return (
    <div className="App">
      <h1>Graph Project</h1>
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
      <LineChart options={chartOptions} data={chartData} />
      <PieChart options={chartOptions} data={chartData} />
    </div>
  );
}

export default App;
