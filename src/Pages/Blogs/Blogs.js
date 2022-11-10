import React from "react";
import useTitleHook from "../../Hooks/useTitleHook";

const Blogs = () => {
  useTitleHook("Blogs");
  return (
    <div>
      <div className="mockup-window border bg-base-300 w-10/12 mx-auto">
        <p className="text-xl text-center">
          #Difference between SQL and NoSQL?
        </p>
        <div className=" px-4 py-10 w-11/12 mx-auto rounded-xl bg-base-200">
          At the most basic level, the biggest difference between these two
          technologies is that SQL databases are relational, while NoSQL
          databases are non-relational. Here are some basic and fundamental
          differences between SQL and Non-SQL database: <br />
          1. SQL databases are relational, NoSQL databases are non-relational.
          <br />
          2. SQL databases use structured query language and have a predefined
          schema. NoSQL databases have dynamic schemas for unstructured data.
          <br />
          3. SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable.
          <br />
          4. SQL databases are table-based, while NoSQL databases are document,
          key-value, graph, or wide-column stores.
          <br />
          5. SQL databases are better for multi-row transactions, while NoSQL is
          better for unstructured data like documents or JSON.
          <br />
        </div>
      </div>
      <div className="mockup-window border bg-base-300 w-10/12 mx-auto mt-5">
        <p className="text-xl text-center">#What is JWT? And how it works?</p>
        <div className=" px-4 py-10 w-11/12 mx-auto rounded-xl bg-base-200">
          JWT is the short form of JsonWebToken, which is used to share between
          two parties, (usually frontend and backend) to ensure security of the
          application. <br />
          JWT is a encrypted code which is provided to the user by the server
          while log in. It contains some data of the user and some claims.
          Claims are like some documents which assert the issuer of the token,
          the validity of it and what permissions the user has been granted.
        </div>
      </div>
      <div className="mockup-window border bg-base-300 w-10/12 mx-auto mt-5">
        <p className="text-xl text-center">
          #Differences between JavaScript and NodeJs?
        </p>
        <div className=" px-4 py-10 w-11/12 mx-auto rounded-xl bg-base-200">
          <div className="flex justify-between">
            <p className="w-3/4">
              1. Javascript is a programming language that is used for writing
              scripts on the website.{" "}
            </p>
            <p className="w-3/4">NodeJS is a Javascript runtime environment.</p>
          </div>
          <hr className="border border-gray-600"></hr>
          <div className="flex justify-between">
            <p className="w-3/4">
              2. Javascript can only be run in the browsers.
            </p>
            <p className="w-3/4">
              NodeJs allows to run JavaScript outside the browser.
            </p>
          </div>
          <hr className="border border-gray-600"></hr>
          <div className="flex justify-between">
            <p className="w-3/4">
              3. Javascript can run in any browser engine as like JS core in
              safari and Spidermonkey in Firefox.{" "}
            </p>
            <p className="w-3/4">
              V8 is the Javascript engine inside of node.js that parses and runs
              Javascript.{" "}
            </p>
          </div>
          <hr className="border border-gray-600"></hr>
          <div className="flex justify-between">
            <p className="w-3/4">4. It is basically used on the client-side.</p>
            <p className="w-3/4"> It is mostly used on the server-side.</p>
          </div>
          <hr className="border border-gray-600"></hr>
          <div className="flex justify-between">
            <p className="w-3/4">
              5. Some of the javascript frameworks are RamdaJS, TypedJS, etc.{" "}
            </p>
            <p className="w-3/4">
              Some of the Nodejs modules are Lodash, express etc. These modules
              are to be imported from npm.{" "}
            </p>
          </div>
          <hr className="border border-gray-600"></hr>
          <div className="flex justify-between">
            <p className="w-3/4">
              6. Javascript is capable enough to add HTML and play with the DOM.{" "}
            </p>
            <p className="w-3/4">
              Nodejs does not have capability to add HTML tags
            </p>
          </div>
          <hr className="border border-gray-600"></hr>
        </div>
      </div>
      <div className="mockup-window border bg-base-300 w-10/12 mx-auto mt-5">
        <p className="text-xl text-center">
          #How does NodeJS handle multiple requests at the same time?
        </p>
        <div className=" px-4 py-10 w-11/12 mx-auto rounded-xl bg-base-200">
          <div className=" px-4 py-10 w-11/12 mx-auto rounded-xl bg-base-200">
            NodeJS Web Server maintains a limited Thread Pool to provide
            services to client requests. Multiple clients make multiple requests
            to the NodeJS server. NodeJS receives these requests and places them
            into the EventQueue . NodeJS server has an internal component
            referred to as the EventLoop which is an infinite loop that receives
            requests and processes them. This EventLoop is single threaded. In
            other words, EventLoop is the listener for the EventQueue. So, we
            have an event queue where the requests are being placed and we have
            an event loop listening to these requests in the event queue. What
            happens next? The listener(the event loop) processes the request and
            if it is able to process the request without needing any blocking IO
            operations, then the event loop would itself process the request and
            sends the response back to the client by itself. If the current
            request uses blocking IO operations, the event loop sees whether
            there are threads available in the thread pool, picks up one thread
            from the thread pool and assigns the particular request to the
            picked thread. That thread does the blocking IO operations and sends
            the response back to the event loop and once the response gets to
            the event loop, the event loop sends the response back to the
            client. How is NodeJS better than traditional multithreaded request
            response model? With traditional multithreaded request/response
            model, every client gets a different thread where as with NodeJS,
            the simpler request are all handled directly by the EventLoop. This
            is an optimization of thread pool resources and there is no overhead
            of creating the threads for every client request.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
