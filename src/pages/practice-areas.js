import React from 'react';

import Layout from '../components/layout';

const HomeIndex = () => {
    return (
        <Layout>
            <main className="page-content">
                <section><img className="img-responsive" src="images/practice-areas-01-1920x750.jpg" alt=""
                              style={{width: '100%'}}/></section>
                <section className="section-50 section-sm-65 section-md-85 section-lg-95 section-xl-115 bg-transparent">
                    <div className="container text-center">
                        <h3>Our specialization</h3>
                        <h2>Practice areas</h2>
                        <div className="row row-60 justify-content-sm-center row-xl offset-top-80 offset-xl-top-95">
                            <div className="col-lg-5 col-md-6 col-xxl-4 col-xl-4 wow fadeIn">
                                <div className="box-info">
                                    <div className="box-info-content"><span
                                        className="icon icon-xl icon-primary fl-fill-round-icons-attachment12"/>
                                        <h4><a href="#">Labor &amp; Employment Law</a></h4>
                                        <p>We'll be glad to deal with any kind of employment litigation issues, such as
                                            unlawful termination, wage hack or discrimination of any kind, which you
                                            might have...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-xxl-4 col-xl-4 wow fadeIn">
                                <div className="box-info">
                                    <div className="box-info-content"><span
                                        className="icon icon-xl icon-primary fl-fill-round-icons-home131"/>
                                        <h4><a href="#">Real Estate Law</a></h4>
                                        <p>The real property market nuances and the laws regulating it (such as estate
                                            taxing, e.g.) are one of our biggest fields of work. We will be protecting
                                            your best interest whatever the...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-xxl-4 col-xl-4 wow fadeIn">
                                <div className="box-info">
                                    <div className="box-info-content"><span
                                        className="icon icon-xl icon-primary fl-fill-round-icons-persons11"/>
                                        <h4><a href="#">Personal Injury</a></h4>
                                        <p>We're working with personal injuries, which are basically minor wrongful
                                            conduct torts, thus being out of the criminal hearings reach. We will become
                                            your defenders in any...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-xxl-4 col-xl-4 wow fadeIn">
                                <div className="box-info">
                                    <div className="box-info-content"><span
                                        className="icon icon-xl icon-primary fl-fill-round-icons-compass78"/>
                                        <h4><a href="#">Insurance Law</a></h4>
                                        <p>The insurance marketplace has a lot of restrictions and limitations, which
                                            the insurance companies oftentimes try to use as the loopholes for getting
                                            away with..</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-xxl-4 col-xl-4 wow fadeIn">
                                <div className="box-info">
                                    <div className="box-info-content"><span
                                        className="icon icon-xl icon-primary fl-fill-round-icons-star150"/>
                                        <h4><a href="#">Business Litigation</a></h4>
                                        <p>The field of commercially related litigation spans everything that your
                                            company might be suing others for or be sued by others against. We will make
                                            sure, that all the details... </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-xxl-4 col-xl-4 wow fadeIn">
                                <div className="box-info">
                                    <div className="box-info-content"><span
                                        className="icon icon-xl icon-primary fl-fill-round-icons-infinite5"/>
                                        <h4><a href="#">Mergers &amp; Acquisitions</a></h4>
                                        <p>The commercial world of mergers &amp; acquisitions is a harsh one. You'd
                                            better have a just as harsh team of sharky lawyers so that your business
                                            emerges as the winner...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-50 section-sm-70 section-md-90 section-xl-115 bg-transparent">
                    <div className="container text-center">
                        <h3>Request a consultation</h3>
                        <h2>Ask our attorneys</h2>
                        <p className="offset-top-30 rd-mailform-middle">Would you like to speak to one of our lawyers?
                            Just submit your contact details and we’ll be in touch shortly. You can also email us if you
                            prefer that type of communication.</p>
                        <form className="rd-mailform text-center rd-mailform-middle offset-top-30"
                              data-form-output="form-output-global" data-form-type="contact" method="post"
                              >
                            <div className="form-wrap">
                                <select className="form-input select-filter" data-placeholder="choose your subject"
                                        data-minimum-results-for-search="Infinity" data-constraints="@Required">
                                    <option value="">not</option>
                                    <option value="2">Human resources planning</option>
                                    <option value="3">Business plan consulting</option>
                                    <option value="4">Exit planning</option>
                                    <option value="5">Interim managers</option>
                                    <option value="6">Strategic planning</option>
                                    <option value="7">Market research</option>
                                    <option value="8">Conflict Management</option>
                                    <option value="9">Governance</option>
                                    <option value="10">Mergers</option>
                                    <option value="11">Acquisitions</option>
                                    <option value="12">Other</option>
                                </select>
                            </div>
                            <div className="form-wrap">
                                <label className="form-label" htmlFor="contact-email-form">your e-mail</label>
                                <input className="form-input" id="contact-email-form" type="email" name="email"
                                       data-constraints="@Email @Required"/>
                            </div>
                            <div className="form-wrap">
                                <label className="form-label" htmlFor="contact-message">Message</label>
                                <textarea className="form-input" id="contact-message" name="message"
                                          data-constraints="@Required"/>
                            </div>
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </form>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default HomeIndex;
