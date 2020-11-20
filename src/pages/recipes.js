import React from "react";
import Layout from "../components/layout/Layout";
import {Container} from "react-bootstrap";
import '../styles/recipes.scss';
import {graphql} from "gatsby";
import RecipeCard from "../components/recipe-card/RecipeCard";

const RecipesPage = ({data}) => {
    return (<Layout>
        <Container>
            <h2>Rezepte</h2>
            <div className="row row-cols-3">
                {data.allMarkdownRemark.edges.filter(node => node.node.frontmatter.slug && node.node.frontmatter.slug.includes('/recipes/'))
                    .map(recipe => <RecipeCard props={recipe.node.frontmatter}/>)}
            </div>
        </Container>
    </Layout>);
};

export const data = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            image
            slug
            title
          }
        }
      }
    }
  }
`

export default ({data}) => {
    return (<RecipesPage data={data} />);
};
