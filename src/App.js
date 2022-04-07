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
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import {
  chartDataConfig,
  chartOptionsConfig,
  convertTime,
} from "./helpers/ChartConfig";

function App() {
  //API-- http://prac-app.vigilantioe.com:8081/render/?target=<See Targets Below>&<options>

  // testAPI-- 'http://prac-app.vigilantioe.com:8081/render/?target=virgil.vigilant-pracapp-01.host.hostalive.perfdata.pl.value&from=-24h&until=now&format=json'

  //TODOs:
  //one pie chart
  //and anymore charts that I want.
  //selector to change targets in one chart
  //Auto refresh options drop down - 5min, 30min, 1hr
  //the data in the chart should only refresh
  //time period selector drop down menu
  //last hour, last 7 days, last 30days until yesterday
  //create README.md with instructions on how to run app locally
  //host app somewhere
  const [chartOptions, setChartOptions] = useState(
    chartOptionsConfig("(Data from 24Hrs)")
  );
  const [chartData, setChartData] = useState({
    //TODO - convert this to show 1hour, 7days, 30days untill yesterday
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(baseUrl(linuxCpuIdle, "&from=-12h&until=now"));
      const res = await data.json();
      console.log(res);
      const datapoints = res[0].datapoints.map((yAxis) => yAxis[0]);
      let unixTime = res[0].datapoints.map((xAxis) => xAxis[1]);
      const labels = unixTime.map((unix) => convertTime(unix));
      console.log(labels);
      setChartData(chartDataConfig(labels, "Linux CPU", datapoints));
    };
    fetchData();
    console.log(chartData);
  }, []);

  return (
    <div className="App">
      <h1>Graph Project</h1>
      <LineChart options={chartOptions} data={chartData} />
      <PieChart options={chartOptions} data={chartData} />
    </div>
  );
}

export default App;
