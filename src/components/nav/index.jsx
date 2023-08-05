import { styled } from "styled-components"
import { Home, Location, People } from "../navIcon"
import { useRouter } from "next/router"

export default function Navigation(){
    const router = useRouter();

    function moveDir(dir){
        router.push(dir)
    }

    return(
        <MainContainer>
            <NavButton onClick={()=> moveDir('/')}>
                <Home selected={router.pathname === '/'}/>
            </NavButton>
            <NavButton onClick={()=> moveDir('/dir')}>
                <People selected={router.pathname === '/people'}/>
            </NavButton>
            <NavButton onClick={()=> moveDir('/location')}>
                <Location selected={router.pathname === '/locaion'}/>
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