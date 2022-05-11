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
                    throw new Error("This email is already taken.");
                }
                const uglyPassword = await bcrypt.hash(password, 10);
                return client.user.create({
                    data: {
                        name,
                        email,
                        company,
                        password: uglyPassword,
                    },
                });
            } catch (e) {
                return e;
            }
        },
    }
};