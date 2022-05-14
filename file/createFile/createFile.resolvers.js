import fs from "fs"
import client from "../../client";
import { GraphQLUpload } from "graphql-upload";

export default {
    Upload: GraphQLUpload,
    Mutation: {
        createFile: async (_, {
            url,
            authorId,
            boardId,
            upload
        }) => {
            try {
                if (!url) {
                    url = '';
                }
                if (upload) {
                    const { filename, createReadStream } = await upload;
                    const readsStream = createReadStream();
                    const newFilename = `${authorId}-${Date.now()}-${filename}`;
                    const writeStream = fs.createWriteStream(process.cwd() + "/uploads/" + newFilename);
                    readsStream.pipe(writeStream);

                    url = `http://localhost:4000/static/${newFilename}`;
                }

                await client.file.create({
                    data: {
                        url: (url == '') ? null : url,
                        authorId,
                        boardId
                    },
                })
                return {
                    ok: true,
                };
            } catch (e) {
                return {
                    ok: false,
                    error: "파일을 업로드 할 수 없습니다.",
                };
            }
        },
    }
};