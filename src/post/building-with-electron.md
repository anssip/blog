---
title: Building an Electron application
description: My experience on developing with Electron.js
date: 2019-07-11
luogo: Savonlinna
published: true
tags: [ "electron.js", "node.js", "react.js" ]
layout: article.njk
permalink: "/post/{{ title | slug }}.html"
---

{% image "./src/images/building-electron.jpg", "A rubber duck" %}

## Intro

Back in March this year (2019), I stumbled upon a technology called _Electron_, which offers a new way of building
cross-platform desktop applications. The first version of Electron appeared already in 2013, but somehow I had missed
entirely that release (probably because at that time I was 110% occupied with Flowplayer).

I had always been interested in building desktop applications without ever doing that as my primary job. I had
experimented with Mac development using Objective-C and XCode but did not advance far with those experiments.

> I ended up trying Electron because I wanted to know how I could use my React.js and Node.js skills in desktop development.

I had also stumbled into [Notable](https://github.com/notable/notable) which is a "Markdown-based note-taking app that
doesn't suck". I studied its code base and became convinced that this development platform has enough going on and I
should try it out.

What is Electron?

> Electron allows for the development of desktop GUI applications using web technologies: It combines the Chromium rendering engine and the Node.js runtime.

- <cite>Wikipedia/Electron</cite>

## React and other frameworks

I wanted to try if I could build an application like [Postman](https://www.getpostman.com). I had used Postman and also
a similar Mac app called Paw earlier. I had some thoughts on how these applications could be better and
wanted to try those ideas in my app.

I had been working with React since the summer of 2018. I had built a sizable app using it and was already quite
familiar with it. That's why I wanted to use it in this new project. I started searching for React component frameworks
that would be good for the desktop - the components would need to a desktop-like look and feel. After some research, I
ended up using [Blueprint](https://blueprintjs.com).

I like [the styled components](https://www.styled-components.com) library, which is a library that allows writing CSS as
JavaScript template strings. My goal was to produce something usable quickly (like most of us want), and that's why I
wanted to utilise existing code/libraries/frameworks to get up-to-speed quickly.

## Productivity

The Electron and React combo is a killer platform when it comes to productivity. Indeed, web technologies are ahead of
the tech that is currently used in traditional desktop development. To me, using a component library like Blueprint is a
blessing: I can quickly look through their examples and pick the components I need to build any UI feature. The UI
components are flexible, and I can change their styling and size the way I need. If something does not look the way I
want out-of-the-box, I can pretty quickly resort to custom CSS to change the default look the component has.

It's not a surprise that the code Apple's [SwiftUi](https://developer.apple.com/xcode/swiftui/) looks a lot like in
React's or Flutter's component-based systems.

Electron apps are cross-platform, and you can build your app from the same code base for Linux, Windows and Mac.

## What did I learn?

I have been primarily a backend developer for most of my career. I accumulated most of my frontend web development
experience in the past two years. This project was a good boost of confidence, making me realise that I can indeed work
also on the frontend side. I ended up also developing a [website for my app](https://dispatch.rest), which was another
great experience.

I am now reasonably confident that I can build anything from start to finish. I could do it entirely on my own if I
wanted to  :-) I am convinced that I can come up with the backend, the frontend, the website, and marketing material.
This realisation makes me think of the next idea for a startup I should bootstrap. Meanwhile, before the big idea
emerges, I will continue working on this Dispatch project.

In our summer cottage in Lapinsaari, Savonlinna, Finland
