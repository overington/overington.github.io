+++
title = "Race of Champions - Paris Olympics"
date = 2024-08-01
description = "Race of Champions was a live multi-camera matting activation for Omega at the Paris 2024 Olympic Games. The system composited real participants into virtual race scenes alongside pre-rendered athletes. I led the R&D and software from concept through deployment, including the multi-camera pipeline, start-frame recovery, and GPU processing system."

[extra]
image = "race-header-samuel-sqr.jpg"
image_alt = "Participant getting into position on starting blocks to commence running."

[extra.hero]
images = ["projects/race-of-champions-paris-olympics/race-header-samuel.jpg"]
height = "header"
tint_layers = [
  { colour = "white", amount = 0.5, method = "lighten" },
  { colour = "gray", amount = 0.5, method = "multiply" },
  { colour = "black", amount = 0.18, method = "multiply" },
  { colour = "#A82229", amount = 0.5, method = "normal" },
]
text_color = "inverse"
[extra.background_removal_gallery]
images = [
    'media/shot04-take03-fg.png',
    'media/shot04-take03-bg.png',
    'media/shot04-take03-bgremoved.png'
]
image_alts = [
    "Foreground frame, showing the participant on a track with a camera rig in the background.",
    "Background frame, showing an empty track with a camera rig in the background.",
    "Composited frame, showing the participant with the background removed.",
]
+++
Race of Champions was developed at Dimension Studio for Omega, as an audience activation for an exhibition during the Paris Olympics in Parc-de-Bercy 2024 showcasing Omega’s precision timing and sports technology throughout the history of the Olympics.

<!--more-->

Participants ran on a physical track while being filmed from four camera angles. Their footage was then composited into matching pre-rendered race scenes, creating the impression that they were running alongside an elite athlete of their choice.

As a software engineer specialising in computer vision and machine learning, I led the research and development of the multi-camera matting pipeline and owned its software from concept through unattended deployment. I built the end-to-end system for frame selection, matting, compositing, and high-throughput GPU processing under live conditions.

{{ <img.resize src={page.colocated_path ~ 'media/pavilion-parc-de-bercy-2024-07-05.png'} alt="Omega Pavilion, Parc-de-Bercy Paris Olympics 2024"/> }}

## Fly through of the exhibition on site at Parc-de-Bercy

{{ <ui.video youtube_url="https://www.youtube.com/watch?v=7Dl4uyZ4Kn8" title="The Omega Pavilion Exhibition fly-through" /> }}

## Comparison of frames: Background removal
Three frames showing Gen-locked frame shutter synchronisation, showing foreground frame which includes the participant, the background frame, and then a composited version with the participant and no background.

{% <ui.hero
    images={[page.colocated_path ~ p for p in page.extra.background_removal_gallery.images]}
    image_alts={page.extra.background_removal_gallery.image_alts}
    image_width={1600}
    image_height={1200}
    height='auto'
    slider={true}
    slider_label="Comparison of frames: Background removal"
    class_name="project-gallery"
> %}
{% </ui.hero> %}

# Views from each camera


{% <ui.media_text
    video_file={page.colocated_path ~ "media/cam4.mp4"}
    title="Cam 4"
    position="left"
> %}

**Long shot (Cam 4):** The participant enters the shot and waves to the camera while preparing.
{% </ui.media_text> %}

{% <ui.media_text
    video_file={page.colocated_path ~ "media/cam1.mp4"}
    title="Cam 1"
    position="right"
> %}

**Low shot (Cam 1):** The participant and athlete stretch, prepare, and get into their starting positions.
{% </ui.media_text> %}

{% <ui.media_text
    video_file={page.colocated_path ~ "media/cam2.mp4"}
    title="Cam 2"
    position="left"
> %}

**Mid 1 (Cam 2):** The starting gun fires, and the race begins.
{% </ui.media_text> %}

{% <ui.media_text
    video_file={page.colocated_path ~ "media/cam3.mp4"}
    title="Cam 3"
    position="right"
> %}

**Mid 2 (Cam 3):** The participant and athlete complete the race, passing through the finish line.
{% </ui.media_text> %}


## Original camera angle, vs composited shot with rendered background
<div class='grid'>
{{ <img.resize src={page.colocated_path ~ 'media/cam2-874.jpg'} alt=""/> }}
{{ <img.resize src={page.colocated_path ~ 'media/cam2-874-comp.jpg'} alt=""/> }}
</div>



# Links

- [Omega: The Omega Pavilion in Paris](https://www.omegawatches.com/stories/the-omega-pavilion-in-paris)
- [Luxuo - review of Race of Champions](https://www.luxuo.com/videos/video-featured/the-omega-pavilion-paris-2024.html)
- [Dimension Studio project page](https://dimensionstudio.co/work/omega-pavilion-paris-2024-olympics/)
