import {UserHandler} from '../handler/UserHandler'
import { getCustomRepository } from 'typeorm'

export const Query = {
    user: async (parent, args, ctx) => {
        const handler = getCustomRepository(UserHandler)
        return await handler.getUserById(args.id)
    },
    users: async (parent, args, ctx) => {
        const handler = getCustomRepository(UserHandler)
        return await handler.getAllUsers()
    },
}