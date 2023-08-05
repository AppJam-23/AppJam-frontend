import { ButtonUB } from "@/styles/Button"
import { useRouter } from "next/router"
import { styled } from "styled-components"
import PersonStat from "../personStat"

export default function SusList({data}){
    const router = useRouter()

    return(
        <div>
            <SusHeader>
                <div>
                    <img src="/seirn.png"/>
                    <p>
                        온열 질환 의심
                    </p>
                </div>
                <ButtonUB onClick={()=> router.push('/'+router.query.id+'/people')}>전체 보기</ButtonUB>
            </SusHeader>
            <Box>
                {data.map((d)=>{
                    return <PersonStat data={d} key={d.id}/>
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
    height: 300px;
    box-sizing: border-box;
    gap: 12px;
`