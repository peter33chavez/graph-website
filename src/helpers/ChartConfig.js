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

export const lineConfig = (duration) => {
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
        text: duration,
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
export const barConfig = (duration) => {
  return {
    responsive: true,
    elements: {
      bar: {
        backgroundColor: "#E29E21",
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
        text: duration,
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

export const pieConfig = (duration) => {
  return {
    responsive: true,
    elements: {
      arc: {
        borderWidth: 1,
        backgroundColor: [
          "#ffb223",
          "#8D9E2B",
          "#3F9051",
          "#007B6B",
          "#00626E",
          "#2F4858",
          "#121c22",
        ],
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
        text: duration,
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

export const formatAllData = (
  res,
  timePeriod,
  currentTarget,
  setChartData,
  setPieData
) => {
  const datapoints = [];
  const labels = [];
  const pieLabels = [];
  const pieDatapoints = [];

  let count = 0;
  let prevTimestamp = 0;

  res[0].datapoints.map((array) => {
    if (array[0] === null) return;

    //ALL datapoints and labels
    datapoints.push(array[0]);
    labels.push(convertTime(array[1], timePeriod));

    //pie chart labels and DataPoints----------
    let unixConvert = new Date(array[1] * 1000);
    if (timePeriod !== "Last Hour") {
      //group all labels and datapoints by day

      if (pieLabels.length === 0) {
        pieLabels.push(convertTime(array[1], timePeriod));
        count += array[0];
        prevTimestamp = unixConvert.getDate();
        return;
      }

      if (unixConvert.getDate() !== prevTimestamp) {
        pieLabels.push(convertTime(array[1], timePeriod));
        pieDatapoints.push(count);
        count = 0;
        prevTimestamp = unixConvert.getDate();
      } else {
        count += array[0];
      }
    } else {
      //group all labels and datapoints by every 10 minutes
      if (pieLabels.length === 0) {
        pieLabels.push(convertTime(array[1], timePeriod));
        count += array[0];
        prevTimestamp = unixConvert.getMinutes() + 9;
        return;
      }
      if (unixConvert.getMinutes() > prevTimestamp) {
        pieLabels.push(convertTime(array[1], timePeriod));
        pieDatapoints.push(Math.max(count, array[0]));
        count = 0;
        prevTimestamp = unixConvert.getMinutes() + 9;
      } else {
        count += array[0];
      }
    }
    return;
  });
  setChartData(chartDataConfig(labels, currentTarget.label, datapoints));
  setPieData(chartDataConfig(pieLabels, currentTarget.label, pieDatapoints));
};
