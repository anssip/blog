---
title: The new anssipiirainen.com
description: Whipped up a new blog using Hugo.
date: 2020-04-21
luogo: Espoo, Finland
published: true
tags: ["blog", "blogging", "hugo", "golang"]
layout: article.njk
permalink: "/post/{{ title | slug }}.html"
---

A week ago, I decided to set up a new website for this blog. Somehow I always have the urge to learn something new. Just programming with the same old tools and languages becomes boring, and something new is needed to spice up my life.

This year I have been blogging a lot. Writing is an area that I want to keep on doing also in the future. Up until this point, my blog was in Squarespace. I felt that I wanted to improve my blogging workflow: It should be easier for me to work on, and the result should be better looking and friendlier for the reader. I also wanted to learn something new while building my new blogging "platform".

I ended up building this website using [Hugo](https://gohugo.io/). Hugo is a static site generator and provides a developer-friendly "hands-on" experience for the user. It's a totally different experience than the GUI centered approach that Squarespace offers. With Hugo, everything happens in a text editor and in the command-line interface.

Hugo is implemented using the Go programming language. I am interested in learning Go, and one big reason for choosing Hugo was to get some exposure to Go.

## Deployment

This blog is deployed in Amazon S3 using Hugo Deploy. It's using Cloudfront as the CDN.

I used a nifty trick to enable a piece of URL rewriting using _Lambda@Edge_ to enable directory index documents. For example, the path of this page is `/post/new-blog-site/` and this needs to be mapped to `/post/new-blog-site/index.html` because the actual page `index.html` file recides in that path in the S3 bucket. With a quick web search, I found out that this can be achieved using a [Lambda script that is deployed and runs in all Cloudfront edge locations](https://aws.amazon.com/blogs/compute/implementing-default-directory-indexes-in-amazon-s3-backed-amazon-cloudfront-origins-using-lambdaedge/).

## The result

As you can see from the looks of this site, this is quite bare-bones. It looks nerdy. Just like I wanted it to look like :smile:

I have direct access to the CSS files, which is great, because I also want to improve my styling skills.

The page templates are there available for hacking whenever I feel the need to work on the site layout or on additional features. I could integrate a mailing list to this site eventually, for example. The [Go page templating system](https://golang.org/pkg/text/template/) seems powerful.

I can now write the blog posts without leaving my favorite text editor, Visual Studio Code. I write my blog posts in Markdown which is a format that Hugo directly understands. Previously I had to copy/paste all text to the post UI in Squarespace website, and now, with Hugo, my workflow is more straightforward: The markdown file sits in Hugo's content directory all the time when I work on it.

I just found out that there is a Grammarly plugin for Visual Studio Code. I use Grammarly for checking the spelling grammar of my posts. The VSCode plugin seems a bit flaky at the moment, but it could be a great addition to my workflow.
