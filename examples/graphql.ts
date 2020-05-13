import {
  buildSchema,
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from "https://cdn.pika.dev/graphql@^14.6.0";
console.log(buildSchema);


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

var query = "{ hello }";
graphql(schema, query).then((result) => {
  // Prints
  // {
  //   data: { hello: "world" }
  // }
  console.log(result);
});
