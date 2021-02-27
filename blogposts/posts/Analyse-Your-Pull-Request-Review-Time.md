---
template: post
title: Analyse Your Pull Request Review Time
date: 2020-08-02T12:36:14.793Z
excerpt: >-
  Review is an important part of software development, whether that’s asking
  someone to rubber-duck with you:
thumb_img_path: images/Analyse-Your-Pull-Request-Review-Time/1*32WTzdFmFIy_cL6vetKuww.png
---
Review is an important part of software development, whether that’s asking someone to rubber-duck with you:

1.  A proposed product feature — the happy path, non-happy paths and overall way it integrates with the rest of the system
2.  Your technical design of a given service/API, integration etc… (how you intend to design this with respect to the how — the non-functionals etc…
3.  A pull request for the work you’ve completed to match (1) and (2)

There’s an additional element during review — style and consistency with the rest of the system. This is subjective, unless you’re using linting and common code-styles. It saves lots of arguments in the long run.

As part of a larger process, pull requests should really be optimised to be completed within 24 hours. We should optimising each part of the development process including the review time to be optimal in terms of flow. You don’t want to end up with work queued, effectively bottlenecked and waiting to be completed.

![](/images/Analyse-Your-Pull-Request-Review-Time/1*32WTzdFmFIy_cL6vetKuww.png)

The ratio of front-end, back-end, test and release effort should be adequate to allow work to flow without building up.

In order to stop this from happening, I built out a series of tools against the Github API to understand development in various organisations. It’s by no means production code btw : )

[**GitHub REST API**  
*You can use the GitHub REST API to create calls to get the data you need to integrate with GitHub. Learn about…*docs.github.com](https://docs.github.com/en/rest "https://docs.github.com/en/rest")[](https://docs.github.com/en/rest)

Github also provide a set of bindings in Javascript and Typescript around their API in form of various libraries. I picked up Octokit to do this specifically, rather than build against the API directly.

[**Octokit**  
*GitHub is home to over 50 million developers working together. Join them to grow your own development teams, manage…*github.com](https://github.com/octokit "https://github.com/octokit")[](https://github.com/octokit)

In order to get a list of pull requests, you can do the following:

[https://gist.github.com/jph98/df866f46f9fa79004cb5a035105858f2](https://gist.github.com/jph98/df866f46f9fa79004cb5a035105858f2)

From there you can do whatever you want. In my case it was the following:

**Generate average time to merge across a time range (the last 14 days)**

![](/images/Analyse-Your-Pull-Request-Review-Time/1*mvhmLlXsUZq6dHjPlDcHqA.png)

**Get a list of open pull-requests and how long they have been open for**

The state field allow you to filter by the state of the pull request (e.g. open, closed etc…). I also used the nodejs **groupby** library to group pull requests by day and display it in a table format using the excellent **cli-table** library.

![](/images/Analyse-Your-Pull-Request-Review-Time/1*IwUOuE1Np4lT9Tc-FrimLw.png)

#### Conclusion

Octokit and the Github API allow you to analyse and generate a set of interesting stats to optimise your development flow, identify bottlenecks and solve those with the rest of the team.

I’m an product focused engineer and CTO, you can find out more about me here and hire me in an interim/fractional capacity:

[**About us - founders at HWIntegral - HW Integral**  
*About us, Jonathan Holloway and Caroline Wilkinson are founders at HWIntegral covering interim CTO services, product…*www.hwintegral.com](https://www.hwintegral.com/about "https://www.hwintegral.com/about")[](https://www.hwintegral.com/about)
