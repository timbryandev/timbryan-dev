---
title: "Get stuck in with Tim & Deno"
description: It's not the NodeJS killer, but it might go that way...
date: "2021-04-27"
modified_date: "2021-10-13"
image: /assets/images/posts/deno-logo.png
status: published
---

Deno? I hear you ask. Deno is a NodeJS rival/alternative that is sharply increasing in popularity, particularly after its [1.0.0](https://github.com/denoland/deno/releases/tag/v1.0.0) released in May 2020 (current version (as of April 2021) = [1.9.1](https://github.com/denoland/deno/releases/tag/v1.9.1)) and aims to be better than its predecessor and fix a lot of its well-known pitfalls.

## Table of Contents

- [Assumptions](#assumptions)
- [What is Deno?](#what-is-deno)
- [Install](#install)
- [Setup](#setup)
- [Getting started](#getting-started)
  - [Example I/O scripts and what they do](#example-io-scripts-and-what-they-do)
  - [Example React app](#example-react-app)
  - [Example of bundling and compiling to a single executable file](#example-of-bundling-and-compiling-to-a-single-executable-file)
- [What else can Deno do?](#what-else-can-deno-do)

## Assumptions

- I'm assuming you're already familiar with Javascript, NPM/Node and have some basic experience using a terminal environment (however, these aren't essential and will be explained briefly as we go).

- I'll also be assuming you're using a Mac and VSCode (as I am), but I'll try and keep instructions as broad as possible to support as many varied setups as possible.

- At the time of writing, everything is correct as of Deno V1.8.3. Given Deno is still relatively young, some parts of this article may no longer be correct and may need updating as and when needed.

## What is Deno?

Like NodeJs, Deno is a technology we can use to write "server-side Javascript". In many ways, it is extremely close to Node and I consider it to be a spiritual successor to Node. It shares the same creator and uses the V8 Javascript engine but differs in that it is implemented in Rust and supports both WebAssembly and Typescript by default (no need for a `tsconfig.json` or any other setup process!).

We even have support for some current [web standard APIs](https://github.com/denoland/deno/blob/main/cli/dts/lib.deno.shared_globals.d.ts) such as `fetch`, `addEventListener`, `removeEventListener`, `setInterval`, `clearInterval`, `dispatchEvent` and even has a `window` object that allows us to listen for lifecycle events such as

```javascript
window.onload = (e) => console.log("Howdy 🤠");
```

The most common use case I've seen for Deno is combining the pros of its server-side capabilities with ExpressJS for full-stack typescript applications, but the only real hands-on experience I've had with it is for building little tools for process automation and document transformations (generating CSVs, automate big copy/paste jobs etc...) but essentially whatever you can do with Node, Deno should be able to do it just as well!

### Deno's Standard Library & Third-Party Modules

Deno provides us with a set of standard modules (similar to how NodeJS has built-in modules such as `fs`, `path` etc) for common use cases such as `serve` from the http module via

```javascript
import { serve } from "https://deno.land/std@0.92.0/http/server.ts";
const server = serve({ hostname: "0.0.0.0", port: 8080 });
```

**Note**: I'm specifying `std@0.92.0` to ensure the correct version is used when others use my project. You can _safely_ omit the version and Deno will grab the latest version instead. In my case, omitting the version gave me the following `Warning Implicitly using latest version (0.94.0) for https://deno.land/std/http/server.ts`

A full list can be found at [https://deno.land/std](https://deno.land/std), along with a more detailed explanation on the Standard library from [https://deno.land/manual@v1.8.3/standard_library](https://deno.land/manual@v1.8.3/standard_library).

If you're looking for third-party modules (such as we'll be using to build a react app later), you'll be able to search for them via [https://deno.land/x](https://deno.land/x) in a similar way to using the [NPM](https://www.npmjs.com/search?q=react) repository

### No more NPM Packages/package.json = No more `node_modules`

![Diagram explaining how the node_modules folder bares more gravity than the sun, neutron star or black holes](/assets/images/posts/node_modules-meme.png)

Deno also aims to fix some of the main issues synonymous with its predecessor but can't be altered due to said faults being key to its architecture, hence the need for a clean slate. The elephant in the room being the NPM package dependencies, package.json and the hell they bring with them. Deno does away with all of this extra fat and opts for a much simpler way to import packages by allowing you to include them directly via the `require` syntax and the URL the package can be served from. For example, to use an external library for testing we can simply use the ES6 module syntax:

```javascript
// No need for `npm install`
import { assertEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";

assertEquals("hello", "hello");
assertEquals("world", "world");

console.log("Asserted! ✓");
```

The beautify of this is that we don't need to "install" our application, as the packages are only retrieved the first time you run the application which is then cached locally to save requesting them every time a file calls for it - akin to how `<script src="https://deno.land/std@0.92.0/testing/asserts.js">` would work in an HTML document.

#### Okay, so how do you manage dependencies for big projects?

If your project has a lot of dependencies, it may not make sense to add them to every file they are required in via the absolute URLs. This can be overcome by having a single file (`depts.ts` by convention) be the home of all the dependencies and export them as needed. For example, here is how the depts are managed in our `example-react` folder:

```javascript
// file: example-react/deps.ts

export * as ReactDOM from "https://jspm.dev/react-dom@17.0.0";
import * as React from "https://jspm.dev/react@17.0.0";

const { default: any, ...rest } = React;
const react = React.default;

export { react as React };
export { rest as react };
```

```javascript
// file: example-react/index.tsx

// nice import react from the depts file
import { React, react, ReactDOM } from "./deps.ts";
// regular import for our component
import App from "./App.tsx";

ReactDOM.render(
  <react.StrictMode>
    <App />
  </react.StrictMode>,
  document.getElementById("root")
);
```

**Note**: The downside to this is that unless the authors of your favourite NPM packages have made them available via some form of CDN or service, you may not be able to use them.

### No more callback hell

All async actions are promised based and having a top-level await means we don't need any extra boilerplate code to resolve our promises!

### Improved security measures

Deno is also secure by default. One example would be trying to log the current working directory of the filesystem by using `console.log(Deno.cwd());` in your script, then executing `deno run index.ts`, doing so will give you:

>

```bash
error: Uncaught PermissionDenied: read access to "/path/to/file", run again with the "--allow-read" flag
```

This means unless you, the developer, run the command and let the script access your filesystem, any requests to do so will result in errors and potentially prevent malicious code from being executed. You can specify more such as allowing write access to the disk, network access, plugin use etc. Here are some examples:

- `allow-env` allow environment access
- `allow-hrtime` allow high-resolution time measurement
- `allow-net=` allow network access
- `allow-plugin` allow loading plugins
- `allow-read=` allow file system read access
- `allow-run` allow running subprocesses
- `allow-write=` allow file system write access
- `allow-all` allow all permissions (same as -A)

For a full list of permissions, you can control/specify, see Deno [Permissions List](https://deno.land/manual/getting_started/permissions#permissions-list)

## Install

Instructions vary based on OS and how you manage your software/packages. The Deno manual has instructions for most OS's and package managers: [https://deno.land/manual/getting_started/installation](https://deno.land/manual/getting_started/installation)

For example, on my Mac, it was as simple as running `brew install deno`

## Setup

For setting Deno up for use via shell/cmd and for help setting up your IDE, see [https://deno.land/manual@v1.8.3/getting_started/setup_your_environment](https://deno.land/manual@v1.8.3/getting_started/setup_your_environment)

For my setup in VSCode, I just needed to add the [VSCode Deno](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno) extension and include the following in my `.vscode/settings.json`:

```javascript
{
  "deno.enable": true,
}
```

## Getting started

### Check the install worked

To test your installation and setup are working as intended, let's run the example code by running

```bash
deno run welcome.js
```

and if you see the welcome message, you know everything worked okay 🤠

### Example I/O scripts and what they do

**Note**: Make sure you've `CD`'d into the `example-io` folder for these

#### `deno run --allow-read example-read.ts`

This file demonstrates how we would use Deno to grab the contents of a text file

This also demonstrates how there is no extra setup for using TS and is supported by default

#### `deno run --allow-read --allow-write example-write.js`

This file demonstrates how we would use Deno to write the contents of a text file

Also, note the inclusion of exists imported from the FS in the Deno Standard Library

While Deno.write can overwrite the original file, we're doing this the long way round to demo how to import a Standard Library and use it

#### `deno test`

This file demonstrates how we would use Deno to write tests

Also, note the inclusion of imported assert functions from the Deno Standard Library

### Example React app

**Note**: Make sure you've `CD`'d into the `example-react` folder to try these out

For demo purposes, we'll be using Deno's version of create-react-app, available to use over at [https://deno.land/x/create_react_app@v0.1.2](https://deno.land/x/create_react_app@v0.1.2). Following the quick start guide from the module's README, we can be up and running as quickly as:

**Note** The first command uses the unstable flag, which is perfectly safe for our example, but you can find out more here: [https://deno.land/manual/runtime/stability](https://deno.land/manual/runtime/stability)

```bash
# Grab the Third-Party Library for generating create-react-apps
deno install -A --unstable -n deno-create-react-app https://deno.land/x/create_react_app/mod.ts

# Initialise an instance of a new react app
deno-create-react-app init <name-of-app>

cd <name-of-app>

# Run the project in dev mode
# -w, --watch, watch file change to rebuild, default is true
# -p, --port, server port, default is 8000
deno-create-react-app run -w -p 3000

# Deno also has a built-in linter we can use on our app:
deno lint --unstable --ignore="dist"

# Build the project to dist/build, your app is ready to deploy
deno-create-react-app build
```

And that's it for the create-react-app 🥳

### Example of bundling and compiling to a single executable file

**Note**: Make sure you've `CD`'d into the `example-compile` folder to try these out

**Note**: Up to now, all examples have been included in the repo but I haven't included the compiled curry-sums due to it's large size. Wanna see it? Make your own!

Essentially, `deno compile [--output <OUT>] <SRC>` creates a self-contained executable file based on your scripts.

In the example folder, you'll see our `index.ts` requires the `add.ts` and `subtract.ts`, which in turn each require the `curry.ts`. What compile lets us do is produce a single file with all of our required files combined inside of it - our four files become one!

How do we do that? In our case, running this should do it:

```bash
# Compile into a single executable
deno compile --unstable --output="./output/curry-sums" index.ts

# Run the executable we just made
./output/curry-sums
```

> Since the compile functionality is relatively new, the --unstable flag has to be set for the command to work.

And if we check inside the `output` folder we'll find out `curry-sums` file. To execute it, we can simply run `./output/curry-sums`, which should give us the same output as running just the index file (`deno run index.ts`) - the difference being that our `curry-sums` file is stand-alone and can be moved anywhere and will still work just fine!

This is great for portability and for protecting the source code when sharing with others, but it does come at a cost... In our case, our file comes to a less than modest 77.80MB (running the compile with the --lite command will use a slimmed-down runtime-only binary, but still creates a ~55MB file)! While NodeJS also has compiling options similar to this, they are produce even bigger outputs than that of Deno (usually 70+MB).

## What else can Deno do?

```bash
Tim.Bryan@AwesomeMachine example-react % deno --help
deno 1.9.1
A secure JavaScript and TypeScript runtime

Docs: https://deno.land/manual
Modules: https://deno.land/std/ https://deno.land/x/
Bugs: https://github.com/denoland/deno/issues

To start the REPL:

  deno

To execute a script:

  deno run https://deno.land/std/examples/welcome.ts

To evaluate code in the shell:

  deno eval "console.log(30933 + 404)"

USAGE:
    deno [OPTIONS] [SUBCOMMAND]

OPTIONS:
    -h, --help
            Prints help information

    -L, --log-level <log-level>
            Set log level [possible values: debug, info]

    -q, --quiet
            Suppress diagnostic output
            By default, subcommands print human-readable diagnostic messages to stderr.
            If the flag is set, restrict these messages to errors.
        --unstable
            Enable unstable features and APIs

    -V, --version
            Prints version information


SUBCOMMANDS:
    bundle         Bundle module and dependencies into single file
    cache          Cache the dependencies
    compile        Compile the script into a self contained executable
    completions    Generate shell completions
    coverage       Print coverage reports
    doc            Show documentation for a module
    eval           Eval script
    fmt            Format source files
    help           Prints this message or the help of the given subcommand(s)
    info           Show info about cache or info related to source file
    install        Install script as an executable
    lint           Lint source files
    lsp            Start the language server
    repl           Read Eval Print Loop
    run            Run a JavaScript or TypeScript program
    test           Run tests
    types          Print runtime TypeScript declarations
    upgrade        Upgrade deno executable to given version

ENVIRONMENT VARIABLES:
    DENO_AUTH_TOKENS     A semi-colon separated list of bearer tokens and
                         hostnames to use when fetching remote modules from
                         private repositories
                         (e.g. "abcde12345@deno.land;54321edcba@github.com")
    DENO_CERT            Load certificate authority from PEM encoded file
    DENO_DIR             Set the cache directory
    DENO_INSTALL_ROOT    Set deno install output directory
                         (defaults to $HOME/.deno/bin)
    DENO_WEBGPU_TRACE    Directory to use for wgpu traces
    HTTP_PROXY           Proxy address for HTTP requests
                         (module downloads, fetch)
    HTTPS_PROXY          Proxy address for HTTPS requests
                         (module downloads, fetch)
    NO_COLOR             Set to disable color
    NO_PROXY             Comma-separated list of hosts which do not use a proxy
                         (module downloads, fetch)
```
