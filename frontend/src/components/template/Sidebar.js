import React from 'react';
// import Data from '../..';
import LogoColor from '../../app-assets/images/logo/materialize-logo-color.png';
import MateliarLogo from '../../app-assets/images/logo/materialize-logo.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square">
            <div className="brand-sidebar">
                <h1 className="logo-wrapper">
                    <a className="brand-logo darken-1" href="index.html">
                        <img className="hide-on-med-and-down" src={LogoColor} alt="materialize logo" />
                        <img className="show-on-medium-and-down hide-on-med-and-up" src={MateliarLogo} alt="materialize logo" />
                        <span className="logo-text hide-on-med-and-down">Steam</span></a><a className="navbar-toggler" href="#"><i className="material-icons">radio_button_checked</i>
                    </a>
                </h1>
            </div>
            <ul className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow" id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion">
                <li className="bold active open">
                    <a className="collapsible-header waves-effect waves-cyan" href="#">
                        <i className="material-icons">pages</i><span className="menu-title" data-i18n="Pages">Pages</span>
                    </a>
                    <div className="collapsible-body display-block">
                        <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                            <li className="active">
                                <Link className="waves-effect waves-cyan" to="dlc">
                                    <i className="material-icons">radio_button_unchecked</i><span data-i18n="Page Blank">Tabel Dlc</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                            <li className="active">
                                <a className="waves-effect waves-cyan " href="page-blank.html">
                                    <i className="material-icons">radio_button_unchecked</i><span data-i18n="Page Blank">Tabel Game</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                            <li className="active">
                                <a className="waves-effect waves-cyan " href="page-blank.html">
                                    <i className="material-icons">radio_button_unchecked</i><span data-i18n="Page Blank">Tabel Pengembang</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div className="navigation-background"></div><a className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only" href="#" data-target="slide-out"><i className="material-icons">menu</i></a>
        </aside>
    );
};

export default Sidebar;