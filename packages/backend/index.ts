import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import resolvers from './src/resolvers';
import typeDefs from './src/typeDefs';

const port = Number(process.env.PORT) || 4000;

const server = new ApolloServer({
    resolvers,
    typeDefs
});

async function main() {
    const { url } = await startStandaloneServer(server, {
        listen: { port }
    });
    console.log(`🚀  Server ready at: ${url}`);
}

main()