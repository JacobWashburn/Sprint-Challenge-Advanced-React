import React from 'react';
import {UseDarkMode} from '../Hooks/DarkMode';
import styled from 'styled-components';

const HeaderWrapper = styled.header`

`;

const Title = styled.h1`

`;

const ToggleWrapper = styled.div`
  background: papayawhip;
  border-radius: 50px;
  border: 1px solid black;
  height: 20px;
  position: relative;
  width: 40px;
  
  .toggled {
    left: 18px
  }
`;

const Toggle = styled.div`
  background: #f68819;
  border-radius: 50px;
  height: 18px;
  left: 0;
  position: absolute;
  transition: 0.2s;
  width: 20px;
`;

const Header = () => {
    const [darkMode, setDarkMode] = UseDarkMode();
    const changeToggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <HeaderWrapper className={darkMode ? 'header-dark-mode' : ''}>
            <Title>Women's World Cup Top Google Searches</Title>
            <ToggleWrapper onClick={changeToggleMode}>
                <Toggle className={darkMode ? 'toggle toggled' : 'toggle'}/>
            </ToggleWrapper>
        </HeaderWrapper>
    );
};

export default Header;