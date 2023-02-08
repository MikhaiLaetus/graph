import { useState, useLayoutEffect } from 'react';
import './App.css';
import BusinessTable from './components/BusinessTable';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function App() {
  const [data, setData] = useState();
  const [businessData, setBusinessData] = useState({
    labels: [],
    datasets: [{
      label: 'Выручка',
      data: [],
    }],
  });
  
  const getDate = (str) => {
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };
    const date = new Date(str);
    return date.toLocaleString('ru', options);
  };

  const fetchData = async () => {
    const response = await fetch('http://businessdata')
    const data = await response.json()
      console.log('response', response);
      setData(data)
      setBusinessData({
        labels: data.map((item) => getDate(item.date)),
        datasets: [{
          label: 'Выручка',
          data: data.map((item) => item.revenue)
        }],
      });
  };

  const handleClick = (name, dataType) => {
    const newDataSets = [{
      label: name,
      data: data.map((item) => item[dataType])
    }]
    setBusinessData((prev) => {
      return {...prev, datasets: newDataSets}
    })
  }

  useLayoutEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
       {data && <div style={{width: '600px'}}>
        <Line data={businessData} />
        <BusinessTable tableData={data.slice(-2)} handleClick={handleClick} />
      </div>}
    </div>
  );
}

export default App;
