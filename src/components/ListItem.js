import { Eye, Trash } from "@phosphor-icons/react"
import styled from "styled-components"

function ListItem({ repo, handleRemoveRepo }) {

    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    }

    return (
        <ItemContainer onClick={handleRemove}>
            <div>
                <img src={repo.owner.avatar_url} width={32} height={32} alt="Avatar" />
                <h2>{repo.owner.login}</h2>
            </div>
            <hr />
            <div>
                <p>{repo.name}</p>
                <a href={repo.html_url} rel="noreferrer" target="_blank"><Eye color="#FFFFFF" weight="fill" size={24}/></a><br />
                <a href="#" rel="noreferrer" className="remover"><Trash color="#FFFFFF" weight="fill" size={24}/></a>
            </div>
        </ItemContainer>
    )
}

const ItemContainer = styled.div`
    width: 780px;
    height: 160px;

    gap: 8px;
    display: flex;
    flex-direction: column;

    color: #FFFFFF;
    padding: 16px;
    background-color: #3B4651;
    border-radius: 0px 0px 5px 5px;

    div {
        gap: 8px;
        
        display: flex;
        flex-direction: row;

        align-items: center;
    }

    img {
        border: 3px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 50%;
    }
`

export default ListItem