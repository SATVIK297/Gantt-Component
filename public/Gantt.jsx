import { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsGantt from 'highcharts/modules/gantt';
import HighchartsExporting from 'highcharts/modules/exporting';
import './style.css'; 

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

    const newData = {
      "ISGEC_4_m01":  [{
          "startTime": "2023-09-11T00:30:00.000Z",
          "endTime": "2023-09-11T06:30:00.000Z",
          "planningId": "YCA-123 10/20",
          "manpowerId": "kumar@98733"
      },{
          "startTime": "2023-09-11T07:30:00.000Z",
          "endTime": "2023-09-11T11:30:00.000Z",
          "planningId": "YJC-2243 10/40",
          "manpowerId": "kumar@98733"
      }],
      "ISGEC_4_m02":  [{
          "startTime": "2023-09-11T00:30:00.000Z",
          "endTime": "2023-09-11T06:30:00.000Z",
          "planningId": "YCA-123 20/20",
          "manpowerId": "dev@98721"
      },{
          "startTime": "2023-09-11T07:30:00.000Z",
          "endTime": "2023-09-11T11:30:00.000Z",
          "planningId": "YJC-2243 20/40",
          "manpowerId": "dev@98721"
      }]
    };

    Highcharts.ganttChart('gantt-container', {
     
      xAxis: {
        type: 'datetime',
        tickInterval: hour,
        title: {
          text: 'Time',
        },
        labels: {
          formatter: function () {
            return Highcharts.dateFormat('%H:%M', this.value);
          },
        },
        lineColor: 'transparent',
        tickColor: 'transparent',
       
      },
      yAxis: {
        categories: Object.keys(newData),
        gridLineWidth: 0,
        lineColor: 'transparent',
        tickColor: 'transparent',
      },
      series: Object.keys(newData).map((resource) => ({
        name: resource,
        data: newData[resource].map((task) => ({
          name: task.planningId,
          y: Object.keys(newData).indexOf(resource),
          x: Date.parse(task.startTime) ,
          x2: Date.parse(task.endTime),
          borderColor: '#579EFF',
          color: '#D7E8FF',
        })),
        borderWidth: 0,
      })),
    });
  }, []);

  return (
    <div id="gantt-container" className="highcharts-gantt-chart">
    </div>
  );
}

export default HighchartsGanttChart;
