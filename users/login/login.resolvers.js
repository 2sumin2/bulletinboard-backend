import bcrypt from 'bcrypt';
import client from "../../client";
import { Jwt } from 'jsonwebtoken';

export default {
    Mutation: {
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
            const token = await Jwt.sign({ id: user.id }, process.env.SECRET_KEY);
            return {
                ok: true,
                token,
            }
        },
    }
};