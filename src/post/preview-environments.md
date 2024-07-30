---
title: Review Environments are Awesome
description: My motives for a new career move
date: 2021-08-26
luogo: Savonlinna
published: true
tags: ["process", "ci/cd", "code review", "quality"]
layout: article.njk
permalink: "/post/{{ title | slug }}.html"
---

{% image "./src/images/pushbutton-walk.jpg", "Traffic buttons" %}

## What is a review environment?

Let's start with some background information and describe the "traditional" practice that I don't recommend anymore. The traditional development model looks like this:

* Have two **branches** in version control: a development branch and the main branch.
* Have two different **environments**: one for development and one for production.
* All development work goes first to the development branch.
* Development branch gets deployed to the development environment.
* Testing happens in the development environment.
* Deployment to production occasionally happens (at random intervals) when some set of features is ready and tested in the development environment.
* The production deployment is triggered by a marge of the development branch to the main branch.

Now, there is a new kid in town, in which everything happens around pull requests. It changes the game (for the better). The new model relies on temporary review environments that exist for the lifetime of each PR.

* The team splits the work into small tasks, each of which will be deployed to production once implemented.
* When a developer starts working on a task, he creates a new branch forking it out from main.
* When a developer completes coding a task, she creates a new **pull request** (PR) towards main.
* The new PR triggers the CI engine to build a new review environment and deploy the PR codebase into this new environment.
* Another developer reviews and tests the change in the review environment.
* Once the reviewer accepts the PR, the author of the PR merges it, which then triggers the CI to build & deploy the task's changes to production.

{% image "./src/images/pr-build.png", "PR in Github" %}

This screenshot shows a pull request in Github. There is a View deployment button that opens the app in the PR specific temporary review environment. Reviewers need to test the app in this environment before the PR author is allowed to merge it. Github allows for blocking the merge until a predefined number of reviewers have accepted the change.

## Workflow

Review builds enable continuous and seamless delivery to production. The workflow allows the team to release in small steps incrementally. There is no need for any orchestration of testing in dedicated development and testing environments, nor is there any coordination of production releases.

All development work needs to be split into small tasks that can be individually released. Each task/PR should result in a change that can be pushed to production without making the product inconsistent or broken. The tasks should be small so that they can be reviewed and tested with reasonable effort. Ideally, each task should be coded in one or two days and then reviewed, fixed & refined in another one or two days. Having larger chunks as tasks is not recommended because massive changes are harder to manage and review and are more prone to break the production system. The goal is to have a continuous stream of tiny releases that happen multiple times per day.

Implementing a large change-set, a so-called epic, requires completing several small tasks and PRs. Each of these PRs modifies the product in some small way, and because it usually does not make sense to reveal half-baked features, we need to delay the moment when we make these modifications visible to the end-users. One way to achieve this delayed visibility control is to build a **feature gate** into the product.

The feature gate works like this: When features are behind the feature gate, they are only visible to testers, developers and other trusted users. When we open the gate, everything that was hidden behind it become visible to all. The moment to lift the feature gate usually comes when all the PRs related to the epic become ready, and the whole epic becomes complete.

> There you have it: A continuous stream of production releases: It all just kind of automatically happens when developers work on the tasks pushing them forward using pull requests.

## Reviews

Pull request reviews are at the centre of the workflow. They act as a quality guard to ensure that only inspected code changes flow into the product.

The review consists of two main parts: the code review and testing of the functionality.

All testing happens as part of the PR review. Some organisations might have QA persons (testers) as part of the development teams, but many teams and organisations can do very well without them. Developers can be as equipped to do the reviews as any professional tester would be.

Note that also automated testing can happen as part of the PR builds. The best practice is to run a comprehensive unit test suite at this point to ensure that the deployment only occurs when the automated tests have passed.

## How to implement automatic review deployments?

Many cloud hosting platforms like Heroku and Vercel offer PR based review builds and deployments out-of-the-box. Heroku calls them review apps and Vercel calls them preview environments.
It is also reasonably straightforward to implement them using Github Actions. I recently enabled them for one React app using [AWS CDK](https://aws.amazon.com/cdk/) to deploy the app to S3 and Cloudfront. Julien Goux does a good job documenting this approach in [this dev.to article](https://dev.to/jgoux/preview-environments-per-pull-request-using-aws-cdk-and-github-actions-bfi).
