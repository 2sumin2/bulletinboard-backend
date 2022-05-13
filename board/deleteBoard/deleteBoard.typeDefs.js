import { gql } from "apollo-server";

export default gql`
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