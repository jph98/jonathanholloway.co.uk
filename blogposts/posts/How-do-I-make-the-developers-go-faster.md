---
template: post
title: How do I make the developers go faster?
date: 2020-02-21T08:51:07.130Z
excerpt: >-
  Ah, it’s a question I face with lots of startups and founders — CEO’s/COO’s.
  It’s a bizarre question because in itself it sounds…
thumb_img_path: images/How-do-I-make-the-developers-go-faster/1*lHs69twfNdApWxZ0BKAO8A.jpeg
---
A question I hear from many founders.

In itself, it’s a reasonable one. We need to keep up with our competitors — thus need our team to move quickly. But it’s only the right question to ask if you actually DO want them to move faster.

**Maybe roller-skates are the answer?**

![](/images/How-do-I-make-the-developers-go-faster/1*lHs69twfNdApWxZ0BKAO8A.jpeg)

The measuring of software development productivity often involves the following conversations:

> Can we measure the number of lines of code being produced by Developers?

I mean, we can… BUT do more lines of code mean a developer is “better” than another?

> Can we produce features faster?

Sure! But should we cut corners? Can we remove any of these important parts of delivering a feature?

*   **Design Thinking Time** — before we start actually coding a feature, design thinking time allows us to consider what we’re trying to build. It ensures everyone involved has a shared understanding and consideration has been given to edge cases, failure modes. This time is a collaboration between the three amigos (QA, developers, and the product manager);
*   **Functional Aspects** — the core part of the feature: UI Screens, controllers, services, data access;
*   **Quality Aspects** — unit/integration tests at the Developer level. Acceptance testing (manual and automated) at a higher-level;
*   **Operational Aspects** —putting good logging practises in place so we can debug in production: see when things go wrong, monitoring and alerting in-place, security scanning etc…

When churning out a faster solution what would happen if we did skip these parts of the process?

*   **Skip Design** — just start coding and hope for the best. You can always change direction, right? Well, yes. But it can be costly to rework code, tests, and fill in the gaps. As they say, “[measure twice, cut once](https://www.psychologytoday.com/gb/blog/got-minute/201202/measure-twice-cut-once)”!
*   **Skip Quality Aspects** — skip the developer testing? Do manual testing? Forget about automation? But automation helps with efficiency. Skipping it altogether means your customers are the ones finding bugs. And that doesn’t make them happy customers;
*   Just code the **happy-path.** Ignore the edge cases and failure-modes. Just focus on a point solution. For integrations, this is a no-no. You must ensure that you can handle what a third-party service chucks back to you gracefully. You also have to make sure you surface errors that you cannot handle — reporting them back to the Engineering team and wider business to fix;
*   Ignoring **monitoring** **and** **observability**, performance testing, infrastructure provisioning, security etc… Some of these simply improve our efficiency further down the line. Some result in [major fines](https://www.csoonline.com/article/3410278/the-biggest-data-breach-fines-penalties-and-settlements-so-far.html) (data-breach for example if you don’t build in security into the process from development to operations).

**Outages** in production costs time. What you gain by skipping steps during design, implementation, operations, and testing, come back to bite you in production. That means a 2x, 4x increase in time spent to rectify the problem. You also have to go back through the build, test, integrate, release process which is even more costly.

Skipping these steps means we end up delivering a feature more quickly, but it really doesn’t look great in production. And if it pisses our customers off, then it means damage to you as a business.

> Ignoring the non-functional requirements in a solution means you end up with a **non-functional** product!

> Where can we save time? We’re a startup and need to move fast to test product/market fit, generate revenue and improve customer happiness.

Ok, so let us look at a number of hacks where we can talk about what affects productivity and potential amelioration of the problems:

*   Product Management Hacks;
*   Engineering Team Hacks;
*   Environment Hacks;
*   Individual Hacks;
*   Management/Executive Hacks.

#### Product Management Hacks

Sometimes, you don’t need to build anything at all. Or you can bisect a solution and just build half of the solution to speed things up.

![](/images/How-do-I-make-the-developers-go-faster/1*Ro2gZ3FzG6UT_O6lXp-ygw.jpeg)

Consider an **off-the-shelf solution to** **cut corners** instead of building something from scratch. I’ve built three businesses to date using just plain old Wordpress coupled with some plugins. For learning management — use LearnDash. For commerce — use WooCommerce. It’s not glamorous or pretty, but **it just plain works**. It saves loads of time and helps you find product/market fit, cheaply. Marketing sites and blogs — I see way too many people build these from scratch when they could just Wix/Squarespace. Focus your time on the core solution required for the business instead! Build/integrate/buy should be your default standpoint.

Another way to go fast is to **go manual, before you automate**. There’s plenty of examples of this from the Product Management world in terms of prototyping and experiments that can be applied to the Product Development world. [AWS mechanical turk](https://aws.amazon.com/premiumsupport/knowledge-center/mechanical-turk-use-cases/) is a great example of outsourcing jobs/processes whilst you build out the real solution behind the scenes. If you need to build administration tools to do things such as generate content, consider hand-edited JSON that’s delivered through a headless CMS or just flat-files. You don’t need to build a CMS in 99% of the cases!

#### Engineering Team Hacks

Setting your team up for success, building motivation, and helping them become efficient in their journey towards a high-performing team is paramount. If the team focuses on sacrificing quality for velocity — *they’re always in firefighting mode —* they are going to burnout! It’s not pretty having your child wake up at random moments in the night requiring attention, constantly!

![](/images/How-do-I-make-the-developers-go-faster/1*LP0KwRJaZWv_A2B0s9Mtzw.jpeg)

There are a common set of problems I see within startup teams that affect their overall productivity.

**Taking on too much work** in a time-boxed sprint means having to work crazy hours to deliver. This might be because you’re always [estimating](https://medium.com/hwintegral-consulting-cto/estimation-101-a-short-guide-e567d5ba9f0e) in a pessimistic manner and unable to meet the target you’re setting yourself . If so, practice estimation! It might be because you’re so swamped focusing on unplanned production issues that your entire sprint/workload is horribly hijacked.

**Ignoring the capacity of the team** is another common mistake. If you allocate your developers at 8 hours of coding per day I guarantee that’s going to end in missed sprint deadlines, burned-out team members, and demotivation. **Developers don’t code for 8 hours a day.** Try 5.5 hours (around 70%) instead. It’s more realistic because you can account for other things that happen within a sprint — meetings, sickness, holiday, production issues, support rota etc…

Visualise and educate your stakeholders on **different types of work.** The Phoenix Project is a great read here for those who want a novel (*yes, a novel*) about software and operations. It illustrates several important concepts from LEAN, but it also describes four types of work:

*   **Planned Projects** — e.g. delivering features for the business to remain competitive, shift metrics
*   **System Changes** — things that **have to happen:** server upgrades, certificate changes, planned downtime for various maintenance tasks. You need to think **proactively** about this and practice preventative maintenance.
*   **IT Projects/Platform Projects** — you can’t just deliver features and ignore the platform. You need a great observability platform for identifying changes and fixing things quickly (*See MTTR later on*). You need projects to address performance issues.
*   **Unplanned Work** — People forget about the unplanned work. That can often obliterate your sprint, your team's motivation, and productivity. Your job is to eliminate — or greatly diminish — the unplanned work.

Where does unplanned work come from?

*   Pushing out **crappy features** without tests. Not **thinking** about them before coding, finding bugs in production, and then having to put in a fix;
*   Focusing on the happy path and **ignoring failure modes and edge cases** which causes bugs in production which you either have to fix. OR in some cases totally rework your integration or product feature because it wasn’t thought through. **Measure twice, cut once.** Technical design sessions should be required so that everybody understands that “engineering is not just about writing code“.

**Continuous Improvement** — teams focus too much on delivery and not enough on reflection of the past sprint or quarter. What went well? And what didn’t? If you can’t react and plan to address and improve on the things that didn’t go well, then you’ll never get better at your art. Retrospectives help here at the sprint and quarterly level.

#### Environment Hacks

One of the biggest killers for productivity is the environment. The space your team spend the majority of the day working in.

If you’re not productive in a specific environment, then change your environment. That can mean working at home on certain days rather than in the office. I’m a big believer in remote working if the team is set up correctly for it and the person has chosen that life . [Hey, it can get lonely](https://doist.com/blog/remote-work-mental-health/)!

**Commuting** in cities such as London. You can often write off two hours of your day to commuting. **That’s lost time.** Unless you can work while travelling — not always possible on the tube! Multiply that by three days (a week) — that’s **six hours** that could be used more productively. Look at the busiest days for commuting and work at home on those days!

Collaboration and **team dynamics** come into play when it comes to motivation. Understand where you are as a team. Focusing on how best you work together effectively can be a game changer. Clifton Strengths can help you identify what you have in the team today, what’s missing, and what improvements you can make. It may mean moving people between teams, or it might mean recruiting for someone with the missing skills for your team. Foster an environment of continual learning, safety (people shouldn’t be afraid to speak up), and non-violent communication.

Noise in the office is [another killer](https://sound-zero.com/how-acoustics-affect-productivity-in-office-environments/). It’s all well and good to say buy a pair of noise-cancelling headphones — *that really does help* — but having a noisy Sales team next to an Engineering team can be problematic.

**Interruptions** kill flow and productivity. They might be from managers or co-workers — in which case, set a period of time throughout the day whereby people shouldn’t be interrupted. Try and keep meetings to the morning so people can focus on tasks in the afternoon.

[**Developer Flow State and Its Impact on Productivity - Stack Overflow Blog**  
*What's the most annoying thing at work? If you ask developers, it's likely getting interrupted in the middle of a…*stackoverflow.blog](https://stackoverflow.blog/2018/09/10/developer-flow-state-and-its-impact-on-productivity/ "https://stackoverflow.blog/2018/09/10/developer-flow-state-and-its-impact-on-productivity/")[](https://stackoverflow.blog/2018/09/10/developer-flow-state-and-its-impact-on-productivity/)

#### Individual Hacks

Understanding yourself — your own weaknesses — is key to productivity.

What you’re **good at and what you’re not good at**. Focusing on improving your weaknesses — not just technically, but all round. For requirements, design, test, release, ops, [learning to learn](https://www.amazon.co.uk/Pragmatic-Thinking-Learning-Refactor-Programmers/dp/1934356050), and [managing humans](https://www.amazon.co.uk/Managing-Humans-Humorous-Software-Engineering/dp/1430243147). As an Engineer, look past basic coding skills — focus on design and operations.

**Sustainable pace**. As I’ve got older I’ve realised *you just can’t pull 10/12 hour days consistently*. I’ve personally found that I can do two late nights in a week before it really starts to hit home. The third night of doing it has a massive impact. Forgetfulness, being grouchy, ignoring work friends/family relationships, tiredness. All of it takes a toll on your mental health eventually. There are visible and invisible aspects to this well. Recognise them and listen to them:

*   **Trouble sleeping/Insomnia** — either worrying about problems in work or solving problems in your sleep that you’ve left unresolved. Leave things in a good place before you leave (no broken tests, no difficult in-progress refactorings etc…);
*   **Decision Fatigue** at the end of the day — being unable to make a decision;
*   **Physical and Emotional Exhaustion** due to continual late nights, early mornings. Not taking a break;
*   **Feeling unwell** — just stop when it comes to this point. Don’t go into work, don’t work from home. Just stop and get better;
*   **Anxiety** — this might start off as mild tensions, not dealing with problems and talking about them with others — co-workers and managers — can contribute here. It affects your productivity, but even worse than that it can affect your personal life outside of work.

[**The Tell Tale Signs of Burnout ... Do You Have Them?**  
*Burnout is one of those road hazards in life that high-achievers really should keep a close eye out for, but…*www.psychologytoday.com](https://www.psychologytoday.com/gb/blog/high-octane-women/201311/the-tell-tale-signs-burnout-do-you-have-them "https://www.psychologytoday.com/gb/blog/high-octane-women/201311/the-tell-tale-signs-burnout-do-you-have-them")[](https://www.psychologytoday.com/gb/blog/high-octane-women/201311/the-tell-tale-signs-burnout-do-you-have-them)

#### Management/Executive Hacks

As a Manager, as a C-level Exec, as a VC you have a **duty of care and responsibility** for those that you manage. Pushing and motivating your team to deliver is all well and good, but knowing **where to draw the line** is incredibly important. Don’t burn out your CTO, your Head of Engineering, your Tech Leads (*and ultimately your entire team*). Resentment builds. If they eventually leave due to burnout or illness, then it will get out. You will end up with a bad reputation as a company. **People talk** (Glassdoor and all).

There’s a great article here by [Andy Skipper](https://medium.com/cto-craft/how-to-prevent-cto-burnout-in-10-steps-4c3420791c93) on how to prevent CTO burnout (this applies to any senior technology management member). As a CEO, it’s your responsibility to help spot when this is happening, intervene and call it. I understand you have a duty to protect the company and this is an integral part.

[**How to prevent CTO burnout in 10 steps**  
*As a tech leader, stress is inevitable, but it’s the way you deal with it that matters and can make all the difference…*medium.com](https://medium.com/cto-craft/how-to-prevent-cto-burnout-in-10-steps-4c3420791c93 "https://medium.com/cto-craft/how-to-prevent-cto-burnout-in-10-steps-4c3420791c93")[](https://medium.com/cto-craft/how-to-prevent-cto-burnout-in-10-steps-4c3420791c93)

Failure to do this has a massive impact on that individual and on the team they manage — productivity included. Knowing your manager has had to take an “**extended break**” is not a great sign or precedent to set for others. I’m really interested to hear from others here about these sorts of situations, especially on the subject of [emotional resilience](https://positivepsychology.com/emotional-resilience/). **Managing a stakeholder** takes its toll as well. It’s not just the work you’re doing as a person, but taking on other peoples problems, managing upwards on subjects such as productivity (see above : ), general technology, changing demands etc…

### In Conclusion

There are lots of things you can do to improve efficiency and productivity, but focusing on features delivered, lines of code written and always optimising for velocity is absolutely not the way to do it.

I’m a consulting CTO @ [HWIntegral. com](https://HWIntegral.%20com). I’ve seen a lot of companies and helped fixed many of the challenges discussed above. Does it take its toll ? Yes. Even more so when the expectation is to do it in half the time due to cost. You can have a very nice telephone/Zoom conversation with me about it if you’d like.

[**HW Integral**  
*Interim/Fractional CTO Services, Technology Consulting, and Digital Design "We help growth stage startups with product…*www.hwintegral.com](https://www.hwintegral.com/ "https://www.hwintegral.com/")[](https://www.hwintegral.com/)

### Appendix

One area of productivity we didn’t cover was “measurement” — what to include as metrics for your team That allows you to set a baseline for improvement. If you can describe where you are quantitatively then it’s easy for the team (and business) to relate to metrics. Another post will follow to discuss this in more detail.

[Accelerate by Nicole Forsgren, Jez Humble and Gene Kim](https://www.amazon.co.uk/dp/B07B9F83WM/) is a great read here and suggests four areas of focus for teams:

*   **Lead Time** — the time taken to go from code committed to production;
*   **Deployment Frequency** — how often you deploy;
*   **Failed Deployments** — how many times you rollback a deployment;
*   **Mean Time To Recovery** — if a production incident occurs then how long it takes you to recover.

More in another post… go buy the book and read it : )
