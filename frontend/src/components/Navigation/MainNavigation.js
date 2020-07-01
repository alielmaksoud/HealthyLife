import React from 'react';
import {NavLink} from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import './MainNavigation.css';

const mainNavigation = props => (
    <AuthContext.Consumer>
        {(context)=>{
            return(
                <header className="main-navigation">
                    <div className="main-navigation__logo">
                        <h1>Yaşam Asistanım</h1>
                    </div>
                    <nav className="main-navigation__items">
                        <ul>
                            {!context.token && (<li>
                                <NavLink to="/auth">Kayıt Ol</NavLink>
                            </li> )}
                            <li>
                                <NavLink to="/events">
                                    
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/homepage">Anasayfa</NavLink>
                            </li>
                            <li>
                                <NavLink to="/calculations">Hesaplamalar</NavLink>
                            </li>
                            <li>
                                <NavLink to="/kacKalori">Kaç Kalori</NavLink>
                            </li>

                            {context.token && (
                                <React.Fragment>

                                    <li>
                                        <NavLink to="/suTakip">Su Takipçisi</NavLink>
                                    </li>  
                                    <li>
                                        <NavLink to="/kaloriTakip">Kalori Takip</NavLink>
                                    </li>                          
                                    <li>
                                        <NavLink to="/bookings"></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/profile">Profil</NavLink>
                                    </li>
                                    
                                    <li>
                                        <button onClick={context.logout}>Çıkış Yap</button>
                                    </li>
                                </React.Fragment> 
                            )}
                        </ul>
                    </nav>
                </header>

            );            

        }}
    </AuthContext.Consumer>
  );

export default mainNavigation;