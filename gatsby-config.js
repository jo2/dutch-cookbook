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
        background_color: `#663399`,
        theme_color: `#663399`,
        name: `Dutch-Cookbook`,
        short_name: `Dutch-Cookbook`,
        start_url: `/`,
        display: `standalone`,
        icon: './src/images/favicon.png'
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recipes`,
        path: `${__dirname}/_data/recipes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `spices`,
        path: `${__dirname}/_data/spices`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`
  ],
  mapping: {
    "MarkdownRemark.frontmatter.spice": "MarkdownRemark.frontmatter.spice_title"
  }
}
