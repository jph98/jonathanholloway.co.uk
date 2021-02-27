---
template: post
title: Software Design Workshops and the Architecture Guild
date: 2019-11-04T16:09:26.213Z
excerpt: >-
  Software design is an important part of defining the “what” in relation to the
  “how”. The “how” we commonly see expressed as
thumb_img_path: >-
  images/Software-Design-Workshops-and-the-Architecture-Guild/1*5hgSodIQifbv1H6Bgp9w6g.jpeg
---
Software design is an important part of defining the “what” in relation to the “how”. The “how” we commonly see expressed as:

*   A set of epics, user stories (hopefully with product owners and engineers);
*   A set of wireframes for screen design.

As an engineer, it is important that you discuss with your team (which includes your product owner!) the implications of the wireframes. It is also important that you act as the yang to the ying when you create epics and user stories by factoring in the engineering implications.

![](/images/Software-Design-Workshops-and-the-Architecture-Guild/1*5hgSodIQifbv1H6Bgp9w6g.jpeg)

What is being proposed in may have:

*   Performance implications in terms of database queries, indexing;
*   Security implications requiring review, pen-testing etc…;
*   Infrastructure implications for supporting the feature (e.g use of a full-text search indexing technology);
*   Implications for the quality assurance folks who look at both the functional and non-functional aspects. Some quantitative information here would be great : )

This is all-important, because the customer is important. It’s almost like we need a dedicated product owner for the platform as well as the features!

You want to ensure the best experience for sure, but also confidence that your system isn’t going to break, slow down or leak their personal details to everybody on the face of the earth!

Software design is the bit where you get to take a long hard look at the what and plan the “how this shit gets done”. I typically come across two views on software design, first up (my favourite)

> We don’t do software design

We just need to start coding and work the problems out as we encounter them.

Second up is the ever-increasing spiral of frustration, despair, and as a colleague once put it “speculative generality”.

> We design everything up-front

So, we write down **all** **the** **requirements** and think really really hard about the design before coding. You’d better make sure that VSCode or Sublime is nowhere to be seen.

None of these are ideal/fantastic/fun ways to consider the way in which you’re going to build the solution.

![](/images/Software-Design-Workshops-and-the-Architecture-Guild/1*6Jv_0ceyOTRHXoFPXejTeg.jpeg)

**Total lack** of design leads to myopia:

*   You only care about the immediate obstacles and when you hit a roadblock and it hurts when you do.
*   When you have multiple teams that quite often you can end up solving the same problems in different ways.

**Too much** requirement/design results in analysis/paralysis:

*   You end up considering everything, including the dependencies and this, becomes the paralysis part.
*   You try to write everything down in a big old document which ends up being 40+ pages in length that nobody, will ever read and will make you go completely mad.

Mental health is important, so don’t go mad when you release the software fixing all the fires, and don’t go mad trying to specify everything to the nth degree.

#### Software Design Workshops

A better way to do design is to spend **some** time holding a design discovery workshop. A design discovery workshop is a 30 to 60 minute to build your shared view of the world with the rest of your team. It provides you with a forum to think about potential roadblocks and the various options. You want a commonly held **“work in progress”** model of the world that the whole of the team buy-in to at the start of the project.

> The end artifact is not the the important part, the exercise is!

This work in progress, let’s refer to it as a “design guide” that tries to articulate the conversation around the room based on what needs to be built. Some important points here:

*   The “design guide” is not immutable — it can change in subsequent sessions or with people on the project;
*   The “design guide” will eventually stabilise in terms of content;
*   The “design guide” will contain points which can be marked up with “Spike: we don’t know about this bit yet“

#### Reducing Risks with Spikes

Some elements of the design may be fairly ambiguous in terms of solution. A great concept from the Agile world that I like (there’s lots I don’t) is **The Spike**.

> I would often ask Kent \[Beck\], ‘What is the simplest thing we can program that will convince us we are on the right track?’ Such stepping outside the difficulties at hand often led us to simpler and more compelling solutions. Kent dubbed this a Spike. I found the practice particularly useful while maintaining large frameworks.

Good examples of where we’ve used spikes in the past:

*   We’re unsure whether a specific solution is going to scale and need to do some performance testing.
*   We have three solutions for search indexing (Lucene, SOLR, Elasticsearch for example) and need to choose one.
*   We need to write a distributed file storage system and are unsure if we should.

![](/images/Software-Design-Workshops-and-the-Architecture-Guild/1*zgv5Hq7no8zNgc1Klxjl8g.jpeg)

#### Software Design Workshop Types

Running the workshop might involve more effort depending on what you’re attempting to do:

*   Building an entirely new application comprising of a front-end (mobile, web) and multiple services;
*   Building an entirely new (micro) service for a system;
*   Understand the impact of a change (new feature, improvement or modification) and what needs to change in the system.

#### Running a Software Design Workshop

In terms of running a workshop, I’d suggest a set of guidelines:

*   Timebox it and stick to the time limit;
*   Involve everyone necessary in the team including the product owner, of which, you’ll need to ask questions;
*   Create a shared wiki page/doc/set of records which everyone has access to that you can display on a TV in a meeting room;
*   Grab a copy of the [OPAQ guidelines](https://medium.com/@jonathan.holloway/non-functional-requirements-and-opaq-8b9e895ad37a) I wrote about earlier and use those as a guideline for structuring the “design guide”;
*   Park areas of contention;
*   For items that require additional investigation beyond the scope of the meeting, write them up and tag them with “spike”;

You’re not going for perfect. You’re aiming to capture the:

> We didn’t think about that, huh.

Agree on the broad structure of the session up-front and produce an outline of the discussion points you want to talk about amongst as a team. Some examples:

*   What does the domain model look like for this service? Can we brainstorm and draw it up on a whiteboard in the session?
*   What are we going to use for data storage here?
*   Can we integrate something here instead of building it, what are the options?
*   What data needs to be captured here and what do we need to build data pipelines for in terms of reporting?

In terms of the domain model point here, this is one area I think that is incredibly important to have a shared understanding of. If you mess this up then it has implications for the database schema, the way you join data, the way you present data etc… It’s also a good point to illustrate future-proofing and how much you want/need to do. Ask:

*   Is it right for what we need to build now?
*   Does it provide an adequate amount of future-proofing for upcoming projects/features — do we even care?
*   If we have to query the information, would it cause us huge performance issues or complex code to be written to transform the data?
*   What implications does it have for testing?

#### Cross-team Decisions and the Architecture Guild

For overlapping areas of concern, you might want to mark these as points of discussion in a cross-team meeting, e.g. your architecture guild. This might happen when you encounter items such as:

*   We need a new tool, library or framework here, e.g. to monitor x, y and z;
*   We think our existing service might not cope with this new requirement and need to re-architect it;

![](/images/Software-Design-Workshops-and-the-Architecture-Guild/1*IysCkJ4XAhNDDIrnO7-CSg.jpeg)

**I’m not advocating adopting the Spotify model carte blanche!**

I just like the concept used to describe a cross-functional team that get together to discuss a common goal. Architecture is a perfect example of that. There’s a good article on running a guild here to increase collaboration and reduce silos in engineering:

[**How Our Engineers Use Guilds to Increase Collaboration**  
*At NewsCred, our software teams are organized into squads composed of full stack engineers, a product manager, and a…*insights.newscred.com](https://insights.newscred.com/how-our-engineering-team-uses-guilds-to-increase-collaboration/ "https://insights.newscred.com/how-our-engineering-team-uses-guilds-to-increase-collaboration/")[](https://insights.newscred.com/how-our-engineering-team-uses-guilds-to-increase-collaboration/)

#### Decision Records

During your development iteration/sprint (let’s call it timebox) various items will come up during design/coding/testing. Make a note of these to discuss in the architecture guild (I appreciate that you might also have to make a quick decision however in some cases). During the architecture guild you’ll then have a set of discussion points requiring some sort of decision OR some sort of investigation via a spike.

A good solution for tracking decisions and resolutions are **Decision Records.** A lot of the discussion around this focuses on architecture records (e.g. [https://adr.github.io/](https://adr.github.io/)), but that shouldn’t stop you adopting the structure for general design as well:

*   **Title** — short description of the item (e.g. we need a CI solution)
*   **Status** — Pending, Accepted, Rejected
*   **Context** — an explanation of why that item is required — e.g. “we need a CI solution to support building, testing and releasing”
*   **Decision** — the decision post discussion, e.g. “We’re adopting Gitlab”
*   **Consequence** — what becomes easier or more difficult pending this change

Michael Nygard (author of Release It which is awesome) has a template you can use here:

[https://github.com/joelparkerhenderson/architecture\_decision\_record/blob/master/adr\_template\_by\_michael\_nygard.md](https://github.com/joelparkerhenderson/architecture_decision_record/blob/master/adr_template_by_michael_nygard.md)

That is a very useful thing to discuss and formalise as part of the guild — you also have a permanent record that can live in version control that you can reference from comments in your code or your markdown documents.

There’s a great set of tools and viewers around this as well, including:

**adr-tools —** Provides a set of Bash tools you can use for recording, approving and updating decision records

**adr-viewer —** a graphical viewer for the decision records

[https://github.com/mrwilson/adr-viewer](https://github.com/mrwilson/adr-viewer)

which looks like this when you start it up:

![](/images/Software-Design-Workshops-and-the-Architecture-Guild/1*7eE47K-BBtfM8CRdHon33A.png)

That’s a great way to view the outstanding items (that are cross-team) that you can discuss in the guild and come to a resolution on. Alternatively, you could use Excel/Airtable… maybe.

#### Conclusion

There are a lot of different ways to go about design. We’ve covered design decisions, the concept of a design guide for the team as an in-progress item, the design guide workshop to discuss and formalise. We’ve also talked about wider cross-team decisions and a way of formalising these with Architecture Decision Records and the architecture guild as a forum to discuss these.

I’m a consulting CTO on the interim/fractional side. I also end up fairly involved in the technical architecture side of platforms — web/mobile applications, micro-services and data platforms. You can find more info (and hire me) here:

[https://www.hwintegral.com/services](https://www.hwintegral.com/services)
