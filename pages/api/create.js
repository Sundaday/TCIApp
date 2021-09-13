// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../lib/prisma";

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
        const { 
            pseudo,
            mot_de_passe,
            email,
            guilde,
            personnage,
            degat_max,
            element_team 
        } = req.body
        
        
        const savedUser = await prisma.user.create({
            data: {
                pseudo,
                mot_de_passe,
                email,
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
        console.log(savedUser)
        res.status(200).json({ savedUser })
    

    //export async function getServerSideProps() {
    //    const users = await prisma.uSER.findMany();
    //    return {
    //        props: { initialUsers: users },
    //    }
    //}
}