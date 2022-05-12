import { gql } from "apollo-server";

export default gql`
    type Board{
        id: Int!
        classification: String!
        title: String!
        authorId: Int
        deadLine: String
        content: String
        attachedFile: String
        createAt: String!
        updateAt:String!
    }
    
`;