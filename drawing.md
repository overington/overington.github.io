---
title: Drawing
layout: page
gallery_test:
    life_drawing:
        - img_full: "/assets/images/drawing/20160727-jordan.jpg"
          img_alt: "Life Drawing - Jordan"
    contact:
        - img_full: "/assets/images/drawing/contact/IMG_1497.JPG"
          img_alt: "Contact Imoprovisation | 2012 Samuel Overington"
        - img_full: "/assets/images/drawing/contact/IMG_1501.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1509.JPG"
        - img_full: "/assets/images/drawing/contact/OveringtonS.05.jpg"
gallery:
    - img_full: "/assets/images/gallery/fulls/01.jpg"
      img_thumb: "/assets/images/gallery/thumbs/01.jpg"
      caption: "Here is a caption"
    - img_full: "/assets/images/gallery/fulls/01.jpg"
      img_thumb: "/assets/images/gallery/thumbs/01.jpg"
      img_alt: "Hello, World"

---

<section class="wrapper style1 align-center">
    <div class="inner">
        <h1>Drawing</h1>
    </div>

{% include gallery.html
    items=page.gallery_test.contact
    style_num='1'
    img_size='big'
    %}
</section>