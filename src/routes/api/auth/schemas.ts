export const loginSchema = {
  tags: ["auth"],
  params: {
    username: { type: "string" },
    password: { type: "string" },
  },
}

export const logoutSchema = {
  tags: ["auth"],
  params: {},
}
