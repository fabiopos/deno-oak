import { Application, Status } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";

const app = new Application();
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err);
  }
});
app.use(router.routes());
app.use(router.allowedMethods());

console.log("Listening on 8000");

await app.listen({ port: 8000 });
