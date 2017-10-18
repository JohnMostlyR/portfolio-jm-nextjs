import React from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import {Router} from '../../routes';
import mq from '../../styles/templates/mediaQueries';
import ActiveLink from '../../components/ActiveLink';

const StyledUL = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;

  ${mq.m`justify-content: flex-start;`}
`;

const StyledLI = styled.li`
  vertical-align: middle;

  ${mq.m`margin-top: 2vw;`}

  &:not(:first-child) {
    ${mq.m`margin-left: 1vh;`}
  }
`;

const SiteNavigationIcon = styled(FontAwesome)`
  display: none !important;

  ${mq.m`
    display: inherit !important;
    transform: rotate(-90deg);
    margin: 0;
  `}
`;

const Description = styled.span`
  ${mq.m`margin-left: .5rem;`}

  @media all and (orientation: landscape) and (min-width: 37.5em) {
    display: none;
  }

  @media all and (orientation: landscape) and (min-height: 37.5em) {
    display: inline;
  }
`;

const NavigationItems = (props) => (
    <StyledUL>
      <StyledLI>
        <ActiveLink href={'/'}>
          <SiteNavigationIcon name={'home'} fixedWidth/>
          <Description>
            <FormattedMessage id='portfolio.nav.home'
                              defaultMessage='Home'
            />
          </Description>
        </ActiveLink>
      </StyledLI>
      <StyledLI>
        <ActiveLink href={'/about'}>
          <SiteNavigationIcon name={'address-card'} fixedWidth/>
          <Description>
            <FormattedMessage id='portfolio.nav.about'
                              defaultMessage='About'
            />
          </Description>
        </ActiveLink>
      </StyledLI>
      <StyledLI>
        <ActiveLink href={'/skills'}>
          <SiteNavigationIcon name={'code'} fixedWidth/>
          <Description>
            <FormattedMessage id='portfolio.nav.skills'
                              defaultMessage='Skills'
            />
          </Description>
        </ActiveLink>
      </StyledLI>
      <StyledLI>
        <ActiveLink href={'/projects'}>
          <SiteNavigationIcon name={'list'} fixedWidth/>
          <Description>
            <FormattedMessage id='portfolio.nav.projects'
                              defaultMessage='Projects'
            />
          </Description>
        </ActiveLink>
      </StyledLI>
      <StyledLI>
        <ActiveLink href={'/contact'}>
          <SiteNavigationIcon name={'send'} fixedWidth/>
          <Description>
            <FormattedMessage id='portfolio.nav.contact'
                              defaultMessage='Contact'
            />
          </Description>
        </ActiveLink>
      </StyledLI>
    </StyledUL>
);

export default injectIntl(NavigationItems);
