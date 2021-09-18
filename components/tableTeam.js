import { Container, Divider, Tab, Table } from "semantic-ui-react"

export async function getServerSideProps() {
    const users = await prisma.users.findMany();
    return {
        props: { initialUsers: users },
    }
}

function tableTeam({initialUsers}){
    return(
        <Container>
            <Divider horizontal>Team</Divider>
            <Table basic="very" celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Pseudo</Table.HeaderCell>
                        <Table.HeaderCell>Guilde</Table.HeaderCell>
                        <Table.HeaderCell>Team</Table.HeaderCell>
                        <Table.HeaderCell>Element</Table.HeaderCell>
                        <Table.HeaderCell>Personnage</Table.HeaderCell>
                        <Table.HeaderCell>Dégâts Max</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            </Table>
        </Container>
    )
}

export default tableTeam