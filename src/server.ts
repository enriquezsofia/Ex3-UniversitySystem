import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema, GraphQLSchema } from 'graphql';


const schema: GraphQLSchema = buildSchema(`
    type Query {
        hello: String
    }
`)

const root: any = {
    hello: () => {
        return 'Hello world!'
    }
}

const app: any = express();
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');