import React, { useState, createRef } from 'react';

import {
    FormControl,
    TextField,
    Paper,
    IconButton,
    InputBase
} from '@material-ui/core';

import { Search as SearchIcon } from '@material-ui/icons';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { SearchActionType } from '../../store/reducers/search';
import { JSXElement } from '@babel/types';
import { States } from '../../store/reducers';

const Container = styled(Paper)`
    display: flex;
    padding: 2px 20px;
    max-width: 650px;
    flex: 1;
    .MuiInputBase-root {
        flex: 1;
    }
`;

const Search = () => {
    const searchState = useSelector((state: States) => state.search);
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();

    function onClickSearch() {
        console.log(searchState);
        dispatch({ type: SearchActionType.ON_SEARCH, searchTerm: term });
    }

    return (
        <Container>
            <InputBase
                placeholder="Pesquisar"
                value={term}
                onChange={e => setTerm(e.target.value)}
                onKeyPress={e => (e.which == 13 ? onClickSearch() : null)}
            />

            <IconButton onClick={onClickSearch}>
                <SearchIcon />
            </IconButton>
        </Container>
    );
};
export default Search;
