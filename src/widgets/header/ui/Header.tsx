import React from 'react'
import { NavLink } from 'react-router-dom';
import IconNotice from 'shared/assets/svg/IconNotice.svg';
import logoAdmin from 'shared/assets/svg/logoAdmin.svg';
import burger from 'shared/assets/svg/burger.svg';
import { Header as HeaderStyle } from '../styles/style';
import { HeaderLogos as HeaderLogos } from '../styles/style';
import { INotice as INotice } from '../styles/style';

const Header = () => {
  return (
    <HeaderStyle>
      <img src={burger} alt="burger" />
      <HeaderLogos>
        <INotice>
          <NavLink to='/'><img src={IconNotice} alt="iconNotice" /></NavLink>
        </INotice>
        <NavLink to='/'><img src={logoAdmin} alt="logAdmina" /></NavLink>
      </HeaderLogos>
    </HeaderStyle>
  )
}

export default Header
