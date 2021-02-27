---
template: post
title: Data Lakes/Swamps 101
date: 2021-02-27T12:47:13.681Z
excerpt: >-
  Ah, the data lake. Home to mythical sea creatures, reptilian beasts and sunken
  treasure. For a lot of companies, the data lake is a fairly…
---
  

Ah, the data lake. Home to mythical sea creatures, reptilian beasts and sunken treasure. For a lot of companies, the data lake is a fairly well-understood term, but it doesn’t hurt to define it and then describe the various components. 

Caveat: I’m not in absolutely any form going to put a picture of a lake in here. I truly will save you the pain of looking at a serene picture that portrays it as a wonderful place. If you came there looking for that — I apologise.

So, what’s a data lake? 

[James Dixon of Pentaho](https://www.forbes.com/sites/bernardmarr/2018/08/27/what-is-a-data-lake-a-super-simple-explanation-for-anyone/#5c927dff76e0) originally coined the term describing it as:

> The data lake is a large body of water in a more natural state. The contents of the data lake **stream** in from a source to fill the lake, and various users of the lake can come to examine, dive in, or take samples.

[Amazon](https://aws.amazon.com/big-data/datalakes-and-analytics/what-is-a-data-lake/) describe it as:

> **A data lake is a centralized repository that allows you to store all your structured and unstructured data at any scale**

[Microsoft](https://docs.microsoft.com/en-us/azure/architecture/data-guide/scenarios/data-lake) describe it as:

> A data lake is a storage repository that holds a large amount of data in its native, raw format

So, I’d go with:

> An area for structured and unstructured data collection, transformation and presentation to our end-users

What are the essential components of a data lake?

*   **Raw Data Storage** — a highly scalable storage area for raw data ingested from other systems in a company;
*   **Pipelines** — provide processing of raw data into more complex forms;
*   **Optimised Data Storage** — data storage optimised for access in various ways (think fast reads, big exploratory investigation, aggregated rolled up data, real-time stats)
*   **Data Catalog** — metadata around datasets, locations, classification, timestamp information etc…

Let’s look at these in-depth:

#### Raw Data Storage

*   Attributes of a solution
*   Options (S3, Google Data Storage)
*   Ingesting data

#### Pipelines

*   Batch upload of data
*   Streaming data 

#### Data Storage

*   Relational Database
*   Non-relational Databases (Key-Value, Document, Column, 

#### Data Catalog

  

#### Conclusion

I’m a Consulting CTO doing fractional and interim work in London and Bristol. I often do tech audits
