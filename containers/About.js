import React from 'react';
import { connect } from 'react-redux';
import { loadAboutData } from '../redux/About/actions';
import withLayout from '../hocs/withLayout';
import { selectAboutDataFromState } from '../redux/About/selectors';
import { createStructuredSelector } from 'reselect';
import { Typography } from '@material-ui/core';

class About extends React.Component {
  
  constructor(props) {
    super(props);
  }


  static async getInitialProps(ctx) {
    console.log("ABOUNT INIT PROPS CTX");
    return { "oyehoy": { "oye" : "hello"} };
  }


  componentDidMount() {
    this.props.loadAboutData();
  }
  
  render(){
    const { about } = this.props;
    console.log("PROPS ABT", this.props);
    if(about === undefined) {
      return ('');
    }
    return(
      <div>
        <Typography variant="h1" component="h1" color="primary">About ! </Typography>
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

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(About));