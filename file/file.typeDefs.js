import { gql } from "apollo-server";

export default gql`
    type File{
        id: Int!
        url: String!
        authorId: Int!
        boardId: Int!
        upload: String
    }
`;