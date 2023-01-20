const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: buildSchema(`
    type Query {
      message: String
    }
  `),
  rootValue: {
    message: () => 'Hello World!'
  },

  graphiql: true
}));

app.listen(5000, () => console.log('Example app listening on port 5000!'))
