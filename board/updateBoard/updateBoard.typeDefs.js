import { gql } from "apollo-server";

export default gql`
    scalar Upload
    type updateBoardResult {
        ok:Boolean!
        error: String
    }
    type Mutation{
        updateBoard(
            id:Int!
            classification: String!
            title: String!
            authorId: Int!
            deadline: String!
            content: String!
            attachedFile: Upload
        ): updateBoardResult
    }
`;