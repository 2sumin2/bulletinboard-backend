import client from "../../client";

export default {
    Query: {
        seeCompanies: async (_,) => {
            return client.company.findMany({
                orderBy: {
                    id: 'asc',
                },
            })
        }
    },
};