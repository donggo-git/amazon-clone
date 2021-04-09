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
justify-content:space-between;
color: white
`

const HeaderLogo = styled.div`
img{
    width:100px;
    margin-left:11px;
}
`
const HeaderSearch = styled.div`
display:flex;
flex-grow:1;
height:40px;
border-radius:4px;
overflow:hidden
`
const HeaderSearchInput = styled.input`
flex-grow:1;
:focus{
    outline:none;
}
`
const HeaderOptionAddress = styled.div``
const HeaderSearchIconContainer = styled.div`
background-color:#febd69;
width:45px;
color:black;
display:flex;
justify-content: center;
align-items:center
`

const OptionLineOne = styled.div``
const OptionLineTwo = styled.div`
font-weight:700;`

const HeaderNavItems = styled.div`
display:flex;

`
const HeaderOption = styled.div`
padding: 10px 9px;
`
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
