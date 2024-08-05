---
layout: page
title: CV
permalink: /cv/
---


{% capture banner_content %}

# Samuel Overington

------------------------------------------------------------------------

{% include social_links.html style='1' %}

I am a passionate CV and ML research engineer with experience creating static and dynamic image recognition DL models and model optimisation techniques. I am searching for opportunities to join an R&D team solving tasks and innovating in this area as well as wider contexts.

I have a strong background in physics and mathematics, and I am comfortable working with large datasets and complex models. I have experience working with cross-functional teams and have a strong track record of delivering projects on time and to a high standard.
{% endcapture %}

{% capture skills %}
__Languages__: Python, C++, C#, JavaScript, TypeScript, SQL, PHP

__ML / AI Tools__: Machine learning, deep learning, PyTorch, TensorFlow, Keras, OpenCV, linear algebra, segmentation, object detection, transfer learning, Bayesian deep learning, neural networks, computer vision, image processing

__Tools__: Git, CLI scripting, Python packaging, Jenkins, Github Actions, PyTest, Pandas, Django, Flask, Docker, LaTeX, Linux, macOS, systemd, AWS, PySpark, Hive, Jupyter Lab, DataBricks

{% endcapture %}

{% capture education %}
2017 -- 2020: **Bsc Physics** (2:1) \
*Queen Mary University of London*, London, UK

2016 -- 2017: **Access to Science Diploma** (Distinction) \
*Tower Hamlets College*, London, UK

2003 -- 2007: **Bachelor of Fine Arts (Photography)** \
*Victorian College of the Arts*, Melbourne, Australia
{% endcapture %}

{% capture experience_dimension %}
## **Dimension Studio**, London UK, Nov 2023 - Curr.
#### __Software Engineer - Machine Learning and Research__, *(Applied Technology Team)*

In my role, I am responsible for researching and implementing both novel and existing machine learning techniques for virtual production and live events. This involves developing and maintaining software specifically designed for moving-image based purposes. I collaborate closely with cross-functional teams to ensure the successful delivery of projects.


#### Live Production - Omega, *Race of Champions* (Omega Pavilion, Parc de Bercy, Paris Olympics, 2024):
- Live audience interactive experience to be captured and rendered in near real-time
- Software stack: Python, OpenCV, PyTorch, Linux, systemd
- Developed pipeline with two simultanious linux worker nodes:
  - ML segmentation/matting of Human participant from multi-camera feeds
  - Video composite of rotoscoped participant onto self selected pre-render 3d virtual athlete (meta human), with race stats overlay
  - Near real-time processing: tasks were added to a queue and delivered within 5-10 minutes of audience participation
- Athletes: Noah Lyles, Shericka Jackson, Hannah Conckcroft, Marcel Hug
- Audience: 500+ per day, for duration of Olympics and Paralympics 2024
- Featured on Omega's social media and website

{% endcapture %}

{% capture experience_expedia %}
## **Expedia**, London UK, Feb 2022 -- Nov 2023.
#### __Machine Learning Engineer II__ *(Meta Marketing Technology Team)*

Cross-functional team supporting and maintaining customer prediction models and software platform running on AWS

  - The platform is built using Airflow, Hive, Python and runs on AWS EMR instances, with Jenkins pipelines for model training and deployment, and DataBricks
  - Platform triage support for users located in many time-zones
  - Lead MLE in project migrating legacy project w/ linear process into AirFlow DAGs, enabling step tables, concurrent processing, and code quality improvements

{% endcapture %}
{% capture experience_arm %}
## **Arm**, Cambridge UK, November 2020 -- Jan 2022.
#### __Software Engineer__, *Machine Learning Group* (Graduate Software Engineer 2020 - 2021, Software Engineer 2021 - 2022)

Taking part in the graduate rotation programme exposed me to a variety of different projects and teams within the machine learning group at arm:

- __ML Research team, *Bayesian DeepLearning for CV*__: (2 months) Lead researcher, exploring and implementing Bayesian DeepLearning models for pixel level image segmentation, and optimising for Arm hardware:
  - Explore model architectural changes for performance optimisations
  - Based on DeepLabV3 architecture
  - Deep dive into Bayesian DeepLearning methods with a model implementations for pixel segmentation.
  - Model implemented using Keras and TensorFlow
- __Applied ML team, *Dynamic hand gesture recognition, and visual wake words*__ (8 months): An ML model for static and dynamic gesture recognition, aimed at low power / IOT / embedded processors
  - Lead researcher exploring SOA techniques for dynamic gesture inputs
  - Research and read papers on novel CV ML model architectures and datasets
  - Create data generator pipeline using OpenCV for large video dataset
  - Implement novel architecture aimed at low power processors
  - Report metrics for comparing model accuracy, peak memory usage, FLOPS on base model to compare on a variety of arm hardware IP, and showed changes after model quantisation and other optimisations


- __ML Tooling Team, *IPSS-ML (IP Selection Sandbox for ML applications)*__ (4 months): a middle-ware application to simulate and test ML applications on accelerated (NPU) and regular (M/A class processors) Arm IP using fast- and cycle-models.
  - Increase test coverage to all lines of code, adding niche test cases
  - Bring codebase to be completely error and warning free by implement Pylint into CI environment
  - Bug fix front end web app
  - Deliver presentation on methods used to implement Pylint into a live codebase, and Jenkins CI build process with Gerrit
{% endcapture %}

{% capture experience_internship_deimos %}
### **Deimos Space UK**, Harwell, Oxfordshire, July -- Sept 2019. (Internship)
*Computer Vision and Machine Learning research intern*

- Built object detection model using neural networks for earth observation data, to detect and differentiate between biodiversity types (Python, TensorFlow and Keras)
- Researched methods of transfer learning in neural networks, and implemented one in a project constrained by a limited labelled dataset; improving training time
- Created internal reference documentation for CVAT (Computer Vision Annotation Tool)
- Collaborated on a poster researching computer vision methods using machine learning, neural networks and transfer learning
{% endcapture %}

{% capture experience_internship_yobota %}
### **Yobota**, London, Jun -- Sep 2018. (Internship)
*Software Engineer intern*

- Developed integration API for OpenBanking using Django / DRF / OAuth 2.0
- Implemented unit tests using pytest and integrated with continuous integration tool (Jenkins)s
- Delivered team keynote on OpenBanking
- Create documentation on "Creating a test driven integration" to work on the Yobota platform
- Participated in daily stand-up and weekly sprint planning meetings
{% endcapture %}

{% capture experience_freelance %}
## *(Selected freelance)*

- June 2016 -- 2020: **Stillnessinyoga**, Remote, The Netherlands\
*Web developer / Digital content development*
  -   Lead developer for multi-lingual e-commerce WordPress platform
  -   Built and maintained website using the Genesis theme framework featuring an events calendar, e-commerce platform, content restricted membership subscriptions, and membership e-learning course and system
  -   developed a custom secure Amazon S3 media serving platform
  -   Worked along side head teachers to design and put together three teacher training manuals (Level 1, 2, & Advanced 2) -- in iBook format -- an interactive e-publishing book format

-   2016: **Ecostage Pledge**. *Web developer.* Designed and coded the website for a community of artists and designers. Features include a membership which integrating BBPress user interaction features
-   2015: **Giddy Diva**. *WordPress theme developer*. Migrated a static site to WordPress, Built out theme, integrated client testimonials.
-   2013 -- 2015: **LVSC**. *Web developer.* Several projects including VCS Assist, London For All. Designed and coded the community website for publishing a blog and news articles. Later created a business directory, for users to publicise their projects
-   2012: **London for All**. *Web developer.* Designed and coded the community news site
-   2012: **MIAGOA**. *WordPress theme developer.* Developed site from a photoshop image design template.
{% endcapture %}
<!-- Render Elements  -->

{% include section_image.html banner=true content=banner_content img_src="/assets/images/profile-samuel_overington.jpg" img_alt="" orientation='right' image_position='right' style_num='3' social_links=site.social %}

<div class="inner" style="padding-top:0;margin-top:-2rem;">
<div class="index align-left" markdown='1'>

{% include section.html header="## Skills" content=skills %}
{% include section.html header="## Education" content=education %}

<h2 class="align-center" style="display:block;">
  Experience
</h2>
{% include section.html header="# 2023 (curr)" content=experience_dimension %}
{% include section.html header="# 2022" content=experience_expedia %}
{% include section.html header="# 2020" content=experience_arm %}

<h2 class="align-center" style="display:block;">
  Internships
</h2>
{% include section.html header="### Jul – Sept 2019" content=experience_internship_deimos %}
{% include section.html header="### Jun – Sep 2018" content=experience_internship_yobota %}

{% include section.html header="" content=experience_freelance %}

</div>
</div>
