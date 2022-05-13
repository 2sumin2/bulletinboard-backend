import fs from "fs"
import client from "../../client";
import { GraphQLUpload } from "graphql-upload";
import bcrypt from "bcrypt";

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
        }) => {
            var lastId = 1;
            const lastBoard = await client.board.findMany({
                orderBy: {
                    id: 'desc',
                },
                take: 1,
            });
            lastId = lastBoard[0].id;

            try {
                let attachedFileUrl = null;
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
                        ...(attachedFileUrl && { attachedFile: attachedFileUrl }),
                    },
                })
                return {
                    ok: true,
                };
            } catch (e) {
                return {
                    ok: false,
                    error: e,
                };
            }
        },
    }
};