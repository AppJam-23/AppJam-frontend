import { styled } from "styled-components"

export default function Input({onChange, value, label}){
    return(
        <InputCon>
            <Lab htmlFor={label}>
                <img src="/rar.png"/>
                {label}
            </Lab>
            <input id={label} value={value} onChange={onChange}/>
        </InputCon>
    )
}

const InputCon = styled.div`
    display: flex;
    gap: 4px;
    flex-direction: column;
`

const Lab = styled.label`
    color: #4983F6;

`