// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../lib/prisma";

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { user } = req.body
        const savedUser = await prisma.uSER.create({data:user})
        res.status(200).json({ savedUser})
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong' })
    }
}