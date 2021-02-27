---
template: post
title: Docker Recipes and Learnings
date: 2021-02-27T12:47:26.295Z
excerpt: Docker for Data Engineering (mostly)
---
Docker for Data Engineering (mostly)

I’ve been doing a fair bit of work with Docker recently for developing locally, but also working in production. This has been application development and pipeline development for building a new data-lake. What follows are a setup of recipes and learnings for those needing to do specific tasks. They serve as points for reading up and learning more about Docker, which seems to be a partisan subject amongst most developers today. 

#### Installing the Google Cloud SDK on a Docker Image

If you need to interact with Google Cloud from your local machine, it’s great to use the Google Cloud SDK. I’ve primarily used this for working with BigQuery (via the BQ command). Here’s a short Dockerfile recipe that will get you the latest SDK and install it.

Make sure you generate a new service account and key for Google Cloud and include that as part of this. 

<script src="https://gist.github.com/jph98/692272061774fa0ad1c1ef9e539f842e.js"></script>

#### Running a Script and Collecting the Output

A common requirement for Docker is the following:

1.  Initialise an environment for a script to run in a container
2.  Run the script in a container
3.  Collect the output from the container and copy back to the host machine

Here’s how you do that:

  

#### Setup a Website in Docker

#### Setup an API in Docker

  

#### Docker Makefile 

I normally work with Docker through a simple Makefile. It’s lazy, yes, and I should learn the commands, but hey, the tech world is dense and broad — you can’t keep everything in your head. 

<script src="https://gist.github.com/jph98/398a6527a73fc0fc336ae2d21e9eeb4f.js"></script>
