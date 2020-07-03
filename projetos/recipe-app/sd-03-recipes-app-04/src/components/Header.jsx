import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import { ContextAplication } from '../context/ContextAplication';
import './CSS/Header.css';
import FoodSearchBar from './FoodSearchBar';
import DrinkSearchBar from './DrinkSearchBar';


function Header(props) {
  const { screen } = props;
  const { searchInputVisible, searchInput } = useContext(ContextAplication);
  return (
    <div>
      <div className="headerDiv">
        <Link to="/perfil">
          <img
            className="userProfileIcon"
            src={profileIcon}
            alt="ProfileIcon"
            data-testid="profile-top-btn"
          />
        </Link>
        <h1 className="foodTitle" data-testid="page-title">{screen}</h1>
        {(screen === 'Comidas' || screen === 'Bebidas' || screen === 'Explorar Origem') && <button type="button" className="searchIcon" onClick={() => searchInput()}>
          <img
            src={searchIcon}
            alt="SearchIcon"
            data-testid="search-top-btn"
          />
        </button>}
      </div>
      {searchInputVisible && (screen === 'Comidas') && <FoodSearchBar />}
      {searchInputVisible && (screen === 'Bebidas') && <DrinkSearchBar />}
    </div>
  );
}

export default Header;

Header.propTypes = {
  screen: PropTypes.string.isRequired,
};