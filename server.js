require("dotenv").config();
import express from "express";
import { ApolloServer } from "apollo-server-express";
import http from "http";
import { graphqlUploadExpress } from "graphql-upload";
import { typeDefs, resolvers } from './schema';
import logger from 'morgan';

const PORT = process.env.PORT;

const startServer = async () => {
    const server = new ApolloServer({
        typeDefs, resolvers,
        /*
        context: async ({ req }) => {
            return {
                loggedInUser: await getUser(req.headers.token),
            }
        },
        */
    });

    await server.start();
    const app = express();

    app.use(graphqlUploadExpress());
    app.use("/static", express.static("uploads"));
    app.use(logger("tiny"));

    server.applyMiddleware({ app });

    await new Promise((func) => app.listen({ port: PORT }, () => {
        console.log(`🚀 Server: http://localhost:${PORT}${server.graphqlPath}`);
    }));
}
startServer();
