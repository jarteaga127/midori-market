import React from "react";
import styled from "styled-components";
import NewItems from "../components/NewItems";
import PopItems from "../components/PopItems";
import Welcome from "../components/Welcome";

const Home = styled.div``;

export default function HomePage() {
    return(
<Home>
    <Welcome/>
    <NewItems/>
    <PopItems/>
</Home>
    )
}