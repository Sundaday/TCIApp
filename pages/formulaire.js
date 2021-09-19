import FormTeam from '../components/formTeam'
import prisma from '../lib/prisma'
import { Divider, Header, Table } from "semantic-ui-react"

export async function getServerSideProps() {
    
    const users = await prisma.user.findMany({
        include:{
            team:{
                select:{
                    personnage:true,
                    element_team:true,
                    degat_max:true
                }
            }
        }
    })
    const team = users[0].team[0];
    console.dir(team.degat_max)
    return {
        props: {users}
    }
}

function formulaire({users}){
    return(
        <>
            <FormTeam/>
            <Divider horizontal>Team</Divider>
            <Table basic="very" celled collapsing >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Pseudo</Table.HeaderCell>
                        <Table.HeaderCell>Guilde</Table.HeaderCell>
                        <Table.HeaderCell>Element</Table.HeaderCell>
                        <Table.HeaderCell>Personnage</Table.HeaderCell>
                        <Table.HeaderCell>Dégâts Max</Table.HeaderCell>
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
                        <Table.Cell>
                            <Header>
                                <Header.Content>
                                    {users.element_team}
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>
                            <Header>
                                <Header.Content>
                                    {users.personnage}
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>
                            <Header>
                                <Header.Content>
                                    {users.degat_max}
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                    </Table.Row>)}
                </Table.Body>
            </Table>
        </>
    )
}

export default formulaire;