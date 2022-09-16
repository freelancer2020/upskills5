import express from "express";
import path from "path";
import { graphqlHTTP } from "express-graphql";

//graphql schema and resolvers
import schema from "./graphQL/schema.js";
import resolvers from "./graphQL/resolvers.js";

const __dirname = path.resolve();

const app = express();

const graphQL = graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(` App running on port ${port}`));

app.use(express.json());
app.use(express.static("./client/rc/build"));
app.use("/graphql/claimData", graphQL);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/rc/build/index.html"));
});

