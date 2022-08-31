import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/*import { ItemConsumer } from "./ItemContext";*/


const Wrapper = styled.div``;
const Thumb = styled.div`
 border: 1px solid #d9d9d9;
 width: 184px;
 height: 420px;
 

@media screen and (max-width: 1024px) {
   width: 232px;
    height: 508px;
  }

@media screen and (max-width: 428px) {
  width: 134px;
    height: 382px;
  }

  &:hover {
    box-shadow: 5px 10px 32px #d9d9d9;
    transition: 0.3s ease-in;
  }


`;

const ThumbLink = styled(Link)`
text-decoration: none;
`

const ThumbImg = styled.div`
width: 184px;
height: 184px;

border-bottom: 1px solid #d9d9d9;
display: flex;
justify-content: center;

@media screen and (max-width: 1024px) {
    width: 232px;
    height: 232px;
  }

@media screen and (max-width: 428px) {
width: 134px;
height: 134px;
  }
`;
const ThumbImg02 = styled.img`
width: 99%;
object-fit: cover;
`;
const ThumbText = styled.div`
padding: 0.25rem 0.5rem;
font-family: "Noto Sans";

`;
const ThumbCat = styled.div`
font-size: 0.75rem;
font-weight: bold;
color: #294B4C;
font-family: "Noto Sans";
`;
const ThumbName = styled.div`
font-family: "Noto Sans";
margin-top: 1rem;
font-size: 0.9rem;
font-weight: bold;
color: #000;
height: 92px;

@media screen and (max-width: 1024px) {
    height: 92px;
}
`;
const ThumbPrice = styled.div`
font-family: "Noto Sans";
`;

const AddToCart = styled.div``;

export default class Thumbnail extends Component {

    //It appears that you should use class instead of function when dealing with Link from react-router-dom. It is more ideal when making thumbnails.

    render() {
         const {id, img, category, itemName, price, inCart} = this.props.item;
    return(
        <Wrapper>
            <Thumb>
                <ThumbImg>
                    <ThumbLink to="/ItemDetails">
<ThumbImg02 src={img} alt="product image"/>
                    </ThumbLink>
                </ThumbImg>
                <ThumbText>
                <ThumbLink to="/ItemDetails">
<ThumbCat>{category}</ThumbCat>
<ThumbName>{itemName}</ThumbName>
<ThumbPrice>¥{price}</ThumbPrice>
</ThumbLink>
<AddToCart>
<button className="add-cart-btn" disabled={inCart ? true : false}>{inCart ? (
    <p disabled>Already in Cart</p>
) : (
    <p>Add to Cart</p>
)}</button>
</AddToCart>
                </ThumbText>
            </Thumb>
            {/*<ItemConsumer/>*/}
        </Wrapper>
    )
    }  
}