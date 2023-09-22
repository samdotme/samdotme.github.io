---
title: Event Sourcing - Introduction
image: /assets/images/nicole-green-Xk4PNPdmPw4-unsplash.jpg
credit: Image by <a href="https://unsplash.com/photos/Xk4PNPdmPw4">Nicole Green</a> on Unsplash.
author: Sam Schneider
categories:
  - technology
  - event-sourcing
layout: post
---

Event-driven architectures are gaining momentum in the dev community, peppering conference schedules and the conversations of teams building today's robust systems. The grand-daddy of even-driven architectures is a pattern known as **Event Sourcing**.

## What is Event Sourcing?

Most software is written using a traditional CRUD model which is a lot like keeping score for a little league game on a blackboard. Every time the home team scores a run, the score keeper erases the score, and then rewrites the new score in the place of the old score. At the end of the game, we know the final score, but we haven't kept any information about how we arrived at this final score, or whether the score keeper made a mistake along the way.

This method of storing information is simple. For most software use-cases it is sufficient. That is because most software use-cases are simple. But the complex use-cases, the ones that make you a senior architect, often require a more resilient strategy.

There's a whole family of event-driven architectures which Martin Fowler does a great job explaining [in this video](https://www.youtube.com/watch?v=STKCRSUsyP0&pp=ygUZbWFydGluIGZvd2xlciBldmVuIGRyaXZlbg%3D%3D). But the one we'll be focusing on is Event Sourcing. Using the same blackboard score-keeping example from before, imagine that now the score keeper has an extremely long blackboard with marks for each minute of the game. Whenever a score is made, the score keeper finds that exact minute on the board and puts a mark. 

At the end of the game, we can count up the marks for each team and we know who won, just like in the CRUD example. But now we have a lot more information. We also can pick any minute of the game and count up the marks to see who was ahead at that moment. Not only that, we can also resolve any disputes about the final score by going back to the exact moments the runs were scored. It's much easier to reason about a stament such as, "You attributed the run scored in inning 3 to the wrong team" than it is to say, "I think we had 7 runs not 6."

But of course we can't expect fans to read through all the mucky details of scoring, so we need to have someone else with the traditional blackboard scoreboard and whenever they see a score mark added to the "source of truth" board, they erase the score for that team and increment it. If they make a mistake, we can go back to the source of truth and fix their mistake by recounting the marks for each team.

Now that we have a source of truth tied to a timeline, there are lots of other interesting things we can do. For example, let's say that we want to sell hot dogs for $1 whenever 3 unanswered runs are scored by the home team. Now we can have someone who watches the main board and whenever the home team scores a run, they count back 3 runs to see if the visiting team has scored in between. If they have, they do nothing, if they haven't, they call the hot dog vendors and tell them to start the promotion. Whenever a run is marked for the visiting team, they call the hot dog vendors again and call off the promotion.

Event sourcing fundamentally changes the way we think about the systems we're building. Instead of thinking of our systems primarily as stores of data, we think of them primarily as stores of actions being taken in the real world. Once we start to think in this way, new opportunities for creative ways to project our data begin to emerge. Not only that, but we can also begin to react to events in real time, which, as with the hot dog promotion example, can directly impact our business' ability to effectively sell products.

## Why not Event Sourcing?

All the power of event sourcing comes with a tremendous tradeoff. It's complex. It requires multiple systems talking to each other. You can't really use ORMs or other tools that we often use to reduce the complexity of dealing with data storage. It's also harder to model the data, since most of the entities you're used to thinking about are now projections based on a series of events. Not only that, you also have to guard your event journal (that's a key term I've been saving until now) with your life. If a bad event gets into the event journal it can trip up the whole system.

For many simple apps, event sourcing is an overhead that's simply not worth it. But for some apps it can revolutionize your business.

## Is Event Sourcing hard to learn?

I think the thing that makes Event Sourcing hard to learn is that there's not a lot of available material on the subject. It's also a bit hard to teach since it requires a non-trivial problem to be worth using, thus toy projects are hard to use as examples. It's usually explained through architectural diagrams or code examples in a language only some of your learners know.

## Where we go from here

I am playing with a concept inspired by classic business books such as *[The Goal](https://www.amazon.com/Goal-Process-Ongoing-Improvement-ebook/dp/B002LHRM2O)* and *[The Unicorn Project](https://www.amazon.com/Unicorn-Project-Developers-Disruption-Thriving-ebook/dp/B07QT9QR41)* to take complex architectural concepts and set them in the framework of a novel that explains the problems from which the concept arose. I'm currently writing a novel about event sourcing.

<div class="d-flex justify-content-center flex-nowrap my-4">
  <div class="card" style="max-width: 640px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="/assets/images/event-sourcing-cover-sm.png" class="img-fluid rounded-start">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Want to dig deeper?</h5>
          <p class="card-text">
             I've released a rough draft of chapter one. Would love to get your feedback.
          </p>
          <p class="card-text">
            <a href="/chapters/event-sourcing-ch01/" class="btn btn-primary">Read Chapter 1</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
