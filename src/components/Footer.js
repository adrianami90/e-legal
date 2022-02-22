import React from 'react'
import { Link } from 'gatsby';

const Footer = () => (
    <footer className='page-footer'>
      <div className='container'>
        <div className='row row-40 justify-content-md-around justify-content-xl-start text-md-left'>
          <div className='col-xl-4 col-xxl-3 col-lg-5 col-md-7'><a href='index.html'><img
              className='brand-footer' src='images/logo-inverse-398x97.png' alt='' width='199'
              height='48'/><br/>
            <p>we will help anyone out</p></a>
            <p></p>
            <p className='text-gray-lighter'>Founded by Steven Pfeiffer, Lesley Dingle and Gerald
              Harrison back in 1989, today their Houston-based law firm is currently the #1 in
              both yearly cases dealt with and the percentage of all those cases being won.</p>
          </div>
          <div className='col-md-3 col-lg-2 col-xxl-3'>
            <h5>Навигация</h5>
            <ul className='list'>
              <li><Link to='/about-us'>За нас</Link></li>
              <li><Link to='/practice-areas'>Правни услуги</Link></li>
              <li><Link to='/blog'>Блог</Link></li>
              <li><Link to='/contacts'>Контакти</Link></li>
            </ul>
          </div>
          <div className='col-md-5 col-lg-4 col-xl-3'>
            <h5>Contact information</h5>
            <address>
              <p>4096 N Highland St, Arlington<br/>VA 32101, USA</p>
              <a href='mailto:#'>info@demolink.org</a>
              <ul className='list-inline list-inline-lg'>
                <li><a className='icon icon-white icon-xs fa-facebook' href='#'/></li>
                <li><a className='icon icon-white icon-xs fa-linkedin' href='#'/></li>
              </ul>
            </address>
          </div>
          <div className='col-md-5 col-xl-3 col-xxl-3 col-lg-3'>
            <h5>We are working on</h5>
            <div className='list-terms-footer'>
              <dl>
                <dt>Mon-Thu:</dt>
                <dd>9:30 - 21:00</dd>
              </dl>
              <dl>
                <dt>Fri:</dt>
                <dd>6:00 - 21:00</dd>
              </dl>
              <dl>
                <dt>Sat:</dt>
                <dd>10:00 - 15:00</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className='row text-center offset-top-55'>
          <div className='col-lg-12'>
            <p className='copyright'><span className='copyright-year'/>    &#169;    Advoza.
              All Rights Reserved<span className='divider-vertical'>|</span> <Link
                  to='/privacy-policy'>Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
)

export default Footer
