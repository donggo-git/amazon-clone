import React from 'react'
import './Header.css'
import styled from 'styled-components'

const Container = styled.div`
height:60px;
background-color:#0F1111;
display:flex;
align-items: center;
justify-content: center
`

const HeaderLogo = styled.div`
img{
    width:100px;
    margin-left:11px;
}
`

const HeaderOptionAddress = styled.div``

const OptionLineOne = styled.div``

const OptionLineTwo = styled.div``
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
        </Container>
    )
}


export default Header
