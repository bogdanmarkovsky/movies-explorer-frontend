import React from 'react';
import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Porfolio from '../Portfolio/Portfolio';

function Main() {
  return (
    <div className="main">
      <div className='main_theme_deep-blue'>
        <Promo />
      </div>
      <AboutProject />
      <div className='main_theme_grey'>
        <Techs />
      </div>
      <AboutMe />
      <Porfolio />
    </div>
  );
}

export default Main;
