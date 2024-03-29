---
title: The Theory of Constraints and Software Engineering
image: /assets/images/arseny-togulev-WCqqJioFLZc-unsplash.jpg
credit: Photo by <a href="https://unsplash.com/@tetrakiss?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Arseny Togulev</a> on <a href="https://unsplash.com/photos/WCqqJioFLZc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
author: Sam Schneider
categories:
  - philosophy
  - theory of constraints
layout: post
---

On a trip from China to the United States in 2012, I was sitting in a coffee shop with a friend when he suddenly said, "You should read the book [*The Goal*](https://www.amazon.com/Goal-Process-Ongoing-Improvement-ebook/dp/B002LHRM2O)." When I went back to China, I asked my boss if he'd heard of the book. Not only had he heard of it, but he had a copy of it on his bookshelf. I borrowed it, and a few days opened it and changed my life.

*The Goal* is the most famous of Eliyahu M. Goldratt's books introducing his "Theory of Constraints." It dovetails nicely with the concepts behind Lean Manufacturing and is still commonly assigned reading in business schools. However, while the concepts of Lean Manufacturing penetrated deeply into the world of software thinking via [the Agile Manifesto](https://agilemanifesto.org/) in 2001, I have never yet heard anyone tie the concepts behind the Theory of Constraints to software. So I'll try it.

## What is the Theory of Constraints?

The Theory of Constraints is a logical thinking process that allows us to gain actionable insights from our intuition. However in most cases, following the logical process of the theory leads to the same conclusion in every discipline: management is often focused on local optima instead of solving problems for the company as a whole. In manufacturing, factories usually measure the efficiency of each step in the process and assuming these will magically add up into a global improvement. In project management, projects are usually managed by looking at each branch of dependencies and measuring how many branches are off track instead of focusing on the health of the longest branch in the dependency chain. In marketing, it leads to pricing strategies based on the cost to manufacture goods plus some added profit instead of focusing on what the market wants, and tailoring product offerings to this.

The Theory of Constraints is probably the best kept influential secret in business. 

## What can it tell us about software?

Unfortunately Dr. Goldratt passed away in 2011 and while the concepts behind Lean Manufacturing have deeply penetrated software thinking through the Agile Manifesto in 2001 and the DevOps revolution in 2010, the concepts behind the Theory of Constraints are little discussed in the software community.

Lean Manufacturing is all about reducing waste, but without careful thinking about the system as a whole it can lead to great improvements in a part of the system which have no outcome on the output of the system as a whole. In an agile approach to software, software teams are especially vulnerable to this. Agile methodologies (such as Scrum) provide excellent metrics on team performance, but provide no direction as to whether these improvements to the system had an affect on the system as a whole. The hope in Agile is that the Product Owner for the team will direct the team's development efforts to items which will help the business as a whole. 

Software engineers are famous for obsessing over their own specialities. In my experience it's quite common to assign busy work to an expert on an agile team so that they can continue in their area of expertise. "Sherry is an expert in Oracle databases, so let's have her get this 'nice to have' report knocked out this week. Having her learn how to fix the critical shopping cart display on the website is front end work and wouldn't be efficient for her to spend time learning it."

The Theory of Constraints gives us a way to take apart complex systems and processes looking for the "constraint" in the system, a single process which determines the output of the entire system. It argues that in any complex system there is rarely more than one constraint (and application throughout the world's factories has so far seemed to prove the theory). In software, we must learn to apply the same rigorous thinking to our software systems and processes.

## The software system

Software systems in most businesses are different from factories in that the constraint of the system is rarely the software's ability to process requests (caveat: it is for Google, Facebook, data mining companies, etc). Every production software system has a business goal. An invoicing system is meant to capture customer payments. An ecommerce website helps customers find and purchase what they want. While many metrics can make us feel good about ourselves (e.g. mean time to recovery, uptime percentages), these metrics only improve the system if they achieve the overall business goal for which the system was designed. Therefore it is important that we carefully choose the metrics which will tell us if our software system is fulfilling its purpose.

For an invoicing system, we should carefully track the number of invoices processed per day (and compare against previous periods). We should especially track any failures to process invoices, not only software error codes but also soft metrics such as how many invoices are opened, but not paid. As engineers, we typically think about systems as individual components, but the system performance is the sum of the components and thus must be measured in this way.

Once we have identified metrics which tell us whether the system as a whole is achieving its goals, we then begin to prioritize all work in terms of how it will affect these metrics. Yes, minor UI fixes might not greatly move some of these numbers and they should still be done, but they must be prioritized in context of the system goals, and should be measured rigorously in terms of the system goals. UI changes can just as easily get in the way of the system goals as they can help them (e.g. incorrectly updating the checkout button link).

## The software development process

Besides looking at software systems as a whole, we should look at the software development process itself as a system with constraints. Software teams are assembled to work on real software. Therefore we can connect the team's output with the effect on the metrics for the software system they are producing. It is incredibly common on software teams to hear a developer say something like, "Feature x is done. I tested it last night," but when questioned they admit that feature x in only on their laptop. No one in the company has even seen the code they wrote.

Software teams must begin evaluating their output based not only on the software released to production but on the effect of their released code. Did it achieve the outcomes it was designed for? Did the percentage of abandoned carts decrease with the new icons? On average, how many minutes faster are we at diagnosing checkout failures after implementing Jaeger tracing?

These types of questions can receive push back from dev teams because it gives them responsibilities for which they do not believe they should be held responsible. To developers, "it's usually the Product team's fault." Once everyone is evaluated based on the actual outcome of the system the internals of the team changes. The engineers begin to raise concerns about Product definition, and even argue things like color choices. Back end engineers begin to volunteer for front end code reviews.

Of course, some engineers cannot stomach an environment where they are not allowed to hyper-specialize. Be ready to lose these people.

In my experience, every software team I've worked with has some kind of major constraint on their ability to deliver code to production quickly. When I start on the team, it's often something as simple as code reviews. Every developer is so focused on their individual performance they don't take time to review each other's code, which causes pull requests to sit idle sometimes for multiple days. This problem is easy to fix. It usually just takes one developer to begin reviewing code within 1-2 hours and everyone else will follow suit. Code review delays are an artificial constraint however.

Once code review delays are fixed, the true constraints begin to surface. These usually take the form of either lack of experience with the technology being used, or a manual production release process. It is quite common for new projects to begin with a technology with which the assembled team is relatively unfamiliar. In these cases, simple tasks such as setting up a Redux store in a front end project can take days instead of hours. The danger here is that one of the devs will become an expert on the unfamiliar item and the other devs will rely on her instead of learning the area themselves. If local experts form knowledge fiefdoms and begin to play "king of the hill," simple constraints will begin being baked into the fabric of the team itself. Forcing such devs to pair program in this area (or even just take a vacation) can easily break these constraints. Whatever you do, do not make these local area experts into heroes. Only call them heroes when they cross train others effectively.

The other kind of constraint, which is harder to fix, is that of a smooth release of code to production. This constraint is harder to fix because so many things play into it. First, if the team has not written automated tests which give them confidence that the code works, you will NEVER achieve confident production releases. Second, the process of moving code from a developer's laptop to the production system must have no manual steps other than clicking "Approve for release" buttons. Otherwise everyone will be afraid that they are forgetting something and knowlege fiefdoms will arise in which only a single dev is trusted to do releases. Third, the process of "smoke testing" after a release must be well-documented (ideally it will be fully automated). If no one is quite sure how test that the system still works after a code change has gone out, there will always be an underlying fear to release and procrastination will result.

## Conclusion

We need to integrate rigorous measurement of our overall goal into all the local work we do. The encouraging thing is that some people have been saying the same thing, such as Eric Ries in [The Lean Startup](https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0670921602). I belive Dr. Goldratt's legacy is highly needed in the software community.
