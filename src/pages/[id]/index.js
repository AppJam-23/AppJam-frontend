import TotalContainer from "@/components/TotalContainer";
import Navigation from "@/components/nav";
import SusList from "@/components/suslist";
import SusLis2t from "@/components/suslist/index copy";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function Dashboard() {
    const [SrData, setSrData] = useState([]);
    const [name,setName] = useState('이것은 이벤트 이름의 예입니다.');
    const router = useRouter();

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
                    <NameContainer>
                        {name}
                    </NameContainer>
                    <SusList data={SrData}/>
                    <TotalContainer num={SrData.length}/>
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