import fs from "fs"
import client from "../../client";
import { GraphQLUpload } from "graphql-upload";

export default {
    Upload: GraphQLUpload,
    Mutation: {
        createBoard: async (_, {
            classification,
            title,
            authorId,
            deadline,
            content,
            attachedFile,
            attachedFileUrl
        }) => {
            var lastId = 0;
            try {
                const lastBoard = await client.board.findMany({
                    orderBy: {
                        id: 'desc',
                    },
                    take: 1,
                });
                lastId = lastBoard[0].id;
            } catch {
                lastId = 0;
            }


            try {
                if (!attachedFileUrl) {
                    attachedFileUrl = '';
                }
                if (attachedFile) {
                    const { filename, createReadStream } = await attachedFile;
                    const readsStream = createReadStream();
                    const newFilename = `${authorId}-${Date.now()}-${filename}`;
                    const writeStream = fs.createWriteStream(process.cwd() + "/uploads/" + newFilename);
                    readsStream.pipe(writeStream);

                    attachedFileUrl = `http://localhost:4000/static/${newFilename}`;
                }

                await client.board.create({
                    data: {
                        id: lastId + 1,
                        classification,
                        title,
                        authorId,
                        deadline,
                        content,
                        attachedFileUrl: (attachedFileUrl == '') ? null : attachedFileUrl,
                    },
                })
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