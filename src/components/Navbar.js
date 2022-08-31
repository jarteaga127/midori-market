import React from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

const Container = styled.div``;

const NavMain = styled.nav`
width: 100%;
left: 0;
top: 0;
height: 62px;
background-color: #294B4C;
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
z-index: 1;
`;

const NavLeft = styled.div`
display: flex;
align-items: center;
margin-left: 24px;
`;

const NavCenter = styled.div`
@media screen and (max-width: 416px) {
    display: none;
  }
`;

const NavRight = styled.div`
@media screen and (max-width: 416px) {
    display: none;
  }
`;

const SideMenuCont = styled.div`
display: none;

@media screen and (max-width: 416px) {
   padding: 8px 16px;
  }
`

const SideMenuBtn = styled.button`
background-color: transparent;
border: none;
font-size: 24px;
color: #294B4C;
`


const Logo = styled.div`
font-family: 'Lobster', cursive;

@media screen and (max-width: 416px) {
    padding: 8px 16px;
   }
`;

const NavLink = styled.div``;

const NavLink02 = styled(Link)`
font-weight: bold;
color: #fff;
text-decoration: none;

h1 {
    color: #fff;
}

i {
    margin-right: 8px;
}

&:hover {
    text-decoration: underline;
}
`

const SignInBtn = styled.button`
padding: 8px 16px;
color: #fff;
background-color: #6AAF79;
border: none;
border-radius: 3px;
cursor: pointer;
font-family: "Noto Sans";

&:hover {
    opacity: 0.8;
    transition: 0.3s ease-in;
}
`;

const SignUpBtn = styled.button`
padding: 8px 16px;
border: none;
background-color: transparent;
cursor: pointer;
color: #fff;
font-weight: bold;
font-family: "Noto Sans";
`;

const CartBtn = styled.button`
padding: 8px 16px;
border: none;
background-color: transparent;
cursor: pointer;
font-family: "Noto Sans";
`;

export default function Navbar() {
    return (
        <Container>
        <NavMain>
            <NavLeft>
                <SideMenuCont>
                    <SideMenuBtn><i class="fa-solid fa-bars"></i></SideMenuBtn>
                </SideMenuCont>
                <Logo>
                    <NavLink02 to="/" >
                        <h1>Midori Market</h1>
                    </NavLink02>
                </Logo>
            </NavLeft>
            <NavCenter>
                <NavLink>
                    <NavLink02 to="/ItemSelect">Products</NavLink02>
                </NavLink>
            </NavCenter>
            <NavRight>
                <SignInBtn>Sign In</SignInBtn>
                <SignUpBtn>Create Account</SignUpBtn>
                <CartBtn>
                    <NavLink02 to="/MyCart"><i class="fa-solid fa-cart-shopping"></i>My Cart</NavLink02>
                    </CartBtn>
            </NavRight>
        </NavMain>
        <Outlet/>
        </Container>
    )
}