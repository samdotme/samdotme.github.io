---
title: Event Sourcing - Chapter 7
image: /assets/images/package-delivery.jpg
author: Sam Schneider
categories:
  - technology
  - event-sourcing
  - event-sourcing-tutorial
layout: post
---

I don't like people staring at me, and they're all staring at me. Judy, Mark, and the team leads I've brought into to brief them on our idea. There are a few leftover catered sandwiches on the table. Lily gave me the budget to do this. There's absolutely no corporate budget for anything like this. I love how I'm spending my own money for the company right before I'm about to get fired.

Judy, always the leader, finally asks a question. "You want us to add an additional step to our software entry procedure to keep a journal of the changes. Won't that be more work?" she asks. From the looks on their faces, apparently everyone had the same question.

I wave Rick down before he can give an answer that no one will understand.

"It will be additional data that we track, but our question to you guys is whether we can hook it up to the current system without causing any more data entry burden to the team."

"Yes," says Mark. "I expose an api endpoint, that internally we call the 'orders webhook.' Whenever a new order happens from the website and is routed by the order management system to be fulfilled by this warehouse, our warehouse's orders webhook is called. I can add another effect to that webhook to route the order added new event to the event ledger you're talking about. We can also handle cancelled orders this way.

"When an order is picked, 


[< Previous chapter](/blog/event-sourcing-chapter-6) | [Next chapter >](/blog/event-sourcing-chapter-8)
