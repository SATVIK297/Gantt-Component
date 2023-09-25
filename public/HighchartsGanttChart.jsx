// import  { useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsGantt from 'highcharts/modules/gantt';
// import HighchartsExporting from 'highcharts/modules/exporting';
// import './style.css'; // Import your CSS styles

// HighchartsGantt(Highcharts);
// HighchartsExporting(Highcharts);

// function HighchartsGanttChart() {
//   useEffect(() => {
//     var today = new Date(),
//       day = 1000 * 60 * 60 * 24;

//     // Set to 00:00:00:000 today
//     today.setUTCHours(0);
//     today.setUTCMinutes(0);
//     today.setUTCSeconds(0);
//     today.setUTCMilliseconds(0);
//     today = today.getTime();

//     // THE CHART
//     Highcharts.ganttChart('gantt-container', {
//       title: {
//         text: 'Grouping tasks vertically',
//       },
     
//       yAxis: {
//         categories: ['Resource 1', 'Resource 2', 'Resource 3'],
//       },
//       series: [
//         {
//           name: 'Resource 1',
//           data: [
//             {
//               name: 'Task A',
//               y: 0,
//               start: today + 2 * day,
//               end: today + 2 * day,
//               borderColor: '#579EFF',
//               color : '#D7E8FF'
//             },
//             {
//               name: 'Task B',
//               y: 0,
//               start: today + 8 * day,
//               end: today + 8 * day,
//               borderColor: '#579EFF',
//               color : '#D7E8FF' 
//             },
//             {
//               name: 'Task C',
//               y: 0,
//               start: today + 13 * day,
//               end: today + 13 * day,
//               borderColor: '#579EFF',
//               color : '#D7E8FF'
//             },
//           ],
//         },
//         {
//           name: 'Resource 2',
//           data: [
//             {
//               name: 'Task D',
//               y: 1,
//               start: today + 1 * day,
//               end: today + 1 * day,
//               borderColor: '#579EFF',
//               color : '#D7E8FF'
//             },
//             {
//               name: 'Task E',
//               y: 1,
//               start: today + 7 * day,
//               end: today + 7 * day,
//               borderColor: '#579EFF',
//               color : '#D7E8FF'
//             },
//             {
//               name: 'Task F',
//               y: 1,
//               start: today + 11 * day,
//               end: today + 11 * day,
//               borderColor: '#579EFF',
//               color : '#D7E8FF'
//             },
//             {
//               name: 'Task G',
//               y: 1,
//               start: today + 14 * day,
//               end: today + 14 * day,
//               borderColor: '#579EFF',
//               color : '#D7E8FF'
//             },
//           ],
//         },
//         {
//           name: 'Resource 3',
//           data: [
//             {
//               name: 'Task H',
//               y: 2,
//               start: today - 1.5 * day,
//               end: today -1.5 * day,
//               borderColor: '#579EFF',
//               color : '#D7E8FF'
//             },
//             {
//               name: 'Task I',
//               y: 2,
//               start: today + 6 * day,
//               end: today + 6 * day,
//               borderColor: '#579EFF',
//               color : '#D7E8FF'
//             },
//             {
//               name: 'Task J',
//               y: 2,
//               start: today + 10 * day,
//               end: today + 10 * day,
//               borderColor: '#579EFF',
//               color : '#D7E8FF'
//             },
//             {
//               name: 'Task K',
//               y: 2,
//               start: today + 15 * day,
//               end: today + 15 * day,
//               borderColor: '#579EFF', 
//               color: '#D7E8FF'
//             }
            
//           ],
//         },
//       ],
//     });
//   }, []);

//   return (
//     <div id="gantt-container" className="highcharts-gantt-chart">
//       {/* Chart will be rendered here */}
//     </div>
//   );
// }

// export default HighchartsGanttChart;


import { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsGantt from 'highcharts/modules/gantt';
import HighchartsExporting from 'highcharts/modules/exporting';
import './style.css'; // Import your CSS styles

HighchartsGantt(Highcharts);
HighchartsExporting(Highcharts);

function HighchartsGanttChart() {
  useEffect(() => {
    var today = new Date(),
      hour = 1000 * 60 * 60;

    today.setUTCHours(0);
    today.setUTCMinutes(0);
    today.setUTCSeconds(0);
    today.setUTCMilliseconds(0);
    today = today.getTime();
    const timeDifference = 2 * hour; 

    Highcharts.ganttChart('gantt-container', {
      // title: {
      //   text: 'Grouping tasks vertically',
      // },
      xAxis: {
        type: 'datetime',
        tickInterval: hour, // Display ticks every hour
        
        lineColor: 'transparent', // Remove x-axis line
          tickColor: 'transparent', 
        },
        yAxis: {
          categories: ['Resource 1', 'Resource 2', 'Resource 3'],
          gridLineWidth: 0,
          lineColor: 'transparent', // Remove x-axis line
            tickColor: 'transparent', 
      },
      series: [
        {
          name: 'Resource 1',
          data: [
            {
              name: 'Task A',
              y: 0,
              x: today + 2 * hour - timeDifference, 
              x2: today + 2 * hour + timeDifference, 
              borderColor: '#579EFF',
              color : '#D7E8FF'
            },
            {
              name: 'Task B',
              y: 0,
              x: today + 8 * hour - timeDifference, 
              x2: today + 8 * hour + timeDifference,
              borderColor: '#579EFF',
              color : '#D7E8FF' 
            },
            {
              name: 'Task C',
              y: 0,
              x: today + 13 * hour - timeDifference, 
              x2: today + 13 * hour + timeDifference, 
              borderColor: '#579EFF',
              color : '#D7E8FF'
            },
          ],
        },
        {
          name: 'Resource 2',
          data: [
            {
              name: 'Task D',
              y: 1,
              x: today + 1 * hour - timeDifference, // Adjusted start time
              x2: today + 1 * hour + timeDifference, // Adjusted end time
              borderColor: '#579EFF',
              color : '#D7E8FF'
            },
            {
              name: 'Task E',
              y: 1,
              x: today + 7 * hour - timeDifference, // Adjusted start time
              x2: today + 7 * hour + timeDifference, // Adjusted end time
              borderColor: '#579EFF',
              color : '#D7E8FF'
            },
            {
              name: 'Task F',
              y: 1,
              x: today + 12* hour - timeDifference, // Adjusted start time
              x2: today + 12 * hour + timeDifference, // Adjusted end time
              borderColor: '#579EFF',
              color : '#D7E8FF'
            },
           
          ],
        },
        {
          name: 'Resource 3',
          data: [
            {
              name: 'Task H',
              y: 2,
              x: today - 1.5 * hour - timeDifference, // Adjusted start time
              x2: today - 1.5 * hour + timeDifference, // Adjusted end time
              borderColor: '#579EFF',
              color : '#D7E8FF'
            },
            {
              name: 'Task I',
              y: 2,
              x: today + 3 * hour - timeDifference, // Adjusted start time
              x2: today + 3 * hour + timeDifference, // Adjusted end time
              borderColor: '#579EFF',
              color : '#D7E8FF'
            },
            {
              name: 'Task J',
              y: 2,
              x: today + 10 * hour - timeDifference, // Adjusted start time
              x2: today + 10 * hour + timeDifference, // Adjusted end time
              borderColor: '#579EFF',
              color : '#D7E8FF'
            },
            {
              name: 'Task K',
              y: 2,
              x: today + 15 * hour - timeDifference, // Adjusted start time
              x2: today + 15 * hour + timeDifference, // Adjusted end time
              borderColor: '#579EFF', 
              color: '#D7E8FF'
            },
          ],
        },
      ],
    });
  }, []);

  return (
    <div id="gantt-container" className="highcharts-gantt-chart">
    </div>
  );
}

export default HighchartsGanttChart;


// import { useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsGantt from 'highcharts/modules/gantt';
// import HighchartsExporting from 'highcharts/modules/exporting';
// import './style.css'; // Import your CSS styles

// HighchartsGantt(Highcharts);
// HighchartsExporting(Highcharts);

// function HighchartsGanttChart() {
//   useEffect(() => {
//     var today = new Date(),
//       hour = 1000 * 60 * 60;

//     // Set to 00:00:00:000 today
//     today.setUTCHours(0);
//     today.setUTCMinutes(0);
//     today.setUTCSeconds(0);
//     today.setUTCMilliseconds(0);
//     today = today.getTime();

//     // Adjust the time difference (2-3 hours) here
//     const timeDifference = 2 * hour; // Adjust as needed

//     // Define the initial data for the chart
//     const initialData = [
//       {
//         name: 'Task A',
//         y: 0,
//         x: today + 2 * hour - timeDifference, // Adjusted start time
//         x2: today + 2 * hour + timeDifference, // Adjusted end time
//         borderColor: '#579EFF',
//         color: '#D7E8FF',
//       },
//       {
//         name: 'Task B',
//         y: 0,
//         x: today + 8 * hour - timeDifference,
//         x2: today + 8 * hour + timeDifference,
//         borderColor: '#579EFF',
//         color: '#D7E8FF',
//       },
//       {
//         name: 'Task C',
//         y: 0,
//         x: today + 13 * hour - timeDifference,
//         x2: today + 13 * hour + timeDifference,
//         borderColor: '#579EFF',
//         color: '#D7E8FF',
//       },
//     ];

//     // Initialize the chart
//     const chart = Highcharts.ganttChart('gantt-container', {
//       title: {
//         text: 'Grouping tasks vertically',
//       },
//       xAxis: {
//         type: 'datetime', // Display timestamps in hours format
//         dateTimeLabelFormats: {
//           hour: '%H:%M', // Format for hours display
//         },
//         title: {
//           text: 'Time',
//         },
//       },
//       yAxis: {
//         categories: ['Resource 1', 'Resource 2', 'Resource 3'],
//       },
//       tooltip: {
//         formatter: function () {
//           // Customize the tooltip content to display start and end times
//           return (
//             '<b>' +
//             this.series.name +
//             '</b><br>' +
//             'Start Time: ' +
//             Highcharts.dateFormat('%H:%M', this.point.x) +
//             '<br>' +
//             'End Time: ' +
//             Highcharts.dateFormat('%H:%M', this.point.x2)
//           );
//         },
//       },
//       series: [
//         {
//           name: 'Resource 1',
//           data: initialData, // Use initial data
//         },
//         // Add more series with initial data here
//         {
//           name: 'Resource 2',
//           data: [
//             {
//               name: 'Task D',
//               y: 1,
//               x: today + 1 * hour - timeDifference,
//               x2: today + 1 * hour + timeDifference,
//               borderColor: '#579EFF',
//               color: '#D7E8FF',
//             },
//             {
//               name: 'Task E',
//               y: 1,
//               x: today + 7 * hour - timeDifference,
//               x2: today + 7 * hour + timeDifference,
//               borderColor: '#579EFF',
//               color: '#D7E8FF',
//             },
//             {
//               name: 'Task F',
//               y: 1,
//               x: today + 11 * hour - timeDifference,
//               x2: today + 11 * hour + timeDifference,
//               borderColor: '#579EFF',
//               color: '#D7E8FF',
//             },
//             {
//               name: 'Task G',
//               y: 1,
//               x: today + 14 * hour - timeDifference,
//               x2: today + 14 * hour + timeDifference,
//               borderColor: '#579EFF',
//               color: '#D7E8FF',
//             },
//           ],
//         },
//         {
//           name: 'Resource 3',
//           data: [
//             {
//               name: 'Task H',
//               y: 2,
//               x: today - 1.5 * hour - timeDifference,
//               x2: today - 1.5 * hour + timeDifference,
//               borderColor: '#579EFF',
//               color: '#D7E8FF',
//             },
//             {
//               name: 'Task I',
//               y: 2,
//               x: today + 6 * hour - timeDifference,
//               x2: today + 6 * hour + timeDifference,
//               borderColor: '#579EFF',
//               color: '#D7E8FF',
//             },
//             {
//               name: 'Task J',
//               y: 2,
//               x: today + 10 * hour - timeDifference,
//               x2: today + 10 * hour + timeDifference,
//               borderColor: '#579EFF',
//               color: '#D7E8FF',
//             },
//             {
//               name: 'Task K',
//               y: 2,
//               x: today + 15 * hour - timeDifference,
//               x2: today + 15 * hour + timeDifference,
//               borderColor: '#579EFF',
//               color: '#D7E8FF',
//             },
//           ],
//         },
//       ],
//     });

//     // Define a function to update data on hover
//     function updateDataOnHover() {
//       const newData = [
//         {
//           name: 'Updated Task A',
//           y: 0,
//           x: today + 2 * hour - timeDifference, // Adjusted start time
//           x2: today + 2 * hour + timeDifference, // Adjusted end time
         
//         },
//         // Add more updated data points here
//       ];

//       // Update the series data with the new data
//       chart.series[0].setData(newData);
//     }

//     // Define a function to reset data on mouseout
//     function resetDataOnMouseOut() {
//       // Reset the series data to the initial data
//       chart.series[0].setData(initialData);
//     }

//     // Add mouseOver and mouseOut event listeners to the chart series
//     chart.series[0].data.forEach((point) => {
//       point.graphic.on('mouseover', updateDataOnHover);
//       point.graphic.on('mouseout', resetDataOnMouseOut);
//     });
//   }, []);

//   return (
//     <div id="gantt-container" className="highcharts-gantt-chart">
//       {/* Chart will be rendered here */}
//     </div>
//   );
// }

// export default HighchartsGanttChart;



