# Chart Data Project

For this project I'm integrating Custom Charts to represent specific data pulled from a _Graphite API_.
how the API works is shown at this resource: [Graphite Docs](https://graphite-api.readthedocs.io/en/latest/api.html#the-render-api-render).

I've used a filter bar to control the changing of API data, refresh rate, and duration of the data displayed.

The last chart is independently refreshed and changed with its own filter bar.
That data is also a grouped version of the above data, grouping by CPU, Memory, Network.

## TOOLS:

- React
- JavaScript
- Styled-Components
- ChartJS

## LAUNCH

#### _Website is being hosted at:_

(https://62514ee1d793547d07b7a7ff--visionary-bubblegum-8f4ec5.netlify.app/)

## Running Project Locally

- Clone project

- download all the dependencies

- run `npm start` to run on your local host.

_structure of data_
..*all APIs are located at `src > api > ApiRequests.js`
..*filter options for the Select tags are located at `src > helpers > ApiFilterOptions.js`
..*the bulk of the technical logic which covers:
..1-config formatting for chartjs for multiple chart types.
..2-UnixTime conversion for easier readability on the charts.
..3-formatting for all all the data coming from the APIs.
..4-bundling the group pie chart data.
this is located at ` src > helpers > ChartConfig.js`
..*majority of `State variables` are at the top level at `src > App.js`
..\*Some independent `State variables` are within ` src > components > GroupedPieChart.js` so they only trigger the `useEffect` within that component.
