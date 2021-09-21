import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default (req, res) =>{
    NextAuth(req,res,{
        providers:[
            Providers.Discord({
                clientId: process.env.DISCORD_CLIENT_ID,
                clientSecret: process.env.DISCORD_CLIENT_SECRET
            })
        ],
        debug: process.env.NODE_ENV === 'development',
        secret: process.env.AUTH_SECRET,
        jwt:process.env.JWT_SECRET,
    })
}
    