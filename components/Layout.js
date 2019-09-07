import React from 'react';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return(
      <div style={{ border:'solid 4px #CCCCCC', padding:20 }}>
        {children}
      </div>
    );
  }
}

export default Layout;