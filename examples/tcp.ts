const listener = Deno.listen({ port: 8080 });
console.log("listening on 0.0.0.0:8080");
for await (const conn of listener) {
  await listener.accept();
  Deno.copy(conn, conn);
}