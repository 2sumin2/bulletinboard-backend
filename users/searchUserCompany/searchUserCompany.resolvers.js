import client from "../../client";

export default {
    Query: {
        searchUserCompany: async (_, { company }) => {
            try {
                return client.user.findMany({
                    where: {
                        company: company
                    },
                });
            } catch {
                return null;
            }
        }
    },
};