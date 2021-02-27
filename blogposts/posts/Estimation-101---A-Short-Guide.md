---
template: post
title: Estimation 101 – A Short Guide
date: 2019-10-31T13:07:03.378Z
excerpt: >-
  Estimation is hard to get right. There’s also an inherent degree of inaccuracy
  based on the information to hand. Unfortunately, it is…
thumb_img_path: images/Estimation-101---A-Short-Guide/1*HCJ_hpMdfsFF97zov-6Agg.jpeg
---
Estimation is hard to get right. There’s also an inherent degree of inaccuracy based on the information to hand. Unfortunately, it is something that we’re frequently asked to do for a number of reasons:

*   **Bug fixes** — “how long will it take to fix this customer issue?”;
*   **Modifications/Changes** — “how long will it change our airline booking engine to allow for group bookings?”;
*   **Features** — “we want to add invoice and billing, how long will it take?”;
*   **Platform Improvements** — “we need to be able to scale to 1.5m users, how do we do that and how long will it take?”.

If you work for an agency or a product based company that does professional services work/customisation, you’ll also be asked when:

*   Quoting for a given project — to adapt the product to the customers specific needs. e.g. configuring and modifying an eCommerce platform to sell contact lenses online;
*   Quoting for a new build project — e.g. building a booking and collection system for bike servicing;
*   Quoting for a change to a customers internal system or to carry out a project with an internal group, e.g. building a data platform to look at internal data from several internal company databases

![](/images/Estimation-101---A-Short-Guide/1*HCJ_hpMdfsFF97zov-6Agg.jpeg)

I’ve frequently seen companies try to quote for the latter based off a thirty-minute telephone conversation with a customer. That’s utterly crazy unless you really, really understand the work based on having carried it out many times before. You should be spending at least a day scoping out the project with the customer and the various business stakeholders in order to then produce a fixed cost estimate. Instead, split your project into a day rate “discovery phase” in order to scope out and produce a fixed cost for the “development phase”. That way you don’t end up under-selling on the project and potentially paying for the bad estimate financially.

### Why are estimates inaccurate?

There area few reasons why estimate can be hugely inaccurate:

*   They are only as good as the information to hand, less information means less accuracy;
*   Assumptions are made about changes without understanding what’s involved, i.e. “that part is easy because of x”;
*   They are provided without risk or confidence factored in;
*   They are provided based on surface knowledge. Breaking the work down into a set of components and understanding their complexity is a much better way to understand the “whole”.

A common model used to illustrate accuracy is the “Cone of Uncertainty” by Steve McDonnell:

[**Cone of Uncertainty**  
*The Cone of Uncertainty, described by Steve McConnel, shows what any experienced software professional knows. Which is…*www.agilenutshell.com](http://www.agilenutshell.com/cone_of_uncertainty "http://www.agilenutshell.com/cone_of_uncertainty")[](http://www.agilenutshell.com/cone_of_uncertainty)

Although the terminology is very Rational Unified Process on the horizontal axis, it does illustrate that the information and investigation you carry out has an effect on the quality of the estimate you’re able to give.

A good way to give estimates back to the business is to often eliminate the value and quote in terms of units, some examples

> “A few days worth of work, but I’ll get back to you shortly to confirm”

> “A few weeks worth of work, I think”

> “About a months work of work”

> “It will take one quarter to two quarters”

![](/images/Estimation-101---A-Short-Guide/1*DCbaZccZlqrWXaVoU1Wzuw.jpeg)

### What ways are there of giving an estimate?

There are different ways of providing an estimate to the business:

#### Story Points

[https://www.mountaingoatsoftware.com/blog/what-are-story-points](https://www.mountaingoatsoftware.com/blog/what-are-story-points)

A single value which acts as an abstract measure. Generally, this is a Fibonacci sequenced number that becomes understandable over time and experience with a team. The higher the number, the longer it will take. This is often provided with a group exercise called planning poker.

I personally don’t like this, because at some stage of the organisation, somebody will convert it into a unit (days, weeks) and they’ll build up their own conversion mechanism here for doing this : ) — leads, management, exec, it’ll happen at some point!

#### PERT Estimates

PERT estimates involve providing three main values:

*   Pessimistic Estimate – when everything goes wrong
*   Optimistic Estimate – when everything goes to plan
*   Most Likely Estimate – when some things go right and some things go wrong (normal case)

The resulting estimate is then calculated from the following formula:

> Estimate = (O + 4M + P) / 6

This is also called a weighted average. You can also calculate the volatility of the estimate in the following way:

> (O – P) / 6

If the result is small then your estimate is more confident than if the number is high.

All this gives you a lot more data than a single story point will, IMHO and is my preferred way to breaking down items to provide an estimate.

### What to factor into an estimate?

There are a number of items that you should definitely account for when giving an estimate, especially when the item of work is fairly sizeable (a medium or large feature).

You should, as a basic rule of thumb, try to break down the item of work into sub-components in order to understand it better.

![](/images/Estimation-101---A-Short-Guide/1*nJmqwwxfIqncnU7xNtQbAg.jpeg)

Here’s a number of reference points to include when providing an estimate:

*   Writing tests for the feature;
*   Carrying out quality assurance for the feature;
*   Writing release scripts;
*   Technical documentation;
*   Writing provisioning scripts (e.g. Terraform) for the cloud infrastructure to support the project.’

I’d definitely run your estimate and breakdown past a peer to make sure you haven’t missed anything and to check your assumptions around this. It won’t take long to do this and it’ll be much more accurate down the line.

Producing a one or two-page working doc for the design of a feature/project is the most valuable exercise in software development. If you don’t do this and blindly give an estimate you’ll miss lots. Asking questions around the reference points above and generally following [OPAQ](https://medium.com/@jonathan.holloway/non-functional-requirements-and-opaq-8b9e895ad37a) (See my previous post)is a good reference for building such a doc.

Also, make sure you refine your estimates when you understand the work required better. It’s much better to go back to the business with a refined estimate two weeks into the project, than two weeks from the end when marketing, sales and other parts of the business are busy preparing for the release. You might have provided “it’s a few weeks worth of effort” previously, but if you can go back and say, yep we think it’ll take two to three weeks, then you build business confidence through your transparency.

### Conclusion

Ok, so we’ve covered:

*   Why estimates are inaccurate;
*   Two ways of giving an estimate – story points and PERT;
*   A set of items to consider when providing an estimate.

I highly recommend creating a wiki page with your team for the project to reference in the future when providing estimates. It’s also useful to look back on tasks, features, projects and use historical data in terms of actual time taken to improve your estimates.

By the way, if you’re working with a legacy system it can also be useful to map out the system with a set of risks attached to the main parts. That way you can use this to understand areas of the codebase that are difficult to work with.

I run a workshop of estimates – you can book me for this if you’d like : )

[https://www.hwintegral.com/services](https://www.hwintegral.com/services)
