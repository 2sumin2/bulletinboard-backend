import fs from "fs"
import client from "../../client";
import { GraphQLUpload } from "graphql-upload";

export default {
    Upload: GraphQLUpload,
    Mutation: {
        updateBoard: async (_, {
            id,
            classification,
            title,
            authorId,
            deadline,
            content,
            attachedFile,
            attachedFileUrl
        }) => {

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
                await client.board.update({
                    where: {
                        id
                    },
                    data: {
                        id,
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
                    //error: "게시글을 수정할 수 없습니다.",
                    error: e,
                };
            }
        },
    }
};