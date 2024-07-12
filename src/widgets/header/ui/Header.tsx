import React from 'react'
// import { NavLink } from 'react-router-dom';
// import IconNotice from 'shared/assets/svg/IconNotice.svg';
// import logoAdmin from 'shared/assets/svg/logoAdmin.svg';
import { Header as HeaderStyle } from '../styles/style';
// import { HeaderLogos as HeaderLogos } from '../styles/style';
// import { INotice as INotice } from '../styles/style';

const Header = () => {
  return (
    <HeaderStyle>
      <p>Admin</p>
      {/* <HeaderLogos>
        <INotice>
          <NavLink to='/'><img src={IconNotice} alt="iconNotice" /></NavLink>
        </INotice>
        <NavLink to='/'><img src={logoAdmin} alt="logAdmina" /></NavLink>
      </HeaderLogos> */}
      <p>Ф.И.О</p>
    </HeaderStyle>
  )
}

export default Header
