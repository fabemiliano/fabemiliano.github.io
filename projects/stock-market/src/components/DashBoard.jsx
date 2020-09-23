import React from 'react';
import { getStock, getTickers, getTickerbyName } from '../services/api';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockName: '',
      stockData: [],
      stockInitialData: [],
    };
  }

  componentDidMount() {
    getStock().then((data) => console.log(data));
  }

  getStockByName(stockName) {
    getTickerbyName(stockName).then((data) => this.setState({ stockData: data }));
  }

  render() {
    const { stockName, stockData, stockInitialData } = this.state;
    return (
      <div>
        <div>
          <input onChange={(e) => this.setState({ stockName: e.target.value })} value={stockName} />
          <button onClick={() => this.getStockByName(stockName)} type="button">Search</button>
        </div>
        <div>
          {console.log(stockInitialData)}
          {stockInitialData.map((e) => (
            <div>
              <p>{(e.symbol).slice(0, (e.symbol).indexOf('.'))}</p>
              <p>{e.close}</p>
              <p>{(((e.close / e.open) - 1) * 100).toFixed(2)}</p>
              {/* {getTickerbyName(e.symbol).then(data => <p>{data.data[0].name}</p>)} */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DashBoard;
