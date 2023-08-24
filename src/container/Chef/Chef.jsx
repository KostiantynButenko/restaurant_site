import React from 'react';

import { SubHeading } from "../../components"
import { images } from "../../constants"
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__pedding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef"/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
           <img src={images.quote} alt='quote' />
           <p className='p__opensans'>Cooking from the heart, I orchestrate flavors that linger joyfully.</p>
        </div>
        <p className='p__opensans'>Food is an art that touches hearts. With every carefully crafted dish, I strive to evoke emotions and create a symphony of flavors that lingers in your soul long after the last bite.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Lou</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign'/>
      </div>

    </div>
  </div>
);

export default Chef;
