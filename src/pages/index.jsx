import { useState } from "react"
import Input from "@/components/input";
import { ButtonLW } from "@/styles/Button";
import { useRouter } from "next/router";
import axios from "axios";

export default function Home(){
    const router = useRouter();
    const [ind,setind] = useState('');
    
    function route(){
        if(ind.length>0){
            axios({
                method:'POST',
                url: process.env.NEXT_PUBLIC_BASEURL+'event/login',
                data:{
                    code: ind
                }
            })
            .then((res)=>{
                router.push(ind)
            })
            .catch((err)=>{
                alert(err.response.status)
            })
        }
    }

    return(
        <div>
            <img src="/ihavenojua.png"/>
            <Input label='참가 코드' onChange={(e)=>setind(e.target.value)} value={ind} placeholder="참가 코드를 입력하세요" />
            <ButtonLW onClick={route}>참여하기</ButtonLW>
        </div>
    )
}