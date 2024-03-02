import React from 'react';
import { images, data } from '../../constants'
import { SubHeading, MenuItem } from '../../components'

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palette" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu__wine flex__center">
        <p className="app__specialMenu-menu__heading">Wine & Beer</p>
        <div className="app__specialMenu-menu__items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title+index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu__img">
        <img src={images.menu} alt="menu img" />
      </div>
      <div className="app__specialMenu-menu__cocktails flex__center">
        <p className="app__specialMenu-menu__heading">Cocktails</p>
        <div className="app__specialMenu-menu__items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title+index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop: 15 }}>
      <button type="button" className="custom__button">View Menu</button>
    </div>
  </div>
);

export default SpecialMenu;
