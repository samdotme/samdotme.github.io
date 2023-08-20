---
title: Event Sourcing - Chapter 5
image: /assets/images/package-delivery.jpg
author: Sam Schneider
categories:
  - technology
  - event-sourcing
  - event-sourcing-tutorial
layout: post
---

Rick talked us into watching Kenneth Branaugh's 1980s rendition of Henry V. Which got him and the rest of the family all fired up. I feel more like the king wandering the battlefield, sleepless, uncertain what the next events will bring to my life.

Their energy is contagious. Max starts in first, "Uncle Rick, what do you need to know for us to write this software for dad?"

I really hope I don't end up like Christian Bale at the end of this.

Rick takes a picture of the whiteboard and then erases it. 

"Let's find a small system that we can explore first that is similar to the more complicated system in your dad's work."

Just then Jenny calls out from over by the fridge, "Hey, where's the butter, didn't we put that in the fridge?"

"Sure, I bought butter," says Lily. 

"But it's not in here," says Jenny.

In the typical family fashion, we all get up from our seats around the table to look into the fridge as if more of us looking will actually help find the butter.

Max appears, apparently coming back from the bathroom, "Whatchall looking at?"

"Where's the butter?" asks Jenny.

"It's on the counter," says Max. I got it out to make cinnamon and sugar toast for the movie."

"It'd be really nice if we kept a record of what stuff was in the fridge and what had been taken out of it," says Jenny.

"That's it!" says Uncle Rick.

We all look at him. He's one of those people who get ideas about 10 seconds before everyone else. I think he's gotten used to explaining himself by now.

"A system for tracking the items in the fridge is similar to Bill's warehouse inventory tracking problem. Let's pretend that we had a really advanced camera and visual recognition system on the fridge and we were building a smart fridge to keep track of all the items in the fridge so that we would never lose the butter again. If we can build that, we should be able to use the same concepts to do warehouse inventory tracking."

We all see the similarity. No one knows where to begin. Rick sees our hestiation.

"So I'm going to coach you guys to be my product managers. I need you to tell me what the system should do."

"It should tell us everything that's in the fridge right now," says Max.

"If we took something out of the fridge, it should tell us that it's no longer in the fridge," says Jenny.

"It should tell us when to reorder the butter," says Lily.

"Good, good," says Uncle Rick.

"Now let's talk about how to represent the data."

No one knows what he means, except Lily.

"Isn't the data simply a representation of what's currently in the fridge?" she says.

"It can be," replies Rick. "But what about the butter that's been taken out of the fridge and will be put back in the fridge? It's not currently in the fridge, but we still want to know about it."

"So the data is whatever is in the fridge, plus anything that's near the fridge which might be put back?" asks Jenny.

Now I'm starting to understand.

"Basically, we tag each item. Whenever it's put into the fridge, we take a picture with the camera and enter it as a new item type. Sometimes it's the same kind and we add a new instance of a current item type. If we take it out, we change the status of one of the items. If we use it up, we mark it as used up."

"What if I'm really hungry and take out the butter and forget to put it back?" asks Max.

"Well, then we wouldn't be able to find it," I say. "And once we find it sitting on the counter, it would be hard to know where it had come from. All we would have is the most recent status that someone remembered to update."

"Wow, this really is like your warehouse, dad," says Jenny.

"What if I'm really nefarious and I steal butter at night, and I have access to the computer system?" asks Lily. "How would I do that?"

"Well," I say, "you would simply delete the butter from the system and then take it out of the fridge."

"How would you catch me eventually?" asks Lily?

"Eventually an accounting report would come out that wouldn't match up. The amount of purchases versus used up items wouldn't match. If we're lucky more research would be done and an investigation would happen. If we're not lucky, we'd simply write off the difference and move on."

"Do you investigate these reports in your warehouse when they don't match up?" asks Rick.

"Yes, well, kind of. We always have a meeting about any abnormal report. Root cause analysis kind of thing. But we usually don't have enough data to really know if something nefarious is going on. Besides some other warehouses have much worse numbers than ours in this area so the spotlight is rarely on us."

"You're saying someone might be stealing from your warehouse right now and you probably couldn't catch them," says Jenny. "Can we just re-count the items every time something changes in the fridge? That way any incorrect changes would be clear immediately."

"If it weren't so much work to do the physical count every time, I think that would actually be a good solution," says Lily. 

"I'm not going to recount the items every time," says Max. "That's way too much work."

<<<<<<< HEAD
"It seems like we have to keep track of our inventory based on the items on the shelves, but at the same time if something changes, we have a risk every time of making a mistake with what we say is on the shelves. As soon as we make a mistake, the source of truth is messed up."

Suddenly a phrase from my conversation with Adil last week pops up: "The only thing you really care about from a business perspective is when the objects move."

I stand up. Everyone looks at me.

"When I was having lunch with our friend Adil last week he said something that I didn't understand at the time, but I think I get now. He said that our business really only cared about when objects move, not when they're stationary.

"Up until now, we've been talking about tracking inventory based on what's on the shelves, but if we want to prevent things from getting lost, we should also be tracking the movements of objects."

"Movements and status changes when the items don't actually move but something important has happened, such as when a shipment moves from picked to canceled," chimes in Jenny.

"Good edge case call out," says Rick. "Let's think of a more general name than 'movements' which will encompass changes that don't include movement."

"Changes?" says Jenny.

"Actions?" I offer.

"Events?" says Lily.

Rick goes into computer science mode. "'Changes' is good, but a bit restrictive. It's possible something could happen to a package that wouldn't really change its state. Like if we notified the customer that it had been shipped. The package would still be in the same state except that a notification had gone out. If the notification failed, we might even do it again, and tracking each of those as a state change might be hard."

"'Actions' is better than changes, but to be picky, the word actions usually implies an actor, but some of the things we'll be dealing with might not have a clear actor. For example, what if a shipment becomes late? Who is the actor responsible for it becoming late."

"'Events' I like the best, because it captures the same concepts as the other words, but doesn't imply as much."

Max laughs, "I have no idea what you just said."

Rick smiles: "Story of my life bro."

Lily pulls us back on track. "So we need a kind of ledger of events that happen to all the packages in the system."

Jenny raises her hand. I point to her. "Sorry mom, I'm not in college yet. What's a ledger?"

"A ledger," says Jenny, "is something that accountants use track every change to the assets of a company. If the company makes a $100 from selling a certain category of product, they enter that $100 as a profit entry in the general ledger. Then they can use the entries in the ledger to add up the total number of income from different product categories."

"Wait," says Rick. "That's the same way that git source control works. Each repository is stored as a series of changes. The previous changes are all played on top of each other in order to discover what the current state of the system is."

"So you're saying accounts and computer programmers already use the kind of system Adil was suggesting?" I ask.

"It seems so," says Lily.

"Sounds too complex to build in a week," I say, "even if we had a staff of experienced programmers, which we don't."

Rick shrugs and says, "Most of the time spent in software is dealing with edge cases and clarifying requirements. The proof of concept of the software can often be built much quicker. Right now, let's knock out the smart fridge management software requirements."

"But Rick, we don't have a team to build this," I say. "Plus, even if we did, the investment in this would require me to go all the way to the executive team for approval."

Rick waves his hand as if this objection is irrelevant. "Have you ever heard of a hackathon?" he asks.

"Is that where a bunch of nerds get together for 48 hrs and compete to see who can come out with the best working software?" says Lily.

We all look at her.

"I read an article about it in some research I was doing," she says.

"Yes," says Rick, "that is exactly right, it's where a bunch of nerds get together and write software with the sole goal of getting something working. They often ignore best practices, they rely on external libraries as much as possible, and they skirt basic security principles."

"Doesn't a hackathon require real computer programmers?" I ask.

"I'm sure you have at least one person that works on the computer system that I could do a hackathon with."

"Rick, um, you know even if we had budget for this we couldn't pay your kind of salary," says Lily.

"C'mon sis," he says, "I'm between jobs anyway. This sounds like a fun project."

"Let's just pretend I was willing to risk my career on this actually working. We have a guy named Mark Kim. He is our in house expert on the computer system implementation, and I think he knows some basic programming too."

"Let's also just pretend that Mark is willing to take on this project without ratting you out to management," says Lily. "How much time would you need?"

"If Mark will give me the weekend, and you can give him the next Monday off to rest, I think we can at least have a prototype of this ledger thing that ties into your computer system."

"I need some ice cream before we do this, whatever you call it, ledger thing," says Max.
=======

>>>>>>> adc1e4f (Completed most of chapter 5.)

[< Previous chapter](/blog/event-sourcing-chapter-4) | [Next chapter >](/blog/event-sourcing-chapter-6)
