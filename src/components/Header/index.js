import React from 'react';

import BroMovie from '../../images/Bros-Movies.png';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.style';

// Same as doing arrow functions 
// function Header () {
// }
const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={BroMovie} alt='broMovie-logo'/>
        </Content>
    </Wrapper>
);

export default Header;