import styled from "styled-components"

function Button({ loading, onClick }) {
    return (
        <ButtonContainer type="button" onClick={onClick}>
            { loading ? <p>Carregando...</p> : <p>Buscar</p> }
        </ButtonContainer>
    )
}

const ButtonContainer = styled.button` 
    heigth: 40px;
    width: 264px;

    background-color: #E4105D;
    border-radius: 27px;

    font-family: 'Open Sans';
    font-size: 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4px;

    color: #FFFFFF;
`

export default Button