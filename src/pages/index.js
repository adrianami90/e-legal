import React from 'react';

import Layout from '../components/layout';
import { Link } from 'gatsby';

const HomeIndex = () => {
    return (
        <Layout>
            <main className='page-content'>
                <section>
                    <div className='swiper2-container swiper-slider swiper-slider-1' data-height='39.0625%'
                         data-min-height='350px' data-simulate-touch='false' data-slide-effect='fade'>
                        <div className='swiper-wrapper text-center'>
                            <div className='swiper-slide' style={{backgroundImage: `url('/images/slide-1.jpg')`}}>
                                <div className='swiper-slide-caption section-50 section-md-70 section-xl-140'>
                                    <div className='container'>
                                        <div className='row justify-content-sm-center'>
                                            <div className='col-xxl-7 col-lg-11 col-xl-9'>
                                                <h1 data-caption-animate='fadeInDown'
                                                    data-caption-delay='300'>An <span className='font-weight-bold'>Affordable Legal</span> Help
                                                </h1>
                                                <p data-caption-animate='fadeInDown' data-caption-delay='450'>We're
                                                    proud that our law firm offers top-notch legal services for a
                                                    nationwide affordable pricing! With us you'll never feel like
                                                    the lawyers are just robbers in suits, besides, we win 98% of
                                                    all cases. So with us, your chances of winning are as high as
                                                    they possibly can be!</p><Link className='btn btn-primary'
                                                                                to='/about-us'
                                                                                data-caption-animate='fadeInDown'
                                                                                data-caption-delay='650'>Read
                                                more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>s
                </section>
                <section className='section-50 section-sm-65 section-md-85 section-lg-115'>
                    <div className='container text-center'>
                        <h3>Our specialization</h3>
                        <h2>Practice areas</h2>
                        <div
                            className='row row-60 justify-content-sm-center row-xl offset-top-65 offset-md-top-80 offset-xl-top-95'>
                            <div className='col-lg-5 col-md-6 col-xxl-4 col-xl-4'>
                                <div className='box-info'>
                                    <div className='box-info-content'><span
                                        className='icon icon-xl icon-primary fl-fill-round-icons-attachment12'/>
                                        <h4><a href='#'>Labor &amp; Employment Law</a></h4>
                                        <p>We'll be glad to deal with any kind of employment litigation issues, such
                                            as unlawful termination, wage hack or discrimination of any kind, which
                                            you might have...</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-6 col-xxl-4 col-xl-4'>
                                <div className='box-info'>
                                    <div className='box-info-content'><span
                                        className='icon icon-xl icon-primary fl-fill-round-icons-home131'></span>
                                        <h4><a href='#'>Real Estate Law</a></h4>
                                        <p>The real property market nuances and the laws regulating it (such as
                                            estate taxing, e.g.) are one of our biggest fields of work. We will be
                                            protecting your best interest whatever the...</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-6 col-xxl-4 col-xl-4'>
                                <div className='box-info'>
                                    <div className='box-info-content'><span
                                        className='icon icon-xl icon-primary fl-fill-round-icons-persons11'></span>
                                        <h4><a href='#'>Personal Injury</a></h4>
                                        <p>We're working with personal injuries, which are basically minor wrongful
                                            conduct torts, thus being out of the criminal hearings reach. We will
                                            become your defenders in any...</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-6 col-xxl-4 col-xl-4'>
                                <div className='box-info'>
                                    <div className='box-info-content'><span
                                        className='icon icon-xl icon-primary fl-fill-round-icons-compass78'></span>
                                        <h4><a href='#'>Insurance Law</a></h4>
                                        <p>The insurance marketplace has a lot of restrictions and limitations,
                                            which the insurance companies oftentimes try to use as the loopholes for
                                            getting away with..</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-6 col-xxl-4 col-xl-4'>
                                <div className='box-info'>
                                    <div className='box-info-content'><span
                                        className='icon icon-xl icon-primary fl-fill-round-icons-star150'></span>
                                        <h4><a href='#'>Business Litigation</a></h4>
                                        <p>The field of commercially related litigation spans everything that your
                                            company might be suing others for or be sued by others against. We will
                                            make sure, that all the details... </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-6 col-xxl-4 col-xl-4'>
                                <div className='box-info'>
                                    <div className='box-info-content'><span
                                        className='icon icon-xl icon-primary fl-fill-round-icons-infinite5'></span>
                                        <h4><a href='#'>Mergers &amp; Acquisitions</a></h4>
                                        <p>The commercial world of mergers &amp; acquisitions is a harsh one. You'd
                                            better have a just as harsh team of sharky lawyers so that your business
                                            emerges as the winner...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link className='btn btn-primary' to='/practice-areas'>View more</Link>
                    </div>
                </section>
                <section className='section-50 section-sm-65 section-md-85 section-xl-115 bg-gray-darker'>
                    <div className='container text-center'>
                        <h3>Latest news</h3>
                        <h2>The most recent info</h2>
                        <div className='row row-50 justify-content-sm-center'>
                            <div className='col-sm-6 col-lg-4'>
                                <article className='post post-classic'>
                                    <div className='post-header'><a href='single-post.html'><img
                                        className='img-responsive' src='images/home-01-536x282.jpg' alt=''
                                        width='536' height='282'/></a></div>
                                    <div className='post-meta'>
                                        <time dateTime='2020-08-12'>18.05.2020</time>
                                        <span className='divider-vertical'>|</span> <span>by</span> <a
                                        href='single-post.html'>admin</a>
                                    </div>
                                    <div className='post-title'>
                                        <h4><a href='single-post.html'>Can you be fined with $1600 for missing a
                                            license plate decal?</a></h4>
                                    </div>
                                    <a className='btn btn-primary' href='single-post.html'>Read more</a>
                                </article>
                            </div>
                            <div className='col-sm-6 col-lg-4'>
                                <article className='post post-classic'>
                                    <div className='post-header'><a href='single-post.html'><img
                                        className='img-responsive' src='images/home-02-536x282.jpg' alt=''
                                        width='536' height='282'/></a></div>
                                    <div className='post-meta'>
                                        <time dateTime='2020-08-12'>17.05.2020</time>
                                        <span className='divider-vertical'>|</span> <span>by</span> <a
                                        href='single-post.html'>admin</a>
                                    </div>
                                    <div className='post-title'>
                                        <h4><a href='single-post.html'>2020 Texas businesses and private employment
                                            law update</a></h4>
                                    </div>
                                    <a className='btn btn-primary' href='single-post.html'>Read more</a>
                                </article>
                            </div>
                            <div className='col-sm-6 col-lg-4'>
                                <article className='post post-classic'>
                                    <div className='post-header'><a href='single-post.html'><img
                                        className='img-responsive' src='images/home-03-536x282.jpg' alt=''
                                        width='536' height='282'/></a></div>
                                    <div className='post-meta'>
                                        <time dateTime='2020-08-12'>17.05.2020</time>
                                        <span className='divider-vertical'>|</span> <span>by</span> <a
                                        href='single-post.html'>admin</a>
                                    </div>
                                    <div className='post-title'>
                                        <h4><a href='single-post.html'>What the federal legal consequences of
                                            Florida's shooting wlll be?</a></h4>
                                    </div>
                                    <a className='btn btn-primary' href='single-post.html'>Read more</a>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-50 section-sm-65 section-md-85 section-xl-115'>
                    <div className='container text-center'>
                        <h3>Request a consultation</h3>
                        <h2>Ask our attorneys</h2>
                        <div className='row justify-content-md-center row-md'>
                            <div className='col-lg-10 col-xl-8 col-xxl-6'>
                                <p>Would you like to speak to one of our lawyers? Just submit your contact details
                                    and we’ll be in touch shortly. You can also email us if you prefer that type of
                                    communication.</p>
                                <h6>I would like to discuss</h6>
                                <form className='rd-mailform text-center' data-form-output='form-output-global'
                                      data-form-type='contact' method='post'>
                                    <div className='form-wrap'>
                                        <label className='form-label' htmlFor='contact-subject'>Your subject</label>
                                        <input className='form-input' id='contact-subject' type='text'
                                               name='subject' data-constraints='@Required'/>
                                    </div>
                                    <div className='form-wrap'>
                                        <label className='form-label' htmlFor='contact-name'>Your name</label>
                                        <input className='form-input' id='contact-name' type='text' name='name'
                                               data-constraints='@Required'/>
                                    </div>
                                    <div className='form-wrap'>
                                        <label className='form-label' htmlFor='contact-email'>Your e-mail</label>
                                        <input className='form-input' id='contact-email' type='email' name='email'
                                               data-constraints='@Email @Required'/>
                                    </div>
                                    <button className='btn btn-primary' type='submit'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default HomeIndex;
