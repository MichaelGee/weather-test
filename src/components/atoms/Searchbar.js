import React from 'react'
import styled from '@emotion/styled'
import {Box} from 'rebass'
import SearchIcon from '../assets/icons/SearchIcon'
import { Button } from './Button'


const Container = styled(Box)`
    position: relative;
`

const Search = styled(SearchIcon)`
    position: absolute;
    left: 0;
    padding: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SaerchInput = styled.input`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background-color: #fff;
    box-shadow: 0 0 15px 10px rgb(0 0 0 / 5%);
    border: 0;
    width: 100%;
    font-size: 16px;
    padding: 20px 20px 20px 60px;
    outline: 0;
`


export const Searchbar = () => {
    return (
        <Container display='flex' justifyContent='center' alignItems='center'>
          <Search size="1.5rem" />
           <SaerchInput type="text" placeholder="Search city..."/>
           <Button>Search</Button>
        </Container>
    )
}
