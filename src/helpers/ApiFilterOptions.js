import { apiTargets } from "../api/ApiRequests";

export const refreshOptions = {
  name: "RefreshRate",
  label: "Refresh Rate",
  options: [
    {
      label: "5 Minutes",
      value: 300000,
    },
    {
      label: "30 Minutes",
      value: 1800000,
    },
    {
      label: "1 Hour",
      value: 3600000,
    },
  ],
};
export const timePeriodOptions = {
  name: "TimePeriod",
  label: "Time Period",
  options: [
    {
      label: "Last Hour",
      value: "&from=-1h&until=now",
    },
    {
      label: "Last 7 Days",
      value: "&from=-7d&until=now",
    },
    {
      label: "Last 30 Days",
      value: "&from=-1mon&until=-1d",
    },
  ],
};
export const apiTargetOptions = {
  name: "DataTargets",
  label: "Data Targets",
  options: [...apiTargets],
};
