import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);
    const {req: {locale, localeDataScript}} = context;
    const sheet = new ServerStyleSheet();
    const page = context.renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return {...page, styleTags, ...props, locale, localeDataScript};
  }

  render() {
    // Polyfill Intl API for older browsers
    const lang = this.props.locale.split('-')[0];
    const polyfill = `https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.${lang}`;

    return (
        <html lang={this.props.locale}>
          <Head>
            {/* ... */}

            {this.props.styleTags}
          </Head>

          <body>
            <div className="root">
              <Main/>
            </div>
            <script src={polyfill} />
            <script
              dangerouslySetInnerHTML={{
                __html: this.props.localeDataScript
              }}
            />
            <NextScript/>
          </body>
        </html>
    );
  }
}