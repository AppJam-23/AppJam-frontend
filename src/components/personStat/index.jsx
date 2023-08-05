import { useState } from "react"
import { createPortal } from "react-dom"
import { styled } from "styled-components"

export default function PersonStat({data}){
    const [ModalStat, setModalStat] = useState(false);
    function swtichStat(){
        setModalStat(!ModalStat)
    }

    return(
        <MainContainer onClick={swtichStat}>
            {ModalStat && <Modallllll data={data}/>}
            <DOT color={data.Temperature<37.5 ? 'green' : data.Temperature>38 ? 'red' : 'orange'}/>
            <p style={{fontWeight:800}}>{data.Name}</p>
            <p style={{fontSize:'16px', opacity:0.5, fontWeight:600}}>{data.Temperature}°C</p>
        </MainContainer>
    )
}

function Modallllll({data}){
    return(
        <CenterCon>
            <ModalCon>
                <p>ID: {data.id}</p>
                <p>이름: {data.Name}</p>
                <p>성별: {data.Gender.toString()}</p>
                <p>체온: {data.Temperature}</p>
                <p>걸음 수: {data.Step}</p>
                <p>심박수: {data.Heart} Bpm</p>
            </ModalCon>
        </CenterCon>
    )
}
const CenterCon = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #000000ad;
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 8888;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
`
const ModalCon = styled.div`
    box-sizing: border-box;
    padding: 30px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    background-color: white;
    border-radius: 8px;
    width: 320px;
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 4px 8px;
    border-radius: 10px;
    background-color: white;
    gap: 4px;
    align-items: center;
    cursor: pointer;
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