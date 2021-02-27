---
template: post
title: Algorithmic Ableton Arrangements
date: 2021-02-27T12:47:00.525Z
excerpt: >-
  When working with Ableton to build arrangements there are a number of ways in
  which you can work. My preferred method is to record hardware…
---
When working with Ableton to build arrangements there are a number of ways in which you can work. My preferred method is to record hardware synths, drums etc… as separate clips and then jam with those clips to create an arrangement.

In terms of hardware devices there are a number of options:

**Ableton itself** — mouse and keyboard-based control to trigger arrangements 

*   Pros: Simple, no hardware
*   Cons: Clunky, slow, not that expressive

**Ableton Push 1/2/Novation Launchpad** — grid (pad-based) arrangements, rotary controllers and sliders

*   **Pros**: expressive, you have a view of Ableton clips which allow you to do triggering of clips or collections of clips.
*   **Cons**: You can’t see what each pad corresponds to without looking at the computer screen in some of these solutions. However, with Push, you have a dedicated display It’s costly however at nearly £600.

**Hardware Synths/Samplers/Groove Boxes** — hardware devices that can transmit MIDI to Ableton for recording and triggers. Some of these have sequencers that you can record (e.g. Digitakt, Electribe) but the usability of these can be problematic (think of the Roland 303).

#### **The Requirement**

For my side project, none of these work! I wanted to do something different — not just trigger clips or collections of clips based on what I select. I wanted to script a solution and introduce some randomness as well as some more sophisticated algorithms.

For this, I need a software bridge to Ableton. There’s a few options:

*   Make use of a MIDI library in a given language (Python, Ruby, Javascript) whatever works;
*   Make use of an Ableton abstraction library in a language. Sometimes things don’t go so smoothly here though…

Let’s look at some solutions for the second option. Caveat: this is very much relevant to Mac OSX. 

**Python + Pylive** —  [https://pypi.org/project/pylive/](https://pypi.org/project/pylive/)

**Node + AbletonJs** — [https://github.com/leolabs/ableton-js](https://github.com/leolabs/ableton-js)

Looking at both solutions, Ableton-JS was the easiest to get up and running with:

    git clone [git@github.com](mailto:git@github.com):leolabs/ableton-js.git
    cd ableton-js
    cp -Rf midi-script /Applications/Ableton\ Live\ 10\ Suite.app/Contents/App-Resources/MIDI\ Remote\ Scripts/abletonjs

Start Ableton, Live > Preferences, and choose abletonjs as one of the control surfaces. That’s it, let’s start scripting:

    mkdir abletonalgo && cd abletonalgo  
    npm init  
    npm i ableton-js -s

#### How does this work?

Ableton-js will use UDP to communicate with midi-script as a control surface. For that it needs to communicate on ports
