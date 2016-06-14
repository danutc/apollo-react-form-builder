import { apolloServer } from 'apollo-server'
import typeDefs from './schema.js'
import resolvers from './resolvers.js'
import express from 'express'
import proxyMiddleware from 'http-proxy-middleware'
import { WebApp } from 'meteor/webapp'

const GRAPHQL_PORT = 4000

const app = express()

console.log(typeDefs)

app.use('/graphql', apolloServer({
  schema: typeDefs,
  resolvers: resolvers,
  pretty: true,
  graphiql: true
}))

app.listen(GRAPHQL_PORT, () => console.log(`GraphQL is running on http://localhost:${GRAPHQL_PORT}`))
WebApp.rawConnectHandlers.use(proxyMiddleware(`http://localhost:${GRAPHQL_PORT}/graphql`))
