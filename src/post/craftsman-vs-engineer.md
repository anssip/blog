---
title: Are you a craftsman or an engineer, or both?
description: What are the different software crafsmanship and engineering practises and when are they imnportant in the different life stages of a development organization
date: 2025-06-20
published: true
tags: ["agile", "craftmanship", "XP", "quality", "code", "programming"]
layout: article.njk
permalink: "/post/{{ title | slug }}.html"
---

{% image "./src/images/woodworking.jpg", "Woodworking", "100vw", "w-400 h-auto mx-auto" %}

<p class="photo-credit">
Photo by <a href="https://unsplash.com/@jbonunsplash?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jean-Baptiste D.</a> on <a href="https://unsplash.com/photos/a-man-working-on-a-piece-of-wood-44Vp65XxXs4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
</p>

Recently I've been thinking a lot about the software development process—things like automation, testing, and scaling. I've also been thinking about code quality. The following questions have been on my mind: What does good-quality code look like? How long should files and individual functions be? Should you break it into smaller chunks, and how should those chunks look? I've also been thinking about the timing— _when_ these things matter the most. What are the most important things when the development organization is young (like a startup), and how do they change as the company grows (like a scale-up company)?

When thinking about different approaches to software development, the concepts of Software Craftsmanship and Software Engineering came to mind. I think the first time I became familiar with the craftsmanship idea in software was when I read the classic book _The Pragmatic Programmer_ by Andrew Hunt and David Thomas, back when it was published in 1999. The book introduced the idea of software craftsmanship, emphasizing the importance of care and pride in software development. I highly recommend it. Good stuff in it.

I started thinking—Is it enough to master craftsmanship skills? Or should you also master engineering skills? What does it even mean to be an engineer, and is that different from being a craftsman? Let's first define what these terms mean.

## Craftsmanship

Software Craftsmanship is a _mindset and movement_ that emphasizes the art, skill, and pride in software development.

- _Quality over Quantity_: Focuses on writing clean, maintainable, and well-crafted code.
- _Continuous Improvement_: Encourages lifelong learning and mastering the craft through practice.
- _Professionalism_: Values responsibility, ethics, and delivering value to customers.
- _Mentorship & Apprenticeship_: Emphasizes teaching and learning through experience, much like in traditional guilds.
- _Developer Autonomy_: Encourages individual developers to take ownership and pride in their work.
- _Craft over Process_: Prefers strong technical skills and judgment rather than strict reliance on formalized processes.

I think all of the things, except for Developer Autonomy perhaps, in this list are good things and should be practiced by every developer. Let's talk about Developer Autonomy later and why that might not be so important might even be a bad thing in a team setting.

## Engineering

Software Engineering is a _discipline_ that applies engineering principles to software development.

- Formal Processes & Methodologies: Emphasizes standardized methods like Agile, Waterfall, DevOps, etc.
- Planning and Documentation: Strong focus on requirements, design, testing, documentation, and lifecycle management.
- Scalability and Reliability: Ensures systems are engineered to scale and handle complexity reliably.
- Team Coordination: Encourages defined roles, responsibilities, and structured communication.
- Measurement & Control: Uses metrics, models, and reviews to ensure quality and predictability.
- Compliance and Risk Management: Addresses regulatory, safety, and compliance concerns.

All of this also sounds good to me. But are they really necessary and worth the effort? When should you use them? Let's dive into that next.

**A good read on this topic** is _Modern Software Engineering: Doing What Works to Build Better Software Faster_, by David Farley.

## When to do what

### Startup

A young startup is first looking for product-market fit. They need to be agile and flexible to adapt to changing market conditions. In this kind of organization, you don't want anything to slow you down—this rules out most of the engineering practices. **I would rule out the following**, just because these are unnecessary burdens that make you slower when you need to be agile:

- Automated testing
- Extensive documentation
- Investing for scalability (premature optimization)
- Compliance and risk management

Automated testing is most likely a waste in this phase. When you pivot once a month, you’ll throw away your codebase. The code that you build for the MVPs should be minimal and probably shouldnot include many tests. But what if you can use AI to generate the tests? That might change your mind.

**I would use most of the craftmanship practises in a startup.**

## After finding PMF (product-market fit)

Then when (and if) you finally find product-market fit, you need to start adapting your approach. You need to prepare yourself to take over the world. Perhaps you'll reach millions in MRR within the next few months. Your traffic and number of users grow, and your development team grows in size. All of these require you to change your way of doing things.

When you grow, the engineering practices become more important. You need to invest in scalability and reliability, and you need to document your code and processes. You also need to plan your development and coordinate your team. You need to make sure that you can onboard new developers effectively—and that means the spaghetti code you developed in a rush when the company was young and small might need to be rewritten or heavily refactored.

> About timing: It can be tricky to know when to change from startup-style cowboy coding to a more disciplined approach. This is because the shift the company experiences is rarely an event that you can recognize. This means that you need to start shifting your style gradually, starting with small changes and gradually increasing the level of discipline.

**Another reading tip**: _Tidy First?_ by Kent Beck. This book introduces "tidyings" that are small refactorings that can be done quickly and easily. These are small improvements that you can do every time you need to add a new feature to the codebase. Applying tidyings continuesly slowly moves your code to a better structure. I find the to be a great approach and avoids the risks associated with big refactorings.

_Craftsmanship remains important_. Developer Autonomy, a craftmanship practice, will lose relevance as the company grows. Teams become more important than individuals. Shared code ownership, as emphasized in XP and other agile methodologies, becomes more important. It's the team that should have autonomy and ownership of the codebase that is the team's responsibility.

## Conclusion

So, are you a craftsman, an engineer, or both? I think the answer is: you should probably aim to be both, but at different times and in different ways. Early on, when you're in the fast-paced world of startups, craftsmanship helps you move fast and keep things just good enough without overthinking. But as your product matures and your team grows, engineering becomes more and more essential. You need structure. You need repeatability. You need to build things that won’t fall apart the moment you scale.

It’s not a binary choice. It’s a spectrum—and knowing when to lean more into craftsmanship and when to bring in the engineering discipline is part of being a great developer. So maybe the real goal is to become someone who can adapt. Someone who knows how to build quick and dirty when speed matters, but who also knows how to slow down, clean up, and build things that last when the time is right.
