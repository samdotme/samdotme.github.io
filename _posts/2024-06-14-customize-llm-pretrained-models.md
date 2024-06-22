---
title: Customize a Model with Hugging Face and GPT-3
image: /assets/images/fox-mechanic.jpg
credit: Image credit Dall·E
author: Sam Schneider
categories:
  - ai
  - learning
  - development
  - Hugging Face
  - pre-trained models
layout: post
---

If you've been a developer in the past 24 months, doubtless someone has come to you and said some variation of, "Can you build a chatbot trained on our company support documentation?"

You give some vague answer that you'll look into it, but honestly you have no idea where to start. Well, today I'm going to tell you exactly where to start. By the end of this post you will be able to:

* Know how to find a pre-trained model to use
* Build the essentials of a chatbot that can use that model
* Feed your company's own data to train the model

## Start with a pre-trained model

The first thing you need is a pre-trained model. No, Sam Altman doesn't want you to use GPT-4, but you can use GPT-3 or Meta's LLaMA, which you'll see still gives excellent results for what we're trying to achieve.

As with all things AI, you need to work with Python. We'll also a Jupytr notebook to demonstrate this. If you have your own Jupytr environment set up, you are welcome to work with that, but for this post, we'll use Google's [Colab notebooks](https://colab.google/).
