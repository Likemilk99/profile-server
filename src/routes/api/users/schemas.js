const userProperties = {
  id: { type: "number" },
  name: { type: "string" },
}

const getOneSchema = {
  tags: ["user"],
  params: {
    type: "object",
    properties: {
      id: { type: "string" },
    },
    required: ["id"],
  },
  response: {
    200: {
      type: "object",
      properties: userProperties,
    },
  },
}

const getAllSchema = {
  tags: ["user"],
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        properties: userProperties,
      },
    },
  },
}

module.exports = {
  getOneSchema,
  getAllSchema,
}
