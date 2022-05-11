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
        login: async (_, { email, password }) => {
            const user = await client.user.findFirst({ where: { email } });
            if (!user) {
                return {
                    ok: false,
                    error: "User not found.",
                };
            }
            const passwordOk = await bcrypt.compare(password, user.password);
            if (!passwordOk) {
                return {
                    ok: false,
                    error: "Incorrect password.",
                };
            }
            const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY);
            return {
                ok: true,
                token,
            }
        },
    }
};