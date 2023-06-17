import {GraphQLServer, PubSub} from 'graphql-yoga'
import db from './db.js'
import Query from './resolver/Query.js'
import User from './resolver/User.js'
import Subscription from './resolver/Subscription.js'
import Post from './resolver/Post.js'
import Mutation from './resolver/Mutuation.js'
import Comment from './resolver/Comment.js'


const pubsub = new PubSub()

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        User,
        Post,
        Mutation,
        Comment
    },
    context: {
        db,
        pubsub
    }
})

server.start(() => {
    console.log('server is up')
})