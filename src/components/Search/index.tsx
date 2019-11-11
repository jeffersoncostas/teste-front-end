import React, { useState } from 'react';

import {
    Paper,
    IconButton,
    InputBase
} from '@material-ui/core';

import { Search as SearchIcon } from '@material-ui/icons';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { States } from '../../store/reducers';
import { getSearchData } from '../../services/api';
import { SearchActionType } from '../../store/reducers/search';

const Container = styled(Paper)`
    display: flex;
    padding: 2px 20px;
    max-width: 650px;
    flex: 1;
    .MuiInputBase-root {
        flex: 1;
    }
`;

const Search = (props: { onClickSearch: () => any; placeholder: string, term: string, setTerm: (e: any) => any }) => {
    const { onClickSearch, placeholder, term, setTerm } = props;

    return (
        <Container>
            <InputBase
                placeholder={placeholder}
                value={term}
                onChange={e => setTerm(e.target.value)}
                onKeyPress={e => (e.which == 13 ? onClickSearch() : null)}
            />

            <IconButton onClick={() => onClickSearch()}>
                <SearchIcon />
            </IconButton>
        </Container>
    );
};
export default Search;
