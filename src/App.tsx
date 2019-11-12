import React from 'react';
import { GlobalStyle } from './styled';
import { CssBaseline } from '@material-ui/core';
import Routing from './routes';
import { Provider } from 'react-redux';
import store from './store';



export default function App() {
    return (
        <>
            <CssBaseline />
            <GlobalStyle />
            <Provider store={store}>
                <Routing />
            </Provider>
        </>
    );
}
