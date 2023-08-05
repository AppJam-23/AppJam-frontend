import { styled } from "styled-components"
import { Home, Location, People } from "../navIcon"

export default function Navigation(){
    return(
        <MainContainer>
            <NavButton>
                <Home/>
            </NavButton>
            <NavButton>
                <People/>
            </NavButton>
            <NavButton>
                <Location/>
            </NavButton>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    position: absolute; 
    background: white;
    border-top: 1px black solid;
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 100vh;
    transform: translate(0,-100%);
`

const NavButton = styled.button`
    background: white;
    border: none;
    cursor: pointer;
`