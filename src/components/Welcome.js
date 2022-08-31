import React from "react";
import styled from "styled-components";

const WelcomeSec = styled.div`
  height: 100vh;
display: flex;
flex-direction: column;

`;

const WelcomeText = styled.div`
margin-top: 124px;
text-align: center;
display: flex;
flex-direction: column;
h1 {
    font-family: 'Lobster', cursive;
    font-size: 96px;
}

h2 {
    font-family: 'Noto Sans', sans-serif;
    font-size: 56px;
}

@media screen and (max-width: 1024px) {
    h1 {
        
        font-size: 96px;
    }
    
    h2 {
        
        font-size: 48px;
     
   }

   @media screen and (max-width: 428px) {
    h1 {
        
        font-size: 36px;
    }
    
    h2 {
        
        font-size: 20px;
   }
`;


export default function Welcome() {
    return(
<WelcomeSec>
    <WelcomeText>
        <h2>Welcome to</h2>
        <h1>Midori Market</h1>
    </WelcomeText>
</WelcomeSec>
    )
}