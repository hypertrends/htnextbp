import Document, { Head, Main, NextScript } from 'next/document';
import Helmet from 'react-helmet';
import { ServerStyleSheets } from '@material-ui/styles';
import { ServerStyleSheet } from 'styled-components';
import theme from '../themes/theme';

export default class extends Document {

  static async getInitialProps (ctx) {
    const sheets = new ServerStyleSheets();
    const styledComponentsSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => styledComponentsSheet.collectStyles(sheets.collect(<App {...props} />))
      });
  
      const documentProps = await super.getInitialProps(ctx);
      // see https://github.com/nfl/react-helmet#server-usage for more information
      // 'head' was occupied by 'renderPage().head', we cannot use it
      return { 
        ...documentProps, 
        helmet: Helmet.renderStatic(),
        styles: [
          <React.Fragment key="styles">
            {documentProps.styles}
            {sheets.getStyleElement()}
            {styledComponentsSheet.getStyleElement()}
          </React.Fragment>
        ],
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }

  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent();
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent());
  }

  render() {
    return (
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
          {this.helmetHeadComponents}
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}