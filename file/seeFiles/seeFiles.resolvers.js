import client from "../../client";

export default {
    Query: {
        seeFiles: async (_, { boardId }) => {
            return client.file.findMany({
                where: {
                    boardId,
                },
            })
        }
    },
};