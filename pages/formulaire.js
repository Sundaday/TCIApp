import Prisma from "@prisma/client"
import Head from "next/head"
import { useState } from "react"
import { Container,Form,Header} from "semantic-ui-react"
import styles from "../styles/Home.module.css"
import utils from "../utils/fetcher.js"

export async function getServerSideProps(){
   const users = await prisma.user.findMany()
   return{
       props:{initialUsers:users},
    }
}

function formulaire({initialUsers}){
    const [users, setUsers] = useState<Prisma.UserUncheckedCreateInput>(initialUsers)
    const [pseudo, setPseudo] = useState("")
    const [mot_de_passe, setMot_de_passe] = useState("")
    const [email, setEmail] = useState("")
    const [guilde, setGuilde] = useState("")
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
                const body:Prisma.USERCreateInput{ 
                    pseudo,
                    mot_de_passe,
                    email,
                    guilde,
                    element_team,
                    personnage,
                    degat_boss,
                    element_team,
                    personnage,
                    degat_boss,
                    element_team,
                    personnage,
                    degat_boss,
                
                }
                
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