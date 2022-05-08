import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <h2 className="text-center text-primary my-5">Questions And Answers</h2>
      <h4 className="text-success">
        1. Difference between javascript and nodejs
      </h4>
      <p>
        JavaScript is a simple programming language that runs in any browser
        JavaScript Engine. Whereas Node JS is an interpreter or running
        environment for a JavaScript programming language that holds many
        excesses, it requires libraries that can easily be accessed from
        JavaScript programming for better use. JavaScript is normally used for
        any client-side activity for one web application. An activity can be
        addressing business validation or dynamic page display in some schedule
        time interval or basic Ajax call kind of task. Those are used for a
        maximum time for any web application. Whereas Node JS mainly used for
        accessing or running any operating system for non-blocking operation. An
        operation like creating or executing a shell script, or getting some
        specific hardware-related information on one call or installed
        certificate details in the system or a lot of define task is
        non-blocking on an operating system.
      </p>
      <h4 className="text-success">
        2. When should you use nodejs and when should you use mongodb
      </h4>
      <p>
        MongoDB and NodeJS are two different technologies. MonogDB is a database
        system which gives you a chance to efficiently store documents in a
        database and to perform operations like data updates, or to search
        documents by some criterias.Nodejs is a Javascript engine that you can
        write any application you want with (by programming in the Javascript
        language). It runs your Javascript code. Most commonly, it is used to
        build servers that can respond to web requests, though it can be used
        for lots of other types of code too.MongoDB is a database engine. Code
        within some application or server uses MongoDB to save, query or update
        data in a database. There are many web servers built with nodejs that
        will then use MongoDB for storing data.
      </p>
      <h4 className="text-success">
        3. Differences between sql and nosql databases
      </h4>
      <p>
        SQL databases are vertically scalable, while NoSQL databases are
        horizontally scalable. SQL databases are table-based, while NoSQL
        databases are document, key-value, graph, or wide-column stores. SQL
        databases are better for multi-row transactions, while NoSQL is better
        for unstructured data like documents or JSON. SQL database schemata
        always represent relational, tabular data, with rules about consistency
        and integrity. They contain tables with columns (attributes) and rows
        (records), and keys have constrained logical relationships. NoSQL
        databases need not stick to this format, but generally fit into one of
        four broad categories:
      </p>
      <h4 className="text-success">
        4. What is the purpose of jwt and how does it work
      </h4>
      <p>
        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
        compact and self-contained way for securely transmitting information
        between parties as a JSON object. This information can be verified and
        trusted because it is digitally signed. It is an open standard used to
        share security information between two parties — a client and a server.
        Each JWT contains encoded JSON objects, including a set of claims. JWTs
        are signed using a cryptographic algorithm to ensure that the claims
        cannot be altered after the token is issued. RSA is a popular algorithm
        for asymmetric (public key) encryption that was established more than 40
        years ago. Encrypting a JWT for a given recipient requires their public
        RSA key. The decryption takes place with the corresponding private RSA
        key, which the recipient must keep secret at all times.
      </p>
    </div>
  );
};

export default Blogs;
