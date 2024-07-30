---
title: Why you should learn Functional Programming
description: Learning Functional Programming (FP) makes you a better programmer.
date: 2020-01-10
luogo: Espoo, Finland
published: true
tags: ["programming", "functional programming", "javascript", "node.js"]
layout: article.njk
permalink: "/post/{{ title | slug }}.html"
---

{% image "./src/images/carpenting.jpg", "My iMac" %}

## Introduction

The first 10 years of my programming career, I was doing Object-Oriented (OO) programming. I was working with Java mostly. I tried to master the art of OO and learned the design patterns to help me in coming up with class structures that avoid code duplication, and are flexible and adaptable for future change. My code was full of classes.

Things started changing after I started programming in JavaScript, which did not force me to put all my code into classes. In my first JavaScript projects, the codebase still resembled the ones that I had been putting together with Java. I was not using classes, but despite this, some of the files still had a look&feel of a class. The code had modules that grouped functions that were somehow logically related to each other, just like a typical "service" class in Java would have.

Today I have programmed in JavaScript for more than 5 years, and my coding has evolved a bit. I have started to think of my programs as data processors. There is always some data that needs to be processed. I think about what kind of processors and functions are needed to transform the data. My studying of Functional Programming has profoundly influenced me, and this data-centric approach arises from this studying and learning.

In this blog piece, I explain why it has made sense for me to study FP and why you should also learn it.

## The Benefits

Experienced functional programmers can tell you about the many benefits of functional programming:

1. Functional code is easier to understand
2. There are fewer bugs
3. The code is more compact
4. Some even claim that it's easier to test and debug

I agree with these claims. The difference between paradigms is easy to see If we take a non-trivial programming challenge that has implementations both in a functional and in a traditional imperative style.

Imperative implementations for a complex problem can be hairy with nested loops and nested if-then-else statements, class inheritance structures and all the things that we typically see in imperative programs.

Have you ever studied a big object-oriented program that was done by an experienced OO practitioner? One that is well-factored to use classes with clear responsibilities. One that does not have any duplicated code and is DRY. Factoring code into classes with distinct, clear responsibilities removes code duplication. This kind of designs can include several hundreds of classes. It can be tough to see how this program works and how the different classes work during runtime.

A well-factored functional implementation, on the other hand, might look scary when you first look at it, but after a little bit of studying, you should be able to understand the pieces (pure functions) that it has and how those are composed together.

You can understand each function in isolation. You can trust that the program does what is promised.

## Challenges

Contrary to what I just said in the paragraphs above, functional programs can be hard to understand for programmers that are not familiar with the functional style. Functional code can look quite different than the imperative counterpart. You cannot see many occurrences of elements that you are used to seeing in code: There are not many if statement, or for loops, for example.

All you can see is a bunch of small functions and weird-looking compose(), and pipe() calls that might make no sense to you are not yet familiar with these concepts.

There is a learning curve to understanding FP. First of all, you need to study the basics, and once you know the basics, you can start ramping up your knowledge little by little. There is a lot to learn before you are a master FP practitioner. I have been on this learning streak for one year now, and I'm still at the beginning of my journey. I'm sure that I'll reach the master-level status someday if I just continue working hard towards that goal.

I have a 10-year history with object-oriented programming using Java. I was a huge fan of the [Eric Evans' book Domain Driven Design](https://www.amazon.com/gp/product/B00794TAUG/ref=as_li_tl?camp=1789&creative=9325&creativeASIN=B00794TAUG&ie=UTF8&linkCode=as2&linkId=bb0a52dca602b6618ceef609ac24e8aa&tag=anssipiiraine-20) and took it's teachings about Entities, Services and Value Objects seriously. I have implemented thousands of classes using the patterns explained in the Domain Driven Design and the GoF Design Patterns books. Because of this background of mine, FP made little sense to me when I first looked at it.

I found debugging functional code to be challenging. Where do you add your breakpoints, when all you have is a list of functions linked together using pipe? Debugging is another area where you need to learn new tricks because the old ones don't work with FP. Luckily there are [some good strategies](https://itnext.io/debugging-functional-javascript-545b6ea59660) for debugging functional code.

## Learning Functional Programming

Why would you take the effort and learn FP? I guess the most important reason is that learning it makes you a better programmer. You can benefit from knowing about FP even if you continue doing object-oriented programming. Making functions pure and favouring immutability are great habits, no matter what your primary programming paradigm and programming language are.

You don't need to go full-on with functional and scare your co-workers by coming up with code that is so full of currying that you need a degree in Indian cuisine to understand it. I would recommend Kyle Simpson's book Functional-Light JavaScript to get you started. It provides a pragmatic, balanced way of doing FP in your JavaScript projects. It is the book that got me started with FP.

Ramda is an excellent functional toolkit library for JavaScript. You need something like it to ease your life. It contains the functional "primitives" that you can start using in your real-life projects.

Mastering FP takes time. I'm at the beginning of my journey, and my journey so far has looked like this:

1. I read the Functional-Light JavaScript book and got excited
2. I started sprinkling in FP to my daily projects. I started making my functions pure and started avoiding mutating my data.
3. But then I got busy with daily projects, and my FP learning ambitions got sidelined...
4. Then luckily, I became less busy again, and my FP learning was back on track.

## Summing up

I think it's essential always to study and learn more. In this profession, it's a must. If you stop learning and improving, more ambitious programmers overshadow and take over you. Eventually, you give up programming and become a Manager and, for sure, that is a scenario that every self-respecting programmer wants to avoid :-)
