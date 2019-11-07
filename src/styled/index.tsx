import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        padding: 0;
    }
    body,html{
        height: 100%;
        width: 100%;
    }
`;

export { GlobalStyle };
