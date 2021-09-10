// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../lib/prisma";



export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    
        const { user } = req.body
        
        const savedUser = await prisma.user.create({
            data: {
                pseudo:user,
                mot_de_passe:user,
                email:user,
                guilde:user,
                team: {
                    create: {
                        personnage:team,
                        degat_max:team,
                        element_team:team
                    },
                },
            },
            include: {
                team: true,
            },
        })
        console.log(savedUser)
        res.status(200).json({ savedUser })
    

    //export async function getServerSideProps() {
    //    const users = await prisma.uSER.findMany();
    //    return {
    //        props: { initialUsers: users },
    //    }
    //}
}