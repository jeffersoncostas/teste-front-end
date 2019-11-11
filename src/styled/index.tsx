import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        padding: 0;
    }
    body,html,#root{
        height: 100%;
        width: 100%;

    }
`;

const Background = styled.div`
    
    min-height: 100%;
    display:flex;
    flex-direction: column;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
`;

export { GlobalStyle, Background };
