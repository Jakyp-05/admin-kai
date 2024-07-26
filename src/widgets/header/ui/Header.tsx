import React from 'react'
import { NavLink } from 'react-router-dom';
import IconNotice from 'shared/assets/svg/IconNotice.svg';
import logoAdmin from 'shared/assets/svg/logoAdmin.svg';
import Menu from 'shared/assets/svg/pepicons-pop_menu.svg';
import Setting from 'shared/assets/svg/setting_icon.svg';
import Search from 'shared/assets/svg/search.svg';


import { Header as HeaderStyle } from '../styles/style';
import { HeaderLogos as HeaderLogos } from '../styles/style';
import { HeaderIconsDiv as HeaderIconsDiv } from '../styles/style';
import { HeaderIconSearch as HeaderIconSearch } from '../styles/style';
import { HeaderSearch as HeaderSearch } from '../styles/style';
import { INotice as INotice } from '../styles/style';

const Header = () => {
  return (
    <HeaderStyle>
     
      <HeaderIconsDiv>
      <NavLink to="/"><img src={ Menu } alt="Menu" /></NavLink>
      <HeaderIconSearch>
      <NavLink to="/"><img src={Setting } alt="Setting" /></NavLink>
      <HeaderSearch>
      <input type="text" placeholder='Поиск' />      
      <img src={Search} alt="" />
      </HeaderSearch>
      </HeaderIconSearch>
      </HeaderIconsDiv>
    
      
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
