module.exports = {
  siteMetadata: {
    title: `Dutch Kochbuch`,
    description: `Ein Kochbuch für Rezepte aus dem Dutch Oven.`,
    author: `jo2`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-netlify-cms`
    }
  ]
}
