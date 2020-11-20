import React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout";
import {Container} from "react-bootstrap";
import '../styles/recipe.scss';

const RecipePage = ({data}) => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (<Layout>
        <Container>
            <h2>{frontmatter.title}</h2>
            <i>{frontmatter.author}</i>
            <div className="row row-cols-3">
                <div className="col">
                    <h4>Zutaten</h4>
                    <ul>
                        {frontmatter.ingredients.map(ingredient => <li>{ingredient}</li>)}
                    </ul>

                    <h4>Gewürzmischung</h4>
                    <a className="nav-link" href={frontmatter.spice.frontmatter.spice_slug}>{frontmatter.spice.frontmatter.spice_title}</a>
                </div>
                <div className="col-8">
                    <img className="card-img-top" src={frontmatter.image} alt={frontmatter.title}/>
                </div>
            </div>
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
        ingredients
        image
        slug
        spice {
          frontmatter {
            spice_author
            spice_ingredients
            spice_slug
            spice_title
          }
        }
        title
      }
    }
  }
`

export default ({data}) => {
    return (<RecipePage data={data} />);
};
