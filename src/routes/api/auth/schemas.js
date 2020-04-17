const loginSchema = {
  tags: ["auth"],
  params: {
    username: { type: "string" },
    password: { type: "string" },
  },
}

const logoutSchema = {
  tags: ["auth"],
  params: {},
}

module.exports = {
  loginSchema,
  logoutSchema,
}
