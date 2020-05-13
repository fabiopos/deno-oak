import { query } from "./client.ts";

export async function findAll() {
  const result = await query("SELECT * FROM users;");
  return result.rowsOfObjects();
}

export async function findOne({ email }: { email: string }) {
  const result = await query(`SELECT * FROM users WHERE email =  '${email}';`);
  const user = result.rowsOfObjects();
  return user[0];
}

export async function insert({ email, name }: { email: string; name: string }) {
  const queryString = `INSERT INTO users VALUES( '${email}', '${name}');`;  
  const result = await query(queryString);
  return result;
}

export async function update({ email, name }: { email: string; name: string }) {
  const queryString = `UPDATE users SET name = '${name}' WHERE email = '${email}';`;
  const result = await query(queryString);
  return result;
}

export async function remove({ email }: { email: string }) {
  const queryString = `DELETE FROM users WHERE email = '${email}';`;
  const result = await query(queryString);
  return result;
}
