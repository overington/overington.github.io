---
layout: post
title: "Paper Review- Masked Autoencoders Are Scalable Vision Learners"
slug: paper-review-MAE
date: 2024-08-05 13:30:00 +0100
categories: paper-review
invert_scheme: true
section_type: "spotlight"
style_num: 1
colour_num: 1
featured_img: '/assets/images/blog/mae-architecture.png'
---

Review of paper 


<!--more-->

- Authors: Kaiming He,† Xinlei Chen Saining Xie Yanghao Li Piotr Dollár Ross Girshick from Facebook AI Research (FAIR).
- Paper link: https://arxiv.org/abs/2111.06377


<!-- read through notes -->
# Introduction

- Deep learning models increasingly need more and more data to train and generalise well.
- Novel training methods for NLP models have used self-supervision techniques like autoregressive language modeling in GPT and masked **auto-encoder** in BERT to overcome this, where part of the sentence is masked out, and learn to predict the removed content.
- point out **Denoising autoencoders** initial research into applying these techniques to computer vision tasks.
- what makes autoencoders different between vision and lanugage models?
    - model architectures for CV models. CNNs haven't had a straight forward method of encoding indicators such as "mask" tokens, or positional embeddings (however we can with ViTs)
        - Wasn't this also kind of the idea that David Petite suggested that I could look into?
        - Would it be benificial if a convolution NN had the ability to have this ability - a semantic convolution.
        - What could this look like?:
            - adding some extra pixel values to the end of the convolution, where the value is a normalised mapping to indicator.
            - If the semantic infomation would be useful to be encoded at a specific location, the value could be applied as a vector value over the top of the pixel values, or as another channel layer - so you could have something like a gradual encoding. without throwing everything away - It could be a gradual encoding from RGB pixel space into semantic channel space, where the method could use something like convolution, but also incorporates attention?
        - what indicators other than `mask` token and `positional` embedding have been / could be used?
            - location based semantic mappings. or local semantic attention.
    - language is highly semantic and information dense.
    - propose a method to overcome this is to mask a high proportion

Some questions that I have about indicators

- Would it be befificial if 


