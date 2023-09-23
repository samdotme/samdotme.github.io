---
title: Event Sourcing
image: /assets/images/event-sourcing-cover-sm.png
description: A warehouse manager teams up with his family to save his warehouse by implementing a software architectural pattern called event sourcing.
topic: Event Sourcing
chapter: 1
prefix: event-sourcing
signupLink: https://samschneider.ck.page/event-sourcing-book
nextChapter: null
layout: chapter
---

I flip up the top of my laptop and login to email. There are 36 new emails. I scan quickly and there it is, "From Gerald Ruskins." I know it's going to be bad. We lost a critical shipment yesterday, only finding it under a stack of bubble wrap at the end of the day. I read through the contents. It's filled with phrases such as "be held responsible" and "take a deep look at our systems." Good leaders work with their teams to understand and fix problems, bad leaders pass the problems to their subordinates and give deadlines when the problems are to be fixed. I don't have a good leader.

I finish the email. If I didn't get so many like this it would probably affect me more, now I just gloss over the familiar phrases. But there will a conference call on Thursday and that's when it'll actually be hard. Gerald will wait until about 15 minutes into the meeting and then bring up the "issue that occured on April 27th." He will ask all kinds of penetrating questions so as make it clear that I have something seriously wrong in my operation, and that he is free of blame.

For a moment I consider quitting before the meeting. When people quit, the following accusation meetings are usually not quite as bad. But then I think of Jenny's volleyball hopes for this year. If I quit, we couldn't send her to All Saints and she'd have to try out for the local high school team which hasn't won a game at state for the past 5 years. She tells me it would be fine, but I just can't do it.

I also remember the pain of putting together a resume. I manage a warehouse. I'm supposed to talk about how I "reduced shipping costs by 35%" or "increased customer satisfaction by 22%" but I don't have stats on any of that. All I know is that mostly I deal with angry customers who are waiting for shipments that I can't find. I could probably put together some numbers and pick a few positives and make it work, but I'd feel like a fake. As much as I hate getting these emails, the truth is, we're failing as a team. We can't seem to stay on top of what we're shipping or when.

Whose fault is it? In the meetings it's always mine. I have to put together root cause analysis reports, which all pretty much say the same thing: "The status marked on the package was incorrect and then some terrible thing happened because of this. We will take greater care in the future." But how? How can you take greater care of a problem that you seem unable to fix? It's just words on a page.

There's a knock at the door. It's Judy. She manages floor operations. We have a one on one in about 30 minutes, so this is probably bad.

"Hey Judy, what's up?" I ask.

"I think We've lost another shipment," she says. 

I always pretend that my stomach hasn't dropped through the floor when I get news like this. I imagine my dad as me and try to guess what he would do. The Thursday status update meeting just got about 40% more distasteful.

"Which shipment?" I ask.

"It's apparently an engagement ring," she says. Its value is about $3000, but there's a family cruise scheduled and this is the only ring his fiance wanted and now he's calling because it has been marked as "shipped" online for the past 6 days and he's wondering when it will arrive. He needs it in 2 days before they get on the plane. I checked our shipment manifest and I can't find it on there, so I don't think we actually shipped it. The status is "shipped" in the system though.

I ask a question which I know won't have an answer, "Any idea *when* the status changed to 'shipped'?"

She gives me that look. "All we have is a 'last updated date' in the system, but this shows as yesterday. I think someone accidentally saved a small edit to the shipment title when they were checking the status yesterday."

My mind briefly drifts to my resignation letter, but I force myself to come back to the present. 

"Ok, let's pull some people to look," I say.

This involves slowing down all our other shipments while 3-4 employees check all the likely spots. She groans. It's going to make all our other delivery numbers look even worse. But what can we do?

I decide to take a walk out onto the warehouse floor myself. Who knows, maybe I'll find the package somewhere? The shelves are stacked to the ceiling in typical warehouse fashion. Employees called "pickers" are driving scissor lifts through various aisles looking for the right products to send to the packaging tables to fill various orders. 

We're improving on many important metrics such as time to fulfill orders. We've spent considerable time optimizing the location of products on the shelves, trying to keep items that are typically ordered together in a geographical proximity. The company has even brought in consultants who analyze the makeup of related items in our orders using machine learning algorithms.

We have an aging (but very expensive) computer system that reminds me of the hall of mirrors from Bruce Lee's *Enter the Dragon*. There are endless screens which represent different aspects of our items and shipments. After a few years of learning hell, the employees who don't give up on the system eventually become experts. You should hear them talk: "I dropped into M220 but couldn't find the shipment, so I created a compensating shipment in M650 but that ended up not being needed, so I deleted it in M400."

I see Judy already talking to the team that has been pulled from their picking jobs. They have that resigned look of workers who have lost all hope for an organization but haven't quit yet. Maybe that's how I look when I talk to my bosses.

I'm just about start looking under shelves for the missing package when my phone rings. I pull it out and it's my wife. What's she calling about? Suddenly I remember that I agreed to have lunch with her and a visiting colleague of hers. What time is it? 12:10. Oh boy.

"Hey Honey, how's it going?"

"Are you coming? Adil's already here."

I look up. For a moment my vision seems to zoom out. I see the workers going back and forth, stooping as they look under shelves. They look like ants foraging food for the colony. There has to be a better way.
