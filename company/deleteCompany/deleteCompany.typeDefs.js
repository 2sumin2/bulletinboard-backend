import { gql } from "apollo-server";

export default gql`
    type deleteCompanyResult {
        ok:Boolean!
        error: String
    }
    type Mutation{
        deleteCompany(
            id:Int!
        ): deleteCompanyResult
    }
`;