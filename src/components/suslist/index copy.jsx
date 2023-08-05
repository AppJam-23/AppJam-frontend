import { ButtonUB } from "@/styles/Button"
import { useRouter } from "next/router"
import { styled } from "styled-components"
import PersonStat from "../personStat"
import PeopleList from "../yayList"

export default function SusLis2t({data}){
    const router = useRouter()

    return(
        <div>
            <SusHeader>
                <div>
                    <img src="/seirn.png"/>
                    <p>
                        참가자 목록
                    </p>
                </div>
            </SusHeader>
            <Box>
                {data.map((d)=>{
                    return <PeopleList data={d} key={d.id}/>
                })}
            </Box>
        </div>
    )
}

const SusHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    &>div{
        display: inherit;
        align-items: inherit;
    }
    &>div>p{
        font-weight: 800;
    }
    &>div>img{
        width: 52px;
        height: 52px;
    }
`

const Box = styled.div`
    background-color: #FFCECE;
    padding: 20px;
    border-radius: 8px;
    display:flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 75vh;
    box-sizing: border-box;
    gap: 12px;
`