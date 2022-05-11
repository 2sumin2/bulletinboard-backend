import bcrypt from 'bcrypt';
import client from "../client"

export default {
    Mutation: {
        createAccount: async (_, {
            name,
            email,
            company,
            password,
        }) => {
            const existingUser = await client.user.findFirst({
                where: { email }
            });
            const uglyPassword = await bcrypt.hash(password, 10);
            return client.user.create({
                data: {
                    name,
                    email,
                    company,
                    password: uglyPassword,
                },
            });

        },
    }
};