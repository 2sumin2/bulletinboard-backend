import { gql } from "apollo-server";

export default gql`
    scalar Upload
    type createBoardResult {
        ok:Boolean!
        error: String
    }
    type Mutation{
        createBoard(
            classification: String!
            title: String!
            authorId: Int!
            deadline: String!
            content: String!
            attachedFile: Upload
        ): createBoardResult
    }
`;