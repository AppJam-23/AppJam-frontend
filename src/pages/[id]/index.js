import TotalContainer from "@/components/TotalContainer";
import Navigation from "@/components/nav";
import SusList from "@/components/suslist";
import SusLis2t from "@/components/suslist/index copy";
import { ButtonLW } from "@/styles/Button";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function Dashboard() {
    const [SrData, setSrData] = useState([]);
    const [name,setName] = useState('이것은 이벤트 이름의 예입니다.');
    const router = useRouter();
    const [cms, setcms] = useState(false);
    function rtcms(){
        setcms(!cms);
    }

    useEffect(()=>{
        axios({
            method: 'GET',
            url: process.env.NEXT_PUBLIC_BASEURL
        })
        .then((res)=>{
            setSrData(res.data)
        })
        axios({
            method:'POST',
            url: process.env.NEXT_PUBLIC_BASEURL+'event/login',
            data:{
                code: router.query.id
            }
        })
        .then((res)=>{
            setName(res.data)
        })
        .catch((error)=>{
            console.error(error.response)
        })
    },[])

    if(router.pathname === '/[id]/people'){
        return(
            <>
                <Major>
                    <NameContainer>
                        {name}
                    </NameContainer>
                    <SusLis2t data={SrData}/>
                </Major>
                <Navigation/>
            </>
        )
    }
    else{
        return (
            <>
                <Major>
                    {cms && <COMO data={router.query.id} rt={rtcms}/>}
                    <NameContainer>
                        {name}
                    </NameContainer>
                    <SusList data={SrData}/>
                    <TotalContainer num={SrData.length}/>
                    <div style={{display:'flex', gap:'8px'}}>
                        <ButtonLW onClick={rtcms}>코드 보기</ButtonLW>
                        <ButtonLW onClick={()=> router.push('/')}>나가기</ButtonLW>
                    </div>
                </Major>
                <Navigation/>
            </>
        )
    }
}

const Major = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
`
const NameContainer = styled.div`
    padding: 10px 40px;
    background-color: #FF7372;
    font-size: 16px;
    width: fit-content;
    border-radius:1293481029px;
    color: #fff;
`

function COMO({data, rt}){
    return(
        <Blbg>
            <MoCo>
                이벤트 참가 코드
                <Code>
                    {data}
                </Code>
                <ButtonLW onClick={rt}>닫기</ButtonLW>
            </MoCo>
        </Blbg>
    )
}
const Blbg = styled.div`
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

const MoCo = styled.div`
    background-color: white;
    border-radius: 16px;
    width: 300px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    flex-direction: column;
    box-sizing: border-box;
    padding: 24px;
`

const Code = styled.p`
    font-size: 44px;
`