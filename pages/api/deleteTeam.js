import { prisma } from "../../lib/prisma";

export default async (req , res) => {
    try {
        const { id } = req.body
        if (!id){
            res.json({error: 'la team nexiste pas'})
            return;
        }
        const team = await prisma.team.delete({
            where:{id}
        })
        res.status(200).json(team)
    } catch (error) {
        res.status(400).json({message:'quelque chose ne va pas'})
    }
}