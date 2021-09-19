import { handleAuth, handleCallback } from '@auth0/nextjs-auth0'
import createUser from '../../api/create.js'

const afterCallback = async ( req, res, session, state ) => {
    console.log(session)
    
    try {
        await createUser(session.user.email)
    } catch (err) {
        console.log(err)
    }

    return session
}

export default handleAuth({
    async callback(req, res){
        try {
            await handleCallback(req, res, {afterCallback})
        } catch (err) {
            res.status(error.status || 500 ).end(error.message)
        }
    }
})