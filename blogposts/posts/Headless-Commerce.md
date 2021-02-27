---
template: post
title: Headless Commerce
date: 2021-02-27T12:47:58.427Z
excerpt: >-
  I spent the last week going through architect/developer training with Commerce
  Tools in Berlin. I figured building on past experience was a…
thumb_img_path: images/Headless-Commerce/1*nZw5i8SYxiV3riRb5qPXlg.jpeg
---
I spent the last week going through architect/developer training with Commerce Tools in Berlin. I figured building on past experience was a good thing since I wanted to learn a **modern** headless commerce platform. I can’t stress the modern part enough after technical architecture and engineering work with the likes of ATG (now Oracle Commerce) amongst others. I’ve been here a few times before... That also includes the more storefront aligned platforms such as Magento, Shopify etc…and also the **ERP** space  doing lots of integration between marketplaces, storefronts, payment service providers, shipping/logistics etc…

The simplest eCommerce integration involves one of:

a) A **cloud-hosted solution** providing storefront and some sort of backend solution (often combined with the storefront) and a database;

b) A **SaaS solution** such as Shopify which you have less control over in terms of look and feel and functionality.

Projects using these legacy eCommerce products would typically range from six months to nearly two years depending on how complex the platforms were, the flexibility they provided, the complexity of the API’s and of course the complexity of navigation the company in terms of politics, communication and project blockers. Pre-cloud this often took much longer because you needed to deal with the operations teams for systems administration and hosting. The cloud has somewhat saved us here from #bofh hell here.

eCommerce projects would involve the following tasks:

*   Modification of the **storefront** for your brand and visual design and analytics;
*   Modification of the **backend platform** to support non-core product features, usually by extending the core framework that supports the product;
*   Integration with **third-party systems** — payment service providers (e.g. Paypal).

![](/images/Headless-Commerce/1*nZw5i8SYxiV3riRb5qPXlg.jpeg)

### What is Headless Commerce?

Headless Commerce is an approach that typically focuses on providing you with a set of backend API’s to consume and use. That means your company isn’t tied to the storefront provided (as in the case with Magento). This is advantageous because it then means you can either build your own storefront OR choose an off-the-shelf solution that fulfills your requirements. The solution isn’t dictated to you by the platform. It also means you can develop independent solutions for mobile and write your own **tooling and integrations** (for data-synchronisation, dashboards, backend application managers) on top of the API’s. That provides you with the flexibility ultimately as a business.

#### Typical eCommerce Solution API’s

A Headless Commerce platform typically provides API’s for:

*   **Customer Management** — CRM like features for creating accounts, managing customers through a workflow, group membership etc… ;
*   **Product (and Category) Management** — Often called a Product Information Management (PIM) allowing you to define product types, products and their variants;
*   **Order Management (Coupons/Discounts/Payment) Management** — creation of shopping carts, conversion into orders and management of order state according to a workflow;
*   **Inventory Management** — Product inventory level management, stock takes and updating inventory currently available.

This isn’t a definitive list, often you’ll find solutions that focus on logistics and shipping, finance and accounting etc… as well. It’s a little bit of a minefield going through your requirements and mapping these solutions to these. Defining your core solution in terms of requirements is key because you’ll find systems that attempt to do everything, albeit poorly. However, you don’t want to get three months into your development and find that you can’t do something critical to your business.

Functionality aside, seeing that API is such a big part of Headless Commerce, how do you evaluate it from a technical perspective. Does it matter

### Starting a Project

I’m going to provide an overview of starting to investigate a headless commerce platform, specifically with Commercetools as a reference platform.

#### Reference Storefront

With some products, Commerce Tools included, they provide a reference implementation storefront that you can start with. Commerce Tools provide Sunrise-SPA for you to customise:

[**commercetools/sunrise-spa**  
*https://sunrise.netlify.com/ Netlify allows you to clone the repository, configure the project with your own data and…*github.com](https://github.com/commercetools/sunrise-spa "https://github.com/commercetools/sunrise-spa")[](https://github.com/commercetools/sunrise-spa)

Deployment is provided through the use of Netlify, which greatly simplifies things:

[https://www.netlify.com/](https://www.netlify.com/)

#### Starting a Project

You don’t have to start a project in Commerce Tools from the SPA app. The benefit of providing headless API’s means you can write command-line scripts or unit tests to explore the functionality provided before you venture into the mobile/web space where the barrier to demonstrate something is much higher.

To do this, you need a Commerce Tools account ( you can signup here):

[**Merchant Center**  
*Edit description*mc.commercetools.com](https://mc.commercetools.com/login/new "https://mc.commercetools.com/login/new")[](https://mc.commercetools.com/login/new)

You need to create an API Client with the relevant scopes for the API’s you want to access. In our case we’re going to access the Product API so we can check the **Manage** > Products checkbox below.

![](/images/Headless-Commerce/1*1c5Hjpp2w2yf8KFYVwQXgQ.png)

  

#### Terminology Used

*   API — Application Programming Interface;
*   SPA — Single Page Application;
*   ERP — Enterprise Resource Planning.

#### In Conclusion
