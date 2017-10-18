import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {rem} from 'polished';
import {FormattedMessage, injectIntl} from 'react-intl';

import mq from '../../styles/templates/mediaQueries';
import {visuallyHidden} from '../../styles/mixins';

import NavigationItems from './NavigationItems';

const SiteNavigation = styled.nav`
  width: 100%;
  padding: .35rem 0;
  position: ${props => props.isAtScreenTop ? 'fixed' : 'unset'};
  top: 0;
  background-color: #575756;

  ${mq.m`
    left: 100%;
    position: ${props => props.isAtScreenTop ? 'fixed' : 'absolute'};
    top: ${props => props.isAtScreenTop ? 0 : rem('77px')};
    width: unset;
    padding: 0 .35rem;
    transform: rotate(90deg);
    transform-origin: top left;
    background-color: transparent;
    border-bottom: none;  
  `}
`;

const H2 = styled.h2`
  ${visuallyHidden}
`;

class SiteNavigationBar extends Component {
  static propTypes = {
    setSiteNavIsFixedOffset: PropTypes.func.isRequired,
  };

  state = {
    _myTopPosition: 0,
    _isAtScreenTop: false,
    _isScrolling: 0,
  };

  _getElementTop = (element) => {
    let actualTop = element.offsetTop;
    let currentParent = element.offsetParent;

    while (currentParent !== null) {
      actualTop += currentParent.offsetTop;
      currentParent = currentParent.offsetParent;
    }

    return actualTop;
  };

  handleScrollEvent = (ev) => {
    if (this.state._isScrolling) {
      return;
    }

    let debounce = setTimeout(() => {
      const isAtScreenTop = (ev.target.scrollingElement.scrollTop >= this.state._myTopPosition)
          ? true
          : false;

      this.setState({
        _isAtScreenTop: isAtScreenTop,
        _isScrolling: 0,
      });


      if (isAtScreenTop) {
        this.props.setSiteNavIsFixedOffset(this.siteNavigation.offsetHeight);
      } else {
        this.props.setSiteNavIsFixedOffset(0);
      }
    }, 0);

    this.setState({
      _isScrolling: debounce,
    });
  };

  componentDidMount() {
    this.setState({
      _myTopPosition: this._getElementTop(this.siteNavigation),
    });

    document.addEventListener('scroll', this.handleScrollEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScrollEvent);
  }

  render() {
    return (
        <SiteNavigation isAtScreenTop={this.state._isAtScreenTop}
                        innerRef={el => this.siteNavigation = el}>
          <H2><FormattedMessage id='portfolio.nav.header' defaultMessage='Site navigation' /></H2>
          <NavigationItems/>
        </SiteNavigation>
    );
  }
}

export default injectIntl(SiteNavigationBar);
