import React from 'react';

import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import PostItem from '../components/Posts/components/PostItem';
import PracticeAreaItem from '../components/PracticeArea/PracticeAreaItem';

const HomeIndex = ({
                       data: {
                           allMarkdownRemark: { edges },
                           practiceAreas
                       },
                   }) => {
    return (
        <Layout>
            <main className='page-content'>
                <section>
                    <div className='swiper2-container swiper-slider swiper-slider-1' data-height='39.0625%'
                         data-min-height='350px' data-simulate-touch='false' data-slide-effect='fade'>
                        <div className='swiper-wrapper text-center'>
                            <div className='swiper-slide' style={{ backgroundImage: `url('/images/slide-1.jpg')` }}>
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
                    </div>
                    s
                </section>
                <section className='section-50 section-sm-65 section-md-85 section-lg-115'>
                    <div className='container text-center'>
                        <h3>Our specialization</h3>
                        <h2>Practice areas</h2>

                        <div
                            className='row row-60 justify-content-sm-center row-xl offset-top-65 offset-md-top-80 offset-xl-top-95'>
                            <PracticeAreaItem item={{
                                ...practiceAreas.edges[0].node.frontmatter,
                                html: practiceAreas.edges[0].node.html
                            }}/>
                            <PracticeAreaItem item={{
                                ...practiceAreas.edges[1].node.frontmatter,
                                html: practiceAreas.edges[1].node.html
                            }}/>
                            <PracticeAreaItem item={{
                                ...practiceAreas.edges[2].node.frontmatter,
                                html: practiceAreas.edges[2].node.html
                            }}/>
                            <PracticeAreaItem item={{
                                ...practiceAreas.edges[3].node.frontmatter,
                                html: practiceAreas.edges[3].node.html
                            }}/>
                            <PracticeAreaItem item={{
                                ...practiceAreas.edges[0].node.frontmatter,
                                html: practiceAreas.edges[0].node.html
                            }}/>
                            <PracticeAreaItem item={{
                                ...practiceAreas.edges[1].node.frontmatter,
                                html: practiceAreas.edges[1].node.html
                            }}/>
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
                                <PostItem post={edges[0]}/>
                            </div>
                            <div className='col-sm-6 col-lg-4'>
                                <PostItem post={edges[1]}/>
                            </div>
                            <div className='col-sm-6 col-lg-4'>
                                <PostItem post={edges[2]}/>
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

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"  }}, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    practiceAreas: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/practice-areas/"  }}, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
          }
        }
      }
    }
  }
`;


export default HomeIndex;
