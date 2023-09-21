---
title: Learning RxJs
image: /assets/images/rxjs-logo.png
author: Sam Schneider
categories:
  - technology
  - rxjs
layout: post
---

At work recently, I've been needing to learn RxJs since most of our services are written using it. There are already plenty of good resources out there for learning RxJs, so I don't want to replicate those, but rather talk a bit about the process of learning something unfamiliar. As a technologist, we find ourselves constantly in need of learning new tools, perhaps not to mastry, but to at least a deeply professional level.

When learning new things, we should always try to make comparisons to what we already know. The more surrounding knowledge you have in an area, the more quickly you can learn new, related tools. For RxJs, the closest parallels for me were in C# async code and in JavaScript promises and async await. For the first several weeks I was constantly googling things like, "RxJs equivalent of awaiting a promise." Your goal in all of this is to construct a mental model that matches the real functionality of the thing you're trying to learn.

The other thing that's important is to expose yourself to some real code and problems early on. I've found that having a company project or at least a real toy project to work on makes better mental connections than the classic "let's build a todo app tutorial." Something special about the human brain comes out once you have connected the learning you are doing to a meaningful outcome.

## Aside on unit tests

If you've never watched [Uncle Bob talk about unit testing](https://www.youtube.com/watch?v=58jGpV2Cg50) and its benefits, you should do it this week. Something I've heard from other developers and can attest to myself is that only once you begin unit testing a piece of software do you really start to understand it. It's similar to how a tourist can quickly navigate a piece of land using a map, but only by living there, eating the food, talking to the inhabitants, can he truly begin to call the place home. So with our software, we can get things working without fully understanding what we're doing, but once we begin writing careful unit tests, we are forced to think about the software in a way that gives us understanding of what's really going on. It makes us ask questions such as, "What happens if the 3rd observable in the chain errors?" We begin to write a unit test for this question and find that we didn't really understand how error handling worked.

## Moving toward mastery

Over the past month or so, I've begun to successfully accomplish most of the basic tasks I needed to complete with RxJs. I'm now coming to the point of needing to decide whether to drive toward mastery, or to level out here. There are plenty of technologies in your career which you don't need to master (vim for example), but you should pick several of them and become a true master. Ideally these will be the core technologies in the area in which you are trying to grow.

I haven't decided if this is something I want to master yet, but here are the steps I'll probably take if I do go in that direction. First, I would invest a week in doing an in-depth tutorial by a master teacher. If you value your own time, it's almost always worth it to pay any amount of money for higher-quality teaching. Next, I'd look for a mentor in the field, or at least a community to get involved with where I could begin asking questions. Finally, I'd write my own set of tutorials on the subject. It seems that so often, only by teaching something can we truly master it.
