---
template: post
title: Scriptable Webhook Platforms
date: 2021-02-27T12:48:04.756Z
excerpt: >-
  Sometimes, you want to solve simple problems in your business without going
  through the spec-develop-test look with your development team.
---
  

Sometimes, you want to solve simple problems in your business without going through the spec-develop-test look with your development team.

One problem we faced recently was that of routing messages from third-party platforms into Slack for notification purposes. The messages in their raw form (JSON payloads with embedded XML) were unreadable for us an engineering team, let alone for the business operations team. 

#### Requirements

The flow and requirements are as follows:

*   **Alert** is triggered in our observability platform based on a log pattern;
*   Attached to the alert is a **JSON payload** with the raw log message;
*   **Extract specific fields** from the JSON payload to generate a nicely **formatted message**, e.g. “User Bob S. with userid a4j57dfgd8fbg received an ‘internal-server-error’ when attempting to pay”;
*   **Send message** to Slack to the #operations-team channel for the team to rectify the problem manually.

#### Solutionising

There are a fair number of cloud-hosted solutions on the market today for doing this, including:

*   HookDoo — [https://www.hookdoo.com/](https://www.hookdoo.com/)

There are also a number of platforms that you can host yourselves on AWS, DigitalOcean etc…

*   N8N — [https://n8n.io/](https://n8n.io/)

But hey, fuck it! Somtimes it makes a lot of sense to write your own as well. 

  

#### In Conclusion

Using a platform allows you to solve simple business problems…
