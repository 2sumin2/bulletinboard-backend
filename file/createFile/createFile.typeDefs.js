import { gql } from "apollo-server";

export default gql`
    scalar Upload
    type createFileResult {
        ok:Boolean!
        error: String
    }
    type Mutation{
        createFile(
            url: String
            upload: Upload
            boardId: Int!
            authorCompany:String!
        ): createFileResult
    }
`;

