# HTTP Server

The Node.js `http` core module is a built-in module that provides a set of functions and classes for creating HTTP servers and clients. It allows developers to build web applications, APIs, and other networked services using Node.js.

Here are some of the main features and components of the `http` module:

* **HTTP Server:** The `http.createServer()` method is used to create an HTTP server. It takes a request listener function as an argument, which will be called every time a new request is received by the server.

* **Request Object:** When a new request is received by the server, Node.js creates a new `http.IncomingMessage` object, which represents the incoming request. This object contains information about the request, such as the HTTP method (GET, POST, etc.), headers, and request body.

* **Response Object:** The `http.ServerResponse` object is used to send a response back to the client. This object contains methods for setting headers, writing data to the response body, and ending the response.

* **Routing:** The `http` module does not provide built-in routing capabilities, but it is often used in combination with other modules, such as express, to create a full-featured web framework with routing support.

* **Client Requests:** The `http` module also provides methods for making HTTP requests from a client. The `http.request()` method is used to create a new client request, and the `http.get()` method is a convenience method for making a GET request.

Here's a sample code to create a simple HTTP server using the http module:

1. Import the `http` module using the `require()` function:

```javascript
const http = require('http');
```
2. Use the `http.createServer()` method to create a new HTTP server. This method takes a callback function as an argument that will be executed whenever a new request is received by the server:

```javascript
const server = http.createServer((req, res) => {
  // request handling code goes here
});
```

3. Inside the request handler callback function, use the `res.writeHead()` method to set the status code and headers for the response. The status code should be set to `200` to indicate a successful response, and the `Content-Type` header should be set to `text/plain` to indicate that the response body will contain plain text:

```javascript
res.writeHead(200, {'Content-Type': 'text/plain'});
```

4. Use the `res.write()` method to write data to the response body. In this example, we'll write the string "Hello, World!" to the response body:

```javascript
res.write('Hello, World!');
```

5. Use the `res.end()` method to end the response and send it back to the client:

```javascript
res.end();
```

6. Finally, use the `server.listen()` method to start the server and make it listen on a specific port. In this example, we'll listen on port 3000:

```javascript
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```
That's it! This simple example demonstrates how to create a basic HTTP server using the Node.js http core module. You can expand on this example by adding more routes, handling POST requests, or connecting to a database.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello, World!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```
---

Here's an example of how to add routes to the previous example:

```javascript
const http = require('http');

const handleRequest = (req, res) => {
  // set default status code and content type
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  
  // handle requests for the home page
  if (req.url === '/') {
    res.statusCode = 200;
    res.write('Hello, World!');
    res.end();
  }

  // handle requests for the about page
  if (req.url === '/about') {
    res.statusCode = 200;
    res.write('This is the about page');
    res.end();
  }
  
  // handle requests for any other page
  res.write('404 Not Found');
  res.end();
}

const server = http.createServer(handleRequest);

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```
In this example, we've added some basic routing to handle requests for different pages on our website.

First, we set a default status code of 404 (Not Found) and content type of plain text. This will be used for requests that don't match any of our routes.

Next, we check the `req.url` property to see if the request is for the home page (`/`) or the about page (`/about`). If the request matches one of these routes, we set the status code to 200 (OK) and write a response message to the body using `res.write()`. Finally, we end the response with `res.end()`.

If the request doesn't match any of our routes, we simply write a "404 Not Found" message to the response body and end the response.

In this example, we've defined a separate function called `handleRequest` that contains the routing logic. We pass this function as an argument to `http.createServer()` to handle incoming requests.

Note that this approach makes it easier to organize and test your code, especially if you have a large number of routes. You can also define the `handleRequest` function in a separate file and import it into your main file for better code organization.