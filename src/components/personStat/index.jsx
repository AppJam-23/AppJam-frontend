import { styled } from "styled-components"

export default function PersonStat({name,temp}){
    return(
        <MainContainer>
            <DOT color={temp<=37.5 ? 'green' : temp>=38 ? 'red' : 'orange'}/>
            <p style={{fontWeight:800}}>{name}</p>
            <p style={{fontSize:'16px', opacity:0.5, fontWeight:600}}>{temp}°C</p>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 4px 8px;
    border-radius: 10px;
    background-color: white;
    gap: 4px;
    align-items: center;
`

function DOT({color}){
    if(color==='red'){
        return(
            <div style={{backgroundColor:'red', width:'12px', height:'12px', borderRadius:'230984232px'}}/>
        )
    }
    else if(color==='orange'){
        return(
            <div style={{backgroundColor:'#FFC700', width:'12px', height:'12px', borderRadius:'230984232px'}}/>
        )
    }
    else if(color==='green'){
        return(
            <div style={{backgroundColor:'#45D953', width:'12px', height:'12px', borderRadius:'230984232px'}}/>
        )
    }
    else{
        return(
            <div style={{backgroundColor:'red', width:'12px', height:'12px', borderRadius:'230984232px'}}/>
        )
    }
}