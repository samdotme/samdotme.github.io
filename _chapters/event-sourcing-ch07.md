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

I don't like people staring at me, and they're definitely staring at me. Judy and Mark, I mean. We're there with Rick. I've just explained our idea from the AirBnb retreat to them.

There are a few leftover catered sandwiches on the table. Lily gave me the budget to do this. There's absolutely no corporate budget for anything like this. I love how I'm spending my own money for the company right before I get fired.

Judy, always the leader, finally asks a question. "You want us to add an additional step to our software entry procedure to keep a journal of the changes. Won't that be more work?" she asks. From the looks on their faces, apparently everyone had the same question.

I wave Rick down before he can give an answer that no one will understand.

"It will be additional data that we track, but our question to you guys is whether we can hook it up to the current system without causing any more data entry burden to the team."

"Yes," says Mark. "I expose an api endpoint, that internally we call the 'orders webhook.' Whenever a new order happens from the website and is routed by the order management system to be fulfilled by this warehouse, our warehouse's orders webhook is called. I can add another effect to that webhook to route the order added new event to the event ledger you're talking about. We can also handle cancelled orders this way.

"When an order is picked, our system sends out an API call to the mother ship. I can hook into the process to fire a status update event as well. Shipping an order is roughly the same thing.There are a few other edge case situations which are similar, but you can leave these up to me and Rick to figure out."

Judy stands up and begins pacing back and forth. "I don't like it. It feels risky."

"What do you think is risky?" I ask.

"You know software is always breaking. Especially software that we write ourselves. If we have a system outage and it's due to anything in this new software system, you will lose your job. Heck, even I or Mark could lose our jobs. Why should we take a risk like that to help a company that we all hate?"

"Because if we don't take a risk, we'll all lose our jobs in two months anyway," Mark speaks up suddenly. "I'm not supposed to say this, but my cousin works in headquarters and she told me that Bill has been given two weeks to turn thing around, but that they've already made plans to close down this warehouse."

"Why?" Judy almost shouts. "This warehouse isn't any worse than any other."

"But since we're the closest one to HQ, we're also in an area where hourly wages are $2/hr higher than other places."

Judy shakes her head. "It's true. There aren't many warehouse jobs in the area, and that's my only area of expertise. Looks like I'll have to move if we close."

She pauses. "I share custody of the kids with my ex-husband. The kids already go to school here. If I have to move to get a new job, I'll probably only get them on the weekends."

The reality of our predicament sinks in for everyone.

"Ok," she says. "Let's do this thing then."

I look to Mark. "There's probably some risk here for you too Mark. Are you sure you want in?"

He scratches his very full head of hair and smiles. "Yeah, I'm single and I'm sure they'd move me to another warehouse in a heartbeat since we have so few people who understand the software. If I help you guys, I might get fired."

"So better leave you out of the equation," I ask, knowing that without Mark we can't do it.

"Not at all," he grins. "I hate this job, and I hate being an expert on a 20 year old software system. Some day we're going to replace it and I'm going to be out on the street with no skills. Sounds like Rick here can teach me a thing or two and get me into the flow of modern software development. I'll risk my dead-end job for that."

I look back to Rick. "Rick, the team is on-board, but are you sure you want to help? We can't pay you. Your consulting rate is probably like $150 an hour, and this project is not small."

"My consulting rate is $400 an hour," he smiles. "But that's why I have so much free time on my hands. I don't need to do that much of it to keep my checking account happy.

"But since everyone else has been so honest, let me take my turn. I have a favorite niece that needs to play volleyball her senior year and not mess up her college plans. I have a favorite brother-in-law who is being unfairly treated by a company I fully disrespect, and I finally have a chance to do something about it."

I pick up a scrap piece of warehouse baling string from a table. I give it to Mark and ask him to stretch it out between both hands. I point to the section right next to his hand.

"We are here," I say. "If this project is discovered too early, upper management will kill the project and fire me, and possibly some of you."

I begin to move my finger along the string toward Mark's other hand.

"If we can get somewhere around here before upper management finds out, we might just solve our problem and keep our jobs."

Mark puts on his best Hugo Weaving Elrond voice and says, "I give you the Fellowship of the String."

I walked right into that one. But everyone else loves it. Nerds and Lord of the Rings. Well, I guess I'm a nerd too. I've had my fair share of Lord of the Rings marthons in my day.

"So what's the first thing we do Gandalf?" asks Rick.

I glare at him with a raised eyebrow long enough to make sure the others don't start calling m that. Rick probably doesn't even notice the social cue.

"I'd like you and Mark to try to build a system integration with the core code that you already started last week at our retreat. Just, don't cause any warehouse downtime or this project is finished before it has started."

"How about this weekend?" asks Mark.

I thought I'd have to beg and plead for that. "I'll buy all the Starbucks you need," I say.

"I drink carmel lattes, three pumps carmel and three shots of espresso," says Mark.

To show how serious I am, I write it down. I'm about to ask Rick, but he's already diving into the details with Mark. Anyway, I'm sure Lily knows how he takes his coffee.

I glance at Judy. She looks worried, but she gives me a thumbs up.

"One last thing," I say. "I know what we're doing is technically secret, but I ask that none of you lie about it. For a couple reasons, first, it's wrong and I don't want anyone to violate their consciences here. But second, if you lie, you will risk greater consequences. I want to take as much of the rap here as I can if things go wrong."

Even Rick looks up and gives me a thumbs up.

[< Previous chapter](/blog/event-sourcing-chapter-6) | [Next chapter >](/blog/event-sourcing-chapter-8)
