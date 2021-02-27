---
template: post
title: React Context Insights
date: 2021-02-27T12:48:04.687Z
excerpt: >-
  I’ve finally ended up diving into React Context as a simple state management
  solution in a web application that I’ve recently built.
---
I’ve finally ended up diving into React Context as a simple state management solution in a web application that I’ve recently built. 

There’s lots of contrived examples out there that aim to describe what it is and how to use it. I want to start with the concepts and explaining those before looking at an example.

You don’t need to have used Redux, MobX or any other state management solution as a pre-requisite to this. You do need to understand React Hooks — for that take a look at my other article.

#### Concepts

*   Reducers — manipulate state based on an action.
*   Providing a store (with context and provider) — where your state lives to be accessed by other components
*   Contexts
*   Providers
*   Consumers
