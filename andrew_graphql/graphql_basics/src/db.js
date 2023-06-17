const users = [{
    id:'1',
    name:'andrew',
    email:'andrew@gmail.com',
    age:25
},
{
    id:'2',
    name:'max',
    email:'max@gmail.com',
    age:25
},
{
    id:'3',
    name:'susan',
    email:'susan@gmail.com',
    age:25
},
]

const posts = [{
    id:'2',
    title:'new post 1',
    body:'body 1',
    published:true,
    author:'1'
},
{
    id:'3',
    title:'new post 2',
    body:'body 2',
    published:false,
    author:'2'
},
{
    id:'4',
    title:'new post 3',
    body:'body 3',
    published:true,
    author:'3'
},
]

const comments = [{
    id:'23',
    text:'some dummy text',
    author:'1',
    post:'2'
},{
    id:'24',
    text:'new dummy text',
    author:'2',
    post:'3'
}]

const db = {
    users,
    posts,
    comments
}

export { db as default }