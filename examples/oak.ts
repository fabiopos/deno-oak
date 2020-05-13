import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const books = new Map<string, any>();
books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Author",
});

const router = new Router();
router
  .get("/", (context:any) => {
    context.response.body = "Hello world!";
  })
  .get("/book", (context:any) => {
    context.response.body = Array.from(books.values());
  })
  .get("/book/:id", (context:any) => {
    if (context.params && context.params.id && books.has(context.params.id)) {
      context.response.body = books.get(context.params.id);
    }
  }) 


const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
console.log('Listening on 8080');

await app.listen({ port: 8000 });