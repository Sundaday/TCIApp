import prisma from "../lib/prisma.js"
import Head from "next/head"
import { useState } from "react"
import { Container, Form, Header} from "semantic-ui-react"
import fetcher from "../utils/fetcher.js"

export async function getServerSideProps(){
    const users = await prisma.uSER.findMany();
   return{
       props:{initialUsers:users},
    }
}

function formulaire({initialUsers}){
    const [users, setUsers] = useState(initialUsers)
    const [pseudo, setPseudo] = useState("")
    const [element_team, setElement_team] = useState("")
    const [personnage, setPersonnage] = useState("")
    const [degat_boss, setDegat_boss] = useState("")

    return (
        <>
        <Head>
            <h1>Page où se trouvera le formulaire</h1>
        </Head>
        <Container style ={{margin:20}}>
            <Header as="h3">
                C'est ici qu'on renseigne ses scores !
            </Header>
            <Form onSubmit={async () => {
                const body =
                    pseudo
                    element_team
                    personnage
                    degat_boss
                
                await fetcher("/api/create", { user: body }),
                await setUsers([...users,body]),
                setPseudo(""),
                setMot_de_passe(""),
                setEmail(""),
                setGuilde(""),
                setElement_team(""),
                setPersonnage(""),
                setDegat_boss("")

            }}></Form> 
            <Form.Group widths="equal">
                <Form.Input
                    fluid label="Pseudo"
                    placeholder="Pseudo"
                    value={pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                />
                <Form.Input 
                    fluid label="element team" 
                    placeholder="element team" 
                    value={element_team}
                    onChange={(e) => setElement_team(e.target.value)}
                />
                <Form.Input
                    fluid label="Personnage"
                    placeholder="Personnage"
                    value={personnage}
                    onChange={(e) => setPersonnage(e.target.value)}
                />
                <Form.Input
                    fluid label="degat boss"
                    placeholder="degat boss"
                    value={degat_boss}
                    onChange={(e) => setDegat_boss(e.target.value)}
                />

            </Form.Group>
        </Container>
        </>
    )
}

export default formulaire