# What is Deno

## Introduction

```
"Dynamic Languages are the right tool for scientific computing", Ryan Dahl
```
Deno is secure Typescript runtime on v8 written by [Ryan Dahl ](https://en.wikipedia.org/wiki/Ryan_Dahl) (creator of NodeJS) he introduced Deno in ["10 Things I Regret About Node.js"](https://www.youtube.com/watch?v=M3BM9TB-8yA) talk on 2018

Dahl talked about the design problems in NodeJS and his regrets about it like Secutiry, GYP, the mdoule system, extensions in files among others.

The goals of Deno for Dalh were related to Security, he talked about the importance to allow the runtime flags to control the acesibility to the network or to the file system (--allow-net --allow-write).

The centralized module System in Node also represent a problem for managing packages, simplify the package manager taking advantage of ES modules is a better approach for Deno. No "node_modules" or "index.js" notion.

Deno is Typescript supported out ofthe box so we don't need to compile the .ts files beause it already support it.

Dalh mentioned his need to have an only Executable: "Ship a single executable with minimal linkage".

Miscelaneous at the top level also was mentioned as a Deno goal for example "await" at top-level and the use of console and browser semanthics is important for Deno.

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