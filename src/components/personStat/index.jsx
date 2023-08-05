import { styled } from "styled-components"

export default function PersonStat({data}){
    function cpt(){

    }

    return(
        <MainContainer>
            <DOT color={data.Temperature<=37.5 ? 'green' : data.Temperature>=38 ? 'red' : 'orange'}/>
            <p style={{fontWeight:800}}>{data.Name}</p>
            <p style={{fontSize:'16px', opacity:0.5, fontWeight:600}}>{data.Temperature}°C</p>
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
            <div style={{backgroundColor:'purple', width:'12px', height:'12px', borderRadius:'230984232px'}}/>
        )
    }
}