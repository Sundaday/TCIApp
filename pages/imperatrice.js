import { PrismaClient } from '@prisma/client'

export async function getServerSideProps(){
    const prisma = new PrismaClient();
    const teams = await prisma.team.findMany({
        include:{
            user:true
        }
    })
    return{
        props:{
            teams
        }
    }
}

function imperatrice({teams}){
    return( 
        <ul>
            {teams.map((teams)=><li key={teams.id}>{teams.personnage}</li>
            )}
        </ul>
     
    )
}

export default imperatrice