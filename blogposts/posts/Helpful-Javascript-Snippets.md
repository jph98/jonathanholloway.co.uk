---
template: post
title: Helpful Javascript Snippets
date: 2021-02-27T12:47:58.467Z
excerpt: >-
  I’ve been writing Javascript, in various forms since 2000. That usually meant
  some horrible hacky code in Internet Explorer 5 back then to…
---
  

I’ve been writing Javascript, in various forms since 2000. That usually meant some horrible hacky code in Internet Explorer 5 back then to do primitive things with DHTML. Things have, ahem, moved on a little since then, and I find myself predominantly writing Javascript code (instead of Java, Python, Ruby) more and more on the client (web, mobile) and server-side with Node/V8. It’s not my favourite language, but it’s the language of the web, so it’s an important one!

**Effective Javascript** by David Herman was a great first book for me in terms of upping my Javascript game. Definitely worth a read. 

[**Effective JavaScript**  
*Effective JavaScript is an in-depth look at the JavaScript programming language and how to use it effectively to write…*effectivejs.com](http://effectivejs.com/ "http://effectivejs.com/")[](http://effectivejs.com/)

The following list of tricks are for my reference as well as to share with others, wanting some concise ways to perform fairly common tasks.

#### Filtering Effectively — Removing an Array Element

Filter the elements and remove the element you’re looking for:

    courses.filter(c => c.id !== course.id)

#### Passing a Function as a Function Parameter

Use a closure to pass a function to be called by another function:

    display('trash', function() { return removeCourse(course) })

#### Using await in a non-await function

Ok, so you could always extract an async function, but you can also define an anonymous function to do this as follows. Don’t forget the [IIFE](https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6)!

    (async function() {  
      const courses = await getCourses();  
      console.log(courses);  
    })();
