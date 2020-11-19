import React from "react";
import Layout from "../components/layout/Layout";
import {Container} from "react-bootstrap";
import '../styles/spices.scss';
import data from '../data/data.json';
import RecipeCard from "../components/recipe-card/RecipeCard";

const ListPage = () => {
    return (<Layout>
        <Container>
            <h2>Gewürzmischungen</h2>
            <div className="list__recipe-list">
                {data.map(recipe => <RecipeCard props={recipe}/>)}
            </div>
        </Container>
    </Layout>);
};

export default ListPage;
