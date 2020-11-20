import React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout";
import {Container} from "react-bootstrap";
import '../styles/recipe.scss';

const SpicePage = ({data}) => {
    const { markdownRemark } = data;
    const { frontmatter } = markdownRemark;

    return (<Layout>
        <Container>
            <h2>{frontmatter.spice_title}</h2>
            <i>{frontmatter.spice_author}</i>
            <h4>Zutaten</h4>
            <ul>
                {frontmatter.spice_ingredients.map(ingredient => <li>{ingredient}</li>)}
            </ul>
        </Container>
    </Layout>);
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { spice_slug: { eq: $slug } }) {
      frontmatter {
        spice_author
        spice_ingredients
        spice_slug
        spice_title
      }
    }
  }
`

export default ({data}) => {
    return (<SpicePage data={data} />);
};
