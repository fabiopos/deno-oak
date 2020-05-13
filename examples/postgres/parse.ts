import { Client } from "https://deno.land/x/postgres/mod.ts";
import "https://deno.land/x/dotenv/load.ts";
export async function findAll() {
  const client = new Client({
    user: "postgres",
    database: "deno",
    hostname: "172.17.0.3",
    password: Deno.env.get("PGPASSWORD"),
    port: 5432,
  });
  await client.connect();
  const result = await client.query("SELECT * FROM users;");
  await client.end();
  return result.rowsOfObjects();
}


