import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components'

import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper__img app__wrapper__ing">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper__info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content__quote">
          <img src={images.quote} alt="chef quote" />
          <p className="p__opensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit?</p>
        </div>
        <p className="p__opensans">A aspernatur maxime libero culpa beatae, assumenda optio. Facere nesciunt modi voluptatum! Consequatur temporibus perferendis sed, at minima qui maiores ullam, saepe voluptatum provident quos suscipit officiis magnam dicta iusto eius modi.</p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="chef sign" />
      </div>
    </div>
  </div>
);

export default Chef;
