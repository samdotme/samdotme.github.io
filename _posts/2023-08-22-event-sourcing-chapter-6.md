---
title: Event Sourcing - Chapter 6
image: /assets/images/package-delivery.jpg
author: Sam Schneider
categories:
  - technology
  - event-sourcing
  - event-sourcing-tutorial
layout: post
---

We're most of the way through the initial requirements for Rick. He is typing furiously at his laptop as we talk. Sometimes we change our minds mid-stream, but he takes everything in stride. 

Our requirements are simple. The system takes a picture of every item that enters or leaves the fridge. Through some facility we don't care about in our imaginary system, the picture is converted into a known grocery item which we assume exists in our database. Additionally, we assume our visual detection system can tell whether the item is being taken out or put back.

Whenever a picture for an item is entered, create an event and enter it in the ledger. The event contains the following information:

* Event name (either "item added" or "item removed")
* A timestamp of the event
* The barcode of the item
* The name of the item

Whenever an event occurs, we re-count all the events in the ledger and update a "running count" view on the outside of the fridge. Every time we encounter "item added," we add a count of 1 to the item (adding the item to the list if it doesn't already exist), and if the event is "item removed," we do the opposite.

I argue that re-counting the items from the ledger on every event seems like a waste, but Rick says that the number of items that can physically fit in a fridge is so small and the ledger of events over even several years will never be enough for us to notice the time difference in the computer's calculation. He says we'll deal with that problem once we get to the warehouse system.

Rick now goes to the whiteboard. "We now know exactly what has gone into the fridge and come out of it, and exactly what is in the fridge at any given time. What else can we do with this system?" he asks.

"We can tell the user when the fridge has run out of a particular item," says Jenny.

"Good!" says Rick. "In fact, we can probably even use some machine learning to begin to notify users when an item is about to run out based on historical patterns."

Lily says, "To further monetize our system we can allow users to set up automatic reorders of items from an online grocery service."

Ever the business mind.

"Since no one is in data science here, I'll say this one," says Rick. "We can also pipe and transform our data into the data warehouse and with the timestamp info we have, we can unearth all kinds of rich data analysis that wouldn't otherwise be possible. For example, we can start to predict what parts of the day and week different users don't use the fridge at all and we can begin pushing them Uber Eats ads at those times of day."

"Creepy," says Jenny.

"Data science is creepy," says Rick. "Get used to it."

"And we can enter the week's menu into the fridge and then it can put off an alarm bell when Max takes out the butter for midnight toast when butter is on the menu that week."

"Creepy," says Max.

Suddenly Rick sits down and starts working at his computer again. Everyone waits but he doesn't say anything.

"Rick?" asks Lily.

He looks up. "Oh, sorry everyone. Go watch King Leer or something. I've got what I need."

"What are you doing Uncle Rick?" asks Jenny.

He doesn't look up this time. "I'm starting to code the core engine." He keeps typing. "I need it to be ready by next weekend, right?"

"What core system?" I ask.

"The core system that will tie into your really bad, expensive software system," he says. Still not looking up.

"Sorry, Rick, can you enlighten us lesser mortals?" asks Lily.

Now he looks up. "It will never fly to write completely new software. Too many corporate policies in place. Instead we'll use the Strangler Pattern."

Rick must be used to blank stares because he just keeps talking.

"The Strangler Pattern (a.k.a the Strangler Fig Pattern) describes a way of implementing new software in which the new software is written alongside the old software and gradually takes over the responsibilities of the old software bit by bit. It's named after how the Australian Strangler Fig grows around its host tree, choking off piece by piece and eventually completely consuming it.

"No one will agree to double entry in both the original system *and* our new system. So we will need to maintain a single point of entry for new items. I'm hoping there's some kind of API call which happens whenever a new order comes in."

I know what an API call is because Mark talks about API calls all the time. They seem to be connecting points for systems to talk with each other.

"I'm pretty sure we have that," I say, "at least our systems guy Mark talks about them all the time."

"Cool," says Rick. "So the plan is to attach the event ledger to the main software system and every time there is a change, interpret this as an event and log it in the ledger."

"Which means, the employees don't have to even know what's going on?" I ask. For the first time, this crazy idea seems like it might work.

"At first yes," says Rick, "but we might get to a point where we build an alternate data entry point into the system which the employees prefer over the old one. If we can get there, then the new system has strangled out that part of the old system, but we'll keep pushing data into that expensive system to keep corporate happy."

"I'll schedule an after dinner meeting with Mark and some of the team next week to introduce the idea."

[< Previous chapter](/blog/event-sourcing-chapter-5) | [Next chapter >](/blog/event-sourcing-chapter-7)
