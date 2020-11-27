import React from 'react';
import Table from './components/Table';
import Filters from './components/Filters';
import './App.css';
import deathstar from './deathstar.png';
import swlogo from './swlogo.png';


class App extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="images">
          <img src={deathstar} alt="logo" width="300px" />
          <img src={swlogo} alt="swlogo" width="300px" />
        </div>
        <Filters />
        <Table />
      </div>
    );
  }
}
export default App;
