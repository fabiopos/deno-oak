import { Client } from "https://deno.land/x/postgres/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const client = new Client({
  user: Deno.env.get("PGUSER"),
  database: Deno.env.get("PGDATABASE"),
  hostname: Deno.env.get("PGHOST"),
  password: Deno.env.get("PGPASSWORD"),
  port: 5432
});

export async function query(queryString:string){
  await client.connect();  
  const result = await client.query(queryString);
  await client.end();
  return result;
}
