import client from "../../client";

export default {
    Query: {
        searchUser: async (_, { id }) => {
            return client.user.findUnique({
                where: {
                    id
                },
            })
        }
    },
};