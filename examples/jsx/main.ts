// Copyright 2019-2020 Yusuke Sakurai. All rights reserved. MIT license.
import { createApp, serveJsx } from "https://servestjs.org/@v1.0.0-rc2/mod.ts";
const app = createApp();
// .jsx/.tsx files in ./pages directory will be dynamically imported
// and rendered component served as html
app.use(serveJsx("./pages", (f) => import(`./${f}`)));
app.listen({ port: 8899 });