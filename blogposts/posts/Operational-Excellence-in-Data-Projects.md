---
template: post
title: Operational Excellence in Data Projects
date: 2021-02-27T12:48:02.674Z
excerpt: >-
  I’ve seen a fair few data projects in various industries — health-care,
  finance, insurance, eCommerce and sports to name a few.
---
I’ve seen a fair few data projects in various industries — health-care, finance, insurance, eCommerce and sports to name a few.

It’s increasingly more important as a software engineer to understand the world of data science and there’s a wealth of experience, tools and techniques in the software engineering world that can benefit data-scientists and analytics heavy companies. Both disciplines have lots to teach each other in that respect.

I see some organisations (too many in fact) organise around “data teams” and “engineering teams” as single disciplines rather than multi-disciplinary teams containing data scientists and data engineers. That’s often coupled with a chief/head of data and chief/head of engineering. There’s a huge trap you can fall into here by not having people work side by side on projects, learn from each other and this can lead to cultural and political problems between those departments which are incredibly difficult to fix further down the line. 

Coming from a data-science background into the industry has a steep learning curve associated with it. It’s become more complex, broader and more challenging in the last ten years as well! Some examples of areas you need to upskill on include the following:

*   How to work with the cloud when your processing involves TB of data which need to be processed within a given time or to take advantage of compute optimised for GPU workloads;
*   The right choice of data storage — when relational and SQL is right vs non-relational (document stores such as MongoDB) or large columnar databases such as BigQuery;
*   Visualisation with Javascript libraries such as Chart.js and D3 vs utilising business intelligence tools such as Tableau, Google Data Studio or AWS Quicksight;
*   Building API’s using simple frameworks such as Flask (Python), PlumbR (R) or Express (Node.js) to ingest and present data.

There are two options here as a data scientist depending on your organisation and team(s) structure:

1.  Develop your model end to end and then hand it over to engineering to productionise and deploy;
2.  Design, between data-science and data-engineering, the approach to the solution and develop according to a set of guidelines.

You can already see the problem with the “throw it over the wall” solution. The fear is that things “slow down” by designing (measure twice, cut once) the solution. It’s a general problem that exists within the software industry for sure. However, by collaborating at the design phase, there’s a major benefit in aligning expectations, defining “good” standards and minimising rework further down the line.

Aligning your design efforts to operational requirements (see OPAQ) is a good way to structure the design sessions so that you start thinking about operational excellence up-front. What follows is a set of points for data-science projects based on past experience. Address these are you’ll be ahead of most.

#### Adopt a Standard Structure for Data Science Projects

Standard project structures and convention over configuration are a big time saver early on in the project. By adopting a standard structure:

*   People don’t have to guess where things live, it’s obvious after working with the first project;
*   Predictability allows for simpler scripting and tooling across projects (think continuous integration builds, production log monitoring, deployment etc…);

[Cookie Cutter Data Science](https://github.com/drivendata/cookiecutter-data-science) is a good example of a standard structure for your data science projects in the Python World.

You may have to look after your models in production, or somebody else might. The best way of detailing “how to dev”, “how to test”, “how to run” and “how to debug” is by putting this information in your README.md file within Github. This is a better option than Confluence/Notion because the instructions live with the code, and have a much better chance of being maintained there along with the code.

#### Isolate Your Dependencies

Python and R suffer from similar problems with respect to having the correct set of versioned libraries/packages and the right version of the interpreter installed. Docker helps you here by having you specify everything within your Dockerfile for the project. You can go one step further by building your own common Dockerfile image which can then be reused throughout the organisation for all projects. Winning.

#### Adopt Managed Workflow

On the subject of executing models, particularly if they’re part of a larger workflow, I have some opinions :) namely:

*   Don’t use Cron for Scheduled Tasks — it’s a pain to debug and it’s a pain to edit a crontab file;
*   Adopt a simple managed workflow solution

#### Standardise Your Production Environment

Standardise deployments to common locations (never in home folders, always into /opt or another partition). Even better than this, Dockerise your solutions and push and deploy Docker containers. Whilst your it, ensure the following is in-place for easier operations:

*   Standard log file locations;
*   Monitoring 

####   

####   

####
