import { gql } from "apollo-server";

export default gql`
    type Board{
        id: Int!
        classification: String!
        title: String!
        authorId: Int
        deadline: String!
        content: String!
        attachedFile: String
        attachedFileUrl: String
        createAt: String!
        updateAt:String!
    }
    
`;