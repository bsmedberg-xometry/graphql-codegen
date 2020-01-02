import { gql } from "apollo-server";

export const SCHEMA = gql`
  scalar _FieldSet
  directive @key(fields: _FieldSet!) on OBJECT | INTERFACE

  type Query {
    userById(id: Int!): User!
  }

  type User @key(fields: "id") {
    id: Int!
    description: String
  }
`;
