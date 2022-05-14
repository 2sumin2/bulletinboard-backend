import client from "../../client";

export default {
    Mutation: {
        deleteBoard: async (_, {
            id
        }) => {
            try {
                await client.board.delete({
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
                    error: "게시글을 삭제할 수 없습니다.",
                };
            }
        },
    }
};