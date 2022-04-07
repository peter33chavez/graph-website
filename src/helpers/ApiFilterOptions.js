export const refreshOptions = {
  name: "RefreshRate",
  label: "Refresh Rate",
  options: [
    {
      title: "5 Minutes",
      value: 300000,
    },
    {
      title: "30 Minutes",
      value: 1800000,
    },
    {
      title: "1 Hour",
      value: 3600000,
    },
  ],
};
export const timePeriodOptions = {
  name: "TimePeriod",
  label: "Time Period",
  options: [
    {
      title: "Last Hour",
      value: "&from=-1h&until=now",
    },
    {
      title: "Last 7 Days",
      value: "&from=-7d&until=now",
    },
    {
      title: "Last 30 Days",
      value: "&from=-30d&until=-1d",
    },
  ],
};
