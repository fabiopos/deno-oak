import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const books = new Map<string, any>();
books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Author",
});


const getTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  return await res.json();
}


const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/book", (context) => {
    context.response.body = Array.from(books.values());
  })
  .get("/book/:id", (context) => {
    if (context.params && context.params.id && books.has(context.params.id)) {
      context.response.body = books.get(context.params.id);
    }
  })
  .get('/todos', async (ctx) => ctx.response.body = await getTodos());


const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
console.log('Listening on 8080');

await app.listen({ port: 8000 });