const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const app = express();
const port = 3000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => res.send("Hello World!"));

mongoose.connect("mongodb://localhost:27017/graphql").then(() => {
  console.log("Database connection established");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
