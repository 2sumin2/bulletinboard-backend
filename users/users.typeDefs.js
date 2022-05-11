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
    
`;
