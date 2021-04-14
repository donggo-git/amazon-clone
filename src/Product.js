import React from 'react'
import styled from 'styled-components'

function Product() {
    return (
        <Container>
            <Title>
            </Title>
            <Price>

            </Price>
            <Rating></Rating>
            <Img />
            <AddToCartButton>
                Add to cart
            </AddToCartButton>
        </Container>
    )
}
const Container = styled.div`
    background-color:white;
    z-index:100;
    height:300px;
    flex:1;
    padding:20px;
    margin:10px;
`
const Title = styled.p``;
const Price = styled.p``;
const Rating = styled.div``;
const Img = styled.img``;
const AddToCartButton = styled.button``
export default Product
