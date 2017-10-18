import React from 'react';
import Media from '../MediaObject';

import MyLogo from '/static/images/my-logo.svg';

import Wrapper from './Wrapper';
import BrandLink from './BrandLink';

const Brand = (props) => (
  <Wrapper>
    <BrandLink href={'/intro'}>
      <Media
        bodyAlign='middle'
        imageSource={MyLogo}
        imageAlt='logo'
        imageAlign='middle'
        imageHeight='45px'
        imageWidth='45px'
      >JOHAN MEESTER</Media>
    </BrandLink>
  </Wrapper>
);

export default Brand;
