import { getSession } from '@auth0/nextjs-auth0'
import { PrismaClient } from '@prisma/client'

export default async (req, res) => {
    const { teamId } = req.query
    const { user } = await getSession (req, res)

    try {
        const prisma = new PrismaClient()

        await prisma.user.update({
            where:{
                email:user.email,
            },
            data:{
                team:{
                    connect:{
                        id:parseInt(teamId)
                    },
                },
            },
        })

        await prisma.$disconnect()
        
        res.status(200).end()
    }catch(e){
        res.status(500).json({ error : e.message })
    }
}