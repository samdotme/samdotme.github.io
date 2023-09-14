---
title: Big O Notation for Non Computer Science People
image: /assets/images/motorcycle-1690452_1280.jpg
credit: Image by <a href="https://pixabay.com/users/intographics-2633886/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1690452">intographics</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1690452">Pixabay</a>
author: Sam Schneider
categories:
  - technology
  - algorithms
  - big-o
layout: post
---

I successfully programmed for probably 1-2 years in the industry before I even registered the term "Big O" in my vocabulary. As I began attending developer conferences, I would hear someone introduce an algorithm and finish with a statement such as "it has a Big O runtime of log n." I would tune out. It felt like a concept that was beyond me. Now that I'm almost finished with my master's in Computer Science [from Georgia Tech's OMSCS](https://omscs.gatech.edu/home), the time has come to try to explain Big O as though I were explaining it to my former self.

Here goes.

## When you need Big O

Before I get into equation-looking stuff, let me explain the problem Big O is trying to solve. Imagine that you're writing a function that takes a list of menu items from an api. For each item, you have to create an HTML element that displays the menu item text, and surrounds it with an anchor tag.

The Javascript input looks like this.
```js
{
  menuItems: [
    {
      display: 'Home',
      url: '/',
    },
    {
      display: 'Account',
      url: '/account',
    }
  ]
}
```

You want to run a transformation that outputs suitable HTML elements, which might look like this.

```jsx
function createMenu(menuItems) {
  menuItems.map(item => 
    createMenuItem(item.display, item.url)
  );
}
```

You put the item creation function lower in the file:

```jsx
function createMenuItem(display, url) {
  return <a href={url}>{display}</a>
}
```

You test it on some test data. It works great. Your manager comes by and looks at the `map` code, but before you scroll to the `createMenuItem` helper implementation she says, "It looks great, what's the total runtime of the function?"

![Deer in the Headlights](https://media.giphy.com/media/3o6Zt577qEZwL6z1Bu/giphy.gif?cid=ecf05e47fc8s8qkqbtc88vybzip1biml20ot8ln1o7lpd3uc&ep=v1_gifs_search&rid=giphy.gif&ct=g)

You assume she wants to know if this will run fast or slow. But it doesn't sound professional to say, "It's pretty fast." As your mind ticks you realize that she's probably wanting to make sure you're not doing any inner loops that might slow things down. You lamely offer, "there aren't any loops in the helper function."

She thanks you and and says, "Ok, so Big O of n?" 

You nod as if you understand and she moves on. As soon as she goes back to her desk you Google, "What is Big O?"

## A Common Language

Big O is a way to talk about the way algorithms behave using a pre-agreed upon notation. It allows us to say things more precisely and in a way we can be confident another person will understand. For example, no traffic cop can give me a speeding ticket for "going pretty fast." The definition is not precise or agreed upon. But he can give me a ticket for "going 15 miles per hour over the speed limit." This is because we have a definition of exactly how fast this is, no matter whether I'm driving a Tesla or a motorhome.

Big O is mainly concerned with the discussion of how fast algorithms behave as they are inundated with more data. It can also be used to discuss the memory footprint of an algorithm while it runs. For this post we'll forego the discussion of Big O in terms of memory so that we can focus on the heart of how Big O works.

## Is Speed a Concern?

You may be thinking, "Computers are fast, so why care about speed of an algorithm?" That's what I thought in my first two years of programming. This is because as a junior dev I wasn't yet being exposed to hard computer science problems. I mostly dealt with very small amounts of data, and any algorithm I wrote would run fast with such a small amount of data.

I got my first wake up call to thinking about algorithm speed about 3 years into my career when I wrote a database cleanup process which would wake up, try to delete a thousand items from the database, then go back to sleep. I didn't think anything of it, but shortly after I deployed the process we began to get random service outages which required a service restart. A senior developer finally got involved and after a brief foray into my code asked me why I had set the algorithm to try to run every second. After increasing the gap between runs, the random outage problem went away.

As you grow in your career, you will be entrusted with bigger problems which will require deeper understanding of computer science concepts. It turns out that there are many problems in computer science which are termed "intractable," that is, current generation computers can't solve them no matter how powerful. When you start running into these problems it's a good thing. It means your manager is beginning to trust you enough to give you the fun stuff.

## What Does Big O Measure?

A speed measurement such as miles per hour or meters per second measures how fast an object moves in physical space from one location to the other. Big O measures how an algorithm responds as the amount of data increases.

As we said above, computers are fast. In most cases, we don't really care about how an algorithm handles data sets of 100 items. It's almost always fast. But what we do care about is when there are 30 million items and we have to finish processing before the next 30 million items batch arrives. 

And this is what makes Big O hard to grasp at first. It typically focuses on "worst case runtime," which means that it tries to express what is the longest possible time an algorithm could take to complete.

Sometimes people will say something has an average runtime of ..., which is necessary in a few edge cases where the worst case runtime would only happen once every billion tries, but since this is an introductory post, we'll ignore average runtime cases.

### Thought experiment

What is the difference in speed between `O(1)` and `O(2)`?

My first reaction would be to say that `O(1)` is twice as fast as `O(2)`, but remember that we're looking for a "speed measurement" that applies to an algorithm that can be running on a super computer or a raspberry pi. Also, the measurement needs to be just as meaningful in the future as it is today. `O(2)` will perform much faster on the super computer than `O(1)` will on a raspberry pi. And what about five years from now?

Because of the endless squabbles we can get into about benchmarking hardware, Big O takes a simple, cut-to-the-chase approach. It simply considers `O(2)` to be the same as `O(1)` as the differences between constants are not significant enough to matter over time and hardware. What it doesn't consider to be the same are when the size of the data comes into play. We'll see more examples of this later.

## Start with Simple - Constant Time

We'll start with the simplest Big O.

`O(1)`

This means that no matter how much data you give me, the algorithm will not slow down. Another way of saying this is that the algorithm will run in constant time.

Here's an example of a constant runtime algorithm:

```js
let x = [1, 2, 3];
console.log(x[2]);
```

No matter how many items I put in `x`, I can print any single element from the array with exactly the same speed. Even the billionth item. The size of the list does not affect the runtime of the algorithm. This is because items in the array are addressed with a specific memory address and the computer always knows where each item is without any searching.

As you can imagine, it is somewhat rather rare for any significant algorithm to have a runtime of `O(1)`. 

## Visiting Every Element

The next simplest runtime is an algorithm that visits every element. This is called `O(n)`.

Now it feels more like the math equation Big O is supposed to represent, but don't worry, it's still easy. `n` is simply a variable that represents all the elements in the set. Think of `n` as representing all the data that could be sent through the algorithm at any given time.

`O(n)` runtimes are super common for one reason, any time you loop through an entire array, you get `O(n)`.

Here's an example of a common `O(n)` runtime:

```js
someItems.map(item => console.log(item));
```

Now let me ask you a trick question. What is the runtime of this?

```js
for (let i = 0; i < someItems.length; i++) {
  if (someItems[i] === ourTarget) {
    break;
  }

  console.log(item);
}
```

If you're a hands on person like me you'd be tempted to overthink this. Don't do it. It's `O(n)`. 

Remember we said that Big O is mostly concerned with worst-case runtimes. It might be common to find the target or it might be rare. In this case, it's hard to even accurately discuss an average runtime without knowing the data. When in doubt, assume the worst case runtime, which is `O(n)` if the `break` statement is never called.

## Tricky Shortcut

Some of the most famous algorithms achieve a runtime of `O(log n)`. Balanced binary tree search is a good example of this. It is the famous phone book search where you want to look up a name in the phonebook, open the book halfway through, decide if the name is on the right or the left, tear the book in half and throw away the half that doesn't have the name. Then you repeat the same procedure until you find the name. Intuitively we know that this is way faster than going through every single name in the phone book.

<iframe width="560" height="315" src="https://www.youtube.com/embed/DSffdCT5Cx4?si=P_bCyq0Uhop46Kqn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

The phone book example is a good one where our intuition only serves us well if we're thinking about a lot of data. In the example at the beginning, I talked about building a menu of items for a website. Going to the trouble of implementing binary search with a few hundred items seems stupid silly. With Big O, for your intuition to serve you well, try to imagine lists with millions of items.

`O(log n)` is fast. Think of it as the reverse of the compounding problem, which we'll get to next.

## Exponents are Bad

The final Big O notation we'll discuss is `O(n^2)`. This is slow. If the 2 turns to a 3 it's WAY slower.

It comes from nested loops, something that we intuitively know is a major algorithm slowdown.

Bubble sort is a great example of this:

```js
function bubbleSort(someItems) {
    for (let i = 0; i < someItems.length; i++) {
      for (let j = 0; j < someItems.length; j++) {
        if (someItems[j] > someItems[j + 1]) {
          let temp = someItems[j + 1];
          someItems[j + 1] = someItems[j];
          someItems[j] = temp;
        }
      }
    }
}
```

In the above example we loop through all of the items in `someItems` in order to make sure we visit every item for sort, but inside of that loop, we do a second loop through the same list to actually perform the sort. Because of this poor time complexity, if you get in an interview, suggest `mergeSort` as a superior alternative to `bubbleSort`.

## Final Words

Big O can get more complex than the above examples since it's ultimately a math equation. But in the majority of cases, it is simply one of the above examples, or some combination thereof. I recommend that you focus first on familiarity with the intution of what Big O means, and try to remember these examples. Over time, exposure to other Big O expressions will become less and less intimidating.
