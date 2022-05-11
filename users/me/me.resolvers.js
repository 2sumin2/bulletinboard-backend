import client from "../../client";
import jwt from "jsonwebtoken";

export default {
    Query: {
        me: async (token) => {
            if (!token) {
                return null;
            }
            const { id } = await jwt.verify(token, process.env.SECRET_KEY);
            client.user.findUnique({ where: { id } });
        }
    },
};