---
template: post
title: An Introduction to Open Banking Aggregato
date: 2020-07-25T12:01:35.777Z
excerpt: >-
  Open Banking can be defined as a set of changes in the way banks handle your
  financial data. It means that you can securely share your…
thumb_img_path: images/An-Introduction-to-Open-Banking-Aggregato/1*wqHSRCB5yZJPsXJkLhK5iA.jpeg
---
Open Banking can be defined as a set of changes in the way banks handle your financial data. It means that you can securely share your financial data with others, as a consumer. That means I can then use my data to do things such as plan my finances better using Personal Finance Management (PFM) tools linked directly to transactions made.

Open Banking originated from the Competition and Markets Authority and European Parliament adopting a European Commission proposal for PSD2 — (that’s the Payment Services Directive 2) — it’s fintech so get used to acronyms!

![](/images/An-Introduction-to-Open-Banking-Aggregato/1*wqHSRCB5yZJPsXJkLhK5iA.jpeg)

Open Baning means that third-party application companies can now use the banking API’s to build new secure applications and services that banks would previously have been unable to build or unwilling to build. You’re still in control — you get to authorize which applications have access to your financial data and access to your data has to be renewed every 90 days.

Let’s think about this for a minute — for years legacy banks worked on the basis being opaque over your financial data — spending, running into overdrafts, charges on transactions. You had to visit an ATM/cash machine to get your balance. Even up until a few years ago, the pace at which these dinosaurs moved meant that innovation was getting a text message to indicate you were in your overdraft. Sorry, not good enough.

The challenger banks brought about change and innovation. Starling, Monzo etc.. I first discovered Monzo in late 2016 and there were some basic things that struck me as cool (besides the hot coral card):

*   **Mobile app notifications** every time a “transaction” was made;
*   Breakdowns of what you’ve spent every month in **associated categories** to allow you to control your spending more easily;
*   The provision of **savings pots** so that you can use surplus money in your account to save towards specific targets.

![](/images/An-Introduction-to-Open-Banking-Aggregato/1*DUSUpuDLf7QpMrTHTetvfQ.png)

My banking with Lloyds stopped fairly shortly after that. I spent eight months waiting for a debit card, stuck in broken archaic long processes for account access, stupid password rules, just plain broken technology, and user experience. Starling — you’re great.

Open Banking allows you to build this sort of functionality without spinning up a new bank! However, integrating with all of the different banks in the UK is a huge effort. There are approximately 300 banks and 50 building societies. That’s a big integration challenge as a developer, just dealing with the intricacies alone.

Fortunately, there are aggregators here that provide those “bank bindings” meaning you only have to integrate with the aggregator to provide bank support. You can find a more complete list here on the Open Banking Tracker website:

[https://www.openbankingtracker.com/api-aggregators](https://www.openbankingtracker.com/api-aggregators)

![](/images/An-Introduction-to-Open-Banking-Aggregato/1*FoUWaWokCvzKPIVFUDlClA.png)

I’m primarily concerned with the UK and wider Europe in our case, but you may be US based and concerned with launching a mobile/web app there. Bear in mind the coverage that the aggregators provide by country. You don’t want to end up using an aggregator that has poor support for your go-to-market strategy.

### Aggregator Functionality

The aggregators provide differing functionality — after all, they’re competing companies in the space. There is a baseline of standard functionality however provided, but it’s also good to call out the highlights in the various providers, which I will do later on.

If you’re building a tool that’s bank-specific, however, using a banking aggregator is probably overkill (and comes at an expense). You might be better off integrating with the [bank API’s directly](https://developers.monzo.com/).

Let’s look at some of the common functionality provided by an aggregator:

#### Bank Connection Link and Transaction Updates

There’s an additional step for your user before the third-party can access your transaction data — authorization. That means the user going through an authorization flow with their bank, selecting the accounts they want to sync before transaction data is downloaded. Trulayer provides some more information on this flow here:

[**How does the Open Banking authentication flow work?**  
*When the end-user selects an Open Banking provider from our Auth Dialog, they will be redirected to the bank's website…*truelayer.zendesk.com](https://truelayer.zendesk.com/hc/en-us/articles/360002158257-How-does-the-Open-Banking-authentication-flow-work- "https://truelayer.zendesk.com/hc/en-us/articles/360002158257-How-does-the-Open-Banking-authentication-flow-work-")[](https://truelayer.zendesk.com/hc/en-us/articles/360002158257-How-does-the-Open-Banking-authentication-flow-work-)

Bear in mind, that’s not the end of the story, you’re going to need a webhook style mechanism to allow you to listen for future transactions on behalf of your user. Also, how you store this information is important, think about your query use cases for how you want to access the data. Maybe a relational database isn’t necessarily the best solution here?

#### Providing raw transaction data with some attached metadata

The real benefit of using an aggregator is that they will “enrich” the data in various ways. Bank data can be messy and hard to parse. A good example of metadata here is the type of transaction that this is — whether it’s a Food/Restaurant transaction or whether it’s a Subscription (e.g. Netflix). you could build that yourself, but it’s a fair bit of work with various nuances.

It’s useful to understand the “raw” data formats that come across, so here are some examples of raw data from banks:

*   NON-GBP TRANS FEE DEB — Bank Fee transaction;
*   COFFEE NO 1 CHIPPI DEB — restaurant and coffee shop transaction.

Once you have the raw data, that inferred categorization may not be correct — and there are various nuances here in terms of country-specific data. You might want to consider enriching the data again using a third party or an internal model in order to correct things even further. Aggregators will offer 90% — 95% plus accuracy here, but you may need to go the extra mile if the type of payment (e.g. subscriptions) is important to your business in terms of accuracy of presentation and reporting to your user.

#### Payment Initiation

Payment initiation involves allowing an aggregator to process a payment via your bank on behalf of a user. That might allow you to switch different products in-app or to purchase additional products. There’s a benefit for you as a company as you’re able to avoid the payment card transaction fee.

#### User Identity

Verification of a user's identity for your mobile/web app in order to reduce fraud. This is particularly important if you’re dealing with insurances, loans or other products that someone would want to mislead you about to obtain.

![](/images/An-Introduction-to-Open-Banking-Aggregato/1*hRXwl9uvxDZaSh20jTw4jQ.jpeg)

### Aggregator Differentiators

Some of the aggregators provide additional functionality. I’m going to pick on a few aggregators and call out functionality that I think is interesting as an engineer with some rationale as to why. by the way, if you’re API isn’t publically accessible I haven’t included you here.

[Savings Goals](https://docs.tink.com/api#savings-goals) (Tink) — allow your users to set savings targets for various purposes. This might be saving for a holiday, new car etc… again this is fairly simple to build, but the aggregator functionality means you don’t have to.

[Confirm available funds for a user](https://developer.token.io/landing-page-cbpii/) (Token) — particularly useful if you want to check how much money is available in a user's bank prior to initiating payment.

[Retrieve transactions by category](https://docs.tink.com/api#category) (Tink) — as well as raw transactions, you might want to query for a specific subset of transactions. You could do this from the raw transactions., but there’s a performance overhead associated with the query. Also, if you have had to flatten categories into a comma-separated form (think Social, Community, Organisation, Charity) or a separate relation, then there’s the cost of the join operation involved. It’s fairly simplistic to build a view for this, but if the API is provided (as in the case of Tink) then even better.

[Projected Income](https://docs.truelayer.com/#retrieve-income) (Truelayer) — Truelayer provided an estimate of projected income for a user with a 10, 25, 50, 75, 90% estimate for you to interpret as you wish.

### In Conclusion

Open Banking is changing the consumer fin-tech world for the better and allowing startups to innovate in this area.

> If you have **found an interesting API endpoint** **in addition to the above** that’s a true differentiator, then **please let me know and I’ll investigate add it here.**

I’m a Consulting CTO, architect, engineer, data geek @ HW Integral. You can find out more about me here or contact me for help with any of the above. Stay safe all.

[**Contact - HW Integral**  
*Contact Us*www.hwintegral.com](https://www.hwintegral.com/contact "https://www.hwintegral.com/contact")[](https://www.hwintegral.com/contact)
