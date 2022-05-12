import { gql } from "apollo-server";

export default gql`
  type Query {
    searchUser(id:Int): User
  }
`;