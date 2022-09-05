import { buildSchema } from "graphql";

const schema = buildSchema(`
type obj {
    name: String!
    age: Int!
}

input UserData {
    name: String!
    age: Int!
}

type RootQuery {
    test: obj!
}

input ClaimData {
    firstName: String!
    secondName: String!
    birthday: String!
    phoneNumber: String!
    email: String!
    policyNumber: String!
}

type RootMutation {
    makeTest(data: UserData): String!
    claimPersonalData(data: ClaimData): String!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);

export default schema;
