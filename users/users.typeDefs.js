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
    type LoginResult {
        ok:Boolean!
        token:String
        error:String
    }
    type Mutation {
        createAccount(
            name: String!
            email: String!
            company: String!
            password: String!
        ): User
        login(email:String!, password:String!): LoginResult!
    }
    type Query{
        seeProfile(email:String!): User
    }
`;
