import { Router } from "https://deno.land/x/oak/mod.ts";
import { findOne, findAll, insert, update, remove } from "./users.ts";
const router = new Router();
router
  .get("/users", async (context: any) => {
    context.response.body = await findAll();
  })
  .post("/users", async (context: any) => {
    const result = await context.request.body({
      contentTypes: {
        json: ["application/json"],
      },
    });

    const { email, name } = result.value;

    try {
      if (await findOne({ email })) {
        context.response.status = 400;
        context.response.body = "user already exists";
        return;
      }

      const res = await insert({ email, name });
      context.response.body = "user inserted";
    } catch (error) {
      context.response.status = 400;
      context.response.body = "something is wrong";
    }
  })
  .put("/users", async (context: any) => {
    const result = await context.request.body({
      contentTypes: {
        json: ["application/json"],
      },
    });

    const { email, name } = result.value;
    await update({ email,  name,  });
    context.response.body = 'user updated';
  })
  .delete("/users", async (context: any) => {
    const result = await context.request.body({
      contentTypes: {
        json: ["application/json"],
      },
    });

    const { email, name } = result.value;
    await remove({ email });
    context.response.body = 'user removed';
  });

export default router;
