---
title: Event Sourcing - Chapter 8
image: /assets/images/package-delivery.jpg
author: Sam Schneider
categories:
  - technology
  - event-sourcing
  - event-sourcing-tutorial
layout: post
---

It's 8 days later. I have a picture on my phone from Rick of a small mountain of Starbucks cups on his back deck from where he and Mark build the system integrations in the development environment. Today is go live day. The hope is that nobody notices.

Rick sends me a text: "Ready when you are."

I shoot back: "Cleared for launch."

A few minutes later my phone buzzes with a 🚀 emoji.

A few minutes after that I get the call I was dreading. It's one of the team leads. "Hey Bill, just to notify you, the picking module went down unexpectedly just now. I've let Mark know. Our numbers might take a bit of a dip today."

I feel like I'm on one of those sky drop rides at the local amusement park. Things can't be going south this quickly.

I ping a non-chalant message to Rick, "I heard that Picking went down. Can we get that up quickly before I get fired?"

Several minutes go by with no response from Rick. I truly hate software.

My phone rings again. It's Seth, the team-lead from warehouse, "Hey Bill, Mark got it back up and running. I guess they had some software release today. We're good now. I think we can get our numbers back on track by the end of the day."

My phone beeps. It's from Mark: "I forgot to set the database connection string for the prod environment 🤦🏻. We're good now."

I spend the rest of the day waiting for the call from Gerald that never comes. Later I ask Mark and he tells me that these small outages during deployment are so common that often I'm not even notified.

That evening as the last team-lead pulls out of the parking lot, the Fellowship gathers in the conference room.

Rick is grinning ear to ear. I am hoping that my blood pressure returns to normal sometime before I visit my doctor next time.

Mark plugs his ugly work laptop into the conference room projector. A web browser is open with a url of `http://168.0.1.142/admin`, which I think means it's on our local network. It's a simple interface with a table of differently colored rows.

Mark begins: "This table is our event ledger. Each row represents an event which has occured in our system. Each color represents a different kind of event."

He clicks on one of the events and a new detail screen appears.

"Each event shows some basic information. This is information we've wanted to have for a long time which I never realized would be so easy to get without some kind of major enterprise software upgrade."

I think back to the pile of Starbucks cups. Things always seem easier after you're done.

"Each event has some basic information," he says. "This is an `OrderCreated` event."

On the screen we see a neon green heading with the following sections:

* `orderId`
* `traceId`
* `initiatedBy`
* `timestamp`

"When an order is created," he continues, "it starts out empty, and then we fill it with items as they are picked from the warehouse. The next event is an `ItemPicked` event."

He clicks a link that says `Next event: ItemPicked`. A new item appears on the screen, this time in light pink. Programmers can never coordinate colors. This even has the following sections:

* `orderId`
* `traceId`
* `itemSku`
* `itemQty`
* `initiatedBy`
* `timestamp`

"You'll note," he says, "that we have both a `traceId` and an `orderId`. This is because we want to be able to group all events that occured for a certain order, but we also want to be able to group events that occured because of the same initiating event. For example, when we create an order with 3 different skus, we give each event the same `traceId` since they were all initiated by the same order creation process."

"Let's try to clarify what we can do with this info immediately," I say.

"In terms of lost packages," says Judy, "if someone marks a state incorrectly, we can go back and see the progression of the events. This should tell us exactly where the main software system was marked incorrectly."

Mark jumps in. "Since the old system is still in control, the last event will be incorrect, but we can quickly the find the status where the event was marked wrong, and hopefully find the package in that general area."

"Can we put some kind of rules into the system so that if an event is entered which is not part of the allowed progression of events, we can immediately receive a notification?" I ask.

Mark looks to Rick. Rick closes his eyes. Then he says, "Yes, we can do that. Give me a couple days to think about how to do that."

Turning to Judy he says, "Judy, can you give me a state machine of the events valid for orders?"

"State machine?" she says.

"A set of the valid states an order can be in, along with the valid progressions forward and backward from each state. For example, if I am only allowed to pick an order after it's been created. If an order is cancelled, I can't pick it. I also can't pick it if it's already shipped. I can only move an order to ready for shipping if it's been picked."

"Oh, I see," she says. "Yes, we have all of those things listed in our training manual."

She gets up and goes to a leaflet rack on the wall and pulls a white booklet and hands it to Rick. "Everything you just said is on page 13 here."

"Good job guys," I say. "We got lucky last week and only lost one package, but found it before Gerald found out. I'm going to reach out to Gerald tomorrow and let him know we have 'implemented some new controls' around package statuses. We just can't afford to lose any packages this week or I'll be fired and our experiment will have come to a short but glorious end."

Just as I finish talking my phone rings. Is this scripted?

"Hi Gerald," I say, how is it going? I put the phone on speaker because I want the team to know that this is not a drill.

"I was just notified you lost a package for order #1345693," he says (smugly if I have learned to read him over the phone). I see Judy writing down the package number on a sheet of paper. She mouths it back to me. I give her a thumbs up.

"We'll look into it tonight," I say.

"Thanks Bill," he says, "if you don't find it before 8am tomorrow, don't bother reporting to work."

[< Previous chapter](/blog/event-sourcing-chapter-7) | [Next chapter >](/blog/event-sourcing-chapter-9)
