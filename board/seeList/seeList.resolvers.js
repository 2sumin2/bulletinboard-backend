import client from "../../client";

export default {
    Query: {
        seeList: async (_,) => {
            return client.board.findMany({
                orderBy: {
                    id: 'desc',
                },
            })
        }
    },
};