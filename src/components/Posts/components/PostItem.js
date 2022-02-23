import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const PostItem = ({ post }) => {
    let featuredImgFluid = post.node.frontmatter.featuredImage.childImageSharp.fluid;

    return <article className='news-post news-post-reverse' key={post.node.id}>
        <div className='news-post-header'>
            <Link className='news-post-media' to={post.node.frontmatter.path}>
                <Img className='img-responsive' fluid={featuredImgFluid} style={{ width: 640, height: 506 }}/>
            </Link>
            <ul className='label-list'>
                <li><Link className='label-custom' to={post.node.frontmatter.path}>Mergers & Acquisitions</Link></li>
            </ul>
        </div>
        <div className='news-post-body'>
            <h4><Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></h4>
            <p>{post.node.frontmatter.description}</p>
            <Link
                className='btn btn-primary' to={post.node.frontmatter.path}>Read more</Link>
            <ul className='list-inline offset-top-30 offset-xl-top-80'>
                <li><a className='h6 text-regular' href='#'>
                    <time dateTime='2020'>{post.node.frontmatter.date}</time>
                </a></li>
                <li>
                    <p className='h6 text-regular text-content'>by <a
                        className='text-content' href='single-post.html'>admin</a>
                    </p>
                </li>
            </ul>
        </div>
    </article>;
};

PostItem.displayName = 'GalleryItem';
PostItem.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostItem;