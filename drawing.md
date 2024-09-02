---
title: Drawing
layout: page
gallery_test:
    life_drawing:
        - img_full: "/assets/images/drawing/life/20160727-jordan.jpg"
          img_alt: "Life Drawing - Jordan"
    contact:
        - img_full: "/assets/images/drawing/contact/IMG_1489.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1497.JPG"
          img_alt: "Contact Imoprovisation | 2012 Samuel Overington"
        - img_full: "/assets/images/drawing/contact/IMG_1501.JPG"
          caption: "Contact Imoprovisation | 2012 Samuel Overington"
        - img_full: "/assets/images/drawing/contact/IMG_1509.JPG"
        - img_full: "/assets/images/drawing/contact/OveringtonS.05.jpg"
        - img_full: "/assets/images/drawing/contact/IMG_1490.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1492.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1494.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1495.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1496.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1498.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1499.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1502.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1503.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1504.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1505.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1506.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1507.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1508.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1510.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1511.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1512.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1513.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1514.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1515.JPG"
        - img_full: "/assets/images/drawing/contact/IMG_1516.JPG"
        - img_full: "/assets/images/drawing/contact/OveringtonS.04.jpg"
gallery:
    - img_full: "/assets/images/gallery/fulls/01.jpg"
      img_thumb: "/assets/images/gallery/thumbs/01.jpg"
      caption: "Here is a caption"
    - img_full: "/assets/images/gallery/fulls/01.jpg"
      img_thumb: "/assets/images/gallery/thumbs/01.jpg"
      img_alt: "Hello, World"

---
{% capture header_content %}
## Contact Improvision Drawing

In this collection, I have been using watercolour pencils to capture the essence of the dynamic dance form of Contact Improvisation. My process begins with observing the dancers’ fluid movements and the intricate ways they connect and interact. I focus on the interaction between (often) two dancers, following their points of contact on paper with my marker. Sometimes, I aim to capture the essence of their interaction through the subtleties of balance, weight-sharing, and the spontaneous nature of their movements. Other times, I focus on capturing their human form. I hope both of these aspects come through in my work.

The watercolour pencils allow me to blend vibrant hues and create soft transitions, mirroring the dancers’ seamless flow. Each stroke is an exploration of the dancers’ physical dialogue, and through my art, I hope to convey the beauty and complexity of Contact Improvisation.
{% endcapture %}

<div class="wrapper style1 align-center">

{% include section_image.html
  img_src="/assets/images/drawing/contact/IMG_1510.JPG"
  img_alt="Life Drawing - Jordan"
  content=header_content
  section_type='spotlight'
  style_num='4'
  full_screen=false
  %}


  <section>
    <div class="inner">
      <h2>Contact Improvisation Drawing</h2>
      <p>2012</p>
    </div>
    {% include gallery.html
      items=page.gallery_test.contact
      style_num='1'
      img_size='medium'
      %}
  </section>

</div>