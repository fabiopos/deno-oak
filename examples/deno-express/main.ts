import * as expressive from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";

import {
  buildSchema,
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from "https://cdn.pika.dev/graphql@^14.6.0";

// const schema = buildSchema(`
// type Query {
//     country: Country
// }
// type Country{
//   name: String
// }
// `);

// const root = {
//   country: () => ({ name: "Colombia" }),
// };

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        },
      },
    },
  }),
});
(async () => {
  const port = 3000;
  const app = new expressive.App();
  app.use(expressive.simpleLog());
  app.use(expressive.static_("./public"));
  app.use(expressive.bodyParser.json());
  

  app.get("/api/todos", async (req, res) => {
    await res.json([{ name: "Buy some milk" }]);
  });
  // route with dynamic parameter
  app.get("/api/user/{user_id}", async (req, res) => {
    await res.json([
      { id: req.params.user_id, name: "Jim Doe", phone: "12425323" },
    ]);
  });
  const server = await app.listen(port);
  console.log("app listening on port " + server.port);
})();
