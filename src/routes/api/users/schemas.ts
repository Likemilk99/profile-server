export const userSchema = {
  tags: ["user"],
  body: {
    type: "object",
    properties: {
      name: { type: "string" },
      password: { type: "string" },
    },
  },
}
