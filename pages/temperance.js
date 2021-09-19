import prisma from '../lib/prisma'
import { Container, Divider, Header, Tab, Table } from "semantic-ui-react"

export async function getServerSideProps() {
    
    const users = await prisma.user.findMany()
    const teams = await prisma.team.findMany()
    return {
        props: { users, teams }
    }
}

function temperance({ users, teams }) {
    return (
        <>
            <header>
                <h1>
                    Guilde Tempérance
                </h1>
            </header>
            <Divider horizontal>Team</Divider>
            <Table basic="very" celled collapsing >
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Pseudo</Table.HeaderCell>
                            <Table.HeaderCell>Guilde</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {users.map((users, index) =>
                        <Table.Row key={index}>
                            <Table.Cell>
                                <Header>
                                    <Header.Content>
                                        {users.pseudo}
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>
                                <Header>
                                    <Header.Content>
                                        {users.guilde}
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                        </Table.Row>)}
                    </Table.Body>
                </Table>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Element</Table.HeaderCell>
                            <Table.HeaderCell>Personnage</Table.HeaderCell>
                            <Table.HeaderCell>Dégâts Max</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {teams.map((teams, index) =>
                        <Table.Row key={index}>
                            <Table.Cell>
                                <Header>
                                    <Header.Content>
                                        {teams.element_team}
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>
                                <Header>
                                    <Header.Content>
                                        {teams.personnage}
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>
                                <Header>
                                    <Header.Content>
                                        {teams.degat_max}
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                        </Table.Row>)}
                    </Table.Body>
                </Table>
            </Table>
        </>
    )
}

export default temperance;