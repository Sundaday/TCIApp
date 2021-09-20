import FormTeam from '../components/formTeam'
import prisma from '../lib/prisma'
import { Divider, Table } from "semantic-ui-react"
import Styles from '../styles/Home.module.css'


export async function getStaticProps() {

    const users = await prisma.user.findMany({
       
        include: {
            team: {
                select: {
                    personnage: true,
                    element_team: true,
                    degat_max: true
                }
            }
        }
    })
    //const team = users[0].team[0];
    //console.dir(team.degat_max)
    //console.dir(users,{depth:null})

    return {
        props: { users }
    }
}


function imperatrice({ users }) {
    return (
        <>
            <h1>Guilde Impératrice</h1>
            <Divider horizontal>Team</Divider>
            <Table basic="very" celled collapsing className={Styles.formForm}>
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
                    {users.map((user, index) => {
                        console.log('user', user)
                        return (<Table.Row key={index}>
                            <Table.Cell>
                                {user?.pseudo || '-'}
                            </Table.Cell>
                            <Table.Cell>
                                {user?.guilde || '-'}
                            </Table.Cell>
                            <Table.Cell>
                                {user?.team[0].element_team || '-'}
                            </Table.Cell>
                            <Table.Cell>
                                {user?.team[0].personnage || '-'}
                            </Table.Cell>
                            <Table.Cell>
                                {user?.team[0].degat_max || '-'}
                            </Table.Cell>
                        </Table.Row>)
                    })}
                </Table.Body>
            </Table>
        </>
    )
}

export default imperatrice;