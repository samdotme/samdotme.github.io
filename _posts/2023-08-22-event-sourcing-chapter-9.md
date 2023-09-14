---
title: Event Sourcing - Chapter 9
image: /assets/images/package-delivery.jpg
author: Sam Schneider
categories:
  - technology
  - event-sourcing
  - event-sourcing-tutorial
layout: post
---

"Awesome," I say, "we get to test the system under real stress conditions."

"Just for the record," says Mark. "Mad respect that you haven't quit yet when your boss talks to you like that."

"I've been waiting for this moment," I said. "I'm just glad it happened after we deployed the system and not yesterday."

"How did Gerald find out about it before we did?" asks Judy.

"Beats me," says Mark, who has already pulled the order up in the ledger.

"Whoa," he says, "this just got a bad event 12 minutes ago. This happened while we were meeting. Is someone working right now?"

He pulls up the main software system. As usual, there would be no way to know that the status is incorrect. But as he switches screens back to the event ledger, we see clearly an event that sets the order to `PendingPicking`. The link on the screen shows the previous event was `Packed`. The order was packed this afternoon at 3:22pm. The incorrect status change was made by "Walter Chin". Walter is a team lead.

"Does Walter have access to do this?" I ask Mark.

"Yes, all team leads can make that change."

I run to the warehouse and scan through the packages, trying to locate the order number that Gerald said is missing. There are quite a few orders represented in the piles of packages there, but I don't see the missing one. Was our system hacked? Where is Walter if he changed the status just a few minutes ago.

I run back to the office and motion to Rick to come over. I bring him out into the hall and ask quietly, "Is there any way the system was hacked externally? Did I just open up a loophole that will put my name on the evening news as the next major public hack?"

Rick looks worried. "There could be something we missed, but I don't think so. I don't see how anyone but an internal employee could have changed the status in the main software system. I certainly don't know how gaining access to the event ledger would give them access to do that."

I go back into the meeting room.

"Mark, does anyone have external access to the main software system to make a change like that?"

"Yes, of course," he says, "but from the event ledger we can clearly see that the packages were packaged this afternoon, and for you to not be able to find them physically now means that someone else is on the premises."

I feel like my warehouse just turned into a crime scene. Then I get another inspiration. I run out to the parking lot. There's another car here that doesn't belong to any of us. Someone is just getting into it, though I can't make out who from this far away. I'll take my chances of looking silly.

"Walter!" I yell. The figure pauses and looks back. It is Walter. I run toward him.

"Hey, just wanted to check, did you have some late work you were doing just now?"

"Yeah, I did he says. I had something come up."

"I think you changed an order status incorrectly to pending picking when the order had already been packed," I said. "Do you know where the missing packages are?"

He smiles at me. "Congratulations, I guess you passed whatever test corporate had for you."

"What do you mean?" I ask.

That Ruskins guy called me today and asked if I had permissions to change a package status. He said they were doing some kind of test at corporate and that I wasn't supposed to tell you about it. He said he could change it himself but it would look suspicious. But I guess you must have passed the test since you caught the issue before I even left the building. He said to put them somewhere that you wouldn't think to look and that tomorrow afternoon I could fix the status in the system, so I put the packages in the main custodial broom closet since we haven't been using that much since the custodial staff numbers have been cut."

"That's great!" I say, pretending my best to be excited.

"Can you let Mr. Ruskins know that we figured it out?"

"Sure thing Mr. Wilson," he says and drives off.

"I go back and find all the packages in the broom closet." I call for help and the four of us carry them back to the shipping area.

Then I call Gerald.

"Hi Gerald, we found the missing packages. There was some kind of miscommunication I guess and one of our team leads placed them in a custodial broom closet. That was certainly the strangest case of missing packages I've seen."

"What? Are you sure?" he says quickly. "Ok, I'll double check in the morning."

I go back to the meeting room where Mark is showing Judy how to enter a compensating event into the system to fix the problem to get the event journal back to the correct state.

"When an order is marked incorrectly by receiving an incorrect state," explains Mark, "we found that it's important that we enter a compensating event to account for this mistake. For now we're calling it a `StatusCorrected` event, which lists the regular order information and the reason for the correction. We're playing with some algorithms that can calculate a running status of all orders based on the events, and having a correct compensating event is necessary for this running status to stay correct."

Judy is furiously taking notes. "Sounds a lot like my college accounting classes," she says. It's weird, but I love getting that feeling as a leader when you know the people who report to you are more talented than you are.

Another few days goes by and I get an email from Mark: "Bill, we've got the state machine logic ready in dev and have tested it with Judy. Want us to deploy it?"

I call Judy over the next time she comes near my office. "Does that state machine logic look good to you?" I ask. "Remember, we can't really afford any mistakes, I'm ok waiting another day or two to test it thoroughly."

"Rick and Mark demoed it pretty thoroughly to me this morning. I had the training handbook open and made sure it covered every case in there. They only missed one initially, and they fixed that about half an hour later and I confirmed it. I think we're as safe as we'll ever be."

I write back: "You have a green light."

About 60 minutes later all hell breaks loose. Well, purgatory at least.

[< Previous chapter](/blog/event-sourcing-chapter-8) | [Next chapter >](/blog/event-sourcing-chapter-10)
