import React from 'react'
import './Header.css'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Container = styled.div`
height:60px;
background-color:#0F1111;
display:flex;
align-items: center;

color: white
`

const HeaderLogo = styled.div`
img{
    width:100px;
    margin-left:11px;
}
`
const HeaderSearch = styled.div``
const HeaderSearchInput = styled.input``
const HeaderOptionAddress = styled.div``
const HeaderSearchIconContainer = styled.div``

const OptionLineOne = styled.div``
const OptionLineTwo = styled.div``

const HeaderNavItems = styled.div`
display:flex`
const HeaderOption = styled.div``
const CartCount = styled.div``

function Header() {
    return (
        <Container>
            <HeaderLogo>
                <img src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png" />
            </HeaderLogo>
            <HeaderOptionAddress>
                <OptionLineOne>Hello</OptionLineOne>
                <OptionLineTwo>Select your address</OptionLineTwo>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type="text" />
                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOption>
                    <OptionLineOne>Hello, Dong</OptionLineOne>
                    <OptionLineTwo>Account & List</OptionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>&Orders</OptionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <ShoppingBasketIcon />
                    <CartCount>5</CartCount>
                </HeaderOption>
            </HeaderNavItems>

        </Container>
    )
}


export default Header
