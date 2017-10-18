import React from 'react';
import {defineMessages} from 'react-intl';
import {Page, Row, Column} from 'hedron';

import pageWithIntl from '../components/PageWithIntl';
import Layout from '../components/Layout';
import SpeechBubble from '../components/SpeechBubble';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

const messages = defineMessages({
  title: {
    id: 'portfolio.page.contact.title',
    defaultMessage: 'CONTACT ME',
  },
});

export default pageWithIntl(({intl}) => (
    <Layout>
      <Row tagName={'div'}>
        <Column>
          <PageHeader title={intl.formatMessage(messages.title)} isLeftHanded/>
        </Column>
      </Row>
      <Row tagName={'div'}>
        <Column>
          <SpeechBubble>
            <ContactForm/>
          </SpeechBubble>
        </Column>
      </Row>
    </Layout>
));
