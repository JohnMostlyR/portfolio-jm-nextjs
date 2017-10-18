import React from 'react';
import {defineMessages} from 'react-intl';
import {Row, Column} from 'hedron';
import Parser from 'html-react-parser';

import {getContentFromContentful} from '../clients/contentful/';
import pageWithIntl from '../components/PageWithIntl';
import Layout from '../components/Layout';
import SpeechBubble from '../components/SpeechBubble';
import PageHeader from '../components/PageHeader';

const messages = defineMessages({
  title: {
    id: 'portfolio.page.about.title',
    defaultMessage: 'ABOUT ME',
  },
});

class About extends React.Component {
  static async getInitialProps() {
    const content = await getContentFromContentful({contentType: 'about', locale: '*'});

    return {
      content,
    };
  }

  render() {
    return (
        <Layout>
          <Row tagName={'div'}>
            <Column>
              <PageHeader title={this.props.intl.formatMessage(messages.title)} isLeftHanded/>
            </Column>
          </Row>
          <Row tagName={'div'}>
            <Column>
              <SpeechBubble>
                {Parser(this.props.content[this.props.intl.locale])}
              </SpeechBubble>
            </Column>
          </Row>
        </Layout>
    );
  }
}

export default pageWithIntl(About);
