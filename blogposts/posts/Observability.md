---
template: post
title: Observability
date: 2021-02-27T12:48:02.582Z
excerpt: >-
  I once suggested at one of my first companies as an engineer that every
  service or application we built should run a power on self test –…
---
Observability 

I once suggested at one of my first companies as an engineer that every service or application we built should run a power on self test – similar to what a washing machine of hardware device does on first start. The rest of the team looked at in disbelief. 

What the heck is a power on self test when it comes to software? 

We would run into issues in environments whereby certain things would go wrong:

*   Message queue connection errors;
*   Database connection errors;
*   File permission failures on shared NAS volumes;

Some of this was misconfiguration and very much before the days of terraform/puppet/chef. I won’t get onto the engineer who decided to avoid all of these and write his own system in Bash – spectacular and a story for another time.
