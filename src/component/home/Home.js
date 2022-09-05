import React from 'react';
import {Link} from 'react-router-dom';
import Style from './home.module.css'

const Home = () => {
    
  return (
    <div className={Style.homeParent}>  
    <div className={Style.innerBox}> 
        <h1>Welcome to Food's Kitchen </h1>
        <Link to='/menu'>Go To Menu</Link>
        </div>
    </div>
  )
}

export default Home;