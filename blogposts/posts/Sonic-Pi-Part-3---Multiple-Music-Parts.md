---
template: post
title: Sonic Pi Part 3 — Multiple Music Parts
date: 2019-11-05T09:53:42.484Z
excerpt: >-
  In part two we looked at some basic structure and some basic algorithms for
  generating loops of musical notes and samples.
thumb_img_path: images/Sonic-Pi-Part-3---Multiple-Music-Parts/1*fccDrSf2FQ6LL-RaF3wloQ@2x.jpeg
---
In [part two](https://medium.com/@jonathan.holloway/sonic-pi-introduction-part-two-ade5f5c91bde) we looked at some basic structure and some basic algorithms for generating loops of musical notes and samples.

![](/images/Sonic-Pi-Part-3---Multiple-Music-Parts/1*fccDrSf2FQ6LL-RaF3wloQ@2x.jpeg)

* * *

Now we want to combine multiple loops so that they play simultaneously. That’s what a song is after all — a set of music parts played sequentially – but also in parallel.

*   Bass
*   Drums
*   Synth lines/guitar/piano
*   Vocals

To play music parts sequentially we simply structure them one after another in our Sonic Pi scripts. However, to play music parts in parallel we have to create and start a “thread” to execute that music part.

n.b. The tempo (beats per minute) for Sonic Pi by default is 60 bpm, we can change that, but for now we’re going to leave it the same. Why is this important? Because all music parts you create will sync to that tempo.

### Threads

The following program has one thread (this is called the main thread) which starts a loop. You cannot exit the loop unless you press the Stop button.

    `loop do  
      sample :`bass_hit_c `sleep 1  
    end`

However, now we want to create another loop that plays in time with this. So we add the following…

    `loop do  
      sample :`bass_hit_c `sleep 1  
    end`
    `loop do  
      sample :`elec_blip `sleep 1  
    end`

We still only hear the bass though, no chime, why? This is due to only the first loop playing and never reaching the second. We could fix this in two ways:

1.  Layer the sounds within a single loop. This is fine, but if need them to alter them independently — say different sleep statements – then this isn’t going to work.
2.  Use a construct called threads — yay! This would start our loops independent of one another to so they play at the same time.

To do this, we use a construct called in\_thread, as follows:

    in_thread do  
      loop do  
        sample :bass_hit_c  
        sleep 1  
      end  
    end
    loop do  
      sample :elec_blip  
      sleep 1  
    end

We could wrap our last loop in an in\_thread statement as well, but since we have the main thread to execute it there’s no real point, other than consistency. One thread can play one part.

If we need to add another music part, then we also need to wrap it in an in\_thread statement.

    in_thread do  
      loop do  
        sample :drum_heavy_kick  
        sleep 1  
      end  
    end
    in_thread do  
      loop do  
        sample :bass_hit_c  
        sleep 1  
      end  
    end
    loop do  
      sample :elec_blip  
      sleep 1  
    end

If we were using Ableton or a similar sequencer we’d see this graphically as the following.

![](/images/Sonic-Pi-Part-3---Multiple-Music-Parts/1*6Fmvu2x5Jkmbm8-bzHKuaQ.png)

### **Buffers!**

There are a number of ways to be organised with Sonic Pi. Things can get out of hand pretty quickly as we add more music parts and threads. Our script would grow and become difficult to manage. This is a common problem in software development as well : )

You can use **Buffers** as separate areas for coding. In addition to the section we wrote above, we could also select a new buffer **(Buffer 1)**, paste in the following and start this whilst **Buffer 0** is playing

    loop do  
      use_synth :blade  
      play 80  
      sleep 0.5  
    end

That not only cleans things up. It also gives us a way to jam with additional lines (buffer 1) over a backing track (buffer 0).

### Functions

You could also structure your code within your buffer into functions to help clean things up. A function allows you to keep related elements of code together. The odd thing at first regarding functions is that you need to declare, but also call them.

The basic definition of the function is as follows:

    def this_is_my_function_name()
    end

A loop such as the one above (the :blade) runs immediately. If we now declare it within the scope of a function, it will no longer run. e.g.

    def play_the_blades()  
      loop do  
        use_synth :blade  
        play 80  
        sleep 0.5  
      end  
    end

In order to make this function play we need to call it. That’s pretty simple, we just need to specify the name of the function with a set of brackets:

    play_the_blades()

Why would you do this?

*   It keeps your code structured and organised.
*   It can reduce duplicate code that you may need to write

Say we want to play a note, but using a different type of synth each time.

To do that we could declare the list of synths to choose from as an array:

    synths = [:blade, :hoover, :growl]

Then we could choose a random synth name each time we run using the following:

    synth_name = synths[rand(3)].to_sym()

This will:

*   generate a number between 0 and 2 (array indexes start at 0) — rand(3)
*   lookup the synth name from the array — synths\[rand(3)\]
*   and then convert that to a symbol — synths\[rand(3)\].to\_sym()

Finally, we need to call the function with the synth name:

    play_the_blades(synth_name)

and then restructure our program so that the loop is outside the play\_the\_blades function and will:

*   Generate the synth name
*   Play the function passing the synth name as a parameter

To define the parameter as taking a parameter we need to do the following:

    def play_the_blades(synth_name)

and then use that synth\_name to select the correct synth as follows:

    use_synth synth_name

Our final program looks like this:

    def play_the_blades(synth_name)  
      use_synth synth_name  
      play 80  
      sleep 0.5  
    end
    synths = [:blade, :hoover, :growl]  
    loop do  
      synth_name = synths[rand(3)].to_sym()  
      play_the_blades(synth_name)  
    end

Ok, it sounds aa bit weird, but it demonstrates some powerful constructs in structuring things, namely:

*   Functions
*   Function Parameters
*   Randomisation
*   Selecting something from an array
*   Generating a symbol from a string

### Conclusion

We’ve covered an awful lot in this third part.

*   **Threads** — which allow us to play multiple parts
*   **Buffers** — which allow us to experiment and jam with multiple lines of music
*   **Functions** — which allow us to clean-up our parts and reduce duplication of code

That covers the basics for Sonic Pi, in Part 4 we’ll look at doing some more complex arrangements utilising some real-world inputs. Till then…
