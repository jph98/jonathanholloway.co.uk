---
template: post
title: Data Architecture – Components 101
date: 2021-02-27T12:47:13.624Z
excerpt: >-
  I’ve architected, built out and fixed a few data platforms for companies over
  the last ten years, namely around:
---
I’ve architected, built out and fixed a few data platforms for companies over the last ten years, namely around:

*   Drug modelling within the pharmaceutical industry – analysis, model development, execution and reporting;
*   Solvency related models in insurtech – execution and reporting; 
*   Various models including liquidity in fintech;

Work has generally been centred around a number of different areas:

*   Looking at various load scheduler solutions (MPI based jobs and simulations) or Hadoop based solutions when the problems fits;
*   Looking at cloud based solutions for running large jobs using cloud-bursting;
*   Looking at the right hardware solutions in place for nodes in the load scheduler solutions and optimising accordingly for workloads;
*   Architecting software to allow for the running, in-progress monitoring and reporting on these jobs;
*   Working on modelling/machine learning based (devops/mlops) tooling around these solutions. A mixture of CI/CD, versioning, provenance and the route from exploration through to production;
*   Understand the right file formats, transformation of “old-school” data formats into better representations for processing.

#### On Premise Patterns

Distributed Load Schedulers come in various shapes and sizes, namely with solutions such as:

*   Sun/Univa Grid Engine – https://github.com/gridengine
*   Slurm – https://slurm.schedmd.com/
*   IBM Platform LSF – https://www.ibm.com/support/knowledgecenter/en/SSETD4/product\_welcome\_platform\_lsf.html
*   Microsoft HPC – https://docs.microsoft.com/en-us/powershell/high-performance-computing/overview

These are generally older style on-premise solutions that involve:

*   A central based scheduler with redundant master/slave setup;
*   Several (often hundred or thousand) compute nodes network connected using NFS or a similar protocol and managed by the scheduler. They may be pooled in terms of priority or department in the organisation;
*   Control (authentication and authorisation in terms of user access, allocation of resources – sometimes time based).

Management of software on these nodes were typically based on scripted tool management software (Bash or Python based) which would be used to:

*   Initialise the environment in terms of dependencies or tools including the specific version of that tool (Python, R or something more obscure for modelling/simulation);
*   Possibly (if the job required) initialisation of MPI for parallelisation of the 

#### Cloud Based Patterns – GCP

TODO
