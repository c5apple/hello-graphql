const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const app = express();

const dummyPosts = [
  { id: 1, name: '太郎', sex: 'male' },
  { id: 2, name: '次郎', sex: 'male' },
  { id: 3, name: '花子', sex: 'female' },
]

app.use('/graphql', graphqlHTTP({
  schema: buildSchema(`
    type Query {
      user(id: Int!): Post
      users: [Post]
    },
    type Post {
      id: Int
      name: String
      sex: String
    }
  `),
  rootValue: {
    user: args => dummyPosts.filter(post => post.id === args.id)[0],
    users: () => dummyPosts
  },

  graphiql: true
}));

app.listen(5000, () => console.log('Example app listening on port 5000!'))
