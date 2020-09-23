import React, { useContext } from 'react'
import './CSS/SideBar.css'
import logo from '../images/logo.png'
import { ApplicationContext } from '../context/Context';
import { Link } from 'react-router-dom';

function SideBar() {
  const { setApiType, apiType, setBestMovies } = useContext(ApplicationContext)

  return (
    <div className="sidebar">
      
      <Link to="/" onClick={() => {setApiType('trending'); setBestMovies(false)}}><img src={logo} alt="logo" /></Link>
      <Link to="/" onClick={() => {setApiType('trending'); setBestMovies(false)}}><p >Trending</p></Link>
      <Link to="/" onClick={() => {setApiType('movie'); setBestMovies(false)}}><p >Movies</p></Link>
      <Link to="/" onClick={() => {setApiType('tv'); setBestMovies(false)}}><p>TV</p></Link>
      <Link to="/" onClick={() => {setApiType('people'); setBestMovies(false)}}><p>People</p></Link>
      <Link to="/" onClick={() => {setApiType('movie'); setBestMovies(true)}}><p>The 200 Best Movies</p></Link>
      <p>Lists</p>
    </div>
  )
}

export default SideBar;
