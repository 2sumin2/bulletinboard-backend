import { gql } from "apollo-server";

export default gql`
    type Query{
        seeFiles(
            boardId:Int!
        ): [File]
    }
`;