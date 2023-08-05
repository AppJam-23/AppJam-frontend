import { styled } from "styled-components"

export default function TotalContainer({num}){
    return(
        <TotalContainerStyle>
            <p>총 참가자</p>
            <p>{num}명</p>
        </TotalContainerStyle>
    )
}

const TotalContainerStyle = styled.div`
    padding: 16px 28px;
    border-radius: 243923px;
    background-color: #FF7372;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 800;
`