import React from 'react';
import styled from 'styled-components';
import mq from '../../styles/templates/mediaQueries';
import ResponsiveImage from '../ResponsiveImage';

const Figure = styled.figure`
  align-items: center;
  display: flex;
  justify-content: center;
  order: ${props => props.isOdd ? 1 : 2};
  position: relative;
  width: 100%;
  background-color: ${props => props.isOdd ? '#0062A3' : '#A36200'};
  border-radius: .5rem;

  &::before {
    height: 0;
    left: 50%;
    position: absolute;
    top: 100%;
    transform: translateX(-50%);
    width: 0;
    content: "";
    border-bottom: 0;
    border-left: .75em solid transparent;
    border-top: .75em solid ${props => props.isOdd ? '#0062A3' : '#A36200'};
    border-right: .75em solid transparent;
    
    ${mq.m`
      left: ${props => props.isOdd ? '100%' : 'inherit'};
      right: ${props => props.isOdd ? 'inherit' : '100%'};
      top: inherit;
      transform: translateX(0);
      border-bottom: .75em solid transparent;
      border-left: ${props => props.isOdd ? '.75em solid #0062A3' : 0};
      border-top: .75em solid transparent;
      border-right: ${props => props.isOdd ? 0 : '.75em solid #A36200'};
    `}
  }
  
  ${mq.m`
    width: auto;
  `}
`;

const Body = styled.div`
  padding: 1vw;
`;

const ImageWrapper = ResponsiveImage.extend`
  width: 13.75rem;
  border-radius: .5rem;

  > img {
    border-radius: .5rem;
  }
`;

const MediaAsset = (props) => (
  <Figure isOdd={props.isOdd}>
    <Body>
      <ImageWrapper imageSource={props.imageSource} imageAlt='Project' ratio='16by9'/>
    </Body>
  </Figure>
);

export default MediaAsset;
