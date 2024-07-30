---
title: The most effective way to learn a programming language
description: How I used my hobby project as a learning ground for learning the Rust programming language
date: 2024-05-16
luogo: Espoo, Finland
published: true
tags: ["code", "programming", "password-manager", "CLI", "Rust"]
layout: article.njk
permalink: "/post/{{ title | slug }}.html"
---

{% image "./src/images/eagle.webp", "Eagle", "400", "400" %}

## Intro

I decided to learn the Rust programming language, and here's how I did it.

I started by reading a book about Rust. It's a good way to begin, but it's not enough. You don't really learn programming just by reading a book; you have to write code. So, I began writing a simple password manager in Rust. I'm not exactly sure how I came up with this project idea, but I think it was because I had been using several paid apps like BitWarden and Dashlane, and I wanted to see if I could create something to replace them.

My setup for the project was pretty basic: I had read a bit of the book, but my knowledge was very minimal. Still, I managed to get started with the project and implement some basic features through a lot of trial and error. I had to look up a lot of things on the internet and read the Rust documentation. I wrestled a lot with the syntax, particularly with the Rust borrow checker. The borrow checker and Rust's memory safety features make Rust challenging to learn. However, what really surprised me was that when I finally got the program to compile, it actually worked and did what I wanted it to do. There was usually no need for debugging and troubleshooting—it just worked. This got me very excited about Rust. It's a strict and tough language to learn, but once you get your code to compile, it's very likely to work as expected.

With my very basic understanding of Rust, I was able to implement a simple password manager that worked. I called it [Passlane, and I made it available in Github](https://github.com/anssip/passlane). It had all the features I needed: I could add, edit, and delete passwords. I could search for passwords in the vault and use them. I could also generate new passwords. I was actually using the program as a replacement for Dashlane.

At this point, I stopped learning Rust for a few months and moved on to other hobby projects that interested me more at the time.

## Coming back to Rust again

After a year, I decided to return to Rust and continue learning it. This time, I bought some physical books about Rust from Amazon. Armed with these books, I resumed reading and learning, and I also started working on the password manager project again. I began heavily refactoring the messy code I had written earlier. As I learned more about Rust, I replaced huge parts of the codebase. I delved into traits, lifetimes, error handling, and many other concepts. With each new piece of knowledge, I revisited the password manager codebase.

When I learned about async programming, I realized that for my CLI-based project, I didn't really need async. So, I removed all async code and the Tokio runtime, which significantly simplified the code.

When I studied error handling and the ? operator, I replaced all the unwrap() calls with ?. I embraced the Result type, implemented my own Error type, and used it throughout the codebase. This made the codebase simpler—and simpler is usually better.

I also studied the Rust module system and refactored the codebase to use modules and much smaller files. This was another improvement.

**This process of studying and then immediately applying my new knowledge to the fairly large codebase of my project was the core of my learning process. This approach really solidified my understanding. In my opinion, it's the most effective way to learn a programming language.**

You can see my extensive rewriting and refactoring in the [commit history](https://github.com/anssip/passlane/commits/master/) of the project. I also significantly changed the functionality by switching to Keepass as the storage backend in version 2.3.0 of the app. This change was made to ensure users could trust that I was taking the right steps to keep their data safe. Additionally, I added support for TOTP codes (Timed One-Time Passwords) for 2-factor authentication.

## Conclusions

My conclusion is this: When learning programming, you should write code as much as possible. At the same time, read books and documentation. Use AI and chatbots to ask questions. Asking for help from tools like Copilot and ChatGPT can be very effective ways to learn, but that's a topic for another blog post.

## The project

I have my password manager [available in Github](https://github.com/anssip/passlane). It's called Passlane, and at this point, I'm quite proud of it. Check it out and let me know what you think!
