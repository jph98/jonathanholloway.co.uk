---
template: post
title: Codebase Readability
date: 2021-02-27T12:47:13.579Z
excerpt: >-
  How do we document codebases to provide better information to newcomers so
  they can grasp the concepts quicker during developer onboarding?
---
How do we document codebases to provide better information to newcomers so they can grasp the concepts quicker during developer onboarding?

Written documents have readability metrics, namely **Flesch-Kincaid** or **SMOG**. More information about that available here:

[**What is readability, and why does it matter?**  
*Striving to maintain a moderate reading level helps writers be more precise and reach a broader audience*medium.com](https://medium.com/@uistephen/what-is-readability-and-why-does-it-matter-7773d018e4b9 "https://medium.com/@uistephen/what-is-readability-and-why-does-it-matter-7773d018e4b9")[](https://medium.com/@uistephen/what-is-readability-and-why-does-it-matter-7773d018e4b9)

First, let’s define what we mean by lousy readability in terms of a codebase. We generally find code unreadable when:

*   There is a poor **organisation** with badly named folders and little structure to aid navigation;
*   There are **long** methods or functions;
*   There are **large** classes or files containing lots of tasks that may be unrelated;
*   Variables, methods/functions or files are **poorly named**;
*   There are **no tests** that provide insight into entry points in the codebase and flows through the system;
*   There’s **no documentation** to hand — README files, onboarding guide etc…;
*   **Engineers are maxed out** delivering code and don’t have time to coach more junior members of the team;

We write technical documentation at many levels, when:

*   **Describing Units** (classes, files, methods, functions) — we generally use an inbuilt language tool such as pydoc or Javadoc;
*   **Line Level** — usually when something is involved, but there’s no real need to ever comment at line level if your functions are small and well-named;

The problem with these methods of documentation is that they don’t describe the sequence/flow of behaviour very well.

*   **Unit Tests** — describe inputs, behaviour and outputs
*   **Integration Tests** — describe flow through several components/units, possibly utilising mocks;

> Readability goes hand in hand with quality and productivity.

If you have a **messy**, **unreadable** **codebase,** you’re unlikely to be as **productive** as when things are laid out with good structure, proper naming and supportive team members.

### Making a Codebase More Readable

Earlier, we talked about a method for navigating a new codebase, by setting a debug breakpoint, step debugging and making notes. Those notes are breadcrumbs to understanding it better, being able to refer back to it at a later date or useful to others.

TODO: Tools for creating and sharing breadcrumbs and notes with the team

TODO: Build models of the underlying system (Technical Debt/Complexity, Readability, Testability) for each component in the app.

TODO: Have a two-page architectural overview

TODO: Hold regular weekly or fortnightly sessions on an area of the codebase

TODO: Have a documentation site that is embedded in the codebase

TODO: Does Hubert’s video make sense to include here on readability

There are some tools that aim to provide alternative representations of your codebase in order to improve readability.

### Getting Better at Reading Code

There are some things we can do to get better at reading code:

Experiment with **reading new codebases** on Github — download, setup the developer environment and debug through a thread of that codebase, read, make notes and learn to do this quickly.

Carry out **group code reviews** — involve the team or three/four people and go through code 30 mins a week to upskill. Book a meeting room with a large TV or monitor and pick one area of the codebase to focus on. Have the expert in that area describe it to the other members of the group.

Run **experiments** to understand the codebase better.

Apply what you’ve learned (and what makes reading codebases easier) to your codebase in your organisation.

[http://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1054&context=computerscidiss](http://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1054&context=computerscidiss)
