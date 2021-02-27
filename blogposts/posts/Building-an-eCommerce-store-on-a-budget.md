---
template: post
title: Building an eCommerce store on a budget
date: 2019-10-23T14:50:16.025Z
excerpt: >-
  So you want to sell something online — where do you start? Building an online
  shop can be accomplished in a number of different ways. For…
thumb_img_path: images/Building-an-eCommerce-store-on-a-budget/1*gLvMD5MuNUV498_Jl0LFsA.jpeg
---
So you want to sell something online — where do you start? Building an online shop can be accomplished in a number of different ways. For the non-tech savvy individual, there are a number of SaaS solutions (Software as a service) which provide point-and-click setup. These include:

*   Shopify — [http://shopify.com](http://shopify.com/)
*   Wix — [https://www.wix.com](https://www.wix.com/)
*   Big Commerce — [https://www.bigcommerce.com](https://www.bigcommerce.com/)

![](/images/Building-an-eCommerce-store-on-a-budget/1*gLvMD5MuNUV498_Jl0LFsA.jpeg)

The list goes on and on. These are all great to get up and running and start selling your products. They are feature-rich and provide a lot of “out the box” functionality. They will come with pre-built themes or you can customize them to your requirements. However, when you need to integrate with something else you’re limited by what third party integrations they offer. Those solutions aren’t always stable either.

We built an e-commerce solution two years ago on a budget mainly to sell dog products online. We wanted something more flexible that we could build out over time and scale according to demand — both vertically (throwing more CPU/memory at it) and horizontally — adding more instances. That’s when we looked at self-hosted solutions, including:

*   Magento — [https://magento.com/](https://magento.com/)
*   WooCommerce — [https://woocommerce.com/](https://woocommerce.com/)

We chose Woocommerce as a starter, budget eCommerce solution for the following reasons:

*   Simple to set-up
*   Many plug-ins to extend the base platform and provide additional functionality
*   Extreme customisation (ooh err) via custom themes and UI development.

We combined this with a need to integrate with:

*   A customer relationship management integration (Mailchimp);
*   A future reporting integration for sales orders, activity queries etc… (Zoho) ;
*   Future third-party marketplace integration (eBay, Amazon):
*   Future accounting integration (Xero).

Some of these services don’t come out of the box with plugins, so understanding the underlying data model and API’s was important to us.

Woocommerce isn’t everyone’s choice because you need to be technically savvy enough (or have someone technically savvy) on-hand to help you with:

*   Hosting and setup of the software;
*   Customisation of the plugins;
*   Development of the UI theme to match your branding;
*   Scaling for peak demand or high traffic.

#### **What WooCommerce Provides?**

**WooCommerce** is a free plugin for Wordpress allowing you to turn a standard Wordpress site into an eCommerce storefront. We’ve spent the last few days setting up a custom WooCommerce storefront and integrating it with some interesting third party software for a more real-time experience for the storefront.

WooCommerce comes with the following from an integration perspective:

*   **API** — a RESTful Application Programming Interface out of the box which provides a central point from which you can extract data on your business, manipulate it and generate useful reports or updates.
*   **Webhooks** — a real-time event from WooCommerce (e.g. an order placed, order updated) that can be used for further actions — e.g. posting order information to a third party web-service (e.g. Slack). This allows you to get realtime information on what your customers are doing on your storefront so you can build dashboards or get updates on your phone.

#### **Integration Architecture Overview**

The integration architecture we setup is pretty simple, this diagram illustrates the main components:

![](/images/Building-an-eCommerce-store-on-a-budget/1*NWOgXex4UgwAHMZB4nZlGA.png)

#### **Slack Integration — Order Processing**

Slack is a messaging app for your team so you can collaborate. It’s different from the normal messaging apps like Slack, Facebook Messenger etc… because it’s open and supports lots of integrations out of the box. It works on the concept of a channel — a room that allows you to post messages to all other users within that room.

You can use Slack as a way of keeping up to date with your customer and order lifecycle (new orders, low stock and abandoned carts). This is possible via the Woocommerce webhooks here:

[https://docs.woocommerce.com/document/webhooks/](https://docs.woocommerce.com/document/webhooks/)

Integration is possible using a number of paid third-party plugins, but it’s not necessary to buy these when you can roll your own integrations with some programming knowledge and some help.

#### **Building an Integration Hub**

Point to point solutions are only possible with a middleman — an integration that extracts data from the webhooks sent by Woocommerce manipulates that data into a format for a third party and finally sends it off. This is easy enough to do with a scripting language such as Python or Ruby. In our case we made use of Ruby and the following gems:

*   **Sinatra** — a simple micro-service framework that allows building RESTful endpoints that can then be configured in WooCommerce when you setup webhooks.
*   **Httparty** — an HTTP client that allows you to GET/POST information to third parties, e.g. Slack.

Another option if you don’t have an engineer to hand is Zapier:

[https://zapier.com](https://zapier.com/)

#### **What’s the Cost?**

Software cost was zero for the entire solution. Hosting on Digital Ocean came in at £8.21 a month for the droplet instance, traffic cost and domain name. Shopify starts at $29 a month.

#### **About Me**

I’m a software consultant and architect who’s ending up building lots of these budget solutions in the past using Magento, Zencart and Woocommerce. I’ve also built enterprise storefronts and backend commerce managers using products such as Elasticpath and Commerce Tools for companies such as B&Q, Flybe, Metail and Brightpearl. Get in touch if you need technical advice or guidance on a large e-commerce project as an architect.

[https://www.jonathanholloway.co.uk/software/](https://www.jonathanholloway.co.uk/software/)
