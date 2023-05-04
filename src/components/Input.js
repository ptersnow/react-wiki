import styled from "styled-components"

function Input({ required, placeholder, value, onChange }) {
    return (
        <InputContainer>
            <input required={required} placeholder={placeholder} value={value} onChange={onChange} />
        </InputContainer>
    )
}

const InputContainer = styled.div`
    input {
        height: 30px;
        width: 275px;
        
        padding: 4px;

        border-bottom: 1px solid #3B3450;
    }
`


export default Input