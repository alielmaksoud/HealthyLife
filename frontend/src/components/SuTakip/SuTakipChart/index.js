import React, { useState, useEffect } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

import axios from "axios";

const Chart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let empSal = [];
    let empAge = [];
    axios
      .get("https://iothook.com/api/device/?api_key=053ef1dfb4574250996dcf78&format=json&results=30")
      .then(res => {
        var line={
          suBirim:null,
          suDate:''
        };
        for (const dataObj of res.data) {
          if(line.suDate===''){
            line.suDate = (dataObj.pub_date).substr(0,10);
            line.suBirim = parseInt(dataObj.field_1);
          }
          else {
            if(line.suDate === (dataObj.pub_date).substr(0,10)){
                line.suBirim=line.suBirim + parseInt(dataObj.field_1);
            }
            else{
              empSal.push(line.suBirim);
              empAge.push(line.suDate);
              line.suDate = (dataObj.pub_date).substr(0,10);
              line.suBirim = parseInt(dataObj.field_1);
            }
          }
 
        }
        empSal.push(line.suBirim);
        empAge.push(line.suDate);

        setChartData({
          labels: empAge,
          datasets: [
            {
              label: "level of thiccness",
              data: empSal,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <div>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Günlük Su Takibim", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};


export default Chart;