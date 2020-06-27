import 'reflect-metadata'
import {createConnection} from 'typeorm'
import cors = require('cors')
import express = require('express')
import { ApolloServer } from 'apollo-server-express'
import { resolvers } from './resolvers'
import { importSchema } from 'graphql-import'

class App {

    public app: express.Application

    constructor() {
        this.app = express()
        this._configureCORS()
        this.createPostgressConnection()
        this._configureGraph()
    }
    private _configureCORS() {
        this.app.use(cors())
    }

    private _configureGraph() {
        const typeDefs = importSchema('src/schema/schema.graphql')
        const app = this.app
        const server = new ApolloServer({ typeDefs, resolvers })
        server.applyMiddleware({
            app,
        })
    }

    public createPostgressConnection() {
        createConnection().then().catch(error => console.log('Could not connect to database', error))

    }
}

export default new App().app
