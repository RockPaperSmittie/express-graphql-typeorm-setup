import {Query} from './Query'
import {Mutation} from './Mutation'

const generatedResolvers = {
    Query,
    Mutation,
}

export const resolvers = {
    ...generatedResolvers
}