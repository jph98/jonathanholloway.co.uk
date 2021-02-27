---
template: post
title: Software Architecture for Engineers
date: 2021-02-27T12:48:04.798Z
excerpt: >-
  Software architecture is a concept that often misunderstood. Architecture is
  not just a technical concept. I like splitting architecture…
---
Software architecture is a concept that often misunderstood. Architecture is not just a technical concept. I like splitting architecture into three views when considering complex software systems:

*   **Business** — the business processes to be supported by one or more systems;
*   **Data** — the data processes to be supported by one or more systems;
*   **Applications** — the view of the entire system in terms of applications and how they talk to each other
*   **Technology** — the underlying technology view of the system

This comes from a framework called TOGAF, which is produced by the Open Group as a way of describing architecture at an enterprise level. In short, it’s big and complex with lots of documents, but contains some interesting concepts and tools that are useful when considering software architecture.

#### Architect is a role, not a title

The technical architect is a role within a project team, but since there can be many different teams in a software company it’s important to have consensus to some degree. That doesn’t mean using the same framework or language, but it does mean agreeing on a set of common practices and principles.

e.g. How something is deployed

e.g. How something is monitored

e.g. How a piece of software communicates with a database

#### Describing the Architecture

*   Use a wiki to document the architecture
*   Keep information in code if you can

#### Software Architecture Patterns and Anti-patterns

Patterns:

*   Pipes and Filters
*   Micro-services
*   Domain Driven

Anti-patterns:

*   Stovepipe System

[https://sourcemaking.com/antipatterns/software-architecture-antipatterns](https://sourcemaking.com/antipatterns/software-architecture-antipatterns)

#### Useful Diagrams

Architecture diagrams should be used sparingly and should focus on illustrating a specific detail — whether that’s components, sequence or something else.

Deployment Diagram

Component Diagram

Domain Model

#### Non-Functional Requirements

Non-functional requirements are key.

#### Guide Architecture with Guilds

  

#### In Summary

I used this presentation in Berlin back in 2016 to discuss these concepts and the role of the architect in software companies.

You can also find more about me and how I can help on my website:

[https://www.hwintegral.com/services](https://www.hwintegral.com/services)
