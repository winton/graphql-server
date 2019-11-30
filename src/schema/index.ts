import * as path from "path"
import { makeSchema } from "nexus"

import { Hello } from "./hello"
import { Query } from "./query"

export const schemaPath = path.join(
  __dirname,
  "../../schema.graphql"
)

export const schemaDirPath = __dirname.replace(
  /\/dist\/schema$/,
  "/src/schema"
)

export const schemaTypesPath = path.join(
  schemaDirPath,
  "./types.ts"
)

export const schemaTypegenPath = path.join(
  schemaDirPath,
  "./typegen.ts"
)

export const schema = makeSchema({
  types: { Hello, Query },
  outputs: {
    schema: schemaPath,
    typegen: schemaTypegenPath,
  },
  typegenAutoConfig: {
    sources: [{ source: schemaTypesPath, alias: "types" }],
    contextType: "types.ContextType",
  },
})
