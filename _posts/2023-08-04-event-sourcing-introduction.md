---
title: Event Sourcing - Introduction
image: /assets/images/nicole-green-Xk4PNPdmPw4-unsplash.jpg
author: Sam Schneider
categories:
  - technology
  - event-sourcing
layout: post
---

Over the past several years there has been more and more attention given to the concept of event driven architectures, in particular, the golden goose: Event Sourcing. I was first introduced to the concept in 2021 and over the past few years have become quite interested in the topic. Unlike most technologies, there aren't a lot of good training resources on the subject. As I began to search I kept coming up on YouTube videos of Martin Fowler, or blog posts outlining detailed code implementations.

## Why teach about Event Sourcing?

I've decided to create a series of blog posts about event sourcing, which I hope to some day turn into a masterclass that can help others embark on the event sourced journey with fewer bumps than I took.

I think the reason there's not a lot of material on the subject is that archtectural patterns are hard to train on. First, you have the problem of which language to give examples in. Second, you have to pick an example project that's not too big, but is more than a mere toy project. Finally, most people building event sourced systems are doing it for large, enterprise teams and usually there's a senior architect in house who is already setting out all of the rules.

All that being said, I think most programmers with more than 5 years of industry experience should start looking into building event sourced systems. Most non-trivial modern systems can benefit by making at least part of their core components event sourced.

## What is Event Sourcing?

Most software is written using a traditional CRUD model which is a lot like keeping score for a little league game on a blackboard. Every time the home team scores a run, the score keeper erases the score, and then rewrites the new score in the place of the old score. At the end of the game, we know the final score, but we haven't kept any information about how we arrived at this final score, or whether the score keeper made a mistake along the way.

This method of storing information is simple. For most software use-cases it is sufficient. That is because most software use-cases are simple. But the complex use-cases, the ones in which millions of dollars are at stake, the ones that make you a senior architect, these use-cases often require a more resilient strategy.

There's a whole family of event-driven architectures which [Martin Fowler does a great job explaining](https://www.youtube.com/watch?v=STKCRSUsyP0&pp=ygUZbWFydGluIGZvd2xlciBldmVuIGRyaXZlbg%3D%3D). But the one we'll be focusing on is Event Sourcing. Using the same blackboard score-keeping example from before, imagine that now the score keeper has an extremely long blackboard with marks for each minute of the game. Whenever a score is made, the score keeper finds that exact minute on the board and puts a mark. 

At the end of the game, we can count up the marks for each team and we know who won, just like in the CRUD example. But now we have a lot more information. We also can pick any minute of the game and count up the marks to see who was ahead at that moment. Not only that, we can also resolve any disputes about the final score by going back to the exact moments the runs were scored. It's much easier to reason about a stament such as, "You attributed the run scored in inning 3 to the wrong team" than it is to say, "I think we had 7 runs not 6."

But of course we can't expect fans to read through all the mucky details of scoring, so we need to have someone else with the traditional blackboard scoreboard and whenever they see a score mark added to the "source of truth" board, they erase the score for that team and increment it. Now if they make a mistake, we can go back to the source of truth and fix their mistake by recounting the marks for each team.

Now that we have a source of truth tied to a timeline, there are a lot of other interesting things we can do. For example, let's say that we want to sell hot dogs for $1 whenever 3 unanswered runs are scored by the home team. Now we can have someone who watches the main board and whenever the home team scores a run, they count back 3 runs to see if the visiting team has scored in between. If they have, they do nothing, if they haven't, they call the hot dog vendors and tell them to start the promotion. Whenever a run is marked for the visiting team, they call the hot dog vendors again and call off the promotion.

Event sourcing fundamentally changes the way we think about the systems we're building. Instead of thinking of our systems primarily as stores of data, we think of them primarily as records of real actions being taken in the real world. Once we start to think in this way, we find that there are an enormous amount of creative projections of our data we can do. Furthermore, we can begin to react to events in real time, which in the case of the hot dog promotion can be huge drivers of business.

## Why not Event Sourcing?

All the power of event sourcing comes with a tremendous tradeoff. It's complex. It requires multiple systems talking to each other. You can't really use ORMs or other tools that we often use to reduce the complexity of dealing with data storage. It's also harder to model the data (at least at the beginning). You have to first model events, and then your data becomes a projection of the events. Not only that, you also have to guard your event journal (that's a key word I've been saving until now) with your life. If a bad event gets into the event journal it can trip up the whole system.

So you can see that for many simple apps, event sourcing is an overhead that's entirely not worth it. But for some apps, the really critical ones, you can revolutionize your business.

## Where we go from here

I am playing with a concept inspired by great business books such as *[The Goal](https://www.amazon.com/Goal-Process-Ongoing-Improvement-ebook/dp/B002LHRM2O)* and *[The Unicorn Project](https://www.amazon.com/Unicorn-Project-Developers-Disruption-Thriving-ebook/dp/B07QT9QR41)* to take complex architectural concepts and set them in the framework of a story that explains the problems from which the concept arose. Keep an eye out for chapter one soon!