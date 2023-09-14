import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// server setup/configuration
const server = new ApolloServer({
	//typeDefs
	//resolvers
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});
console.log(`Server running on 4000`);
