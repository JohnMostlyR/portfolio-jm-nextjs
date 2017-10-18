import {withRouter} from 'next/router';
import styled from 'styled-components';
import mq from '../../styles/templates/mediaQueries';
import typography, {baseFontStackSansSerif} from '../../styles/templates/typography';

const StyledA = styled.a`
  display: inline-block;
  position: relative;
  background-color: #FF6633;
  border-radius: 0;
  color: #fff;
  cursor: pointer;
  letter-spacing: 1px;
  padding: 0.5em;
  text-align: center;
  text-decoration: none !important;
  transition: background-color 0.3s, color 0.3s;

  font-family: ${baseFontStackSansSerif}
  font-weight: 500;
  ${typography.pica}

  &:active,
  &:hover {
    background-color: transparent;
    color: #FF6633;

    &::before {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }

  &::before {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    border: 1px solid #FF6633;
    border-radius: inherit;
    opacity: 0;
    transform: scale3d(0.6, 0.6, 1);
    transition: transform 0.3s, opacity 0.3s;
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);

    ${mq.m`
      border: 2px solid #FF6633;
      border-radius: 5px;
    `}
  }

  ${mq.m`
    border-radius: 5px;
    width: 7rem; // For IE and Edge who don't support the max-content prop.
    width: max-content;
  `}
  
  ${props => {
  if (props.isActive) {
    return `
        background-color: transparent;
        color: #FF6633;
    
        &::before {
          opacity: 1;
          transform: scale3d(1, 1, 1);
        }
      `;
  }
}}
`;

const ActiveLink = ({children, router, href}) => {
  const handleClick = (ev) => {
    ev.preventDefault();
    router.push(href);
  };

  return (
      <StyledA
          href={href}
          onClick={handleClick}
          onMouseEnter={() => router.prefetch(href)}
          isActive={router.pathname === href}>
        {children}
      </StyledA>
  );
};

export default withRouter(ActiveLink);