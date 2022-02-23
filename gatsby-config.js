module.exports = {
    siteMetadata: {
        title: 'Gatsby Starter - Strata by HTML5 UP',
        author: 'Hunter Chang',
        description: 'A Gatsby.js Starter based on Strata by HTML5 UP',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/assets/images/_blank.png', // This path is relative to the root of the site.
            },
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/_cms`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/_cms/blog/images`,
            },
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-offline',
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-plugin-load-script',
            options: {
                src: '/js/core.min.js'
            },
        },
    ],
};
