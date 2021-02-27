---
template: post
title: Technical Documentation and Developer Onboarding
date: 2020-01-14T18:10:23.741Z
excerpt: An introduction to improving developer onboarding
thumb_img_path: >-
  images/Technical-Documentation-and-Developer-Onboarding/1*UvnkO0QBfQkz6EdhVotlzQ.jpeg
---
### Introduction

Writing technical documentation is something most developers hate to do. They want to write code and solve problems. People think documentation is annoying to write, rarely up to date and never read. What is considered good in the documentation world, we’re going to cover the following:

*   Internal Technical Documentation
*   Technical Onboarding — Dev Environment
*   Learning a New Codebase
*   Developer “Feature” Certification/Tr
*   New Developer FAQ’s

![](/images/Technical-Documentation-and-Developer-Onboarding/1*UvnkO0QBfQkz6EdhVotlzQ.jpeg)

For open-source software, generally, there’s a great deal of documentation around to help you learn about it. After all, the end-user (the developer) is the target audience, and you want technical documentation to explain:

*   How to install/download the library;
*   Getting started with the library, first steps or the hello world tutorial;
*   Detailed concepts or components in the library;
*   Advanced guides to using the library;
*   Frequently asked questions (FAQ’s).

![](/images/Technical-Documentation-and-Developer-Onboarding/1*ep_dZI0BxL3FNgmaw1RUZw.png)

If we don’t do this it:

*   Doesn’t look like a professional effort;
*   Will suffer in terms of uptake (it will take longer to learn)

and ultimately will be unsuccessful as open-source software.

### Internal Technical Documentation

What kind of technical documentation exists within a company?

*   **Technical Onboarding Docs** — to get people up and running with the software;
*   **Getting Started Guides** — Guides to getting started with a new codebase, writing some code, committing and getting it into production (ideally by the end of your first day or week);
*   **Architecture & Design Docs** — describing the way the system is constructed;
*   **API Documentation** — internal and external API documentation for integration purposes. I really really like Stripe’s API and supporting documentation here:

[**Stripe API Reference**  
*Complete reference documentation for the Stripe API. Includes representative code snippets and examples for our Python…*stripe.com](https://stripe.com/docs/api "https://stripe.com/docs/api")[](https://stripe.com/docs/api)

### Technical Onboarding — Dev Environment

Before we get into the problems of software design, let’s take a look at the initial entry point into the codebase and the systems as a developer. Onboarding can be a painful process for a new developer. It can be a painful process. Sometimes you’ll find a README.md file describing the project, but after that, it might be Bon Voyage, and off we sail into the depths of the codebase.

> Why is this bad?

Well firstly, it’s frustrating, really frustrating as a new developer to start at an organisation and have to annoy someone with questions about how to set up their development environment.

I mean, I want to get the software up and running as quickly as possible so I can be productive.

> I don’t want to have to ask someone. Why?

I’ll have lots of much more **useful questions** to ask about the product and the implementation **after I’m up and running**. For this process, I’m better supported by having good documentation that means I don’t run into unexpected issues. If I encounter issues, then once I’ve solved them, I’ll make sure I **update the onboarding guide**. If it doesn’t exist, it damn well gets created and committed.

> What makes a useful onboarding guide?

*   It is written with **clarity** and **conciseness**;
*   It resides in the codebase as [**Markdown**](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) or a similar format. You can always generate a wiki page or HTML documentation from this. This gives you specific syntax you can use.
*   It contains **nicely formatted** code and commands that need to be run (ideally all this should be in a Docker container already). If I can’t select, copy and paste commands then that’s no good. I once saw an MS Word document for setting up a platform once that contained control characters — not good either! Ideally, we should “automate all the things”, but that’s not always possible;
*   Areas where things **could** be improved.

> What artefacts are important to understand the bigger picture?

Some artefacts which are complementary to the onboarding process that might help include:

*   A whiteboard diagram of the architecture — deployment diagram only. How the code maps to the deployment architecture. It’s best if someone draws this up on a whiteboard rather than present me with a wiki page. The two should match, if they don’t then the wiki page should be updated.

There’s a great Github repository called awesome-onboarding that contains some examples of companies with great general onboarding guides (Trello, Facebook included.

[**92bondstreet/awesome-onboarding**  
*A curated list of awesome onboarding new developers resources.*github.com](https://github.com/92bondstreet/awesome-onboarding "https://github.com/92bondstreet/awesome-onboarding")[](https://github.com/92bondstreet/awesome-onboarding)

![](/images/Technical-Documentation-and-Developer-Onboarding/1*QhT7NDCPPJ7ETC-9ThPjFA.jpeg)

### Learning a New Codebase

What happens after I have a development environment setup? Getting started and learning a new codebase is a subject I’ve been interested in exploring for a long time. Few companies do this well.

I’d love to talk to you or hear from you about how you get started with understanding a codebase.

Here’s my approach:

*   Identify a **user behaviour and journey** they have to take through the codebase — generally something which involves submitting data at a point;
*   Try (and this is the hard part) find the **entry point** into my application whereby a page is requested, or a form is submitted;
*   Set a **breakpoint** in my debugger;
*   **Debug Step** through every line of the code until the user journey is complete;
*   Observe, **make notes** and understand the flow of the application.

What I’m doing is creating a set of “**bookmarks**” to explain the flow throughout the application. Intellij and [Visual Studio Code](https://github.com/alefragnani/vscode-bookmarks) allow you to do this with plugins.

I’d love to see this take an additional step through namely with support for “changeset” type functionality involving groups of files. That would enable me to load a changeset for a given application flow, e.g. for my eCommerce project:

*   Checkout process flow (Controller, Service, DAO)
*   Add to basket process flow (Controller, Service, Supporting Components)

That’s one for the side-project list.

### Developer “Feature” Certification/Tracer Bullets

In the best companies I’ve worked in, I’ve had the pleasure of going through a developer “feature” certification exercise. I’ve also seen this referred to as a Tracer Bullet Feature.

[**Five Critical Steps To Successful Codebase On-Boarding**  
*Recently, in a conversation with Dan Layfield from Codecademy, I was asked to share some insights and opinions on the…*www.forbes.com](https://www.forbes.com/sites/forbesproductgroup/2018/03/05/five-critical-steps-to-successful-codebase-on-boarding/ "https://www.forbes.com/sites/forbesproductgroup/2018/03/05/five-critical-steps-to-successful-codebase-on-boarding/")[](https://www.forbes.com/sites/forbesproductgroup/2018/03/05/five-critical-steps-to-successful-codebase-on-boarding/)

That means that there’s an exercise to build a sample feature which involves touchpoints with several points in the codebase to gain experience. That means presentation, service, data-access code then:

*   Generating a pull request for review;
*   Deploying the feature to a test environment.

That allows me to learn a complete thread of the architecture and develop features with a good understanding of the architecture. I’ll caveat this on not having complex legacy codebases with reams of technical debt because there’s been no policy for addressing technical debt! You’ve inherited a Rube Goldberg machine! The

### New Developer FAQ’s

Every new developer asks questions, for which the answers need to be repeated. Some of this can be around who to talk to, the rationale for the way something is or where to find something. If you find common questions crop up, put them in a central FAQ for the system and link it to the onboarding guide. Some examples of common questions might be:

*   What does the architecture look like at a high-level?
*   Where do I find the instructions to set up my developer environment?
*   I get TS1005 errors when building — !I’ve encountered this problem during setting up my environment, has someone else run into this before? How do I solve it!

![](/images/Technical-Documentation-and-Developer-Onboarding/1*XXI-kg18liPn4XcfZmoqQQ.jpeg)

### In Conclusion

I specifically didn’t mention design documentation in the above, mainly because it’s an odd subject that really needs an article of its own. There’s a real mismatch between the design of the system and the code itself and diagrams often get out of date. Also, there’s a stark difference between a model and a diagram. More on that again.

I’m a consulting CTO (fractional and interim), based in London. I work with growth-stage startups to get them in a good shape for their next funding round. You can find out more, and hire me (if you want), here:

[https://www.hwintegral.com/](https://www.hwintegral.com/)

### CTO Q&A Forum

I run Q&A sessions where CEO/CTO/COO/CRO types can ask questions on a Zoom call with myself. If you’d like more information on this you can sign up here:

[https://www.hwintegral.com/product-management-and-software-engineering](https://www.hwintegral.com/product-management-and-software-engineering)
