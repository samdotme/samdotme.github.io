---
title: Event Sourcing - Chapter 1
image: /assets/images/package-delivery.jpg
author: Sam Schneider
categories:
  - technology
  - event-sourcing
  - event-sourcing-tutorial
layout: post
---

I flip up the top of my laptop and login to email. There are 36 new emails. I scan quickly and there it is, "From Mark Ruskins." I know it's going to be bad. We lost a critical shipment for the whole day yesterday, only finding it behind an office plant at the end of the day. I read through the contents, pretty much what I am used to by now, the phrases about "be held responsible" and "take a deep look at our systems." Good leaders work with their teams to understand and fix problems, bad leaders pass the problems to their subordinates and give deadlines when the problems are to be fixed. I don't have a good leader.

I finish the email. If I didn't get so many like this it would probably affect me more, now I kinda just gloss over the familiar phrases. But there will a conference call later this week and that's when it'll actually be hard. Mark will wait until about 15 minutes into the meeting and then bring up the "issue that occured on April 27th." He will ask all kinds of penetrating questions so as make it clear that I have something seriously wrong in my operation, and that he has nothing to do with it.

For a moment I consider quitting before the meeting. When people quit, the following accusation meetings are usually not quite as bad. But then I think of Jenny's volleyball hopes for this year. If I quit, we couldn't send her to All Saints and she'd have to try out for the local high school team. She tells me it would be fine, but I just can't do it.

I also remember the pain of putting together a resume. I manage a warehouse. I'm supposed to talk about how I "reduced shipping costs by 35%" or "increased customer satisfaction by 22%" but I don't have any stats on any of that. All I know is that mostly I deal with angry customers who are waiting for shipments that I can't find. I could probably put together some numbers and pick a few positives and make it work, but I'd feel like a fake. As much as I hate getting these emails, the truth is, we're failing as a team. We can't seem to stay on top of what we're shipping or when.

But whose fault is it? In the meetings it's always mine. I have to put together root cause analysis reports, which all pretty much say the same thing, "The status marked on the package was incorrect and then some terrible thing happened because of this. We will take greater care in the future." But how? How can you take greater care of a problem that you seem unable to fix? It's just words on a page.

There's a knock at the door. It's Judy. She manages floor operations. We have a one on one in about 30 minutes, so this is probably bad.

"Hey Judy, what's up?" I ask.

"I think We've lost another shipment," she says. Is she more worried than me?

I always pretend that my stomach hasn't dropped through the floor when I get news like this. I imagine my dad as me and try to guess what he would do. The Thursday status update just got about 40% more distasteful.

"Which shipment?" I ask.

"It's apparently an engagement ring," she says. It's value is about $3000, but there's a family cruise scheduled and this is the only ring his fiance wanted and now he's calling because it has been marked as "shipped" online for the past 6 days and he's wondering when it will arrive. He needs it in 2 days before they get on the plane. I checked our shipment manifest and I can't find it on there, so I don't think we actually shipped it. The status is "shipped" in the system though.

I almost catch myself but I ask anyway, "Any idea when the status changed to 'shipped'?"

She gives me that look. "All we have is a 'last updated date' in the system, but this shows as yesterday. I think someone accidentally saved a small edit to the shipment title when they were checking the status yesterday."

My mind briefly drifts to my resignation letter, but I force myself to come back to the present. 

"Ok, let's pull some people to look," I say.

This involves slowing down all our other shipments while 3-4 employees check all the likely spots. She groans. It's going to make all our other delivery numbers look even worse. But what can we do?

I decide to take a walk out onto the warehouse floor myself. Who knows, maybe I'll find the package somewhere? The shelves are stacked to the ceiling in typical warehouse fashion. Pickers are driving scissor lifts through various aisles looking for the right products to send to the packaging tables to fill various orders. We've spent considerable time optimizing the location of products on the shelves, trying to keep items that are typically ordered together in a geographical proximity. We've even brought in consultants. All of these activities have helped our baseline numbers for time to fill an order.

We have an aging, but very expensive, computer system that makes your eyes spin when you first get into it. Once people become experts they know how to flip through each screen and where all the "gotchas" live. We end up completely relying on our in-house experts to manipulate the system cause none of us really understand it. I pretend to. I know the names of all the modules. Crazy names like "M120" which is the shipping module, and "M365" which is the packaging module. It makes your head spin when one of the experts begins to talk, "I dropped into M220 but couldn't find the shipment, so I created a compensating shipment in M650 but that ended up not being needed..."

I see Judy already talking to the team that has been pulled from their picking jobs. They have that resigned look on your face that workers get sometime when they've lost all hope for an organization but haven't quit yet. Maybe that's how I look when I talk to my bosses.

I'm just about start looking under shelves for the missing package when my phone rings. I pull it out and it's my wife. What's she calling about? My mind ticks through the week's commitments and suddenly I remember, I agreed to have lunch with her and a visiting colleague of hers. What time is it? 10:20. Whew, that could have been bad. I answer.

"Hey Honey, how's it going?"

"I can't find the gift we brought back from Brazil for Adil," she says. "Any chance you know where we put that?"

She's really good about bringing gifts to lunches with long-lost friends.

"I think it's in the closet where we keep the kids' early birthday presents," I guess.

Turns out I was right because she's quickly off the phone and I'm back to aimlessly looking under shelves.


