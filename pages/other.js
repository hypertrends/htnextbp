import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { startClock, tickClock } from '../redux/Home/actions';
import Page from '../components/page';

class Other extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));
    return { isServer };
  }

  componentDidMount () {
    this.props.dispatch(startClock());
  }

  render () {
    return (
      <div>
        <Helmet
          title='About | Hello next.js!'
          meta={[{ property: 'og:title', content: 'About' }]}
        />
        <Page title='Other Page' linkTo='/' NavigateTo='Index Page' />
      </div>
    )
  }
}

export default connect()(Other);
