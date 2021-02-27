---
template: post
title: Sonic Pi Introduction — Part Two
date: 2019-01-28T18:26:00.963Z
excerpt: Recap
thumb_img_path: images/Sonic-Pi-Introduction---Part-Two/1*Jfm8C2MIjCkK73wdlElXWA.jpeg
---
### Recap

In [part one](https://medium.com/p/e2f12e9611df) we looked playing synthesised sound and samples. Here we will expand and introduce some more structure/patterns and look at FX.

*   Loops and iterators — to introduce some basic structure
*   Randomisation — to introduce some more interesting sounds
*   Effects — Overlaying some FX (a reverb effect) to the samples
*   Generating [arpeggios](https://study.com/academy/lesson/arpeggio-in-music-definition-patterns.html) — using some variables and loops

![](/images/Sonic-Pi-Introduction---Part-Two/1*Jfm8C2MIjCkK73wdlElXWA.jpeg)

### Loops/Iterators

In part one we used a simple loop to play a set of kick drum samples, this was as follows:

    use_sample_bpm :drum_heavy_kick  
        
    4.times do |n|  
      sample :drum_heavy_kick  
      sleep 0.5  
    end

Let’s expand on this by:

*   Playing a sample (A bass drum kick) a specific number of times (using .times)
*   Adding another sample which plays after the first, we’ll use the sleep keyword to play it at a slower speed.

    use_sample_bpm :drum_heavy_kick  
        
    4.times do |n|  
      sample :drum_heavy_kick  
      sleep 0.5  
    end
    3.times do |n|  
     sample :drum_heavy_kick  
     sleep 2  
    end

Now let’s surround the whole thing in an infinite loop so it repeats until further notice:

    use_sample_bpm :drum_heavy_kick
    loop do  
        
      4.times do |n|  
        sample :drum_heavy_kick  
        sleep 0.5  
      end  
        
      3.times do |n|  
        sample :drum_heavy_kick  
        sleep 2  
      end  
        
    end

Use ⌘ + R shortcut or use the “Run” button. This time you will need to use the ⌘ + S shortcut or use the “Stop” button.

Pretty cool? Try playing about with the values for sleep, add another .times section. It’s interesting to try and emulate something you know in popular music.

Ok, lets go back to a synthesised instrument and look at some basic algorithms.

### Randomisation

We can use any synthesised instrument and use a function called rrand() to generate a different note each time. Ends up sounding somewhat eerie.

    use_synth :piano
    loop do  
      play rrand(20, 80)  
      sleep 0.1  
    end

You can also apply rrand() to other things, try using it with the sleep keyword.

### Effects (FX)

Whilst we’re at it, lets use some Sonic Pi FX (reverb)to make our odd piano loop sound even weirder:

    use_synth :piano
    with_fx :reverb, room: 0.9 do  
      loop do  
        play rrand(20, 50)  
        sleep 0.4  
      end  
    end

You can find out more about FX parameters here:

[**samaaron/sonic-pi**  
*The Live Coding Music Synth for Everyone. Contribute to samaaron/sonic-pi development by creating an account on GitHub.*github.com](https://github.com/samaaron/sonic-pi/blob/master/etc/doc/cheatsheets/fx.md "https://github.com/samaaron/sonic-pi/blob/master/etc/doc/cheatsheets/fx.md")[](https://github.com/samaaron/sonic-pi/blob/master/etc/doc/cheatsheets/fx.md)

And also the reverb FX with the various parameters here:

[**samaaron/sonic-pi**  
*The Live Coding Music Synth for Everyone. Contribute to samaaron/sonic-pi development by creating an account on GitHub.*github.com](https://github.com/samaaron/sonic-pi/blob/master/etc/doc/cheatsheets/fx.md#reverb "https://github.com/samaaron/sonic-pi/blob/master/etc/doc/cheatsheets/fx.md#reverb")[](https://github.com/samaaron/sonic-pi/blob/master/etc/doc/cheatsheets/fx.md#reverb)

### Generating Arpeggios

Ok. So we’ve generated some basic sequences of notes. Now let’s look at a fairly standard structure in music – the arpeggio. We do create an arpeggio by cycling through an array of notes and altering the base\_note value in the following (first by adding 3 to it and then by adding 7). We do this for every note in the array by incrementing n by 1.

    interval = 0.2  
    notes = [72, 65, 58, 62]
    while true  
      n = 0  
      notes.length.times do  
        base_note = notes[n]  
        3.times do  
          play base_note  
          sleep interval  
          play base_note + 3  
          sleep interval  
          play base_note + 7  
          sleep interval  
        end  
        n += 1  
      end  
    end

That gives you an ascending arpeggio. Try creating a descending arpeggio by subtracting from the value also.

We should now have some very basic building blocks for creating sequences. We could improve the structure further by using functions, but this is good enough for now.

[In part 3](https://medium.com/@jonathan.holloway/sonic-pi-part-3-multiple-music-parts-cfb9bd8f4ed3) we’ll look at building a song out of synthesisers (for drums, base and melody) and then add some Sonic Pi samples for variety.

**Cheatsheet**  
[https://www.cl.cam.ac.uk/projects/raspberrypi/sonicpi/media/sonic-pi-cheatsheet.pdf](https://www.cl.cam.ac.uk/projects/raspberrypi/sonicpi/media/sonic-pi-cheatsheet.pdf)
