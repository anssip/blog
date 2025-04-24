---
title: Working with Web Components Has Been Like a Breath of Fresh Air
description: My experience switching from React to Web Components for the Spot Canvas project.
date: 2025-04-24
published: true
tags:
  [
    "web components",
    "lit",
    "spot canvas",
    "react",
    "javascript",
    "typescript",
    "frontend",
    "code",
    "programming",
  ]
layout: article.njk
permalink: "/post/{{ title | slug }}.html"
---

{% image "./src/images/spot-canvas.png", "Spot Canvas logo", "100vw", "w-64 h-auto mx-auto" %}

I've been working on an alternative to TradingView since late last year, and it has been a great experience. I've been using TradingView to follow crypto prices for several years now. At some point, I got the idea that it might be worth implementing my own alternative, so I started experimenting with it.

It's now been almost six months of working on this on and off during evenings and weekends, and it's come pretty far already. I even have a website for it: [Spot Canvas](https://www.spotcanvas.com).

## Why Web Components?

I've been working with React for close to eight years and wanted to try something different. Probably two years ago, I would have chosen React for this project as well, but since then, I've grown a bit bored with it. I've also seen how React apps can become big and hard to maintain over time — I'm no longer convinced that it's the best option for web applications.

So these are the main reasons I chose to go with web components: I wanted to try something different and also learn something new. In hobby projects, it's good to experiment with different technologies — that's how you learn and grow.

## How Has It Been?

I've enjoyed working with web components! 🙂 It's been like a breath of fresh air. It has reminded me of my time working with Flowplayer when I was building the first version using Flash — I can use similar patterns and design choices that I had with the object-oriented structure I built for Flowplayer. I'm less of an OOP fanatic nowadays, so I'm avoiding deep class hierarchies and things like that, but I am indeed using classes. I think classes can be a good fit for user interfaces.

State management has been nice to work with. None of that `useState` or context-based weirdness I was used to in React. I'm using the ES Proxy-based solution from [xinjs](https://github.com/tonioloewald/xinjs), and it works great. It makes things streamlined and convenient.

You can find a standalone demo of the chart [here](https://www.spotcanvas.com/demo/).

## Tech Stack

The tech stack I'm using for the frontend (the chart app) looks like this:

- TypeScript
- Web components using the [Lit framework](https://lit.dev/)
- Plain old CSS (embedded in TypeScript files, as is typical with Lit)
- [Bun](https://bun.sh/)
- Firestore for live subscriptions for real-time price and indicator updates

The backend runs on Google Cloud with:

- TypeScript
- Bun
- Firestore

## Roadmap

So far, I've implemented the basic price chart with trading pair selection, time granularity selection, and candlestick rendering. You can pan and zoom in both the timeline and the price axis. At first, it felt easy to develop, and I was making good progress, but as more features started piling up, things naturally became more complex — no surprises there.

I just released an Indicators feature, which is essential for this kind of product. You can read the release announcement [here](https://www.spotcanvas.com/blog/indicators/).

Getting to this point has taken six months.

The road ahead includes:

- Technical analysis tools (drawing tools)
- User accounts with settings, etc.
- The ability to save chart layouts
- An asset library for saving favorite trading pairs
- Scripting for custom indicators and for interacting with the chart

## Want to Help?

Let me know if you're interested in collaborating on this project. I'm convinced that there's a need for a solid trading chart alternative, and with the help of vibe coding, we can build something great! 🙂 I could use help on both the development and marketing sides. You can reach me at anssip@gmail.com.
