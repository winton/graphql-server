import expect from "./expect"
import { graphql } from "../src"

describe("graphqlServer", () => {
  it("should exist", () => {
    expect(graphql).toBeInstanceOf(Function)
  })

  it("should assert", () => {
    expect(true).toBe(true)
  })
})
