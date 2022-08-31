import React, { Component } from "react";
import styled from "styled-components";
import Thumbnail from "./Thumbnail";
import { PopItemData } from "../data/HomeData";
import {ItemConsumer} from "./ItemContext";

const WhatsHot = styled.section``;

const SecHead = styled.div`
padding: 8px 16px;
color: #294B4C;
background-color: #6AAF79;


h2 {
    font-family: 'Noto Sans', sans-serif;
}
`
const ItemGroup = styled.div``
const Container = styled.div``
const ItemGrid = styled.div`
margin: 8px 16px 64px;
display: flex;
flex-wrap: wrap;
gap: 24px;
justify-content: center;

@media screen and (max-width: 1024px) {
   margin: 12px 0 100px;
   gap: 28px;
    
  }

@media screen and (max-width: 428px) {
 margin: 0.5rem 1rem 4rem;
  }
`

export default class PopItems extends Component {
    state = {
        popitems: PopItemData
    }
render() {
return(
<WhatsHot>
<SecHead><h2>What's Hot Now</h2></SecHead>
<ItemGroup>
    <Container>
        <ItemGrid>
            <ItemConsumer>
            {value => {
return value.popitems.map(item => {
    return <Thumbnail key={item.id} item={item}/>;
    });
}}
            </ItemConsumer>
        </ItemGrid>
    </Container>
</ItemGroup>

</WhatsHot>
    )    
}

    
}