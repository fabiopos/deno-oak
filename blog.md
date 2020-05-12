# What is Deno

## Introduction

```
"Dynamic Languages are the right tool for scientific computing", Ryan Dahl
```
---
Deno is secure Typescript runtime, written mainly by [Ryan Dahl ](https://en.wikipedia.org/wiki/Ryan_Dahl) (creator of NodeJS) he introduced Deno in ["10 Things I Regret About Node.js"](https://www.youtube.com/watch?v=M3BM9TB-8yA) talk on 2018

Dahl talked about the design problems in NodeJS and his regrets about it, like Security, for example, Node doesn’t require access to write files and that becomes a problem when you are using a lot of plugins that are not yours. 

Just starting a project from scratch the design has two problems, the node_modules folder, which has a lot of folders storing dependencies for node and a centralized “package.json” file which is responsible for the register, maybe that’s no so sleek.

Deno is looking to simplify the package manager taking advantage of ES modules - I think it is a better approach - just importing the modules - inspired by GoLang - from an URL. That means no more "node_modules" or "package.json".

One of the goals of Deno - for Dalh - was related to Security, he talked about the importance to allow the runtime flags to control the accessibility to the network or to the file system (--allow-net --allow-write).

Deno is Typescript supported out of the box so we don't need to compile the .ts files because it already supports it. But that doesn’t mean you cannot have javascript files in your project, that means if you want to start writing on Typescript, you are ready from the beginning.

Dahl mentioned his need to have an only Executable: "Ship a single executable with minimal linkage". And that makes sense when you take a look fo some tools of Deno, like the [bundle tool](https://github.com/denoland/deno/blob/master/docs/tools/bundler.md), for example.

Miscellaneous at the top level also was mentioned as a Deno goal, we can use "await" reserved word at top-level - is awesome - in this way you don’t need to wrap it into an async task.  Additionally most of the browser functionalities are present, just take a look at [this](https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts). 

[According to Deno tweet](https://twitter.com/deno_land/status/1260199156037169153?s=20) on May 12nd his release is ready to go and it's good to take a look how it works and what Deno offer to us.

## Installation

To install Deno we need to follow the instructions in Deno [homepage](https://deno.land/), an example in bash installation could be:

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Then we need to configure our .bashrc to include Deno on the path and that's all. So far, we are ready to run Deno, so let's see how is it going.

## Getting started

Let's try a simple script creating a main.ts file and writting some code to see how to run it.

```javascript
// main.ts
console.log('Hello world)
```
```bash
# terminal
deno run main.ts
```
Notice we don't need to configure the .ts compilation, Deno does by default.

What about a HTTP server, first we need to import the package:

```javascript
// main.ts
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
```
```javascript
// main.ts
// ...
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
```

Let's run it:
```bash
# terminal
deno run main.ts
```
```bash
# terminal output
error: Uncaught PermissionDenied: network access to "127.0.0.1:8000", run again with the --allow-net flag
```

Deno is secure by default, so you will need to add some flags to allow network access or file reading depending what you need, for this example we need `--allow-net` flag.

```bash
# terminal
deno run --allow-net main.ts
```

That's how we have an HTTP server up and running so far, but what about package manager, if we need GraphQL for example?

## Importing 3rd Party modules with Pika

This is time to introduce a popular webpage to allow us to find ES package modules, it's [Pika](https://www.pika.dev/search).

Let's see how to import GraphQL.

```javascript
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from "https://cdn.pika.dev/graphql@^14.6.0";
```
So simple, and we know exactly where this package come from.

## Can you use NPM modules?
Yes, but they must be ES written module.

## Async Everywhere?
You don't need to wrap await in a async function, just using await reserved word is enough for Deno to handle async/await tasks.

### Code Example Async
We can use fetch out of the box as await, so doing request is easier in Deno, let's see an example:

```javascript
const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
const json = await res.json();
```

## Release Date
According to [`@deno_land`](https://twitter.com/deno_land) on May 13rd will be released the v-1.0.0 of Deno, at the moment of this post is on [v1.0.0rc3](https://github.com/denoland/deno/releases/tag/v1.0.0-rc3) has some fizes posted in.

If you already have Deno installed you can use `deno upgrade` to upgrade.

## References

* [Deno 1.0: What you need to know
](https://blog.logrocket.com/deno-1-0-what-you-need-to-know/)  - blog post
* [10 Things I Regret About Node.js ](https://www.youtube.com/watch?v=M3BM9TB-8yA) - conference

### Credits

This blog post is powered by [FullStackLabs](https://www.fullstacklabs.co/) you can find the most recent version there.