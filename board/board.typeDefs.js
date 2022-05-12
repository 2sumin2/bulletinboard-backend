import { gql } from "apollo-server";

export default gql`
    type Board{
        id: Int!
        classification: String!
        title: String!
        authorId: String
        deadLine: String
        content: String
        attachedFile: String
        createAt: String!
        updateAt:String!
    }
    
`;