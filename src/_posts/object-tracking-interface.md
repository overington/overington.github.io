---
title: Digital interface interactions with physical objects
date: 2023-07-02
description: |
  Inspired from an Instagram video, a short-form idea about using computer
  vision to track physical objects and use them as an interface for a digital
  application.
tags: [ideas, computer-vision, interaction, interface, audio, app]
author: Samuel Overington
hero: true
media:
  background_img:
    - href: '/images/_site/IMG_20230729_011938-bird_in_res.jpg'
      alt: 'A bird on the water in a nature reserve at night'
      classes: ['header-text-light']
  gallery:
    - href: '/images/blog/obj_track_interface-veg-303.jpg'
      alt: 'A shopping bag'
---

## [Tennison - Introducing the "VEG-303" 🔗](https://www.instagram.com/p/CP9Z3Y3n9ZG/)

> Unfortunately, I con't figure out how to embed Instagram videos in this blog, but I have made a drawing of the idea below.

I was inspired by a video by
[Tennison](https://www.instagram.com/p/CP9Z3Y3n9ZG/) I saw on Instagram, which
showed him pretending to create music by moving knobs and sliders made out of
everyday objects - cut up vegetables on a cutting board, laid out in the shape
of a synthesizer / sequencer. He then pretended to create music and crontrol the
modulation of a moog synthesizer by moving the vegetables around.

I thought it would be cool to actually do this, and use computer vision to
detect the objects and use them as an interface for a music.

![A drawing of the idea](/images/blog/obj_track_interface-veg-303.jpg)

I find it interesting because it explores a method of having tactile feedback
for interacting with digital interfaces. If you use a heavy object, or something
that has grip, then you get the feedback on that object.

**Using CV to implement this** could mean that you don't need special equipment for
the objects (e.g. they don't need to be conductive, or have a special tag on
them), although you would need to have a camera / phone to capture process the
video feed.

The object could be anything, and you could use it to control anything.

<!--
Questions / notes:

What is it?
- cv recognises an object, and captures its position and orientation
  - what is the object?

Talk about the idea from the video, and then list out concepts that found
interesting, and how I could use them as the basis for a project.

- use computer vision to track the position and orientation of an object
- use the position and orientation of the object to control a digital
  application

 -->
