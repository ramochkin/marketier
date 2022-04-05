import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'
ChartJS.register(...registerables);


const LineChart = (props) => {
    console.log("this is a line chart", props);
    var data = {
      labels: props.data.map(x => x.date),
      datasets: [{
        label: `${props.data?.length} Data Available`,
        data: props.data?.map(x => x.close),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    };

    console.log("this is data", data);

    var options = {
      maintainAspectRatio: false,
      responsive:false,
      scales: {
      },
      legend: {
        labels: {
          fontSize: 50,
        },
      },
    }
  
    return (
      <div>
          <p>Price Action</p>
        <Line
          data={data}
          height={400}
          width={800}
          options={options}
  
        />
      </div>
    )
  }
  
  export default LineChart