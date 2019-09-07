import React from 'react';
import LanguageSelector from '../components/LanguageSelector';
import styled from 'styled-components';

class Header extends React.Component{

  render() {
    return(
      <HeaderDiv>
        <LanguageSelector />
      </HeaderDiv>
    );
  }

}

const HeaderDiv = styled.div`
  padding:10px;
  background-color:#333;
  color:#FFFFFF;
  min-height:40px;
`;

export default Header;