import {UserHandler} from '../handler/UserHandler'
import { getCustomRepository } from 'typeorm'

export const Mutation = {
    createUser: (parent, args, ctx) => {
        const handler = getCustomRepository(UserHandler)
        return handler.createUser(args.input)
    },

    deleteUser: (parent, args, ctx) => {
        const handler = getCustomRepository(UserHandler)
        return handler.deleteUserById(args.id)
    },
}