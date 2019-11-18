const contentfulConfig = require('./contentful.json')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: `Jam blog`,
    description: `Kick off your next, great Gatsby project with JAM.`,
    author: `@vitomakarevich`,
    siteUrl: 'https://vmakarevich.gitlab.io/jam-blog/'
  },
  pathPrefix: `/jam-blog`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: contentfulConfig.production.spaceId,
        accessToken: contentfulConfig.production.accessToken,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jam-blog`,
        short_name: `jam`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
