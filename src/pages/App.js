import { useState } from "react"

import styled from "styled-components"

import gitLogo from "../assets/github.png"

import { api } from "../services/api"

import Input from "../components/Input"
import Button from "../components/Button"
import ListItem from "../components/ListItem"

function App() {

    const [isLoading, setIsLoading] = useState(false)

    const [currentRepo, setCurrentRepo] = useState("")
    const [currentOwner, setCurrentOwner] = useState("")

    const [repos, setRepos] = useState([])

    async function handleSearchRepo() {

        setIsLoading(true)

        if (!currentOwner) {
            alert("Informe o dono do repositório")
            setIsLoading(false)
            return
        }

        var url = `repos/${currentOwner}/${currentRepo}`

        if (!currentRepo) {
            url = `users/${currentOwner}/repos`
        }

        const { data, status } = await api.get(url)

        if (status !== 200) {
            alert("Repositório não encontrado")
            setIsLoading(false)
            return
        }

        if (Array.isArray(data)) {

            data.forEach(nrepo => {
                const isExist = repos.find(repo => repo.id === nrepo.id)

                if(!isExist) {
                    setRepos(prev => [...prev, nrepo])
                }
            });
        } else {
            const isExist = repos.find(repo => repo.id === data.id)

            if(!isExist) {
                setRepos(prev => [...prev, data])
            }
        }

        setCurrentOwner('')
        setCurrentRepo('')
        setIsLoading(false)
    }

    function handleRemoveRepo(id) {
        const newRepos = repos.filter(repo => repo.id !== id)
        setRepos(newRepos)
    }

    return (
        <Container>
            <img src={gitLogo} width={72} height={72} alt="github logo"/>
            
            <Input
                required={true}
                placeholder="Dono do repositório"
                value={currentOwner}
                onChange={(e) => setCurrentOwner(e.target.value)}
            />
            <Input
                required={false}
                placeholder="Repositório"
                value={currentRepo}
                onChange={(e) => setCurrentRepo(e.target.value)}
            />
            
            <Button loading={isLoading} onClick={handleSearchRepo}/>

            {
                repos.map(repo => 
                    <ListItem key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo}/>
                )
            }
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 90vh;

    margin: 20px 0 0 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    gap: 24px;
`

export default App;
