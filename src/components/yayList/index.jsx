import { styled } from "styled-components"

export default function PeopleList({data}){
    return(
        <MainCon>
            <p>{data.Name}</p>
            <p>{data.Age}세</p>
            <p>{data.Gender.toString()}</p>
            <p>{data.Temperature}°F</p>
        </MainCon>
    )
}
const MainCon = styled.div`
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #A4A4A4;
    background-color: white;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`