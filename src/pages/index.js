import TotalContainer from "@/components/TotalContainer";
import Navigation from "@/components/nav";
import SusList from "@/components/suslist";
import { styled } from "styled-components";

export default function Home() {
    return (
        <div>
            <NameContainer>
                탬버린
            </NameContainer>
            <SusList/>
            <Navigation/>
            <TotalContainer num={800}/>
        </div>
    )
}

const NameContainer = styled.div`
    padding: 10px 40px;
    background-color: #FF7372;
    font-size: 16px;
    width: fit-content;
    border-radius:1293481029px;
    color: #fff;
`