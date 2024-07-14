<section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
    <div class="content">
        {{ include.content | markdownify }}
    </div>
    <div class="image">
        <img src="{{ include.img_src }}" alt="{{ include.img_alt }}">
    </div>
</section>