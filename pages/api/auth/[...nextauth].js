import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

export default (req ,res ) => NextAuth(req, res, {
    // Configure one or more authentication providers
    providers: [
        DiscordProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        }),
        // ...add more providers here
    ],
})