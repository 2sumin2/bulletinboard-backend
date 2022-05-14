import { PrismaClient } from "@prisma/client";
import { createUploadLink } from 'apollo-upload-client';
import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";

const client = new PrismaClient({});
/*
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createUploadLink(),
});
*/
export default client;