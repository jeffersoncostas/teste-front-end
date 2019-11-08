import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Button } from '@material-ui/core/';
import Search from '../../components/Search';
import { Background } from '../../styled';

const ContainerStyled = styled(Container)`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3ms;
`;

const Home = () => {
    function onClickButton() {
        console.log('aaa');
    }

    return (
        <Background>
            <ContainerStyled>
                <Search />
            </ContainerStyled>
        </Background>
    );
};

export default Home;
