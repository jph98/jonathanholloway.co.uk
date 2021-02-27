---
template: post
title: Sonic Pi Introduction— Part One
date: 2019-01-21T08:26:00.617Z
excerpt: >-
  Sonic Pi has really changed the whole art of making music for me. Why? Because
  it’s based around coding in a language called Ruby rather…
thumb_img_path: images/Sonic-Pi-Introduction--Part-One/1*ZZPVVx20uMsUSVGC2esYzQ.png
---
### What is Sonic Pi?

Sonic Pi is a a (live) coding tool, created by [Sam Aaron](https://twitter.com/samaaron) for writing music using the Ruby programming language. It’s changed the whole art of making music for me because I can now include algorithmic elements to generate music rather than using a physical device (like a guitar/bass/piano) or by using a graphical sequencer (like [Ableton](https://www.ableton.com/en/)). That makes it a super creative way to create music, experiment with sound using code.

If you’re a musician looking to learn to code or a coder looking to learn music then this is a great tool for you.

### Downloading

You can download Sonic Pi from [https://sonic-pi.net](https://sonic-pi.net) and it looks something like this (on OSX).

![](/images/Sonic-Pi-Introduction--Part-One/1*ZZPVVx20uMsUSVGC2esYzQ.png)

Over the course of this year I’m aiming to do a workshop and talk on this subject, how it works and how to get into Sonic Pi.

Sonic Pi can be based around **synthesised sounds** generated from a software based device, but it can also be based around **sampled sounds/loops** created by yourself or [others](https://www.soundsnap.com/music_samples_single/piano_electric_piano_organ)**.**

### **Synthesised Sounds**

You can find a full list of all the synthesisers here to explore later.

[https://github.com/samaaron/sonic-pi/blob/master/etc/doc/cheatsheets/synths.md](https://github.com/samaaron/sonic-pi/blob/master/etc/doc/cheatsheets/synths.md)

Let’s start using the blade synth, and explore playing some notes. The numbers here correspond to notes within octaves on a standard musical piano. Chart as follows. Middle C on a piano would be 60 here.

![](/images/Sonic-Pi-Introduction--Part-One/1*3Qm1Kbz0CnbsgogA0GJhrg.png)

* * *

    use_synth :blade  
    play 80  
    sleep 0.5  
    play 40  
    sleep 0.5  
    play 60  
    sleep 0.5  
    play 70  
    sleep 0.5  
    play 50

To play this, use⌘ + R or use the “Run” button.

Now lets play a set of chord (a group of notes sounding together

    use_synth :blade  
    play 80  
    play 60  
    play 40  
      
    

That forms a very basic introduction to playing notes with Sonic Pi.

### Sampled Sounds

Rather than using the synth devices, we can also play samples. Sonic Pi has a number of built in samples, but you can also import your own.

The full list of samples can be found here

[**samaaron/sonic-pi**  
*The Live Coding Music Synth for Everyone. Contribute to samaaron/sonic-pi development by creating an account on GitHub.*github.com](https://github.com/samaaron/sonic-pi/blob/master/etc/doc/cheatsheets/samples.md "https://github.com/samaaron/sonic-pi/blob/master/etc/doc/cheatsheets/samples.md")[](https://github.com/samaaron/sonic-pi/blob/master/etc/doc/cheatsheets/samples.md)

Let’s just use a (fairly standard) Amen break, that’s pretty standard in Drum and Bass. It also has a [cool history](https://en.wikipedia.org/wiki/Amen_break).

    `use_sample_bpm :loop_amen  
    sample :loop_amen`

Alternatively we could use the a kick drum sample and create a loop to play this a number of times.

    use_sample_bpm :drum_heavy_kick
    4.times do |n|  
      sample :drum_heavy_kick  
      sleep 0.5  
    end

### Parameters

We can also alter a number of parameters around the sample, let’s pick a longer one though (ambi\_lunar\_land).

Pan — Pan a sound to the left speaker (-1) or the right(1).

    sample :ambi_dark_woosh, pan: -1  
    sleep 0.5  
    sample :ambi_choir, pan: 1  
    sleep 0.5

Attack/Release — Fade a sample in (alter the attack) and out (alter the release. For more on ADSR, see [this article](https://blog.landr.com/adsr-envelopes-infographic/).

    `sample :`ambi_dark_woosh`, attack: 0.75, release: 0.75`

There’s loads more we can do with Sonic Pi, but that’s good enough to start. Next time we’ll look at structure, randomisation and variation [in part 2](https://medium.com/@jonathan.holloway/sonic-pi-introduction-part-two-ade5f5c91bde).

**Resources**

The Sonic Pi cheatsheet is great if you want to take this further.

[https://www.cl.cam.ac.uk/projects/raspberrypi/sonicpi/media/sonic-pi-cheatsheet.pdf](https://www.cl.cam.ac.uk/projects/raspberrypi/sonicpi/media/sonic-pi-cheatsheet.pdf)
