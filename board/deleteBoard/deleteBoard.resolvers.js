import client from "../../client";

export default {
    Mutation: {
        deleteBoard: async (_, {
            id
        }) => {
            // 마지막 id 검색
            var lastId = 1;
            const lastBoard = await client.board.findMany({
                orderBy: {
                    id: 'desc',
                },
                take: 1,
            });
            lastId = lastBoard[0].id;

            // Board 삭제
            try {
                await client.board.delete({
                    where: {
                        id
                    }
                });
                while (++id <= lastId) {
                    const nextBoard = await client.board.findMany({
                        where: {
                            id
                        }
                    });
                    await client.board.update({
                        where: {
                            id
                        },
                        data: {
                            id: --id,
                            classification: nextBoard[0].classification,
                            title: nextBoard[0].title,
                            authorId: nextBoard[0].authorId,
                            deadline: nextBoard[0].deadline,
                            content: nextBoard[0].content,
                            ...(nextBoard[0].attachedFileUrl && { attachedFileUrl: nextBoard[0].attachedFileUrl }),
                        },
                    });
                    ++id
                };
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