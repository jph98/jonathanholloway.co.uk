---
template: post
title: A Micro-Services Checklist
date: 2020-10-02T08:18:39.250Z
excerpt: >-
  Embarking on the micro-services journey can be a little daunting. Lots of
  people walk into this without a complete understanding of what…
thumb_img_path: images/A-Micro-Services-Checklist/1*IdG1HKkU3Zqx7gzawnPjoQ.png
---
Embarking on the micro-services journey can be a little daunting. Lots of people walk into this without a complete understanding of what they’re getting themselves into.

This checklist aims to provide you with a list of considerations before you embark on that journey. Stick these in your backpack on your journey, pack some sandwiches as well.

*   The Approach — Greenfield and Brown-field
*   Handling Complex Business Processes — Orchestration
*   Handling Complex Business Processes — Choreography
*   Relational Databases Are Not a Panacea
*   Version your API and Messages (semantic all the way)
*   Developer Build and Release Effort
*   Observability — Service Correlation ID’s Are Imperative
*   Shared libraries cause coupling!

* * *

I’ve had the experience of a few “service-oriented” architectures in my time, both green-field builds and inherited brown-field builds.

*   A **fintech** (Java-based) message archive, index, search platform for Petabyte scale - 2008;
*   A **healthcare** platform for drug modelling and reporting — 2011;
*   **ERP** platform (Java-based) to support eCommerce applications (web/mobile) - 2013;
*   Several (Javascript/Node.js, Python and Java) **platforms** in the mar-tech, ad-tech, fintech, healthcare platform space - 2016 onwards.

I say, “service-oriented” because some of these came before the micro-services boom, but we had to solve the same problems. Were they micro? — no. They were platforms with several services (call them macro-service platforms).

In the last four years, I’ve carried out audits where businesses are **unsure of the in-progress approach** or businesses that want to **adopt micro-services as a new approach**. I’ve definitely recommended **against** adopting micro-services in some cases as well…

### Monolith vs Services

There’s absolutely nothing wrong with building a monolith — in some situations it may actually be better if you’re a team of 1–10 people:

*   **Less operational overhead** in terms of managing source code in a VCS (think git clone, branch operations, running build commands)
*   **A reduced set of components** to worry about in a production operations environment;
*   **A structure that’s easier to navigate** (architectural concerns aside), debug and reason about in a development environment (although you need big developer machines with lots of RAM);
*   **Easier to build** for less experienced teams with less room to make mistakes around concepts you might not have experience with (orchestration etc…).

The key benefits of micro-services from my standpoint are:

*   **Flexibility** with multiple components written in different languages, frameworks and libraries. Bear in mind here, however the implication that new developers have to be polyglots.
*   **Smaller components** that you can build and deploy in a quicker manner;
*   **Independence** which means you can scale specific services out in a more cost-effective manner;
*   **Reduced performance profiles —** think about memory usage (i.e big heap sizes with JVM’s), CPU and I/O.
*   **Increased reliability** — if one service fails, it doesn’t take everything down, but other services will need to be resilient to other components failed.

I won’t go into detail with serverless here — that’s a topic for another day, but there is definitely an overlapping set of concerns here. There’s also a very different set of concerns.

![](/images/A-Micro-Services-Checklist/1*IdG1HKkU3Zqx7gzawnPjoQ.png)

### Micro-services Checklist

What do we need to consider when we’re building micro-services.

#### The Approach — Greenfield and Brown-field

There are a few approaches to building a green-field application in a micro-services approach:

*   Build services out bottom-up in the smallest possible way — services do one-thing;
*   Start with a monolith and split into a few services;

My approach and recommendation - start with the latter, especially if you’re a seed-funded startup (your goal is to find product/market fit and worry about scale later). If you go bottom-up and split things out from the start, then you’ll end up with a huge number of services, database schemas and a whole heap of pain. Evolve the services out and identify a need for creating a new service. Consider the [bounded contexts](https://docs.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis) and put in place a **plan for building-out.** That’s good enough for now.

If you already have a monolith, or have inherited one, and are looking to rearchitect, start with the bounded context approach:

*   Do some analysis with a white-board;
*   Identify the first three services you would separate;
*   Look at the dependencies, how you would break them.

#### Handling Complex Business Processes — Orchestration

You can’t do everything synchronously with REST or with RPC-style. Why? Well, it’s fine for simple services where one service talks to another. However, when you have to call multiple services to do something then it becomes problematic. Take a POS system and placing an order, you would have to:

*   Create a contact record for the customer purchasing (new and existing accounts);
*   Lookup the product that needs to be purchased;
*   Check inventory for the item to ensure it’s in-stock — decrement inventory;
*   Create an order with several order line items;
*   Take payment for the item;
*   Fulfill and dispatch the order via your logistics system;
*   Send invoice amount to your accounting system.

With these scenarios, you’re going to run into trouble when one of these steps fails. If you can’t take payment, but the item is shipped, then what next? You could

*   Handle this operationally by flagging errors to a team who can then intervene manually to sort the problem out.
*   Take the transactional approach and attempt to roll everything back — that also introduces further complexity and required error handling, however.
*   Distributed transaction management is slow, doesn’t scale, and is expensive.

There are two other options in micro-services:

*   Orchestration — tell each service what to do synchronously;
*   Choreography — broadcast an event to each service and have it do what it needs to do;

A simple orchestration solution may look like this:

*   Maintain a list of states, a workflow, and a set of transitions for the given business process;
*   As each step is completed/failed, mark the state as complete in your workflow or retry accordingly.

Camunda provides a solution here ([Zeebe](https://zeebe.io/)) for orchestrating across several micro-services or indeed serverless units (e.g. AWS Lambda). This provides a bit more control and we can do failure handling using exponential backoff.

#### Handling Complex Business Processes — Choreography

We’ve covered one of the problems with synchronous operations above. In some cases, asynchronous operations may be a better way to do things, especially if you want to notify several services about a change without coupling a service to them directly. Instead, we can send events (Create Order) and have services react to this by carrying out what they need to do, i.e. fulfilling their part of the business process.

There’s a detailed overview of this here for those that want to read more

[**The Microservice Workflow Automation Cheat Sheet**  
*Your company might want to go for a microservice architecture and apply workflow automation. I do not go into the…*blog.bernd-ruecker.com](https://blog.bernd-ruecker.com/the-microservice-workflow-automation-cheat-sheet-fc0a80dc25aa "https://blog.bernd-ruecker.com/the-microservice-workflow-automation-cheat-sheet-fc0a80dc25aa")[](https://blog.bernd-ruecker.com/the-microservice-workflow-automation-cheat-sheet-fc0a80dc25aa)

#### Relational Databases Are Not a Panacea

Relational databases are not the only solution for your services. In fact, they might be wholly unsuited to the problem at hand. They might work well for a warehouse system — fine. However, for CRM it’s not a great choice, especially if you need to run complex queries with lots of filters.

Audit trail information is also not a great thing to store in a relational database. They grow indefinitely and can bring your database to a screeching halt — you can log that information and make it searchable another way — think S3 and Athena.

#### Version your API and Messages (semantic all the way)

You have to version your API right? It’s a sensible thing to do, but you will also want to version your messages in your message queues as well.

If you make changes to the message format (new fields) then you’ll have to drain/process old format messages before provisioning the new service and message format!

Make use of [semantic versioning](https://semver.org/) in this case for both API and consider your rollout strategy carefully.

#### Developer Build and Release Effort

If you have a multi-repository/polyrepo setup, then multiple services are going to be painful without tooling. Think about:

*   git clone
*   git branch
*   make change in this service (and dependent ones if that’s your situation)
*   build the service
*   change version number
*   git commit and push

And now multiply this by the number of micro-services you’re planning (in my case circa 50). That means you’re going to have to carry this out for a given change across multiple services above.

Mono-repos make this easier because you just have to branch once for all services. The debate between which is better rumbles on, but for me, it’s mono-repo all the way OR multiple mono-repos based on a given pattern (e.g. all my application services, data services etc…)! Bon Voyage!

[**Mono- or Multi-repo?**  
*One big repo, or lots of smaller repos? A look at the pros and cons, and my thoughts and experience of using both for…*medium.com](https://medium.com/@johnclarke_82232/mono-or-multi-repo-6c3674142dfc "https://medium.com/@johnclarke_82232/mono-or-multi-repo-6c3674142dfc")[](https://medium.com/@johnclarke_82232/mono-or-multi-repo-6c3674142dfc)

#### Observability — Service Correlation ID’s Are Imperative

Distributed tracing between lots of services requires you to piece together logs from those services. Correlation ID’s are invaluable here if you’re doing micro-services. We just need a unique identifier that we include in the log information relating to the user and the business process.

If you don’t have this then debugging and tracing is going to be, well, erm fun.

Observability is even more important when you have lots of services and you need to think about what information is required in an operational situation — think 9pm on a Friday evening.

Great observability, decent logging, solutions for monitoring and alerting and searching your logs (e.g. [ELK](https://www.elastic.co/what-is/elk-stack)) definitely help here.

Nobody wants an undebuggable system. Charity Majors talks about this here:

[**What Is Observability & How to Measure the Quality of Microservices**  
*Honeycomb's CTO and coauthor of Database Reliability Engineering Charity Majors joins me on this episode of Semaphore…*semaphoreci.com](https://semaphoreci.com/blog/observability-measuring-microservices "https://semaphoreci.com/blog/observability-measuring-microservices")[](https://semaphoreci.com/blog/observability-measuring-microservices)

#### Shared libraries cause coupling!

You have a common library that’s shared across all services. It may be utility classes, or it may be a common set of domain classes. Split these into small libraries. Don’t be tempted to have one single acme-commons library that’s shared. Whenever you want to change it, you have to change everything that references it! You might want to relax your approach here to share everything.

You can on the other hand adopt a shared-nothing approach to structuring your services in terms of domain objects and database:

[**A shared-nothing approach to serverless microservice ecosystems on AWS**  
*In this post I will cover shared-nothing design patterns using AWS cloud native tools such as API Gateway, Lambda, SNS…*medium.com](https://medium.com/carsales-dev/a-shared-nothing-approach-to-serverless-microservice-ecosystems-on-aws-f45d44860acd "https://medium.com/carsales-dev/a-shared-nothing-approach-to-serverless-microservice-ecosystems-on-aws-f45d44860acd")[](https://medium.com/carsales-dev/a-shared-nothing-approach-to-serverless-microservice-ecosystems-on-aws-f45d44860acd)

#### Pragmatic Approach to Conway’s Law (Services > Teams)

Design your teams around your services they say. Well, that’s all good, but if you have 37 services and 15 developers it’s a little harder. Not everyone has the capacity to split services directly to teams. You might need to have one team own multiple services if you don’t have enough developers, or indeed own specific business processes.

Team Topologies is a good read here for people wanting to read up on how to organize their tech-teams.

[https://teamtopologies.com/](https://teamtopologies.com/)

### Service Mapping

Big up-front design sucks — sure, but consider the services you might need and document them as part of your architecture guild as you discover and evolve them. I’ve published a simple service-canvas project on Github here:

[**jph98/service-canvas**  
*Service map tool is a small tool for mapping out (micro) service architecture in terms of your API's, observability…*github.com](https://github.com/jph98/service-canvas "https://github.com/jph98/service-canvas")[](https://github.com/jph98/service-canvas)

There’s a generate.py script that will iterate through all of the template/\* yaml files and generate a pretty HTML page for you. If you want to create a new service copy service-example.yml into template/name.yml and document it in terms of:

*   **Capabilities —** what capabilities this service has;
*   **Commands** — both synchronous and asynchronous for this service
*   **Queries** — what queries this exposes (read operations)
*   **Published Events** — what events this emits
*   **Non Functional Requirements** — uptime, throughput and various SRE principles;
*   **Observability** — key metrics for this service;
*   **Dependencies** — what this invokes downstream and what events this service subscribes to.

![](/images/A-Micro-Services-Checklist/1*S4kKdF2fX4QN3VlpoGBuWw.png)

### In Conclusion

You learn a lot from your first micro-service experience — but walking into it without understanding the above items is a mistake.

Don’t trivialize the build, don’t think you can organically evolve and discover and fix these problems. Do your research first, form opinions, and then talk to people who’ve done this before.

Don’t start coding and hope for the best!

Observability, resilience, co-ordination, failure handling, performance etc… should all be reasoned about when developing a new service. Service Canvas provides you with a view of this and way to develop

If you want to learn more about micro-services then I strongly suggest:

*   Sam Newman’s book on [Building Microservices](https://www.amazon.co.uk/Building-Microservices-Sam-Newman/dp/1491950358) (I still remember asking about distributed transactions at a conference);
*   Chris Richards book on [Microservice Patterns](https://microservices.io/book) and his website [microservices.io](https://microservices.io/)

Or, you can give me a call and talk with me about this. I offer the first half an hour for free and then help in a fractional CTO capacity in terms of guidance. I also provide a review of your current situation and a set of recommendations.

More info about me here:

[**Jonathan Holloway**  
I work with startups, scaleups, venture builders and investors internationally on product/engineering challenges based on 20 years experience as an engineer, architect, engineering manager and commercially minded CTO. www.jonathanholloway.co.uk](https://www.jonathanholloway.co.uk/ "https://www.jonathanholloway.co.uk/")[](https://www.jonathanholloway.co.uk/)
