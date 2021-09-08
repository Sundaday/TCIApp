import prisma from "../lib/prisma.js"
import Head from "next/head"
import { useState } from "react"
import { Container, Form, Header } from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css';
import { fetcher } from "../utils/fetcher.js"
import React from 'react'

export async function getServerSideProps(){
    const users = await prisma.uSER.findMany();
   return{
       props:{initialUsers:users},
    }
}

function formulaire({initialUsers}){
    const [users, setUsers] = useState(initialUsers)
    const [pseudo, setPseudo] = useState("")
    const [mot_de_passe, setMot_de_passe] = useState("")
    const [email, setEmail] = useState("")
    const [guilde, setGuilde] = useState("")

    return (
        <>
        <Head>
            <title>formulaire Equilibrage</title>
            <link 
            rel="stylesheet" 
            href="/logotci.png" 
            />
        </Head>
        <Container style ={{margin:20}}>
            <Header as="h3">
                C'est ici qu'on renseigne ses scores !
            </Header>
            <Form onSubmit={async () => {
                const body = {
                    pseudo,
                    mot_de_passe,
                    email,
                    guilde
                }
                    
                await fetcher("/api/create", { user: body }),
                await setUsers([...users,body]),
                setPseudo(""),
                setMot_de_passe(""),
                setEmail(""),
                setGuilde("")

            }}> 
            <Form.Group widths="equal">
                <Form.Input 
                    fluid 
                    label="Pseudo IG"
                    placeholder="Pseudo"
                    value={pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                />
                <Form.Input 
                    fluid label="Mot de passe" 
                    placeholder="Mot de passe"
                    value={mot_de_passe}
                    onChange={(e) => setMot_de_passe(e.target.value)}
                /> 
                <Form.Input 
                    fluid label="Email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Input 
                    fluid label="Guilde"
                    placeholder="Guilde"
                    value={guilde}
                    onChange={(e) => setGuilde(e.target.value)}
                />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        </Container>
        </>
    )
}

export default formulaire