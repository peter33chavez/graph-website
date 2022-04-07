export const chartDataConfig = (labels, dataLabel, data) => {
  return {
    labels: [...labels],
    datasets: [
      {
        label: dataLabel,
        data: [...data],
      },
    ],
  };
};
export const chartOptionsConfig = (duration) => {
  return {
    responsive: true,
    elements: {
      point: {
        radius: 1,
        backgroundColor: "#79FAC5",
      },
      line: {
        tension: 0,
        borderWidth: 1,
        backgroundColor: "#E29E21",
        borderColor: "#E29E21",
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#ffffff",
        },
      },
      title: {
        display: true,
        text: duration, // display the longevity of the data
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#b8b8b8",
        },
      },
      y: {
        ticks: {
          color: "#b8b8b8",
        },
      },
    },
  };
};

export const convertTime = (unixTime, dataTimePeriod) => {
  let date = new Date(unixTime * 1000);
  let convertedDate =
    "" +
    (date.getMonth() + 1) +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear();
  let hours =
    date.getHours().toString().length === 1
      ? "0" + date.getHours()
      : date.getHours();
  let minutes =
    date.getMinutes().toString().length === 1
      ? "0" + date.getMinutes()
      : date.getMinutes();
  let seconds =
    date.getSeconds().toString().length === 1
      ? "0" + date.getSeconds()
      : date.getSeconds();
  let timestamp = hours + ":" + minutes + ":" + seconds;

  return dataTimePeriod !== "Last Hour" ? convertedDate : timestamp;
};
