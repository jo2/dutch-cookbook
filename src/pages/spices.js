import React from "react";
import Layout from "../components/layout/Layout";
import {Container} from "react-bootstrap";
import '../styles/recipes.scss';
import {graphql} from "gatsby";
import SpiceCard from "../components/spice-card/SpiceCard";

const SpicesPage = ({data}) => {
    return (<Layout>
        <Container>
            <h2>Gewürzmischungen</h2>
            <div className="row row-cols-3">
                {data.allMarkdownRemark.edges.filter(node => node.node.frontmatter.spice_slug && node.node.frontmatter.spice_slug.includes('/spices/'))
                    .map(spice => <SpiceCard props={spice.node.frontmatter}/>)}
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
            spice_slug
            spice_title
          }
        }
      }
    }
  }
`

export default ({data}) => {
    return (<SpicesPage data={data} />);
};
