import React from 'react';
import { connect } from 'react-redux';
import { loadTenantSettings } from '../redux/App/actions';
import { createStructuredSelector } from 'reselect';
import { getTenantSettingsFromState } from '../redux/App/selectors';
import Layout from '../components/Layout';

class LayoutContainer extends React.Component {

  static async getInitialProps (props) {
    console.log("LC INIT");
    const { loadTenantSettings } = props;
    loadTenantSettings("123");
  }

  render() {
    const { tenantSettings, children } = this.props;
    console.log("PROPS LC", this.props);
    return(
      <Layout tenantSettings={tenantSettings}>
        {children}
      </Layout>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  tenantSettings: getTenantSettingsFromState()
});

const mapDispatchToProps = (dispatch) => {
  return{
    loadTenantSettings: (tenantId) => dispatch(loadTenantSettings(tenantId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);