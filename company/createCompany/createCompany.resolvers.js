import fs from "fs"
import client from "../../client";

export default {
    Mutation: {
        createCompany: async (_, {
            name
        }) => {
            try {
                await client.company.create({
                    data: {
                        name,
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