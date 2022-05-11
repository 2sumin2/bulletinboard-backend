import bcrypt from 'bcrypt';
import client from "../../client";

export default {
    Mutation: {
        createAccount: async (_, {
            name,
            email,
            company,
            password,
        }) => {
            try {
                const existingUser = await client.user.findFirst({
                    where: { email }
                });
                if (existingUser) {
                    throw new Error("이미 존재하는 이메일입니다.");
                }
                const uglyPassword = await bcrypt.hash(password, 10);
                await client.user.create({
                    data: {
                        name,
                        email,
                        company,
                        password: uglyPassword,
                    },
                });
                return {
                    ok: true,
                };
            } catch (e) {
                return {
                    ok: false,
                    error: "이미 존재하는 이메일입니다.",
                };
            }
        },
    }
};