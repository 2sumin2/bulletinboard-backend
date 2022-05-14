import client from "../../client";

export default {
    Mutation: {
        deleteCompany: async (_, { id }) => {
            try {
                await client.company.delete({
                    where: {
                        id
                    }
                });
                return {
                    ok: true,
                };
            } catch (e) {
                return {
                    ok: false,
                    error: e,
                };
            };
        },
    }
};