+++
title = "LIMB: Link in my bio"
date = 2024-12-07
description = "A participatory opera set on a South London bus, exploring online radicalisation, misinformation and algorithmic amplification alongside racism, migration, class and belonging. I was its creative technologist."

[extra]
container_width = "3xl"
image = "limb-header.jpg"
image_alt = "A woman sitting on a chair on a stage, looking at the chair next to her"

[extra.hero]
images = ["content/projects/linkinmybio/limb-header.jpg"]
height = "header"
tint_layers = [
  { colour = "white", amount = 0.5, method = "lighten" },
  { colour = "gray", amount = 0.5, method = "multiply" },
  { colour = "black", amount = 0.18, method = "multiply" },
  { colour = "#A82229", amount = 0.5, method = "normal" },
]
text_color = "inverse"

[extra.residency_gallery]
images = [
    "content/projects/linkinmybio/snapemaltings/IMG_20221111_112857.jpg",
    "content/projects/linkinmybio/snapemaltings/IMG_20221111_142250.jpg",
    "content/projects/linkinmybio/snapemaltings/IMG_20221112_150617.jpg",
    "content/projects/linkinmybio/snapemaltings/IMG_20221112_152835.jpg",
]
image_alts = [
    "Wide view of the Snape Maltings rehearsal room, with the company gathered around tables and chairs on stage.",
    "Performers rehearsing on a lit stage, with a pianist and equipment at the side.",
    "Performers rehearsing beneath a projection of a phone conversation.",
    "Company members seated for rehearsal, with a laptop and equipment in the foreground.",
]
+++

Link in my bio is a participatory opera set aboard a South London bus. As the passengers’ lives intersect with online feeds, group chats and personas, audience choices can send the story down different paths. I worked as the production’s creative technologist, building its live voting system and developing machine-learning experiments with the libretto and score.

<!--more-->

## The work

Across a single bus journey, the story takes us on a journey between the passengers’ everyday lives and the online worlds that shape them. It explores how misinformation and engagement-driven platforms can amplify divisive ideas, alongside racism, anti-migrant politics, misogyny and transphobia. Its stories also touch on migration, class, gentrification, identity and belonging—and on the solidarity and collective action people build in response.

At key moments, the audience is invited to choose what a character should do. The audience’s collective decision determines which of the story’s possible paths the performers follow.

## My role

My work as creative technologist combined building the interactive voting system with machine-learning research and development. I worked with the creative team during R&D sessions and artist residencies to explore how these technologies could contribute to the production.

### Snape Maltings residency

I took these photographs in the rehearsal room at Snape Maltings on 11 and 12 November 2022, during the Link in My Bio residency. They document the rehearsal and R&D process.

{% <ui.hero
    images={page.extra.residency_gallery.images}
    image_alts={page.extra.residency_gallery.image_alts}
    image_width={1600}
    image_height={1200}
    height='auto'
    slider={true}
    slider_label="Snape Maltings rehearsal R&D photos"
    class_name="project-gallery"
> %}
{% </ui.hero> %}

### Interactive audience voting

Audience members joined the show’s Wi-Fi network and scanned a QR code to open a voting website built with Next.js. At several points, the performance entered a deliberate waiting state: music played while the performers held in place, and the audience was prompted to vote on a character’s next move.

Votes were sent over WebSockets and counted live. Once voting closed, the option with the most votes determined which scene the performers played. This gave the audience a direct, collective role in steering the story.

### Machine-learning experiments

I proposed exploring overfitting as a creative way to examine repetition and amplification in digital culture, then developed machine-learning models and training scripts for the team to experiment with. We trained text-generation models on excerpts from the libretto and deliberately overfit them. The resulting outputs could reproduce source passages closely or fall into loops of repeated words and sentences.

We also experimented with musical material, using notes from the show’s score as training data to generate new note sequences. These generative-model experiments were not simulations of social-media recommendation systems; instead, they gave the team a way to make repetition and narrowing visible and audible through text and music.

## Credits

- **Co-composers:** Charlotte Marlow and Dirty Freud
- **Libretto:** Jennifer Farmer
- **Director:** Seta White
- **Set and costume design:** Simon Kenny
- **Creative technologist:** Samuel Overington
- **Interactive dramaturgy:** Tassos Stevens of Coney
- **Ensemble:** United Instruments of Lucilin
- **With, among others:** Marie-Christiane Nishimwe, Laura Bowler and Marcus Joseph

## Links

### Official

- [enoa Creation](https://www.enoa-community.com/creation/link-in-my-bio_1)
- [enoa community video LIMB work in progress](https://www.facebook.com/enoa.community/videos/link-in-my-bio-lab/853750482269920/)
- [Britten Pears Arts - R+D residency video](https://www.youtube.com/watch?v=cTdMh_gQKek)
- [linkinmybioproductions](https://www.linkinmybioproductions.com/)

### Reviews
- [Luxembourg Times review](https://www.luxtimes.lu/culture/link-in-my-bio-brings-opera-firmly-into-the-21st-century/28879831.html)
- [CLASSIQUENEWS - « Link In My Bio » est un ouvrage lyrique composé par Charlotte Marlow et Dirty Freud, sur un livret de Jennifer Farmer.](https://www.classiquenews.com/luxembourg-grand-theatre-link-in-my-bio-opera-les-7-et-8-decembre-2024-charlotte-marlow-dirty-freud/)
