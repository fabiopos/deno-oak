import { init, MongoClient } from "https://deno.land/x/mongo@v0.5.2/mod.ts";

// Initialize the plugin
await init();

const client = new MongoClient();
client.connectWithUri("mongodb://localhost:27017");

console.log(client);

// const db = getClient().database("test");
// const users = db.collection("users");

// // insert
// const insertId = await users.insertOne({
//   username: "user1",
//   password: "pass1"
// });

// // insertMany
// const insertIds = await users.insertMany([
//   {
//     username: "user1",
//     password: "pass1"
//   },
//   {
//     username: "user2",
//     password: "pass2"
//   }
// ]);

// // findOne
// const user1 = await users.findOne({ _id: insertId });

// // find
// const users = await users.find({ username: { $ne: null } });

// // count
// const count = await users.count({ username: { $ne: null } });

// // aggregation
// const docs = await users.aggregation([
//   { $match: { username: "many" } },
//   { $group: { _id: "$username", total: { $sum: 1 } } }
// ]);

// // updateOne
// const { matchedCount, modifiedCount, upsertedId } = await users.updateOne(
//   username: { $ne: null },
//   { $set: { username: "USERNAME" } }
// );

// // updateMany
// const { matchedCount, modifiedCount, upsertedId } = await users.updateMany(
//   username: { $ne: null },
//   { $set: { username: "USERNAME" } }
// );

// // deleteOne
// const deleteCount = await users.deleteOne({ _id: insertId });

// // deleteMany
// const deleteCount2 = await users.deleteMany({ usename: "test" });