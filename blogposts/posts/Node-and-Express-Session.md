---
template: post
title: Node and Express Session
date: 2020-03-31T20:21:17.676Z
excerpt: >-
  Session handling for simple server-side apps can be provided in Node.js and
  Express by making use of the express-session module.
thumb_img_path: images/Node-and-Express-Session/1*TcCpAV1F0NuQIak3aDOQnA.jpeg
---
Session handling for simple server-side apps can be provided in Node.js and Express by making use of the express-session module. Let’s look at a concrete example of setting this up with the various configuration options. Hurrah!

![](/images/Node-and-Express-Session/1*TcCpAV1F0NuQIak3aDOQnA.jpeg)

<figcaption>Photo by <a href="https://unsplash.com/@chrispanas?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" data-href="https://unsplash.com/@chrispanas?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" class="markup--anchor markup--figure-anchor" rel="noopener" target="_blank">chris panas</a> on&nbsp;<a href="https://unsplash.com/s/photos/lock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" data-href="https://unsplash.com/s/photos/lock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" class="markup--anchor markup--figure-anchor" rel="noopener" target="_blank">Unsplash</a></figcaption>

[**expressjs/session**  
*This is a Node.js module available through the npm registry. Installation is done using thenpm install command: $ npm…*github.com](https://github.com/expressjs/session "https://github.com/expressjs/session")[](https://github.com/expressjs/session)

#### Setup of Express-Session

In order to setup express-session you need to do the following:

1.  **Enable** express-session in your **app.js file or main entry point**
2.  **Create middleware** that is injected into each route that checks for the presence of a piece of information in the session
3.  **Choose your Store** correctly, by default express-session uses **MemoryStore** as the chosen solution. This isn’t intended to be used in production, you’re better off using Firestore (if using Firebase) or Redis or something else.

#### Enabling Express-Session

To enable express-session you just need the following:

<script src="https://gist.github.com/jph98/bd3b4399e86926716664ea30147a893b.js"></script>

<figcaption>Initialising express-session with</figcaption>

There are a few key pieces of information here to be aware of with express:

*   *name: ‘nameofthesession’ —* the name of the session id cookie
*   *secret: ‘something’ —* used to sign the session cookie, use something secure!
*   *resave*: false — Forces the session to be resaved back to the session store if not modified (if set to true);
*   *saveUnInitialized: false* — This forces a new session to be saved when it is created new, before being modified;
*   *secure: false* — If this is set to ‘true’ during development then you **need to ensure** you have https enabled, otherwise **a new session id** will be generated each time;
*   *maxAge: 60000* — This is the **max-age of the cookie in ms**, so make sure you set it appropriately, in my case about 60s/1min.

#### Create Your Middleware

By creating a small piece of middleware for Express Session you can check for the presence of the session and handle login/logout accordingly.

In the following example we look for the profile (created when the user logs in successfully). If we don’t find that profile we redirect to the login page for the user to authenticate with their credentials. Easy!

<script src="https://gist.github.com/jph98/a8ab74aad8de2d2d73a599b319c7b575.js"></script>

<figcaption>Session Checker Middleware</figcaption>

Finally, we need to inject the middleware into our routes. Make sure you don’t inject this into the login, logout routes however!

<script src="https://gist.github.com/jph98/025b26b71cc5d89ab92d17c9705a2992.js"></script>

<figcaption>Using Middleware in a route</figcaption>

Just to be clear, here’s our login route with an example of setting the item in the session:

<script src="https://gist.github.com/jph98/e30f3f6295fbb587ba164652b3063a0d.js"></script>

<figcaption>Login</figcaption>

Finally when we logout we can clear the session by destroying it as follows:

<script src="https://gist.github.com/jph98/907e0f81193ea922b3a278df8f23d441.js"></script>

<figcaption>Logout</figcaption>

#### Store Choice

There’s a full list of the various session store on the express-session Github page here (at the bottom):

[**expressjs/session**  
*This is a Node.js module available through the npm registry. Installation is done using thenpm install command: $ npm…*github.com](https://github.com/expressjs/session "https://github.com/expressjs/session")[](https://github.com/expressjs/session)

#### Axios Gotchas

If you’re using Axios to talk to an API, there’s a bit of a gotcha here, make sure you set the following to have Axios send cookies through in requests:

> axios.defaults.withCredentials = true;

That’s all folks!
