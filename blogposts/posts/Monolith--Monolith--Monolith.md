---
template: post
title: 'Monolith, Monolith, Monolith'
date: 2021-02-22T08:31:13.816Z
excerpt: “Why starting with a monolith is probably better”
thumb_img_path: images/Monolith--Monolith--Monolith/1*U3ilVPxbf4pZMsy5a0lAkw.jpeg
---
“Why starting with a monolith is probably better”

I see a number of businesses on an interim and fractional basis. From a software perspective the teams fall into the following patterns:

*   They **started with micro-services** and are continuing to develop;
*   They **started with a** **monolith** and are continuing to develop;
*   They are **breaking out a monolith** into micro-services;

I’m opinionated on this front, but I have a fair few data-points to back this up across different technology stacks. Generally, the companies that have started out with a micro-services struggle compared to the people who started out with a monolith. There’s more to think about, plan and co-ordinate in terms of micro-services and people haven’t been through the product-market fit phase of the company quite yet.

For people who have companies that have monoliths in a more mature product and software company there’s a major advantage — time, money and experience of running something in production as a team. I truly believe that micro-services create a set of problems in early stage companies that you don’t have time to solve : )

#### Specific Micro-service Technology Problems

Some of the examples of technology problems I’ve seen in teams adopting the micro-service approach include:

*   Focusing solely on synchronous communication and ignoring asynchronous communication entirely. This means broken business processes because of downstream failures in services;
*   Not understanding when [choreography and orchestration](https://solace.com/blog/microservices-choreography-vs-orchestration/) should be used to support business processes;
*   Slicing things way too thinly meaning you end up with 50/60 micro-services to manage with associated database(s), deployment pipelines, monitoring, security concerns etc… etc…
*   Completely ignoring the amount of effort required to package, deploy and monitor your services in the production environment — especially if you’re working with a multi-repo rather than mono-repo approach.

![](/images/Monolith--Monolith--Monolith/1*U3ilVPxbf4pZMsy5a0lAkw.jpeg)

#### Team Challenges

There are several challenges with teams starting out with the micro-service approach over a monolith:

*   **Micro-services technical and operations experience** — most people are doing this for the first time and learning on the job;
*   **Domain experience** and constructing appropriate bounded contexts — most people end up slicing way too thin;
*   **Resource constraints** around developers and devops — lots of startups are working on the 5–10 people in tech with possibly 1–2 people managing the operational side;
*   **Somebody-read-about-something-on-medium** and wants to implement micro-services, but doesn’t really know what they’re doing.

#### The Micro-service Startup Trap

If you’re running a startup and think that micro-services is the right approach then highly suggest you reconsider your choice, or at the very-least tread very carefully with the decision, or speak to a consultant who has been through this pain before with a team. It could mean:

*   **Longer time to market**, potentially a frustrated business who don’t understand “why building it is taking so long”;
*   A higher bar required in terms of **technical skills** required and longer time to do hiring;
*   **Increased operational costs** on Azure, AWS, GCP due to the number of services you need to deploy as EC2 containers, ECS tasks etc…., the increased number of database instances, monitoring etc… etc…;

It’s more important that you build, ship and measure/learn at this point with something that’s easy to change/modify. That means minimising complexity and using only where a technical advantage is required.

I understand that you’ll have that one person pushing this as the latest and greatest thing (serverless - future ranty article coming up). Shooting them down isn’t the right thing to do, but having someone talk to them about the their experience of running micro-services and running through a check-list of items to consider, think about or they might not know is a good way to gauge whether it’s right to embark on the great micro-services journey.

![](/images/Monolith--Monolith--Monolith/1*yMpyfD2-m7rMpbeTLP4DTQ.png)

#### Monoliths Aren’t Perfect

Monoliths aren’t perfect — don’t get me wrong. Consider the big monolithic Java application with hungry resource requirements (big heap, long GC etc…). If one thing blows up, it all blows up. However, most startups won’t necessarily have a huge fully blown application with 150 features until several years in.

**Services at the edge** or **Macro Services** are other approaches to try and solve some of these problems. A key common screwup with applications is building reports against operational databases. You can use a read-replica, but you still need to be careful with what you’re doing in terms of memory. Separating out reports to run as a separate service is a common first thing to do, OR separating out things which are massively intensive and need to scale in a slightly different manner. Take the following examples:

*   An application that has hundreds of users generating PDF’s;
*   An application that generates image thumbnails;

You could micro-service, but one better would be to use an off-the-shelf service that does this that you **don’t have to manage.** Total cost of ownership is key! If you’re three developers in a porta-cabin on a farm in deepest darkest Somerset get rid of it! Focus on the core offering!

![](/images/Monolith--Monolith--Monolith/1*XDYHpCqrl4keyYHu3kM04A.png)

Still five services is better than fifty services in terms of management!

#### **In Conclusion**

I’m an interim and fractional CTO working with startups, scale-ups and bigger companies on product and technology challenges. A lot of the problems here I’ve seen first hand as an engineer, manager and architect with businesses and had to solve. You can talk to me, hire me here:

[**HW Integral**  
*Interim/Fractional CTO Services, Software Architecture, and Digital Design "Deep product/tech specialists helping…*www.hwintegral.com](https://www.hwintegral.com/ "https://www.hwintegral.com/")[](https://www.hwintegral.com/)
