import { gql } from "apollo-server";

export default gql`
    type createCompanyResult {
        ok:Boolean!
        error: String
    }
    type Mutation{
        createCompany(
            name: String!
        ): createCompanyResult
    }
`;