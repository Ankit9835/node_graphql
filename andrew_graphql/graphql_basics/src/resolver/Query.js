const Query = {
    user(){
        return {
            id:'abc123',
            name:'ankit',
            email:'ankit@gmail.com',
            age:29
        }
    },
    post() {
        return {
            id:'post123',
            title:'New Post',
            body:'Lorem Ipsum',
            published:true
        }
    },
    greeting(parent,args,ctx,info) {
        if(args.name && args.position){
            return `Hello ${args.name} your position is ${args.position}`
        } else {
            return 'Hello'
        }
    },
    add(parent,args,ctx,info){
        if(args.numbers.length === 0){
            return 0
        }

       return args.numbers.reduce((accumulator,current) => {
            return accumulator + current
        })
    },
    users(parent,args){
        if(!args.query){
            return users
        } else {
            return users.filter((user) => {
                return user.name.toLowerCase().includes(args.query.toLowerCase())
            })
        }
    },
    posts(){
        return posts
    },
    comments(){
        return comments
    }
}

export {Query as default}