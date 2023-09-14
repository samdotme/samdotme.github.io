---
title: Event Sourcing - Chapter 10
image: /assets/images/package-delivery.jpg
author: Sam Schneider
categories:
  - technology
  - event-sourcing
  - event-sourcing-tutorial
layout: post
---

Two of the three current shift team leads are in my office almost shouting. They're saying that the software system is going nuts and they can't get any work done. They must really feel a lot more pressure about their daily efficiencies than I mean to be putting on them. Every few sentences they keep reiterating that whatever has changed will make their efficiencies plummet.

My first response is to call Mark and yell something. I'm wiser than that. So I ask them to show me an example of something that used to work, but doesn't work anymore. One of the team leads in Walter Chin, who did the package hiding stunt for Ruskins the week before.

He opens his corporate brick laptop and we wait for the inevitable loader screen of the behemoth central software system. Once it loads, he opens one of the orders he's working on.

"This order has just been picked. It needs to go to shipping, but I can't mark it that way anymore. Just all of the sudden it starts erroring."

The urge to write an ALL CAPS yell email to Mark returns. How could they get this wrong, didn't Judy check this. Instead I open up the training handbook and look at the "picking completed" state.

"But Walter," I say, "ready to ship isn't the next state. The next state is post-picking."

"Yeah, it is," says Walter, "and that's a stupid state. What does that even mean? On the warehouse floor, once something is picked, we just move it to shipping and update the state to shipping. There are a couple in-between states that we used to use for old processes that are now obsolete."

"Why didn't we update the training handbook?" I ask.

"C'mon Mr. Wilson, with the kind of efficiency pressure we have, do you really think we have time to do stuff like that?"

"In the future, you will make time, or at least notify Judy or me, and we'll make sure it gets done. Can you tell me, are all of your problems related to no longer being able to take shortcuts in the system like you could up until this afternoon?"

Both team leads think for a minute and then nod. Now it's probably my turn to be yelled at by Mark and Rick. I should have done my homework on what states were actually being used before asking them to use the handbook.

I call Rick's cell phone.

"Hey Rick, I've made a mistake. The state machine I asked for is wrong. Well, it's technically correct, but it's not what real people are using on the ground and it's causing a lot of fury. Can you somehow undo that change?"

I hold my breath. You never know if programmers are going to tell you your request will take two hours or five years and a research team.

"No problem Bill," he says. "I'll put out a PR to revert it right now. I think Mark can get that deployed in a few minutes."

"That easy?" I ask.

"DevOps bro," he says.

I shouldn't have asked.

We work with the team leads for the next few days to refine the legal status transitions. It turns out that after more investigation we find that many of the lost packages happen during some of the shortcuts taken in the system. Sometimes people move an order to "shipped" and skip the "picked" state altogether, which doesn't correspond to what's actually happening on the floor.

For each of these scenarios we work with the team leads and get an agreement that the states we will be enforcing correctly match what's happening in the physical system but don't add any extra unecessary complications to their process.

This time, we've learned our lesson and we first demo the changes in dev to the team leads. This time they are quite enthusiastic. It turns out that they are always trying to properly train their new recruits on the proper state transitions, and since the handbook is incorrect, they mostly have to rely on continued reiteration. This time Mark sends out an email to the team leads notifiying them that we've updated a 'supporting module' for the software system, along with a description of what changes they can expect. Since the changes have already been demoed to them no one even asks a question. The deployment this time receives no complaints.

But now my original two weeks given by Gerald have come to an end. It's Friday morning, and we haven't lost a single package (other than a few misplacements that were quickly located from the event ledger before anyone outside of warehouse realized it). I wonder if I should call Gerald or if he will call me. Finally, I decide to call him at 3pm if he doesn't call before that.

I receive a call at 2:30pm.

"Bill, it's Gerald. I don't know what you've done over there, but I can't fire you yet since you haven't lost any packages these two weeks. I should let you know that there's talk brewing here at corporate about closing down your warehouse though."

I call Judy and Mark into my office.

"We've succeeded in not losing a single package since we implemented the event ledger. I just heard from Gerald what Mark told us earlier. Corporate is looking at closing down our location to cut costs. What else can we do with the data we have?"

"Why don't you call that guy that gave you the idea of tracking stuff as events in the first place?" asks Judy.

"Adil?" I ask. "I'm not really sure how he even knew to suggest that."

That night after dinner, I grab Lily's hand and lead her out onto the back deck. It's still cool in the evenings. The trees above are gently rustling in the wind.

"Corporate is planning to close down the plant. It sounds like me might need a miracle to keep it open even though we haven't lost a single package since we implemented the even ledger. Judy thinks we should call Adil."

Lily gives me a thumbs up and pulls out her phone from a jacket pocket and hits the video conferencing button to call Adil. He answers almost immediately.

"Lily, Bill!" he says. "To what do I owe the pleasure?"

"Your suggestion from lunch a few weeks ago worked. We build a software system to track the warehouse as a series of events instead of a count of items on hand. Since we did that, we haven't lost a single item."

"That's rather impressive," he says.

"Now, the company is planning to close down the warehouse. We need to find something to prove that we can deliver something that's worth keeping us open."

"That really depends on the company. What do they struggle with?"

"Before, lost packages was our biggest thing. Now, I'm not sure."

"There are many things you can do with the data you are now accumulating. You need to find their biggest struggle. Once you have that, you can start addressing it with your data."

He pauses.

"You obviously have access to some software talent to do what you've done so far. The next steps will require more talent, particularly in the area of data analytics and machine learning. Do you have that?"

I look at Lily. She shrugs.

"My brother Rick is helping us," she says.

Adil begins to laugh. "You'll be fine then. As long as this project remains his primary interest. Rick is excellent at quick and total focus, but he gets bored easily."

"How do you know Rick?" I ask.

"Rick and I did some cooperative research several years back. He was working on a Ph.D., but got bored with it. Rick is how Lily and I met."



[< Previous chapter](/blog/event-sourcing-chapter-9) | [Next chapter >](/blog/event-sourcing-chapter-11)
