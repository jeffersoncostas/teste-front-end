import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;

const Home = () => {
    return (
        <Container>
            Home
            <Link to="/detail"> To detail </Link>
        </Container>
    );
};

export default Home;
