import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import './ProductList.css';
import ButtonListing from './ButtonListing';
import Categories from './Categories';


class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      showProducts: false,
      category: '',
    };
  }

  componentDidMount() {
    const { products } = this.props;
    const { category } = this.state;
    api.getProductsFromCategoryAndQuery(category, products)
      .then((result) => {
        this.setState({
          products: result.results,
          showProducts: true,
        });
      });
  }

  componentDidUpdate() {
    const { products } = this.props;
    const { category } = this.state;
    api.getProductsFromCategoryAndQuery(category, products)
      .then((result) => {
        this.setState({
          products: result.results,
          showProducts: true,
        });
      });
  }

  getCategory(event) {
    this.setState({ category: event });
  }

  removeFilter() {
    this.setState({ category: '' });
  }

  render() {
    const { products, showProducts } = this.state;
    if (products.length === 0 && showProducts === true) {
      return <p>Nenhum produto foi encontrado</p>;
    }
    return (
      <div className="container">
        <button type="button" onClick={() => this.removeFilter()}>Remover Filtro</button>
        {showProducts && <Categories click={(event) => this.getCategory(event)} />}
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product" data-testid="product">
              <p className="search-result">{product.title}</p>
              <img src={product.thumbnail} alt="foto" />
              <p>
                R$
                {product.price}
              </p>
              <button
                type="button"
                data-testid="product-detail-link"
              >
                <Link to={{
                  pathname: `/${product.id}/details`,
                  state: product,
                }}
                >
                  VER DATALHES
                </Link>
              </button>
              <ButtonListing product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
