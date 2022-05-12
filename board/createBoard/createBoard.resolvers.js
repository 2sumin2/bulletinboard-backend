import client from "../../client";

export default {
    Mutation: {
        createBoard: async (_, {
            classification,
            title,
            authorId,
            deadline,
            content,
            attachedFile,
        }) => {
            try {
                await client.board.create({
                    data: {
                        classification,
                        title,
                        authorId,
                        deadline,
                        content,
                        attachedFile,
                    },
                });
                return {
                    ok: true,
                };
            } catch (e) {
                return {
                    ok: false,
                    error: "게시글을 생성할 수 없습니다.",
                };
            }
        },
    }
};