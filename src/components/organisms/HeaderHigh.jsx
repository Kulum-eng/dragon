import styled from "styled-components";
import TitleHeader from "../atoms/TitleHeader";

const HeaderStyled = styled.header`
    width: 100%;
    height: 40vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Header() {
    return <HeaderStyled>
        <TitleHeader text="Api de dragon"></TitleHeader>
    </HeaderStyled>
}

export default Header