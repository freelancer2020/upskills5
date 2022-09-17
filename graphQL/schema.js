import { buildSchema } from "graphql";

const schema = buildSchema(`
type obj {
    name: String!
    age: Int!
}

input AllData {
    firstName: String!
    secondName: String!
    phoneNumber: String!
    policyNumber: String!
    adress: String!
    country: String!
    date: String!
    incidentDesc: String!
    travelPurpose: String!
    birthday: String!
    email: String!
}

type RootQuery {
    test: obj!
}

type RootMutation {
    claimAllData(data: AllData): String!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);

export default schema;
