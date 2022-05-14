import client from "../../client";

export default {
    Query: {
        seeUsers: async (_,) => {
            return client.user.findMany({
                orderBy: {
                    id: 'asc',
                },
            })
        }
    },
};