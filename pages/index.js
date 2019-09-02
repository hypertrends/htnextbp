import React from 'react';
import { connect } from 'react-redux';
import { loadData, startClock, tickClock } from '../redux/Home/actions';
import Page from '../components/page';
import Helmet from 'react-helmet';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

class Index extends React.Component {

  static async getInitialProps (props) {
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));
    if (!store.getState().placeholderData) {
      store.dispatch(loadData());
    }
    return { isServer };
  }

  componentDidMount () {
    this.props.startClock();
  }

  render () {
    return (
      <div>
        <Helmet
          title='WELCOME | Hello next.js!'
          meta={
            [
              { property: 'og:title', content: 'About' }
            ] 
          }
        />
        <StyledDiv>
          <Typography variant="body1">
            Hello World! THIS IS A STYLED DIV
          </Typography>
        </StyledDiv>
        <Typography variant="h2" component="h1" color="secondary">
          Hello & Welcome!!
        </Typography>
        <Page title='Index Page' linkTo='/other' NavigateTo='Other Page' />
      </div>
    )
  }
}

const StyledDiv = styled.div`
  background-color:#FF0000;
  color:#FFFFFF;
  font-size:20rem;
  padding:20px;
`;

const mapStateToProps = (state) => ({
  count: state.home.count,
});

const mapDispatchToProps = (dispatch) => {
  return{
    startClock: () => dispatch(startClock()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
