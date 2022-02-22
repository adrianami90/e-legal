import React from 'react';
import { Link } from 'gatsby';
import $ from 'jquery';

const Header = () => {
    React.useEffect(() => {
        const rdNavBar = $('.rd-navbar');
        const isNoviBuilder = false;
        let navbar = rdNavBar, aliases = {
            '-': 0, '-sm-': 576, '-md-': 768, '-lg-': 992, '-xl-': 1200, '-xxl-': 1600
        }, responsive = {};

        for (let alias in aliases) {
            let link = responsive[aliases[alias]] = {};
            if (navbar.attr('data' + alias + 'layout')) link.layout = navbar.attr('data' + alias + 'layout');
            if (navbar.attr('data' + alias + 'device-layout')) link.deviceLayout = navbar.attr('data' + alias + 'device-layout');
            if (navbar.attr('data' + alias + 'hover-on')) link.focusOnHover = navbar.attr('data' + alias + 'hover-on') === 'true';
            if (navbar.attr('data' + alias + 'auto-height')) link.autoHeight = navbar.attr('data' + alias + 'auto-height') === 'true';
            if (navbar.attr('data' + alias + 'stick-up-offset')) link.stickUpOffset = navbar.attr('data' + alias + 'stick-up-offset');
            if (navbar.attr('data' + alias + 'stick-up')) link.stickUp = navbar.attr('data' + alias + 'stick-up') === 'true';
            if (isNoviBuilder) link.stickUp = false; else if (navbar.attr('data' + alias + 'stick-up')) link.stickUp = navbar.attr('data' + alias + 'stick-up') === 'true';
        }

        rdNavBar.RDNavbar({
            anchorNav: !isNoviBuilder,
            stickUpClone: (rdNavBar.attr('data-stick-up-clone') && !isNoviBuilder) ? rdNavBar.attr('data-stick-up-clone') === 'true' : false,
            responsive: responsive,
            callbacks: {
                onStuck: function () {
                    let navbarSearch = this.$element.find('.rd-search input');

                    if (navbarSearch) {
                        navbarSearch.val('').trigger('propertychange');
                    }
                }, onDropdownOver: function () {
                    return !isNoviBuilder;
                }, onUnstuck: function () {
                    if (this.$clone === null) return;

                    let navbarSearch = this.$clone.find('.rd-search input');

                    if (navbarSearch) {
                        navbarSearch.val('').trigger('propertychange');
                        navbarSearch.trigger('blur');
                    }

                }
            }
        });
    }, []);

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
                            <li><a className='icon icon-white icon-xs fa-facebook' href='#'/></li>
                            <li><a className='icon icon-white icon-xs fa-linkedin' href='#'/></li>
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
                    src='images/logo-default-398x97.png' alt='' width='199' height='48'/></Link>
                    <div className='rd-navbar-nav-wrap'>
                        <ul className='navbar-navigation rd-navbar-nav'>
                            <li className={`navbar-navigation-root-item ${window.location.pathname === '/' && 'active'}`}>
                                <Link
                                    className='navbar-navigation-root-link' to='/'>Начало</Link>
                            </li>
                            <li className={`navbar-navigation-root-item ${window.location.pathname === '/about-us' && 'active'}`}><Link className='navbar-navigation-root-link'
                                                                              to='/about-us'>За нас</Link>
                            </li>
                            <li className={`navbar-navigation-root-item ${window.location.pathname === '/practice-areas' && 'active'}`}><Link className='navbar-navigation-root-link'
                                                                              to='/practice-areas'>Правни услуги</Link>
                            </li>
                            <li className={`navbar-navigation-root-item ${window.location.pathname === '/posts' && 'active'}`}><Link className='navbar-navigation-root-link'
                                                                              to='/posts'>Блог</Link>
                            </li>
                            <li className={`navbar-navigation-root-item ${window.location.pathname === '/contacts' && 'active'}`}><Link className='navbar-navigation-root-link'
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
