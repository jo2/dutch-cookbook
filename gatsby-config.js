module.exports = {
  siteMetadata: {
    title: `dutch cookbook`,
    description: `A cookbook for recipes from the dutch oven`,
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
      }
    }
  ]
}
