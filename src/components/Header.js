import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

const Header = () => {
    const location = useLocation();

    function isLocationActive(locationName) {
        return location.pathname === locationName || location.pathname === locationName + '/' ? 'active' : '';
    }

    return <header className='page-head'>
        <div className='rd-navbar-wrap'>
            <nav className='rd-navbar' data-layout='rd-navbar-fixed' data-sm-layout='rd-navbar-fixed'
                 data-sm-device-layout='rd-navbar-fixed' data-md-layout='rd-navbar-fixed'
                 data-md-device-layout='rd-navbar-fixed' data-lg-layout='rd-navbar-static'
                 data-lg-device-layout='rd-navbar-static' data-xl-layout='rd-navbar-static'
                 data-xl-device-layout='rd-navbar-static' data-xxl-layout='rd-navbar-static'
                 data-xxl-device-layout='rd-navbar-static' data-lg-stick-up-offset='261px'>
                <div className='rd-navbar-inner rd-navbar-inner-top'>
                    <div className='rd-navbar-panel'>
                        <button className='rd-navbar-toggle' data-rd-navbar-toggle='.rd-navbar-nav-wrap'><span/>
                        </button>
                        <button className='rd-navbar-collapse-toggle' data-rd-navbar-toggle='.rd-navbar-panel-aside'>
                            <span/></button>
                        <div className='rd-navbar-brand'><Link className='brand-name' to='/'>Advoza</Link></div>
                        <div className='rd-navbar-collapse-items'><span
                            className='icon material-design-write20 icon-xs-big icon-primary'/><a
                            href='mailto:#'>info@demolink.org</a></div>
                        <div className='rd-navbar-call'><span
                            className='icon icon-sm icon-rounded material-icons-local_phone icon-primary'/><a
                            href='tel:#'>800-2345-6789</a><Link to='contacts'>
                            Свържи се за безплатна първа консултация</Link>
                        </div>
                    </div>
                    <div className='rd-navbar-panel-aside'>
                        <ul className='list-inline list-inline-lg'>
                            <li><a className='icon icon-white icon-xs fa-facebook' href='https://facebook.com'
                                   aria-label={'facebook'}/></li>
                            <li><a className='icon icon-white icon-xs fa-linkedin' href='https://linkedin.com'
                                   aria-label={'linkedin'}/></li>
                        </ul>
                        <div className='rd-navbar-search'><a className='rd-navbar-search-toggle'
                                                             data-rd-navbar-toggle='.rd-navbar-search'
                                                             href='#'><span/></a>
                        </div>
                        <a href='tel:#'>800-2345-6789</a>
                        <Link className='fixed-link' to='contacts'>Request a Callback</Link>
                        <a href='mailto:#'>info@demolink.org</a>
                    </div>
                </div>
                <div className='rd-navbar-inner rd-navbar-inner-bottom'><Link className='brand-name' to='/'><img
                    src='/images/logo-default-398x97.png' alt='' width='199' height='48'/></Link>
                    <div className='rd-navbar-nav-wrap'>
                        <ul className='navbar-navigation rd-navbar-nav'>
                            <li className={`navbar-navigation-root-item ${isLocationActive('/')}`}>
                                <Link
                                    className='navbar-navigation-root-link' to='/'>Начало</Link>
                            </li>
                            <li className={`navbar-navigation-root-item ${isLocationActive('/about-us')}`}>
                                <Link className='navbar-navigation-root-link'
                                      to='/about-us'>За нас</Link>
                            </li>
                            <li className={`navbar-navigation-root-item ${isLocationActive('/practice-areas')}`}>
                                <Link className='navbar-navigation-root-link'
                                      to='/practice-areas'>Правни услуги</Link>
                            </li>
                            <li className={`navbar-navigation-root-item ${isLocationActive('/posts')}`}>
                                <Link className='navbar-navigation-root-link'
                                      to='/posts'>Блог</Link>
                            </li>
                            <li className={`navbar-navigation-root-item ${isLocationActive('/contacts')}`}>
                                <Link className='navbar-navigation-root-link'
                                      to='/contacts'>Контакти</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>;
};

export default Header;
