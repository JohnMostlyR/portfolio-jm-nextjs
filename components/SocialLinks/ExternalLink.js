import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import {visuallyHidden} from '../../styles/mixins';

const StyledA = styled.a`
  color: #575756;
  text-decoration: none;
`;

const VisuallyHiddenSpan = styled.span`
  ${visuallyHidden}
`;

const ExternalLink = (props) => (
  <StyledA href={props.href} target="_blank" rel="noopener noreferrer">
    <FontAwesome name={props.faIcon}/><VisuallyHiddenSpan>{props.description}</VisuallyHiddenSpan>
  </StyledA>
);

ExternalLink.propTypes = {
  description: PropTypes.string,
  href: PropTypes.string,
  faIcon: PropTypes.string,
};

ExternalLink.defaultProps = {
  description: 'ExternalLink to',
  href: '#',
};

export default ExternalLink;