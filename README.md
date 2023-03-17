# Node.js

## Introduction to Node.js
### What is Node.js ?
Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project! Node.js runs the V8 JavaScript engine, Google Chrome's core, outside the browser. This allows Node.js to be very performant. A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

### Why use Node.js ?
Node.js is a cross-platform runtime, perfect for a wide range of use cases. Its huge community makes it easy to get started. It uses the V8 engine to compile JavaScript and runs at lightning-fast speeds. Node.js applications are very scalable and maintainable. Cross-platform support allows the creation of all kinds of applications - desktop apps, software as a service, and even mobile applications. Node.js is perfect for data-intensive and real-time applications since it uses an event-driven, non-blocking I/O model, making it lightweight and efficient. With such a huge community, a vast collection of Node.js packages is available to simplify and boost development.

![I/O Examples](https://i.imgur.com/OtkVxIP.png)

The diagram shows that a single node process (the hexagon in the middle) can act as the broker between all of the different I/O endpoints (orange and purple represent I/O).

Usually building these kinds of systems is either:

difficult to code but yields super fast results (like writing your web servers from scratch in C)
easy to code but not very speedy/robust (like when someone tries to upload a 5GB file and your server crashes)
Node's goal is to strike a balance between these two: relatively easy to understand and use and fast enough for most use cases.

Node isn't either of the following:

* A web framework (like Rails or Django, though it can be used to make such things)
* A programming language (it uses JavaScript but Node itself isn't a language).

Instead, Node is somewhere in the middle. It is:

* Designed to be simple and therefore relatively easy to understand and use
* Useful for I/O-based programs that need to be fast and/or handle lots of connections

At a lower level, Node can be described as a tool for writing two major types of programs:

* Network programs using the protocols of the web: HTTP, TCP, UDP, DNS, and SSL
* Programs that read and write data to the filesystem or local processes/memory

What is an "I/O based program"? Here are some common I/O sources:

* Databases (e.g. MySQL, PostgreSQL, MongoDB, Redis, CouchDB)
* APIs (e.g. Twitter, Facebook, Apple Push Notifications)
* HTTP/WebSocket connections (from users of a web app)
* Files (image resizer, video editor, internet radio)

Node does I/O in a way that is asynchronous which lets it handle lots of different things simultaneously. For example, if you go down to a fast food joint and order a cheeseburger they will immediately take your order and then make you wait around until the cheeseburger is ready. In the meantime, they can take other orders and start cooking cheeseburgers for other people. Imagine if you had to wait at the register for your cheeseburger, blocking all other people in line from ordering while they cooked your burger! This is called blocking I/O because all I/O (cooking cheeseburgers) happens one at a time. Node, on the other hand, is non-blocking, which means it can cook many cheeseburgers at once.


Node handles I/O with: callbacks, events, streams, and modules.

If you learn how these four things work then you will be able to go into any module in Node core and have a basic understanding of how to interface with it. You'll learn more about these topics with your readme research and as we progress.

### History of Node.js
Node.js was written initially by Ryan Dahl in 2009, about thirteen years after the introduction of the first server-side JavaScript environment, Netscape's LiveWire Pro Web. The initial release supported only Linux and Mac OS X. Its development and maintenance were led by Dahl and later sponsored by Joyent.

### Node.js vs Browser
Both the browser and Node.js use JavaScript as their programming language. Building apps that run in the browser is entirely different from building a Node.js application. Even though it's always JavaScript, some key differences make the experience radically different.

Node doesn't have:

* a DOM (hallelujah)
* a window object, etc. (global variables are stored in the global object.)

because it's not run in the browser and doesn't have access to browser APIs!


### Running Node.js Code
If you type `node` into your command line (once you install Node.js) you will see a `>` prompt. You can now type JavaScript into your command line to experiment with JavaScript code. Press ctrl + c to exit the REPL mode.

The command-line command `node path_to_program.js` also allows you to execute JavaScript programs you've written (that don't use browser features) and will print what the program returns to the console. We recommend using this to test your code to get more comfortable with your command line.

## Modules
We split our code into different files to maintain, organize and reuse code whenever possible. A module system allows us to split and include code and import code written by other developers whenever required. In simple terms, a module is nothing but a JavaScript file.
There are three types of modules in Node.js:

1. Core Modules:

Node has a small core group of modules (commonly referred to as 'node core') that are presented as the public API that you are intended to write programs with. For working with file systems there is the `fs` module and for networks, there are modules like `net` (TCP), `http`, `dgram` (UDP).

In addition to `fs` and network modules, there are many other base modules in the Node core. There is a module for asynchronously resolving DNS queries called `dns`, a module for getting OS-specific information like the tmpdir location called `os`, a module for allocating binary chunks of memory called `buffer`, some modules for parsing URLs and paths (`url`, `querystring`, `path`), etc. Most if not all of the modules in Node core are there to support Node's main use case: writing fast programs that talk to file systems or networks.


We will mainly be using the following core modules this week:

* fs
* http
* path
* querystring
* url

The other types of modules:

2. third-party modules - there are thousands of open-source, 3rd-party Node modules created by other people.
3. your own modules!

### CommonJS Modules vs ES Modules
CommonJS and ES (EcmaScript) are module systems used in Node. CommonJS is the default module system. However, a new module system was recently added to NodeJS - ES modules. CommonJS modules use the `require()` statement for module imports, and `module.exports` for module exports while it's `import` and `export` for ES modules.

Visit the following resources to learn more:

* [CommonJS vs ESM](https://blog.logrocket.com/commonjs-vs-es-modules-node-js/)
* [Using CommonJS](https://www.javascripttutorial.net/nodejs-tutorial/nodejs-modules/)
* [Using ES Modules](https://blog.logrocket.com/es-modules-in-node-today/)
* [Using Modules](https://www.youtube.com/watch?v=pP4kjXykbio)
* [CommonJS vs. ES Modules: Modules and Imports in NodeJS](https://reflectoring.io/nodejs-modules-imports/)

## NPM
You can download useful 3rd-party modules (also known as "packages") from the Node Package Manager (npm). It's a tool, installed with Node, for managing Node's ecosystem of modules in your projects. It allows us to install tools, and packages as dependencies for our projects, and also publish our packages.

Anyone can create a new Node module that adds some functionality and publish it to npm. As of the time of this writing, there are over 2 million modules on npm [resource here](http://www.modulecounts.com/).

npm comes with its command-line interface you can use in your terminal while within your relevant project folder. Its main commands are:

* `npm init`: Initialise a package and create a `package.json` with the definition of that package.
* `npm search MODULE_NAME`: Search a module in the npm registry.
* `npm install MODULE_NAME`: Install MODULE\_NAME locally.
* `npm install -g MODULE_NAME`: install MODULE\_NAME globally.
* `npm install MODULE_NAME`: install MODULE\_NAME locally and add it as a dependency in the package.json.
* `npm install -D MODULE_NAME`: install MODULE\_NAME locally and add it as a development dependency in the package.json. i.e. a dependency that is only needed for development and not the live version of the project.

### package.json

You can initialize Node within your project by calling `npm init` in the terminal. You will get
a series of prompts, feel free to press enter through them or answer them.

The `package.json` created by `npm init` contains meta-information about your project, including any third-party modules you install (with the use of `npm install`), and will install a Node virtual environment within your project under a folder called `Node_modules`. This is where all the Node modules are located in your project.

### Installing modules

If you use `npm install MODULE_NAME` now it will install the named module into your project. You will now be able to find it in the `node_modules` folder and it will be listed under the dependencies in your `package.json`.

Be sure to add `node_modules` to your list of files to ignore on .gitignore or it will be pushed up
when you commit to Git Hub. When you deploy your project on a server, it will use the `package.json` to install its Node virtual environment and `node_modules` folder, so no need to worry!

note: use global module installations sparingly and only for development purposes. Unless you install them locally to the project, they won't appear in your `package.json` and so won't be installed on the server when you deploy the project.

## Error Handling

## Asynchronous Programming

## Working with Files

## Command Line Apps 

### Command Line Args - process.argv


## HTTP Server

## Testing

## Threads

## Streams

## More Debugging
### Memory Leaks
#### Garbage Collection
