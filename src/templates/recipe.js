import React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout";
import {Container} from "react-bootstrap";
import '../styles/recipe.scss';

const RecipesPage = ({data}) => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (<Layout>
        <Container>
            <h2>{frontmatter.title}</h2>
            <h4>{frontmatter.author}</h4>
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }}/>
        </Container>
    </Layout>);
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        slug
        title
      }
    }
  }
`

export default RecipesPage;
