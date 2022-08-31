import React, { Component } from "react";
import styled from "styled-components";
import Thumbnail from "../components/Thumbnail";
import { ItemConsumer } from "../components/ItemContext";
import { ItemPageData } from "../data/ItemData";

const ItemList = styled.div`
margin-top: 62px;
`;

const SectionHeader = styled.div`
padding: 8px 16px;
color: #294B4C;
background-color: #6AAF79;


h2 {
    font-family: 'Noto Sans', sans-serif;
}`;

const ItemGroup = styled.div``;

const Container = styled.div``;

const ItemGrid = styled.div`
margin: 8px 64px 64px;
display: flex;
flex-wrap: wrap;
gap: 24px;
justify-content: center;


@media screen and (max-width: 1024px) {
    margin: 12px 0 100px;
    gap: 28px;
     
   }
`

export default class ItemSelect extends Component {

state = {
    items: ItemPageData
}

    render() {
       return(
<ItemList>
    <SectionHeader><h2>Our Items</h2></SectionHeader>
    <ItemGroup>
        <Container>
            <ItemGrid>
<ItemConsumer>
{value => {
return value.items.map(item => {
    return <Thumbnail key={item.id} item={item}/>;
    });
}}
</ItemConsumer>
            </ItemGrid>
        </Container>
    </ItemGroup>
</ItemList>
    ) 
    }
    
}