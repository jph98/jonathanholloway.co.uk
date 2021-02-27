---
template: post
title: Revisiting Customer and Business Value
date: 2020-11-14T12:40:58.248Z
excerpt: >-
  Considering the other aspects which contribute to customer value, shipping
  fast/ good and building, measuring and learning optimally
thumb_img_path: images/Revisiting-Customer-and-Business-Value/1*OI7GXM0D8pV9bK8BJECutw.png
---
We’re all familiar with the concept of delivering value as part of product development, especially in the field of software.

However, the value can often be focused squarely on the customer ignoring other initiatives within the business that can significantly impact customer value or the ability to deliver it. Let’s look at three major areas:

*   Architectural Capability;
*   Developer Efficiency;
*   Data Use.

![](/images/Revisiting-Customer-and-Business-Value/1*OI7GXM0D8pV9bK8BJECutw.png)

#### Architectural Capability

I have a bone to pick with the concept of an MVP — not specifically with the approach. I absolutely agree that the most important thing for a startup is to build something quickly, get customer feedback and iterate. Lots of BML (Build, Measure, Learn) loops are imperative.

![](/images/Revisiting-Customer-and-Business-Value/1*NLX1R2FtfNpSNnKf3MxbwQ.png)

However, the main problem I have is with the transition between each of the stages above in terms of efficiency. Sometimes, it makes more sense to build the foundations for (3) and build (2) than it does to build (2) > (3).

The concept of future-proofing and the degree to which you do it, I believe, is what makes or breaks companies in terms of their agility and productivity.

Product Managers and Engineers may omit future-proofing for a number of reasons:

*   They may not be equipped with the skills or experience to spot potential areas to future proof;
*   They are pushed to deliver fast and take the shortest path to victory;
*   They are pushed to cut corners (skipping the design phase, missing technical operational concerns etc…);
*   The perception is that the initial investment is too long, doesn’t deliver value and it’s better to build the quick solution instead.

Quite often, the investment in future-proofing may actually save you time. Consider the following scenarios:

*   Building marketing content and copy directly into a codebase in templates, resource bundles or code;
*   Coding complex business rules with zero flexibility (think conditional statements) into a product.

Sometimes, there is a clear benefit in moving things away from the developers into the hands of business users. Conversely, sometimes this is also very dangerous depending on the scenario : ) In a recent panel I was involved with recently on “[Achieving the Perfect Engineering/Product Relationship](https://www.crowdcast.io/e/cto-craft-bytes-achieving-the-perfect-engineering-product-relationship/register)” one of the speakers remarked on an excellent question that engineering teams should be asked.

> How do we build this without writing code?

Alternatively, how can we build this with the minimal amount of code, or by using an off the shelf solution.

Let’s take the “Building marketing content and copy directly into a codebase” scenario. The investment required for a cloud-based Content Management System is pretty minimal. Yes, the engineers need to build an integration to it, and yes they may have to cache content and possibly have some sort of control to invalidate that cache. However, it clearly makes sense to do this early on to allow the business (and product/engineering teams) to respond more quickly to requirements around copy change, mistakes or improvements in conversion funnels.

![](/images/Revisiting-Customer-and-Business-Value/1*H6O8SaolbaaBO2HalLOMoQ.jpeg)

<figcaption>Thanks Drew Beamer — <a href="https://unsplash.com/photos/xU5Mqq0Chck" data-href="https://unsplash.com/photos/xU5Mqq0Chck" class="markup--anchor markup--figure-anchor" rel="nofollow noopener" target="_blank">https://unsplash.com/photos/xU5Mqq0Chck</a></figcaption>

#### Developer Efficiency

Development is costly — any time you ask an engineer to build something, there are a number of other things that come into play in addition to the time it takes to write the code required:

*   The time to understand where in the codebase the changes need to be made, structural changes and components that need to be changed as a result of this. Code readability and comprehension ability play a huge part here;
*   The time to write unit, integration and acceptance tests, especially if we’re dealing with legacy code that comes with no safety net to catch issues — production screwups galore!
*   Source control time (ok, minimal), but still, branch, change, commit, push, merge etc…
*   The time it takes to actually build the product in CI/CD and the dependencies;
*   The time it takes for someone to prepare the release, write the release notes;
*   The time required to deploy the software into production — exasperated if this is a manual process, also exasperated if you have a complex microservices architecture with dependencies, multiple databases etc…;

Cutting corners and saying “we can come back and do this later” often doesn’t take into account these aspects.

So, the second initiative is around “Developer Efficiency” and investment in improving the above items. It makes sense right, if the build time for the project is 30 minutes and an engineer has to go through this five times to get a feature built and tested correctly then that’s 2.5 hours of time JUST to do this. So when the engineering team get slapped down for suggesting spending several days on reducing this to 10 minutes, bear this in mind. The impact that then has on future feature development and changes is huge.

If we reduced it by 50% and there are 9 (arbitrary) features that are part of a release, we’re talking about the difference between:

*   30 Min Build Time — 22.5 hours or nearly four developer days;
*   15 Min Build Time — 11.25 hours or nearly two developer days;

For the people out there thinking, WTF, I get 8 hours of development time out of an engineer I urge you to reconsider how many productive hours an engineer works a day. It’s 5–6 hours tops when you're not on a death march.

Another recent example I came across here was with the ability to deploy part of the system (a very specific API and service) in a decoupled way to the res to the architecture. There were moans about it taken way longer than it should have to build the independent deployment pipeline, the infrastructure provisioning code etc… but it meant that we could ship changes to the service in minutes rather than a minimum of one day to ship the entire system.

![](/images/Revisiting-Customer-and-Business-Value/1*sH4w0jJ8kUf4xzmN0WHaaA.jpeg)

<figcaption>Developers, Developers, Developers — <a href="https://unsplash.com/photos/yLDabpoCL3s" data-href="https://unsplash.com/photos/yLDabpoCL3s" class="markup--anchor markup--figure-anchor" rel="nofollow noopener" target="_blank">https://unsplash.com/photos/yLDabpoCL3s</a></figcaption>

#### Data

Data is a funny initiative, it doesn’t really sit in one team. It permeates and is distributed around the business. It is layered and hierarchical.

I attribute Data Engineers as the Second Type of Product Manager, much like I attribute Platform Engineers as the Third Type of Product Manager.

What do I mean by that?

I mean that each need a roadmap in their own right that are used along with the product roadmap during the negotiation for objectives for a given quarter and a plan for the year. Don’t just focus on a single product roadmap — you’ll end up with a house of f\*\*\*ing cards that is a pain to maintain, that annoys off your customers who eventually hate your product and leave.

Back to data.

I had a situation recently where a team had been asked to build a feature at speed (shortest path to victory) for a business. They cut a lot of corners to do this, tests, but also the operational metrics used to measure the success of that feature. It was impossible, once this went live to really understand how well this feature was doing due to poor observability:

*   Lack of appropriate logging for the feature;
*   Lack of any tooling or admin UI for inspection;
*   Lack of tests utilising real-world data;
*   Lack of synthetic data (from real-world data) to test;
*   Lack of understanding around the underlying data.

The key part here is the data. In order to do this properly, they would have needed the following:

a) **Time to understand the data** through an exploratory environment (there wasn’t one), the shape of the data, the quality of the data;

b) **Clear acceptance criteria** around operational aspects of the feature, namely in a production environment:

*   “We need to understand how well this algorithm is performing, how often does it work and how often does it fail?”
*   “We need to log and store input/outputs for this feature in order to debug and improve the algorithm once this goes live”
*   We need a set of integration tests that use synthetic data (derived from real-world data) that allow us to test how well this algorithm does using known data.

The initial rollout of this was a complete failure, and it’s often engineering get blamed for this. However, the blame falls on both sides — product and engineering, since it should have been a much more collaborative and two-way conversation that took place to understand the requirements.

Yes, the initial version was delivered quickly, but it wasted a lot of business time correcting the problems that it introduced. The second version may have taken much longer, but ultimately it saved time for the business.

![](/images/Revisiting-Customer-and-Business-Value/1*aTwZq7ceSHClNuAconBNig.jpeg)

<figcaption><a href="https://unsplash.com/photos/Wpnoqo2plFA" data-href="https://unsplash.com/photos/Wpnoqo2plFA" class="markup--anchor markup--figure-anchor" rel="nofollow noopener" target="_blank">https://unsplash.com/photos/Wpnoqo2plFA</a></figcaption>

#### In Conclusion

Don’t just focus on customer value, consider the whole picture in terms of value and how you deliver that value to consumers. Look at:

*   The efficiency of the engineering team and factor in time for this;
*   Look at alternatives to writing code and consider asking the future-proofing questions;
*   Consider data and operational aspects to ensure observability and ultimate customer success.

I’m an Interim and Fractional CTO (Engineering Background) working with startups and scaleups with a strong commercial focused. I’m busy, but you can hire me here:

[**Jonathan Holloway**  
*Interim/Fractional CTO, Still Coding* www.jonathanholloway.co.uk](https://www.jonathanholloway.co.uk/ "https://www.jonathanholloway.co.uk/")[](https://www.jonathanholloway.co.uk/)
