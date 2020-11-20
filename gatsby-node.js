exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions;
    const recipeTemplate = require.resolve(`./src/templates/recipe.js`);
    const spiceTemplate = require.resolve(`./src/templates/spice.js`);
    const result = await graphql(`{
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              spice_slug
            }
          }
        }
      }
    }`);

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
        if (node.frontmatter.slug && node.frontmatter.slug.includes('/recipes/')) {
            createPage({
                path: node.frontmatter.slug,
                component: recipeTemplate,
                context: {
                    slug: node.frontmatter.slug,
                },
            });
        } else if (node.frontmatter.spice_slug && node.frontmatter.spice_slug.includes('/spices/')) {
            createPage({
                path: node.frontmatter.spice_slug,
                component: spiceTemplate,
                context: {
                    slug: node.frontmatter.spice_slug,
                },
            });
        }
    });
}
