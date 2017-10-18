import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {svgToURL} from '../../styles/tools';
import typography from '../../styles/templates/typography';

const StyledHeader = styled.header`
  float: left;
  padding-left: 1em;
`;

const H2 = styled.h2`
  color: #95C11F;
  ${typography.doublePica}
  font-weight: 700;
`;

const HeaderSpeechBubble = styled.div`
  position: relative;
  background-color: #575756;
  border-radius: .5rem;
  padding: 3vh 4vw;

  @media (min-height: 750px) {
    margin-bottom: 4vh;
    margin-right: 0;
    border-bottom-left-radius: ${props => (props.isLeftHanded) ? 0 : '.5rem'};
    border-bottom-right-radius: ${props => (props.isLeftHanded) ? '.5rem' : 0};

    &:after {
      content: "";
      height: 4vh;
      left: 0;
      position: absolute;
      right: 0;
      top: 100%;
      transform: ${props => (props.isLeftHanded) ? 'rotateY(0)' : 'rotateY(180deg)'};
      background-image: url(${svgToURL('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 427.9 175.1 132.1" preserveAspectRatio="xMinYMid"><path stroke="#797978" fill="#797978" d="M0 427.9l175.1 65.7-43.7-65.7z"/><path fill="#575756" d="M175.1 493.6l-87.5 21.9v-54.8"/><path fill="#797978" d="M87.6 515.5l21.2 44.5v-49.8"/></svg>')});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: left top;
    }
  }

  > p {
    &:not(:first-child) {
      margin-top: 1.5rem;
    }
  }
`;

const PageHeader = (props) => (
    <StyledHeader>
      <HeaderSpeechBubble isLeftHanded={props.isLeftHanded}>
        <H2>{props.title}</H2>
      </HeaderSpeechBubble>
    </StyledHeader>
);

PageHeader.propTypes = {
  isLeftHanded: PropTypes.bool,
  title: PropTypes.string,
};

PageHeader.defaultProps = {
  isLeftHanded: true,
  title: 'TITLE',
};

export default PageHeader;
