---
template: post
title: Non-functional Requirements and OPAQ
date: 2019-10-25T07:00:14.181Z
excerpt: >-
  Non-functional requirements (NFR’s) are key to good software. They are
  frequently overlooked in companies and result in software that may…
thumb_img_path: images/Non-functional-Requirements-and-OPAQ/1*qI8bFdoO9zUM2biXzcIWMw.jpeg
---
Non-functional requirements (NFR’s) are key to good software. They are frequently overlooked in companies and result in software that may function correctly, but are problematic operationally and can result in total failures.

> An NFR is a constraint or guideline in the process of software development

![](/images/Non-functional-Requirements-and-OPAQ/1*qI8bFdoO9zUM2biXzcIWMw.jpeg)

If you’ve inherited the illustrious role of “architect” : ) or “product manager” it’s critical you understand these and factor them into your user stories. Why? Because if you don’t then you end up software that:

*   Doesn’t scale (normally horizontally);
*   Isn’t observable in terms of monitoring so when outages occur your customers tell you about them rather than the engineering team;
*   Has major security issues;
*   Suffers from performance issues in terms of throughput response time;
*   Has reliability problems requiring engineers to wake up in the night and fix things.

#### NFR’s and Project Roles

Non-functional requirements are imperative to linking roles in product and engineering to ensure “great” software, namely:

*   **Product Manager** \-specifying the non-functional requirements as acceptance criteria in user stories, or as independent user stories, with help from the engineering team. Mike Cohn suggests specifying them as user stories [here](http://www.mountaingoatsoftware.com/blog/non-functional-requirements-as-user-stories);
*   **Engineering** — building something that satisfies a number of non-functional requirements;
*   **Quality Assurance** — testing that the non-functional requirement is met;
*   **Operations** — ensuring the correct SLI’s and SLO’s are in-place along with monitoring and all the great things that make up site reliability engineering.

#### NFR Categorisations

There are a number of ways to analyse and then specify non-functional requirements including:

*   FURPS+ which is a little odd in the sense that the + stands for a whole set of non-functional requirement categories in itself. Feels like they forgot about a whole bunch : ) — [https://link.medium.com/GYhgMZ1Y20](https://link.medium.com/GYhgMZ1Y20)
*   ISO 25010 which includes a way to categorise non-functional requirements — [http://adcorsi.com/analisidisegnowp/wp-content/uploads/2013/08/iso25010-en.pdf](http://adcorsi.com/analisidisegnowp/wp-content/uploads/2013/08/iso25010-en.pdf)

I’ve used FURPS+ in the past, it’s ok, but I’ve become frustrated with the categories. Instead, I propose a different categorisation for analysis called OPAQ. This broadly fits with the AWS well-architected review as well.

![](/images/Non-functional-Requirements-and-OPAQ/1*QPq044OHa4N-gwMDwBs1HQ.jpeg)

### OPAQ — A New Categorisation Scheme

I have (what I believe) is a clearer and more consistent scheme for non-functional requirements called OPAQ which stands for:

*   **O**perational Constratints
*   **P**erformance Constraints
*   **A**rchitecture/Design Constraints
*   **Q**uality Constraints

#### **Operational Constraints**

*   **Availability**— the allowed uptime/downtime for the area (50th, 90th and 99th percentile). This often is exposed as a Service Level Indicator in site reliability engineering.
*   **Scalability** — the ability for the system to scale out horizontally or vertically
*   **Recoverability** — recovering from intermittent failures. This may involve backing off from making more requests
*   **Monitoring** — what metrics should be exposed by the system for monitoring through various systems (Nagios, New Relic etc…)
*   **Security** — authentication, authorisation for your application. Following OWASP here is a good approach also.
*   **Deployability** — requirements around infrastructure provisioning, deployment of the software and how updates should be performed.
*   **Logging** — what logging needs to be in place for key events, debugging or making the lives of operations easier. This should also include what in the system should be written to an audit log for compliance reasons.
*   **Localisation** — requirements for date, time and language use in the application.
*   **Compliance —** requirements relating to GDPR, ISO27001.
*   **Accessibility** — support for needs such as screenreaders or colour blindness with the application
*   **Backups And D/R —** what should be backed up, frequency and what requirements there are for disaster recovery.

#### **Performance Constraints**

*   **Response Time** (50th, 90th and 99th percentiles) — response time of the application/service in ms.
*   **Transaction Throughput** — number of transactions an application/service can sustain at peak. This needs to be measured for a single service before autoscaling, but also when auto-scaling up to a set threshold.

#### **Architectural Constraints**

*   **Configuration** – What should be able to be configured via properties/YAML/JSON. This includes runtime configuration also.
*   **Extensibility** – explicit implementation requirements to enable upcoming changes to be made more easily. Alternatively, this may detail a mechanism for integration (through API’s) or a plugin-based approach for developers to extend the system.
*   **Events** — what events need to be emitted for key business events, mainly for communicating between various systems (via webhooks or another mechanism).

#### **Quality Constraints**

*   **Testability** — What should be available to make QA’s lives easier when writing automated tests (extra endpoints, test harnesses).
*   **Coverage** — specific requirements around what kind of test coverage is required in the system.

#### Decision Records

The requirements that you come up with above should be thought about in two ways. Firstly, a lot of them only need to be specified once, because they apply to the whole application. An overall design doc on Confluence is a good place to put these. Alternatively, you can explicitly document these using software. Lattix is one such example. Another example would be the Architecture Definition Record tool here:

[**Architectural Decision Records**  
*An Architectural Decision (AD) is a software design choice that addresses a functional or non-functional requirement…*adr.github.io](https://adr.github.io/ "https://adr.github.io/")[](https://adr.github.io/)

With these kinds of things, the artefact produced isn’t the important part, but the exercise you go through as a group (possibly through the architecture guild) is invaluable since it teaches engineers that shipping products aren’t just about writing code and that operations are a problem for the team as a whole, not an individual in operations. You build it, you run it.

#### Conclusion

Considering the non-functional requirements during a project is critical to understand what is being built. I’ve also formalised OPAQ as a downloadable PDF that you can print, laminate (if you’d like) and distribute to your engineering team to get them to think about these things.

![](/images/Non-functional-Requirements-and-OPAQ/1*j_H0JnoASJhaKgxmwAp5ZA.png)

<figcaption><a href="https://static1.squarespace.com/static/5dbb08e7aa74663c10274829/t/5dc691c27cdf127e9983ad35/1573294530817/OPAQ+for+Non+Functional+Requirements.pdf" data-href="https://static1.squarespace.com/static/5dbb08e7aa74663c10274829/t/5dc691c27cdf127e9983ad35/1573294530817/OPAQ+for+Non+Functional+Requirements.pdf" class="markup--anchor markup--figure-anchor" rel="noopener" target="_blank">OPAQ Non-Functional Requirements One&nbsp;Pager</a></figcaption>

I’m a consulting CTO on the interim/fractional side who writes around the topics of software engineering, data architecture, DevOps and engineering management. You can find more about me and what I offer here:

[https://www.hwintegral.com/services](https://www.hwintegral.com/services)
