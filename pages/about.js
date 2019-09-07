import React from 'react';
import { connect } from 'react-redux';
import { loadAboutData } from '../redux/About/actions';
import { selectAboutDataFromState } from '../redux/About/selectors';
import { createStructuredSelector } from 'reselect';
import { Typography } from '@material-ui/core';
import Helmet from 'react-helmet';
import { i18n, withTranslation } from '../i18n';

class About extends React.Component {
  
  constructor(props) {
    super(props);
  }

  static async getInitialProps(props) {
    const req = props.ctx.req;
    const currentLanguage = req ? req.language : i18n.language;
    return { "oyehoy": { "oye" : "hello"}, namespacesRequired: ['common', 'about'] };
  }


  componentDidMount() {
    this.props.loadAboutData();
  }
  
  render(){
    const { about, t } = this.props;
    if(about === undefined) {
      return ('');
    }
    return(
      <div>
        <Helmet
          title={t('title')}
          meta={
            [
              { property: 'og:title', content: 'About' }
            ] 
          }
        />
        <Typography variant="h1" component="h1" color="primary">{t('title')}</Typography>
        <Typography variant="h2" component="h2" color="secondary">{about.aboutMe}</Typography>
      </div> 
    );
  }

}

const mapStateToProps = createStructuredSelector({
  about: selectAboutDataFromState(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadAboutData: () => dispatch(loadAboutData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('about')(About));