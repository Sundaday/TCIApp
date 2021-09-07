import Prisma from "@prisma/client"
import prisma from "../lib/prisma.js"
import Head from "next/head"
import { useState } from "react"
import { Container, Form, Header} from "semantic-ui-react"
import fetcher from "../utils/fetcher.js"

export async function getServerSideProps(){
    const users = await prisma.user.findMAny();
   return{
       props:{initialUsers:users},
    }
}

function formulaire({initialUsers}){
    const [users, setUsers] = useState<Prisma.UserUncheckedCreateInput>(initialUsers)
    const [pseudo, setPseudo] = useState<Prisma.UserUncheckedCreateInput>("")
    const [element_team, setElement_team] = useState<Prisma.UserUncheckedCreateInput>("")
    const [personnage, setPersonnage] = useState<Prisma.UserUncheckedCreateInput>("")
    const [degat_boss, setDegat_boss] = useState<Prisma.UserUncheckedCreateInput>("")

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
            
        </Container>
        </>
    )
}

export default formulaire