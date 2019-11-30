import express from "express"
import { ApolloServer } from "apollo-server-express"

import { schema } from "./schema"

const port = 5000
const server = new ApolloServer({ schema })
const app = express()

server.applyMiddleware({ app })

app.listen({ port }, () =>
  // eslint-disable-next-line
  console.log(
    `🚀 Server ready at http://localhost:${port}/graphql`
  )
)
