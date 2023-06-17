import  uuidv4  from 'uuid';
import db from '../db.js'

const Mutation = {
    createUser(parent, args, {db}, info) {
        console.log('args',args)
        const emailTaken = db.users.some((user) => user.email === args.data.email)

        if (emailTaken) {
            throw new Error('Email taken')
        }
        
        const user = {
            id: uuidv4(),
            ...args.data
        }

       db.users.push(user)

        return user
    },
    deleteUser(parent, args, {db}, info) {
        const userIndex = db.users.findIndex((user) => user.id === args.id)

        if (userIndex === -1) {
            throw new Error('User not found')
        }

        const deletedUsers = db.users.splice(userIndex, 1)

        posts = db.posts.filter((post) => {
            const match = post.author === args.id

            if (match) {
                comments = db.comments.filter((comment) => comment.post !== post.id)
            }

            return !match
        })
        comments = db.comments.filter((comment) => comment.author !== args.id)

        return deletedUsers[0]
    },
    createPost(parent, args, {db}, info) {
        const userExists = db.users.some((user) => user.id === args.data.author)

        if (!userExists) {
            throw new Error('User not found')
        }

        const post = {
            id: uuidv4(),
            ...args.data
        }

        db.posts.push(post)

        return post
    },
    createComment(parent,args,{db},info){
        const userExists = db.users.some((user) => user.id === args.data.author)
        if(!userExists){
            throw new Error('User not exists')
        }
        const postExists = db.posts.some((post) => post.id === args.post)
        if(!postExists){
            throw new Error(`with the given post ${args.post} is not available`)
        }
        const comment = {
            id:uuidv4(),
            ...args.data
        }
        db.comments.push(comment)
        return comment
    }
}

export {Mutation as default}