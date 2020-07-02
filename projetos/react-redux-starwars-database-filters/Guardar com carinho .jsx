import React from 'react';
import { connect } from 'react-redux';
import {
  fetchData, getByName, getByNumericValue,
} from '../actions/action';
import store from '../store/store';

const header = {
  name: 'nome',
  population: 'população',
  diameter: 'diametro',
  climate: 'clima',
  created: 'criado em',
  gravity: 'gravidade',
  orbital_period: 'período de órbita',
  rotation_period: 'período de rotação',
  surface_water: 'Água Superfecial',
  terrain: 'Vegetação',
  films: 'filmes',
  edited: 'editado em',
  url: 'url',
};

function doCompare(e, el) {
  switch (el.comparison) {
    case 'maior que': return parseInt(e[el.column]) > parseInt(el.value, 10);
    case 'menor que': return parseInt(e[el.column]) < parseInt(el.value, 10);
    case 'igual a': return parseInt(e[el.column]) === parseInt(el.value, 10);
    default: return [];
  }
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFilter: '',
      column: 'population',
      comparison: 'maior que',
      value: '',
      filterValues: false,
    };
  }

  componentDidMount() {
    const { getInfo } = this.props;
    getInfo();
  }

  changeFilterName(e) {
    const { getByName } = this.props;
    this.setState({ nameFilter: e.target.value });
    getByName(e.target.value);
  }

  changeColumn(e) {
    this.setState({ column: e.target.value });
  }

  changeComparison(e) {
    this.setState({
      comparison: e.target.value,
    });
  }

  changeValue(e) {
    this.setState({ value: e.target.value });
  }

  doFilter() {
    const { getByNumericValue } = this.props;
    const { column, comparison, value } = this.state;
    getByNumericValue(column, comparison, value);
    this.setState({ filterValues: true });
  }

  renderNumericFilter() {
    const { column, comparison, value } = this.state;
    return (
      <div>
        Selecionar por Valores
        <div>
          <select value={column} data-testid="column-filter" onChange={(e) => this.changeColumn(e)}>
            <option value="" />
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
          <select value={comparison} data-testid="comparison-filter" onChange={(e) => this.changeComparison(e)}>
            <option value="" />
            <option value="maior que"> maior que</option>
            <option value="igual a">igual a</option>
            <option value="menor que">menor que</option>
          </select>
          <input value={value} data-testid="value-filter" onChange={(e) => this.changeValue(e)} />
          <button type="button" data-testid="button-filter" onClick={() => this.doFilter()}>Filtrar</button>
        </div>
      </div>
    );
  }


  filterData() {
    const { data, numericFilter } = this.props;
    // if (numericFilter.length === 1) {
    //   const filteredData = numericFilter.map((el) => data.filter((e) => doCompare(e, el)));
    //   if (filteredData[0]) return filteredData[0];
    //   return [];
    // }
    // if (numericFilter.length === 2) {
    //   const num1 = [numericFilter[0]]
    //   const num2 = [numericFilter[1]]
    //   let filteredData = num1.map((el) => data.filter((e) => doCompare(e, el)));
    //   filteredData = num2.map((el) => filteredData[0].filter((e) => doCompare(e, el)));  
    //   if (filteredData[0]) return filteredData[0];
    //   return [];
    // }
    // if (numericFilter.length === 3) {
    //   const num1 = [numericFilter[0]]
    //   const num2 = [numericFilter[1]]
    //   const num3 = [numericFilter[2]]
    //   let filteredData = num1.map((el) => data.filter((e) => doCompare(e, el)));
    //   filteredData = num2.map((el) => filteredData[0].filter((e) => doCompare(e, el)));
    //   filteredData = num3.map((el) => filteredData[0].filter((e) => doCompare(e, el)));  
    //   if (filteredData[0]) return filteredData[0];
    //   return [];
    // }

    if (numericFilter) {
      const filteredData = numericFilter.reduce((acc, el) => acc.filter((e) => doCompare(e, el)), data);
      console.log(filteredData)
      if (filteredData) return filteredData;
      return [];
    }
    return [];
  }

  render() {
    const { data, filter, numericFilter } = this.props;
    const { nameFilter, filterValues } = this.state;
    return (
      <div>
        <label htmlFor="name-filter">
          Buscar por Nome:
          <input onChange={(e) => this.changeFilterName(e)} id="name-filter" data-testid="name-filter" value={nameFilter} />
        </label>
        {this.renderNumericFilter()}
        <table>
          <thead>
            <tr>
              {Object.values(header).map((e) => <th>{e}</th>)}
            </tr>
          </thead>
          <tbody>
            {!filterValues && filter && data.filter((e) => e.name.includes(filter.name)).map((e) => (
              <tr key={e.name}>
                {Object.keys(header).map((el) => <td key={e.name + el}>{e[el]}</td>)}
              </tr>
            ))}
            {!filter && !filterValues && data.map((e) => (
              <tr key={e.name}>
                {Object.keys(header).map((el) => <td key={e.name + el}>{e[el]}</td>)}
              </tr>
            ))}
            {this.filterData().map((e) => (
              <tr key={e.name}>
                {Object.keys(header).map((el) => <td key={e.name + el}>{e[el]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  filter: state.filters.filterByName,
  numericFilter: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  getInfo: () => dispatch(fetchData()),
  getByName: (e) => dispatch(getByName(e)),
  getByNumericValue: (column, comparison, value) => dispatch(getByNumericValue(column, comparison, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
