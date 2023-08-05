import { useState } from "react"
import Input from "@/components/input";
import { ButtonLW, ButtonUB } from "@/styles/Button";
import { useRouter } from "next/router";
import axios from "axios";
import { styled } from "styled-components";

export default function Create(){
    const router = useRouter();
    const [ind,setind] = useState('');
    const [code,setcode] = useState('');
    
    function route(){
        if(ind.length>0){
            axios({
                method:'POST',
                url: process.env.NEXT_PUBLIC_BASEURL+'event/create',
                data:{
                    eventName: ind,
                    code: code,
                }
            })
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.error(err.response)
                // alert(err.response.status)
            })
        }
    }

    return(
        <Center>
            <MainCon>
                <img src="/ihavenojua.png"/>
                <Input label='이벤트 이름' onChange={(e)=>setind(e.target.value)} value={ind} placeholder="이벤트 이름를 입력하세요" />
                <Input label='참여 코드' onChange={(e)=>setcode(e.target.value)} value={code} placeholder="참여 코드를 입력하세요" />
                <ButtonLW onClick={route}>생성하기</ButtonLW>
                <ButtonUB onClick={()=> router.push('/')}>돌아가기</ButtonUB>
            </MainCon>
        </Center>
    )
}

const MainCon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 280px;
`
const Center = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`