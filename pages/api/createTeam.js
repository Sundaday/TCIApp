// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../lib/prisma";

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    const { 
        pseudo,
        guilde,
        personnage,
        degat_max,
        element_team 
    } = req.body
        
    const createTeam = await prisma.user.create({
        data: {
            pseudo,
            guilde,
                team: {
                    create: {
                        personnage,
                        degat_max,
                        element_team
                    },
                },
            },
        include: {
            team: true,
        },
    })
    console.log(createTeam)
    res.status(200).json({ createTeam })   
}
