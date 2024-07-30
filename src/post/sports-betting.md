---
title: Open Source Sports Betting
description: My new project; a sports betting website
date: 2023-12-18
luogo: Savonlinna
published: true
tags: ["code", "programming", "sports", "betting", "graphql", "nextjs", "kotlin", "aws", "vercel", "auth0", "igaming"]
layout: article.njk
permalink: "/post/{{ title | slug }}.html"
---

{% image "./src/images/soccer.png", "Soccer game" %}

Over the past few months, I have been deeply engrossed in a new personal project: the development of a sports betting
website. The genesis of this endeavor was a conversation with former colleagues who are currently engaged in the iGaming
industry. This discussion was particularly nostalgic for me, as I previously worked with a company that designed a
sports betting product for the Finnish gaming operator PAF.

My objective was to explore the implementation of this concept utilizing contemporary web technologies, specifically
GraphQL, the latest Next.js framework with server components, and server actions. My particular interest lay in
harnessing the capabilities of GraphQL subscriptions to seamlessly provide real-time odds updates to end-users during
live (in-play) sporting events.

To provide an overview, the backend infrastructure is powered by the Kotlin programming language. This backend hosts a
robust GraphQL API, supported by a relational database. The Kotlin application is hosted on AWS within Elastic Container
Service (ECS), while the database resides within AWS RDS. The Continuous Integration (CI) workflow is effectively
managed through GitHub actions.

On the frontend, we have a modern Next.js application that capitalizes on server components and server actions. Vercel
serves as the hosting platform for the frontend. I used Auth0 for authentication and authorization.

The event fixtures and odds are fetched from the Odds API.

The feature set currently includes the following functionalities:

1. Real-time updates on live events, complete with scores.
2. Listings of upcoming events.
3. Betting on live events and upcoming events
4. Tracking and management of bets on the dedicated bets page.
5. Payouts from winning bets are added to the user's gaming account balance.

You can explore the live website at https://www.parabolicbet.com/.

Additionally, for anyone interested, my code repositories are readily available:

- [Backend](https://github.com/anssip/ultrabet)
- [Frontend](https://github.com/anssip/ultrabet-ui)

I'm enthusiastic about this project and aspire to see it thrive in the real world. If you happen to represent
a gaming operator with aspirations for a collaborative venture, please do not hesitate to reach out. I am
available for freelance opportunities to bring this project to fruition. Together, we can make it a resounding success! 🚀

In any case I see this as a great learning experience and a way to perhaps disrupt the iGaming industry a bit. I don't
think this industry has seen too much open source projects so far 😊
