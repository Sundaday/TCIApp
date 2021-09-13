import Head from "next/head"
import { useState } from "react"
import { Container, Form, Header } from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css';
import { fetcher } from "../utils/fetcher.js"
import React from 'react'

function formulaire() {
    const [users, setUsers] = useState("")
    const [pseudo, setPseudo] = useState("")
    const [mot_de_passe, setMot_de_passe] = useState("")
    const [email, setEmail] = useState("")
    const [guilde, setGuilde] = useState("")
    const [teams, setTeams] = useState("")
    const [personnage, setPersonnage] = useState("")
    const [degat_max, setDegat_max] = useState(0)
    const [element_team, setElement_team] = useState("")
    var patt = /^(\d*)([,.]\d{0,2})?$/
    return (
        <>
            <Head>
                <title>formulaire Equilibrage</title>
                <link
                    rel="stylesheet"
                    href="/logotci.png"
                />
            </Head>
            <Container style={{ margin: 20 }}>
                <Header as="h3">
                    C'est ici qu'on renseigne ses scores !
                </Header>
                <Form onSubmit={async () => {
                    
                        pseudo,
                        mot_de_passe,
                        email,
                        guilde,
                        personnage,
                        degat_max,
                        element_team

                    
                    await fetcher("/api/create",{ 
                        pseudo: pseudo,
                        mot_de_passe:mot_de_passe,
                        email:email,
                        guilde:guilde,
                        personnage:personnage,
                        degat_max:degat_max,
                        element_team:element_team   
                    }),
                    await setUsers([...users, pseudo, mot_de_passe, email,guilde]),
                    await setTeams([...teams, personnage, degat_max, element_team]),
                        setPseudo(""),
                        setMot_de_passe(""),
                        setEmail(""),
                        setGuilde(""),
                        setPersonnage(""),
                        setDegat_max(0),
                        setElement_team("")

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
                        <Form.Input
                            fluid
                            label="Personnage"
                            placeholder="Personnage"
                            value={personnage}
                            onChange={(e) => setPersonnage(e.target.value)}
                        />
                        <Form.Input
                            fluid label="degat max"
                            placeholder="degat max"
                            value={degat_max}
                            onChange={(e) => setDegat_max(parseFloat(e.target.value))}
                        />
                        <Form.Input
                            fluid label="element team"
                            placeholder="element"
                            value={element_team}
                            onChange={(e) => setElement_team(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </Container>
        </>
    )
}

export default formulaire