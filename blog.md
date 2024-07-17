---
title: Blog
layout: post
permalink: /blog/
description: >
  A collection of blog posts.
# banner
img_src: '/assets/images/banner.jpg'
invert_scheme: true
orientation: 'left'
style_num: '5'
colour_num: '1'
---

{% capture blog_page_content %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec
euismod ultricies, nunc nunc ultricies nunc, nec nunc nunc nunc nunc nunc nunc

Here is some **bold text** and *italic text*.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec
euismod ultricies, nunc nunc ultricies nunc, nec nunc nunc nunc nunc nunc nunc
{% endcapture %}

{% capture blog_section_with_image %}
<span class='image fit'>
  <img src='/assets/images/spotlight02.jpg' alt='' />
</span>

Some more Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
{% endcapture %}



<div class='index align-left inner'>

{% include section.html content=blog_page_content %}

{% include section.html content=blog_section_with_image %}

</div>