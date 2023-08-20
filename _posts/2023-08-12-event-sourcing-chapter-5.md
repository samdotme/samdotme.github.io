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



[< Previous chapter](/blog/event-sourcing-chapter-4) | [Next chapter >](/blog/event-sourcing-chapter-6)
