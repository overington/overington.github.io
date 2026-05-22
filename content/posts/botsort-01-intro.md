+++
title = "BoTSORT"
description = "Introduction to why I am exploring BoTSORT"
date = 2026-04-09
slug = "botsort-intro"
draft = true
[taxonomies]
tags = ["trackers", "computer vision", "object detection"]
+++

I have have been working on a real time depth, segmentation and tracking project at work for use in our on-set services. It's a tool which enables pre-visualisation and simulcam of live actors streamed inside of an Unreal 3D scene.

The application performs a live depth estimation pass, a segmentation pass with object tracking, then renders each segmented actor into a quad in 3D space. The quad is placed on the same xy plane as where the object would be in pixel space, but the depth is offeset in the z direction by calculating the average depth of the masked area of the segmentation mask.

I have been working on the ML side of things, packaging up each of the models, and doing basic integration with Unreal Engine (interfacing with a texture for the pixel inputs, and painting the output to a texture), where my colleague has been working on the rendering and 3D geometry side of things.

Through this project, I got to do a deep dive on the  [BoTSORT](https://arxiv.org/abs/2206.14651) tracker, initially with the aim of migrating this [amazing C++ implementation by viplix](https://github.com/viplix3/BoTSORT-cpp) implementation into an Unreal Engine plugin module, so that we could use it along side our ml inference of depth and segmentation. And then a further technical deep dive to understand how the matching and association algorithm works, so we could modify it to better work with some tracking scenarios where the BOTSORT algorithm didn't work so well.

The aim of this series of posts is kind of like a technical resource breakdown of what I have learned along the way, in a format that I would have appreciated when I was first learning about it. It is also meant as a way of collecting and refining my thoughts about how it works, and what I have explored to fix the problems we found along the way

Specifically, I wanted to explore BoTSORT's logic, how it builds upon a Kalman Filters, and possibly even how Kalman filters work / how a Kalman filter is an instance of a Bayesian state prediction style of algorithm (lets see if we get that far), and what that is.


---

which uses the [BoTSORT](https://arxiv.org/abs/2206.14651) tracker, specifically the [C++ implementation](https://github.com/viplix3/BoTSORT-cpp) implementation, so that we can integrate it in an Unreal Engine application for the purposes of live segmentation and tracking. We are creating an unreal plugin to be able place real actors in a 3D scene, with the aim of being able to pre-visualise real and 3d content live, and interacting.


I chose this tracker because it looked like the state of the art method which combined both traditional computer vision methods as well as a neural network based method - to be able track and better re-identify objects that have been obscured / occluded.

Initially, I only had a high level overview of what the steps of the tracking algorithm does, and used a lot of hand-wavy statements to join up the different parts of the tracking algorithm.

We wanted to be able to incorporate segmentation masks, and BoTSORT normally just uses bounding boxes, so there was a bit of customisation to incorporate storing segmentation bitmaps, and some questions around what to do with segmentation masks if there was only a bounding box - but these were all things that I would deal with in a later version, to begin with, we just wanted to get a PoC v1 working.

I added the changes, mostly to deal with the data structures for how a `Track` object can take in a segmentation bitmap, as well as a new container for keeping track of object IDs, and mapping them to segmentation masks for the current frame, so that we could more easily know which Tracks had fresh detections.

Once I had completed these changes, handed it over to my colleague who worked on the UI and rendering integration, and I thought that would be it. We then filmed some test footage to make sure that it would work for our particular problem case, and low and behold, the re-identification of occluded subjects didn't work, meaning that it would track fine, until one person would walk in front of another, then it would create a new ID when the occluded person was recognised.

These next posts are a series on answering some questions, and sharing things that I have learned on my way by breaking apart the BoTSORT for my own reference and things that I wish that I had known. 

Here are a list of my initial questions, that I hope to explore:
- What is a SORT style algorithm, and what algorithms have come before BoTSORT?
- Association metrics (IoU, )
- What are the different parts of the BoTSORT that make it work?
	- What is a Kalman Filter, and how does it work? What are the different parts of a Kalman filter?
