import React, {Component} from "react";
import styled from "styled-components";
import Thumbnail from "./Thumbnail";
import { newItemData } from "../data/HomeData";
import {ItemConsumer} from "./ItemContext";

const WhatsNew = styled.section``;

const SecHead = styled.div`
padding: 8px 16px;
color: #294B4C;
background-color: #6AAF79;


h2 {
    font-family: 'Noto Sans', sans-serif;
}
`
const ItemGroup = styled.div``;
const Container = styled.div``;
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
`;



export default class NewItems extends Component {

state = {
    newitems: newItemData
}

//class components already have state built in. With functions, you need to use hooks. I sound like a noob.

render() {
       return(
<WhatsNew>
    <SecHead><h2>What's New</h2></SecHead>
    <ItemGroup>
        <Container>
            <ItemGrid>
        <ItemConsumer>
            {value => {
return value.newitems.map(item => {
    return <Thumbnail key={item.id} item={item}/>;
    });
}}
            
        </ItemConsumer>
    </ItemGrid>
        </Container>
    </ItemGroup>  
</WhatsNew>
    )
}
}