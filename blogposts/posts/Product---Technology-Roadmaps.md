---
template: post
title: Product & Technology Roadmaps
date: 2021-02-27T12:48:04.648Z
subtitle: Utilising the strengths of product and engineering
excerpt: Utilising the strengths of product and engineering
thumb_img_path: images/Product---Technology-Roadmaps/1*w2PB2fqopccywVqAqvaCGQ.png
---
A “Product Roadmap” is a common concept in businesses used to communicate a high-level visual plan to the execs, the business and sometimes the customers of:

*   What is being built for the product;
*   Why it is being built (although not always included);
*   When it is being built (to varying degrees of detail).

Who sis a roadmap visualised? Take the Slack platform roadmap — fundamentally it’s a Trello board split into the following columns:

Near Term | Mid Term | Long Term | Released

![](/images/Product---Technology-Roadmaps/1*w2PB2fqopccywVqAqvaCGQ.png)

<figcaption>Slack platform&nbsp;roadmap</figcaption>

A more traditional product roadmap is swimlane based where each row represents a product and the column is a quarter in the coming year.

![](/images/Product---Technology-Roadmaps/1*aavCqAucBRkIpCStrO0ucQ.png)

<figcaption>Roadmunk on how to build a product&nbsp;roadmap</figcaption>

Both of these roadmaps incorporate technology in a different way. Slack treats technology as a first-class citizen (since it’s fundamentally a platform with an API). The second example uses a single row for infrastructure.

#### How does technology affect the product?

Technology has a big bearing on the product roadmap. Why?

1\. It is used as the basis for a platform to support the **user experience** in getting a **job done**. That platform may also integrate with several other systems which are critical in the supply chain.

2\. It can **block the execution** of a product roadmap due to impacxting system qualities performance, reliability, robustness or security. Look at the impact a data breach has on a companies share price in the market or the impact to a user during Black Friday/Cyber Monday due to increased load.

3\. The underlying technology platform can affect the ability of an engineer to **work productively** in their day to day job. Code rots, technology trends change, engineers leave. In doing so, a trail of technical debt is left behind which can cause a **slowdown in engineering**. “Weeding the garden” needs to take place to keep the codebase in good shape to aid productivity.

In order to keep on top of this, it’s important to understand the dependencies between product and technology roadmaps to stop these things from happening. Otherwise, we end up with disorganisation and readability problems with our codebases that cause developer productivity problems or worse — system quality problems. 

If we optimise for speed, rather than quality, or somewhere in-between (the sweet spot) then we build **solutions with gaps**. These gaps can cause robustness, reliability, performance or productivity issues. 

If you are **optimising for maximum speed** then you need to make sure:

> **You record the corners cut** in the form of a technical debt backlog. 

By the way… don’t be tempted to use an issue tracking system for this, put it in a documentation system (Confluence/Jira). Why? 

*   It’s easier to edit a page and add it;
*   It’s easier to scan through a list of items on a page and you can introduce hierarchy;
*   It’s easier to categorise items into reliability, performance, security etc…

We will cover creating a technical debt backlog later. For now, let’s look at how we keep on top of technology trends in the industry to maintain a competitive advantage. A new piece of technology in the analytics, logging or cloud-native space may have major advantages in terms of gaining a competitive edge in the industry. We can map this technology out in a specific way.

For example, AWS:Reinvent 2019 has just passed. Let’s look at a few highlights for that and how it could benefit the company:

*   [**AWS Codeguru**](https://aws.amazon.com/codeguru/) — a machine learning powered solution for automated code-reviews that can be used to improve internal and external quality of your produdct;
*   [**AWS Identity and IAM Access Manager**](https://aws.amazon.com/about-aws/whats-new/2019/12/introducing-aws-identity-and-access-management-access-analyzer/?trk=ls_card) — an analyzer for permissions in your AWS account that helps as a security measure for your products;

Our technical debt backlog and new technology map can be used to form our new **Technology Roadmap** for the company to sit alongside our **Product Roadmap**.

#### Technology Vision — Anti-patterns

The technology roadmap within an organisation can be something which is often neglected or completely missing. The technology roadmap provides you with an invaluable part of the company strategy. For example, hope can you scale a business if you cannot anticipate the pinchpoints in the technology landscape?

Many of the anti-patterns I see within companies around the technology vision are the following:

*   A list of technologies, process and platform aspirations that the engineers want to adopt. (e.g. Adopt Docker), except **without the business context**. The problem with this is that product and the rest of the business don’t understand what that means or why it’s beneficial ! Context required;
*   A spreadsheet, Trello Board or a document – mostly relating to security or major technology upgrades (e.g. moving to React from web framework x);
*   Hundreds of items of **technical debt buried in the depths of the issue tracking system**, hidden away forever – lost – never to be found again. Some of this involves trivial changes, but again there are some incredibly important components in systems that have no tests, are brittle in nature or just don’t scale, full stop. 

#### Keeping up with Technology Adoption

Thoughtworks publish a technology radar which aims to construct aview of the technology frontier for themselves as a company, but also forother companies that are interested in the landscape as they see it. It’s the view constructed to describe technology, tools, techniques and platforms that might be of interest to others.

Each item in the radar is put into a bucket with one of the following labels:

*   Adopt
*   Trial
*   Assess
*   Hold

Accompanied by a description of the technology and the rationale for why it’s been labelled.

This provides a view of how to keep an eye on technology that may be beneficial to adopt by the company to provide them with a competitive advantage. There are others that I won’t go into, but include:

*   Gardner Magic Quadrant;
*   Google Technology Search Trends.

These are useful as input to your technology roadmap as an organisation.

#### Building a Technical Debt Backlog

You might be familiar with the concept of a product backlog. It’s a prioritised stack of work constructed by the product team to ensure engineering teams have enough runway in terms of work. Typically this is created as part of a refinement meeting. Backlogs should be DEEP in nature and 20% of it should be in a detailed form ready for the team to pickup and run with.

The technical debt backlog is similar, but it contains the pain points as seen by the engineering team. Typically, an item in a technical debt backlog is structure as follows:

*   Item and Description;
*   Priority/Importance;
*   Urgency;
*   Business Impact (especially if you don’t address this);
*   Effort (t-shirt size is fine, so S, M, L and XL).

The way in which this is built varies from company to company. More often than not, it’s a list of tickets in the issue tracker (e.g. Jira) which can make things very hard to track, prioritise and present to the business.

In this situation, or in the situation where it doesn’t exist at all, I normally run through a workshop and exercise with the teams to create the backlog as a shared Google Doc. For input into this I ask developers to:

*   Bring a list of technical debt ticket items from Jira;
*   Consider the problematic parts of the system today, generally by using a non-functional categorisation scheme such as OPAQ and bring these along;

It’s painful to brainstorm in the meeting as to all the possible problems, so asking teams and individuals to be prepared is important so that you can focus on prioritisation, urgency, effort and business rationale. Again, aim for the top 20% of the backlog to present.

I’ve done this a few times with teams over the past, and have tried to formalise OPAQ as a categorisation scheme, but also the technical debt backlog as a JSON document with a Mustache template to render a pretty document.

**You don’t have to use JSON!**

You could use a shared Google Document, a Confluence or Notion page instead, but there’s some advantages to JSON if you’re technically minded. 

*   You can use the JQ tool to query and filter the items within the document;
*   You can snapshot your current view of the system and publish that as part of a CI build to Confluence/Notion/Google Docs.

I’ve included a mustache template and a sample backlog in the repository here. Feel free to clone, improve and send me pull requests with modifications:

[**jph98/prodeng-templates**  
*You can't perform that action at this time. You signed in with another tab or window. You signed out in another tab or…*github.com](https://github.com/jph98/prodeng-templates/blob/master/tech-debt-backlog.json "https://github.com/jph98/prodeng-templates/blob/master/tech-debt-backlog.json")[](https://github.com/jph98/prodeng-templates/blob/master/tech-debt-backlog.json)

#### Building the Roadmap

So now we should be in the position where we have the following available to us:

*   **Product Backlog** – consisting of short, near and long term items
*   **Technical Debt Backlog** – prioritised list of technical debt issues in your system;
*   **Technology Vision** – constructed from the myriad of sources you use for research including technology radars, quadrants and trends.

We can use all of this to build our roadmap(s). It’s often useful to split roadmaps into two views:

*   Internal Stakeholder View
*   External Stakeholder View

Our external stakeholder view is our public facing roadmap, which might mean we show it to our current customers and discuss with potential customers on sales calls. Some of our technology items will be put on the external stakeholder view, especially when those items include:

*   The evolution of a public facing set of API’s for reading/writing/updating/deleting resources within the platform;
*   The evolution of our developer SDK’s, libraries or SDK clients that end users (normally developers within an organisation) use.

You can find an example roadmap Trello template here with a standard ticket structure for product items.

TODO: [https://help.trello.com/article/1187-creating-template-boards](https://help.trello.com/article/1187-creating-template-boards)

#### Reviewing the Roadmap, Backlogs and Vision

None of these are ever set in stone, we have to revisit and ensure that we’re reprioritising, updating and adding to the items as the landscape changes.

We can do this using various internal meetings in the organisation:

*   **Product Strategy Meeting** – used to maintain the product roadmap;
*   **Product Meeting** – used to maintain the product backlog;
*   **Engineering Meeting** – used to maintain the technology vision and technical debt backlog.

The product strategy meeting is held quarterly to discuss items for the coming year. This is a great time to be fleshing out your OKR’s.

The Product Meeting is generally held weekly. This should include the product managers, but it should also include the engineering team leads. Silos suck and you **need to have** both product and engineering viewpoints in this meeting. Focus on good resolvable conflicts and healthy discussion about the prioritisation of features vs platform items. What should you be doing in this meeting?

*   Reviewing incoming requests for features;
*   Getting your product backlog in a good place (not the team backlog).

These meetings are totally pointless if communication is verbal only and not recorded as a set of minutes (in Notion/Confluence/whatever).

As aN ImPORI should emphasise here that the **PROJECT** **Meeting** is different. That’s all about reviewing project status in terms of RAG (Red, Amber, Green) and resolving roadblocks. I mention this mainly because I’ve seen people combine both which causes all kinds of weird digressions and flip/flopping between the two. Do not do this!

#### In Conclusion 

Roadmaps are an effective way to plan and communicate the vision to the wider company. 

I’m a consulting CTO doing fractional and interim work at HW Integral in London. I frequently advise and help businesses get the right practices in-place at high growth technology scale-ups. You can hire me here:

[https://www.hwintegral.com/](https://www.hwintegral.com/)
