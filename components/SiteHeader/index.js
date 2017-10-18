import React from 'react';
import PropTypes from 'prop-types';

import Brand from '../Brand';
import SiteNavigation from '../SiteNavigationBar';
import SocialLinks from '../SocialLinks';

import Header from './Header';
import Wrapper from './Wrapper';

const SiteHeader = ({setSiteNavIsFixedOffset}) => (
  <Header role="banner">
    <Wrapper>
      <Brand/>
      <SocialLinks/>
    </Wrapper>
    <SiteNavigation setSiteNavIsFixedOffset={setSiteNavIsFixedOffset}/>
  </Header>
);

SiteHeader.propTypes = {
  setSiteNavIsFixedOffset: PropTypes.func.isRequired,
};

export default SiteHeader;
