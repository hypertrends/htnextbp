import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Layout from '../components/Layout';
import theme from '../themes/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStructuredSelector } from 'reselect';
import { getTenantSettingsFromState } from '../redux/App/selectors';
import { loadTenantSettings } from '../redux/App/actions';
import { connect } from 'react-redux';

export default function withLayout(ComposedComponent) {

  class LayoutContainer extends React.Component {
    
    static async getInitialProps(ctx) {
      console.log("LAYOUT INIT PROPS");
      console.log("CTX", ctx);
      // Check if Page has a `getInitialProps`; if so, call it.
      if(ComposedComponent.getInitialProps) {
        const pageProps = await ComposedComponent.getInitialProps(ctx);
        console.log("DID I GET PROPS", pageProps);
        return { ...pageProps };
      }
    }

    constructor(props) {
      super(props);
    }

    componentDidMount () {
      console.log("PROPS IN LAYOUT", this.props);
      loadTenantSettings("121");
    }

    render() {
      return(
            <ComposedComponent {...this.props} />
      );
    }
  }

  const mapStateToProps = createStructuredSelector({
    tenant: getTenantSettingsFromState()
  })

  const mapDispatchToProps = (dispatch) => {
    return {
      loadTenantSettings: (tenantId) => dispatch(loadTenantSettings(tenantId)),
    }
  };

  return connect(mapStateToProps, mapDispatchToProps)(LayoutContainer); 


}
