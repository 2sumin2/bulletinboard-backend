import { gql } from "apollo-server";

export default gql`
    type File{
        id: Int!
        url: String!
        authorCompany: String!
        boardId: Int!
        upload: String
    }
`;