---
title: When and why to use TypeScript
description: Often it makes sense to use TypeScript instead of vanilla JavaScript
date: 2020-07-15
luogo: Espoo, Finland
published: true
tags: ["javascript", "typescript", "functional programming", "node.js"]
layout: article.njk
permalink: "/post/{{ title | slug }}.html"
---

{% image "./src/images/knowledge.jpg", "Knowledge is power", "700", "450" %}

I have programmed exclusively with JavaScript for the past five years. I enjoy programming in JavaScript, and until recently, I saw no reason why I would switch away from it. I did not understand why I would compromise the speed and agility that JavaScript brings.

I love the dynamic nature of JS. It allows me to quickly implement new solutions. My thinking was that TypeScript's added type declarations and type checking would make me slower and less productive.

Recently my opinion has changed, and in my latest projects, I have begun to understand the benefits of TypeScript.

In this article, I explain the reasons why I changed my mind about TypeScript and why I think that many projects will benefit from using it instead of vanilla JavaScript.

## Working solo

I think that JavaScript is adequate when working alone, but it's sub-optimal for teams.

JavaScript is suitable for quick development. When working solo, It does not matter _that much_ if the code is hard to understand for others. The chances are that you, as the sole author of the code base, can understand it well enough to maintain and enhance it.

JavaScript allows for rapid development partly because it does not require any types or interfaces to be written. You are not "wasting" any time in writing this typing.

In the past, I have implemented sizeable codebases using vanilla JavaScript and I have maintained them for years. This has worked well because I have been the only person working on these projects.

## Teamwork

I recently started working on a huge JavaScript codebase that had been authored by one developer over several years. My task was to implement a small enhancement to it but was unable to do it because it was simply too hard for me to understand what was going on in the code.

The original developer obviously was able to still make changes to it, but for me, the code did not make much sense. The coding style, or the lack of it, was making my brain hurt.

We decided to start migrating the project to use TypeScript. We identified two areas that would benefit the most from type annotations:

- Interfaces for all message types. The project is using a messaging system, and several different kinds of messages are sent and received between modules and functions.
- Interfaces for all DB types. Just like the message objects, these DB records are also passed between modules and functions.

We added these interfaces and proceeded to add typing to all functions that have these objects in their signatures as parameters or return values. **It's these type declarations that make the code easier to understand.** You can immediately see from the type declarations what data the function takes in. Interfaces describe the structure and typing of all complex parameters. There is no need to inspect the calling code, or the function implementation, or the unit tests, to figure out what fields these complex objects are composed of.

> A shared understanding of the code becomes _vital_ when you are working as a team. Added type information brings added understanding.

## Fewer bugs

The type information is also consumed and checked by the TypeScript compiler. The compiler will tell you when your code is not type safe.

It's the classic benefit that type checking brings: _Catching bugs earlier in the development process_. You will catch and fix bugs during development instead of your customers finding them when your app is in production.

[Airbnb reported](https://www.reddit.com/r/typescript/comments/c079bt/airbnb_think_38_of_their_bugs_could_have_been/) a **38% reduction in bugs** by adding TypeScript to their development process.

The TypeScript compiler has a _strict option_ which enables more stringent type checking. With the strict option enabled, it will flag out more potential problems.

> If using TypeScript is better than using plain JavaScript because of the compiler warnings, why wouldn’t you want to turn the compiler warnings dial up to ten?”
&dash; [Embracing the TypeScript Strict Mode – Steve Fenton](https://www.stevefenton.co.uk/2018/01/embracing-typescript-strict-mode/)


It's probably best to not use the strict mode when migrating an existing JS projects to use TypeScript. In our TypeScript migration project, we have started with the strict checks disabled, which makes it possible for us to have the build passing and the program running with less effort. If we decide to enable the strict checks, we have more work to be done before the compiler is happy enough to produce a runnable program.

## The cost of using TypeScript

TypeScript does not come for free. There is some cost associated with using it:

- It takes effort to write type annotations and to maintain them
- Type annotations add clutter to the code base

It should be noted that our industry is using several techniques to catch bugs. Typescript and its static type checking is only one of these techniques. Here are some of the recommended practises: Test Driven Development, pair programming, code reviews, design reviews, and linting.

If you are using TDD and code reviews, you are likely already efficient in recovering bugs early. In this case, adding TypeScript will not have such a significant impact on improving quality. You should consider your situation and try to determine whether the benefits of TypeScript will out-weight the costs.

## Object-Oriented vs Functional Programming

During the past two years, I have been learning to use functional programming in my JS projects. I was a bit worried that TypeScript would not be a good fit for functional programming. My uninformed thinking was that TypeScript would make my code similar to Java, where everything is based on classes, and everything has to be an Object.

It turns out that my worries were unjustified. TypeScript builds on top of JavaScript and everything that I can do with JavaScript I can also do in TypeScript. I am not forced to use classes, or to declare types for all variables. Typing is optional and can be added where most appropriate.

## Conclusions

**When to use TypeScript?**

You will benefit from TypeScript when some of the following are true:

- You have a rich data model where data objects are passed between modules and functions.
- You have more than one developer working in the project.
- You are developing an open-source library. It needs TypeScript typings so that people can use with their TS code bases.

**Why use TypeScript?**

- Type checking catches bugs early.
- It enables teamwork by increasing the understandability and maintainability of the code. Because of this same reason, it makes it also faster to bring new team members up to speed.

**When is it better to stick with JavaScript?**

There are some situations where I would not use TypeScript but would go with vanilla JavaScript instead:

- You have experienced JavaScript developers who are using TDD and code reviews
- Quick prototypes are quick to develop with JavaScript
- Single-use scripts (migration scripts etc.) are an excellent fit to be done with JavaScript
