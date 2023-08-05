import { styled } from "styled-components"

export default function Input({onChange, value, label, placeholder}){
    return(
        <InputCon>
            <Lab htmlFor={label}>
                <img src="/rar.png"/>
                {label}
            </Lab>
            <Inp id={label} value={value} onChange={onChange} placeholder={placeholder}/>
        </InputCon>
    )
}

const InputCon = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
    width: 100%;
`

const Lab = styled.label`
    color: #4983F6;
    gap: 4px;
    display: flex;
    align-items: center;
    font-weight: 800;
`

const Inp = styled.input`
    padding: 14px;
    border-radius: 8px;
    border: 1px solid #71727B;
`