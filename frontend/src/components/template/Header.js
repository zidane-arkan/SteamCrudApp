import React from 'react';

const Header = () => {
    return (
        <header className="page-topbar" id = "header">
            <div className="navbar navbar-fixed">
                <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-indigo-purple no-shadow">
                    <div className="nav-wrapper">
                        <div className="header-search-wrapper hide-on-med-and-down"><i className="material-icons">search</i>
                            <input className="header-search-input z-depth-2" type="text" name="Search" placeholder="Explore Steam" data-search="template-list" />
                            <ul className="search-list collection display-none"></ul>
                        </div>
                        <ul className="navbar-list right">
                            <li className="hide-on-med-and-down"><a className="waves-effect waves-block waves-light toggle-fullscreen" href="javascript:void(0);"><i className="material-icons">settings_overscan</i></a></li>
                            <li className="hide-on-large-only search-input-wrapper"><a className="waves-effect waves-block waves-light search-button" href="javascript:void(0);"><i className="material-icons">search</i></a></li>
                            <li><a className="waves-effect waves-block waves-light notification-button" href="javascript:void(0);" data-target="notifications-dropdown"><i className="material-icons">notifications_none<small className="notification-badge">5</small></i></a></li>
                            {/* <li><a className="waves-effect waves-block waves-light sidenav-trigger" href="#" data-target="slide-out-right"><i className="material-icons">format_indent_increase</i></a></li> */}
                        </ul>
                    </div>
                </nav>
            </div>
      </header >
    );
};

export default Header;