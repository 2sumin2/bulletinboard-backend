import client from "../../client";

export default {
    Mutation: {
        deleteUser: async (_, { id }) => {
            try {
                await client.user.delete({
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