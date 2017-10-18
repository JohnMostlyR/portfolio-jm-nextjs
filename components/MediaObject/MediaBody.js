import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {alignmentToFlex} from './helper';

const StyledMediaBody = styled.p`
  align-self: ${props => alignmentToFlex(props.bodyAlign)};
  flex: 1;
  margin-bottom: 0;
  order: ${props => (props.reverse) ? 1 : 2};
  
  :last-child {
    margin-bottom: 0;
  }
`;

const MediaBody = (props) => (
  <StyledMediaBody {...props}>
    {props.children}
  </StyledMediaBody>
);

MediaBody.propTypes = {
  bodyAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  reverse: PropTypes.bool,
};

MediaBody.defaultProps = {
  bodyAlign: 'top',
  reverse: false,
};

export default MediaBody;
