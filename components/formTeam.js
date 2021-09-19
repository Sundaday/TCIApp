import Head from "next/head"
import Link from 'next/link'
import { useState } from "react"
import { Container, Form, Header } from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css';
import { fetcher } from "../utils/fetcher.js"
import React from 'react'

function formTeam() {
    const [users, setUsers] = useState("")
    const [pseudo, setPseudo] = useState("")
    const [guilde, setGuilde] = useState("")
    const [teams, setTeams] = useState("")
    const [personnage, setPersonnage] = useState("")
    const [degat_max, setDegat_max] = useState(0)
    const [element_team, setElement_team] = useState("")
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
                        guilde,
                        personnage,
                        degat_max,
                        element_team

                    await fetcher("/api/createTeam",{ 
                        pseudo: pseudo,
                        guilde:guilde,
                        personnage:personnage,
                        degat_max:degat_max,
                        element_team:element_team   
                    }),
                    await setUsers([...users, pseudo,guilde]),
                    await setTeams([...teams, personnage, degat_max, element_team]),
                        setPseudo(""),
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
                                fluid label="Guilde"
                                placeholder="Guilde"
                                value={guilde}
                                onChange={(e) => setGuilde(e.target.value)}
                            />
                            <Form.Input
                                fluid label="element team"
                                placeholder="element"
                                value={element_team}
                                onChange={(e) => setElement_team(e.target.value)}
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
                        </Form.Group>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </Container>
        </>
    )
}

export default formTeam