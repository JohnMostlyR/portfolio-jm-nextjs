import React from 'react';
import {defineMessages, injectIntl} from 'react-intl';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Wrapper = styled.div`
  padding-bottom: 1rem;
`;

const FormInfoItemsList = styled.ul`
  list-style: none;
`;

const messages = defineMessages({
  requirement_one: {
    id: 'portfolio.page.contact.requirement.one',
    defaultMessage: 'Please fill in all fields',
  },
});

const FormInfo = ({intl}) => (
    <Wrapper>
      <FormInfoItemsList>
        <li>
          <FontAwesome name="info-circle"/> <span>{intl.formatMessage(messages.requirement_one)}</span>
        </li>
      </FormInfoItemsList>
    </Wrapper>
);

export default injectIntl(FormInfo);