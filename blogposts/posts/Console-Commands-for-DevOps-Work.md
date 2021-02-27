---
template: post
title: Console Commands for DevOps Work
date: 2019-11-15T11:57:10.143Z
excerpt: >-
  I ran Linux as an operating system for development for many years, starting
  with Redhat way back in the late ’90s. I was forced to switch…
thumb_img_path: images/Console-Commands-for-DevOps-Work/1*9GwA8mffYTHXdSFaM-JRCw.png
---
I ran Linux as an operating system for development for many years, starting with Redhat way back in the late ’90s. I was forced to switch to Windows around 2003 mainly for business reasons (MS Office mainly), or for IT compliance reasons. Back in 2007, I switched back to Linux moving between RHEL, Centos, Mint amongst others.

![](/images/Console-Commands-for-DevOps-Work/1*9GwA8mffYTHXdSFaM-JRCw.png)

There are many great things about Linux as a development environment over Windows.

*   You can install the same tools that you use on prod;
*   Built-in package management with yum, apt-get etc…;
*   A proper POSIX shell by default (Bash, but you can also install zshell).

In recent years I’ve switched to MacOS (yes I know) mainly because of the tooling outside of the development environment. It still has a great console though in the form of [iTerm](https://iterm2.com/) or [hyper](https://hyper.is/) and fundamentally is derived from Unix/BSD.

![](/images/Console-Commands-for-DevOps-Work/1*YakfqeEgSU3QIrUc-N4JKA.png)

Here are some of my favourite commands for:

*   Understanding System Performance (htop);
*   Starting a webserver in a directory (python);
*   Executing a command on a Remote Server via SSH;
*   Reading compressed (log) files (zless);
*   Executing a command for a list of files;
*   Finding a previously executed command.

#### Understanding System Performance (htop)

The top command has been around for years, but htop provides a fancier, nicer experience and a few extra bells and whistles.

![](/images/Console-Commands-for-DevOps-Work/1*tPvnXiYRJpumd8s0WbIQfg.png)

Why is htop an improvement over top? Well, firstly, it’s prettier making use of curses as a terminal control library. Here’s some other reasons:

*   Built-in **nice and kill** functionality so you don’t have to kill <pid> and can just scroll, select and apply and the command instead;
*   You can view the **actual path** to the process to understand where the binary lives and what parameters were passed to the command when starting it;
*   You can **search (F3)** or **filter (F4)** for a specific command by hitting and typing the name. The command is then highlighted;
*   By hitting F5 you can view a process tree and see the hierarchy of the the process in terms of relationships;

Overall, it provides a lot more control over top, but then you do have to install it or make sure it’s baked into your AMI or disk image for large estates.

There’s also a lesser-known command for monitoring system input/output stats for devices:

    iostat

and a way to monitor active Internet connections:

    netstat

#### Starting a webserver in a directory

When I need to try out a specific application or I need to fire up a web-server to serve/test some static content, there’s a pretty nifty built-in tool for Python (which comes installed on most distros):

    python -m SimpleHTTPServer

That fires up a webserver on localhost:8000. You can then share this with someone else to download specific files in that directory or view the static site you’ve created.

#### Reading compressed (log) files

A lot of people opt for vim (or nano if you like that sort of thing) for viewing files on a server. I don’t like this much for two reasons:

1.  It allows you to change the contents of the file
2.  Half the internet doesn’t know how to exit vim : )

A better option is to use the less command, but you can also use zless to view a compressed file:

    zless massive-log-file.gz

#### Executing a command on a Remote Server via SSH

You can execute a command on a remote server in one line using the following:

    ssh root@remoteserver.com “ls -Al /var/www/html”

If you want to save the output from this then redirect it to a local file:

    ssh root@remoteserver.com “ls -Al /var/www/html” > output.txt

#### Executing a command for a list of files

Sometimes you want to apply the same command to a list of files. Rather than executing the command for every file, you can use a one-line for loop in Linux as follows:

    for file in *; do wc -l $file; done

which provides you with a line count for every file in the current directory.

     15 Gemfile.lock  
           6 README.md.gz  
          11 fare.rb  
          20 gosu-playground.rb  
         122 main.rb  
          60 mallard.zip  
          49 names.txt  
          78 network.rb  
          11 passenger.rb  
          40 station.rb  
         167 train.rb

#### Finding a previously executed command

Ok, the command “history” allows us to view a list of previously executed commands. That’s great, but we can do better than that. We can do an interactive lookup by typing the first few characters of the command instead. How do we do this?

    CTRL + R

And type away, confirm by hitting the enter key.

    ➜  mallard git:(master) ✗ for file in *; do wc -l $file; done  
    bck-i-search: for_
