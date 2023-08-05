import TotalContainer from "@/components/TotalContainer";
import Navigation from "@/components/nav";
import SusList from "@/components/suslist";
import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function Home() {
    const [SrData, setSrData] = useState([]);

    useEffect(()=>{
        axios({
            method: 'GET',
            url: process.env.NEXT_PUBLIC_BASEURL+'suspected'
        })
        .then((res)=>{
            setSrData(res.data)
        })
    },[])

    return (
        <>
            <Major>
                <NameContainer>
                    탬버린
                </NameContainer>
                <SusList data={SrData}/>
                <TotalContainer num={800}/>
            </Major>
            <Navigation/>
        </>
    )
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