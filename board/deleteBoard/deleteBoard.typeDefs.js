import { gql } from "apollo-server";

export default gql`
    scalar Upload
    type deleteBoardResult {
        ok:Boolean!
        error: String
    }
    type Mutation{
        deleteBoard(
            id:Int!
        ): deleteBoardResult
    }
`;