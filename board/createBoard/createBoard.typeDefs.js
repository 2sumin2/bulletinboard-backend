import { gql } from "apollo-server";

export default gql`
    type createBoardResult {
        ok:Boolean!
        error: String
    }
    type Mutation{
        createBoard(
            classification: String!
            title: String!
            authorId: Int
            deadLine: String
            content: String
            attachedFile: String
        ): createBoardResult
    }
`;