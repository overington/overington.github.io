+++
title = "BoTSORT"
description = "Introduction to why I am exploring BoTSORT"
date = 2026-04-09
[taxonomies]
tags = ["trackers", "computer vision", "object detection"]
+++

I have have been working with the [BoTSORT](https://arxiv.org/abs/2206.14651) tracker, specifically the [C++ implementation](https://github.com/viplix3/BoTSORT-cpp) implementation, so that we can integrate it in an Unreal Engine application that does live segmentation and tracking.

I chose this tracker because it looked like the state of the art method which combined both traditional computer vision methods as well as a neural network based method - to be able track and better reidentify objects that have been obscured / occluded.

Initially, I only had a high level overview of what the steps of the tracking algorithm does, and used a lot of hand-wavey statements to join up the different parts of the tracking algorithm.

We wanted to be able to incorporate segmentation masks, and BoTSORT normally just uses bounding boxes, so there was a bit of customisation to incorporate storing segmentation bitmaps, and some questions around what to do with segmentation masks if there was only a bounding box - but these were all things that I would deal with in a later version, to begin with, we just wanted to get a PoC v1 working.

I added the changes, mostly to deal with the data structures for how a `Track` object can take in a segmentation bitmap, as well as a new container for keeping track of object IDs, and mapping them to segmentation masks for the current frame, so that we could more easily know which Tracks had fresh detections.

Once I had completed these changes, handed it over to my colleague who worked on the UI and rendering integration, and I thought that would be it. We then filmed some test footage to make sure that it would work for our particular problem case, and low and behold, the re-identification of occluded subjects didn't work, meaning that it would track fine, until one person would walk in front of another, then it would create a new ID when the occluded person was recognised.

These next posts are a series on answering some questions, and sharing things that I have learned on my way by breaking apart the BoTSORT for my own reference and things that I wish that I had known. 

Here are a list of my initial questions, that I hope to explore:
- What is a SORT style algorithm, and what algorithms have come before BoTSORT?
- Association metrics (IoU, )
- What are the different parts of the BoTSORT that make it work?
	- What is a Kalman Filter, and how does it work? What are the different parts of a Kalman filter?

