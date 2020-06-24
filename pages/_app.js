import App from 'next/app';
import { appWithTranslation } from '../i18n';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '../redux/store';
import { ThemeProvider } from '@material-ui/styles';
import Layout from '../components/Layout';
import theme from '../themes/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/sass/style.scss';

class MyApp extends App {

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    const tenant = { "id" : 1, "name" : "Tenant1"};
    return { pageProps, tenant };
  }

  render () {
    const { Component, pageProps, store, tenant } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout>
            <CssBaseline />
            <Component {...pageProps} tenant={tenant} />
          </Layout>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(appWithTranslation(MyApp)))
