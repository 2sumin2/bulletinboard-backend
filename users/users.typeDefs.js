import { gql } from "apollo-server";

export default gql`
    type User{
        id: Int!
        name: String!
        email: String!
        company: String!
        createAt: String!
        updateAt:String!
    }
    type Mutation {
        createAccount(
            name: String!
            email: String!
            company: String!
            password: String!
        ): User
    }
    type Query{
        seeProfile(email:String!): User
    }
`;
