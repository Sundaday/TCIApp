import { getSession } from '@auth0/nextjs-auth0'
import prisma from '../../lib/prisma'

export default async (req, res) => {
    const { teamId } = req.query
    const { user } = await getSession (req, res)

    try {

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

        
        
        res.status(200).end()
    }catch(e){
        res.status(500).json({ error : e.message })
    }
}