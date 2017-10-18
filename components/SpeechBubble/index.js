import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {rem} from 'polished';
import {svgToURL} from '../../styles/tools';
import mq from '../../styles/templates/mediaQueries';
import typography from '../../styles/templates/typography';

const Bubble = styled.div`
  position: relative;
  background-color: #F90;
  border-radius: .5rem;
  padding: .5em;

  @media (min-height: ${rem('750px')} {
    margin-right: 0;
    border-bottom-left-radius: ${props => (props.isLeftHanded) ? 0 : '.5rem'};
    border-bottom-right-radius: ${props => (props.isLeftHanded) ? '.5rem' : 0};

    &:after {
      content: "";
      height: 9vh;
      left: 0;
      position: absolute;
      right: 0;
      top: 100%;
      transform: ${props => (props.isLeftHanded) ? 'rotateY(0)' : 'rotateY(180deg)'};
      background-image: url(${svgToURL('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 427.9 175.1 132.1" preserveAspectRatio="xMinYMid"><path stroke="#FFAD33" fill="#FFAD33" d="M0 427.9l175.1 65.7-43.7-65.7z"/><path fill="#A36200" d="M175.1 493.6l-87.5 21.9v-54.8"/><path fill="#FFAD33" d="M87.6 515.5l21.2 44.5v-49.8"/></svg>')});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: left top;
    }
  }
`;

const Wrapper = styled.div`
  margin-bottom: 9vh;
  padding: 1vh 1vw;
  width: 100%;
  ${typography.doublePica};

  ${mq.xl`max-width: ${rem('1008px')};`}

  ${Bubble} p {
    &:not(:first-child) {
      margin-top: 1.5rem;
    }
  }
`;

const SpeechBubble = (props) => (
    <Wrapper>
      <Bubble isLeftHanded={props.isLeftHanded}>
        {props.children}
      </Bubble>
    </Wrapper>
);

SpeechBubble.propTypes = {
  isLeftHanded: PropTypes.bool,
};

export default SpeechBubble;
