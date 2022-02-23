import React from 'react';

import Header from './Header';
import Helmet from 'react-helmet';
import Footer from './Footer';
// import '../assets/css/bootstrap.css';
// import '../assets/css/fonts.css';
// import '../assets/css/style.css';

const Template = ({ children }) => {
    return <div className='page text-center text-md-left animated'>
        <Helmet>
            <title>E-Legal</title>
            <link rel='icon' href='/images/favicon.ico' type='image/x-icon'/>
            <link rel='stylesheet' href='/css/bootstrap.css'/>
            <link rel='stylesheet' href='/css/fonts.css'/>
            <link rel='stylesheet' href='/css/style.css'/>
            <meta name='format-detection' content='telephone=no'/>
            <meta name='viewport'
                  content='width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
            <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
            <meta charSet='utf-8'/>
            <link rel='stylesheet' type='text/css'
                  href='//fonts.googleapis.com/css?family=Droid+Serif:400,400i,700,700i%7CMerriweather:300'/>
        </Helmet>
        <Header/>
        {children}
        <div className='preloader loaded'>
            <div className='preloader-body'>
                <div className='cssload-container'>
                    <div className='cssload-speeding-wheel'/>
                </div>
                <p>Loading...</p>
            </div>
        </div>
        <div className='snackbars' id='form-output-global'/>
        <Footer/>
    </div>;
};

export default Template;
