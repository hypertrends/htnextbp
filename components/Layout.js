import React from 'react';
import Header from '../components/Header';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return(
      <div>
        <Header />
        {children}
      </div>
    );
  }
}

export default Layout;