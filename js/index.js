const ctx = document.querySelector(".js-chart").getContext("2d");
const GLOBAL_MEAN_TEMPERATURE = 14;

fetchData().then(parseData).then(getLabelsAndData).then(drawChart);

function fetchData() {
  return fetch("./ZonAnn.Ts+dSST.csv").then((res) => res.text());
}

function parseData(data) {
  return Papa.parse(data, { header: true }).data;
}

function getLabelsAndData(data) {
  return data.reduce(
    (acc, entry) => {
      acc.years.push(entry.Year);
      acc.temps.push(Number(entry.Glob) + GLOBAL_MEAN_TEMPERATURE);
      acc.nTemps.push(Number(entry.NHem) + GLOBAL_MEAN_TEMPERATURE);
      acc.sTemps.push(Number(entry.SHem) + GLOBAL_MEAN_TEMPERATURE);
      return acc;
    },
    { years: [], temps: [], nTemps: [], sTemps: [] }
  );
}

function drawChart(data) {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: data.years,
      datasets: [
        {
          label: "Средняя глобальная температура",
          data: data.temps,
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          fill: false,
        },
        {
          label: "Северное полушарие",
          data: data.nTemps,
          borderColor: "rgba(30,144,255, 1)",
          borderWidth: 1,
          fill: false,
        },
        {
          label: "Южное полушарие",
          data: data.sTemps,
          borderColor: "rgb(152,251,152, 1)",
          borderWidth: 1,
          fill: false,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              callback(value) {
                return value + "°";
              },
            },
          },
        ],
      },
    },
  });
}
