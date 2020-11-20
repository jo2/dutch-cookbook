// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const recipeTemplate = require.resolve(`./src/templates/recipe.js`)
    const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: recipeTemplate,
            context: {
                slug: node.frontmatter.slug,
            },
        })
    })
}
