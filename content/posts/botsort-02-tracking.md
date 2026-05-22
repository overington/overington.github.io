+++
title = "BoTSORT: Tracking, the Association and matching stages"
description = "About the BoTSORT tracking algorithm"
date = 2026-04-09
slug = "botsort-tracking-algorithm"
draft = true
[taxonomies]
tags = ["trackers", "computer vision", "object detection"]
+++

## Prerequisite knowledge

- Visual embedding
- Cosine similarity
- IoU
- Kalman Filter
- Mahalanobis distance
## BoTSORT Tracking, the Association and matching stages

> **Q**: Reading and understanding reid association matching in more detail. What did I specifically get an understanding of, and how will this help me make changes to make it work.


==Fist - explain what the outcome is, then outline the steps==
BoTSORT has two stages for matching a new Detection with an existing Track. The first stage calculates a distance score - a single value for each pair - using distance metrics:
1. Matching high confidence detections
	1. IoU distance score fused with detection confidence, and thresholded by detections with high confidence $\lambda_+$
	2. Visual similarity score calculated using cosine distance, fused with a motion score calculated using the Mahalanobis distance.
	
	These two distance scores are then fused together by a weighted average to produce a single cost matrix, that is used for linear assignment, which matches Tracks with Detections based on minimum cost for all available.

2. The second association takes the remaining detections and just performs IoU distance measurement with a lower threshold $\lambda_-$ to produce another cost matrix,  and uses this to do linear assignment.

### 1. IoU and Detection Confidence:

**Inputs**:
- Predicted bounding boxes from track pool
- Detection Bounding boxes (actual results)

In the first part of the first association stage we produce a cost matrix $C_{i,j}^\text{IoU}$ is using the IoU distance (1-IoU similarity) between track $T_i$ and Detection $D_j$,

$$
	\text{Dist}^{\text{IoU}}(T_i, D_j) = 1 - \frac{ \left| T \cup D\right| }{\left| T \cap D\right|}
$$

Where the IoU distance value are calculated as follows, with proximity threshold $\alpha = 0.5$ threshold value:
$$
C_{ij}^{\text{Dist}} = \begin{cases}
	 \text{Dist}^\text{IoU}(T_i,D_j) &, C_{ij} \le \alpha \\
	 1&, \text{otherwise}
\end{cases}
$$

The cost matrix $C_{i,j}$ is then fused (or weighted) with the new detection confidence value

$$
\hat{C}_{ij}^{\text{Dist}} = 1 - (1-C_{ij}^{\text{Dist}})\cdot \text{conf}(D_j)
$$

NB $1 - C_{ij}$ is something akin to the similarity, so it this is akin to reverting IoU distance to similarity, multiplying by the Detection confidence as a weighting factor, then inverting this back into a distance value.

This value represents a single weighted distance cost value for each detection and track pair that combines the confidence of an individual detection with the percentage overlap of each pair. So high detection confidence matched with high percentage overlap will equate to value closer to zero. And likewise, low detection confidence, and/or low percentage overlap will result in a cost approaching the maximum value of 1.
### 2. Visual similarity and motion

==Need to define what the equations are like in 1. IoU and detection confidence==
In the second step of the first association stage, we construct a second cost matrix $\hat{C}^{\text{ReID}}_{ij}$ which measures the visual similarity between feature embeddings from each pair of detection $D^\text{emb}_i$ and Track $T^\text{emb}_j$ combinations, weighted with by the object confidence score

(location and motion prediction) being within on a particular track using the Kalman filter gating distance.

To create the embedding vector for detection $D_i^\text{emb}$ the visual feature encoder $\text{Enc}(D_i, I_n)$ takes in bounding box $D_i$ and frame $I_n$.

$$
	D^\text{emb}_i = \text{Enc}(D_i, I_n)
$$
We currently use either MobileNet (larger and better quality) or OSNet (smaller) as our feature encoder functions, depending on hardware constraints. MobileNet returns better quality outputs: see table below - comparing images. The upper triangle (MobileNet outputs) produces values with larger ranges.

An example cost matrix $C^\text{ReID}_{ij}$ with raw embedding distance values for two detections and three tracks:

|          | $D_0$  | $D_1$  |
| -------- | ------ | ------ |
| $T_{21}$ | 0.0283 | 0.0042 |
| $T_{22}$ | 0.0053 | 0.0442 |
| $T_{16}$ | 0.0228 | 0.0300 |

![[cosine-similarity.png]]

- The Kalman filter gating distance is used as a threshold.
- gating distance threshold values have been precalculated, based on a normal distribution, with values within 4 standard deviations of normal motion being accepted, and larger distant values being rejected.
- When fusing the motion and visual distance values to create the cost, we use the a Mahalanobis distance function to predict the distance that a detection $D_i$ is away from a track $T_j$, based on all previous track measurement values.
- The values we use to threshold this unitless value have been precomputed based on a normal distribution producing a standard score based on how many standard deviations away the detection $D_i$ is  from the mean of track $T_j$ : $z = ( x − \mu ) / \sigma$ . The distance is zero for $D_i$ at the mean of $T_j$, and grows as $D_i$ moves away from the mean along the principal component axis.
- I believe that the Mahalanobin distance threshold values do not take into account the process and measurement noises correctly, and would benifit by being weighted with the detection confidence levels as well. For a detection with high confidence, we can assume that the bounding box of the defined better.
	- Question: how is the bounding box transformed into a location? This might be error prone when considering 

- be that state or measurement noise:
	- state - including process noise
	- measurement - including measurement noise
	- The inputs of the kalman filter are the covariance and the 


The visual feature embedding distance is calculated using a normalised cosine distance function, with  

image patch embeddings. 



In the BotSORT ReID module, we construct a second cost matrix by calculating the visual embedding distance. The embedding distance is calculated by performing image encoding on an the image patch 

fuse this with motion prediction produced by a kalman filter.

- visual similarity distance calculates a cost based on image feature embeddings of Track and Detection patch embeddings. There is a thresholded value $\beta$ the max embedding distance, which is set to 0.25.

A cost matrix $C_{i,j}^\text{emb}$ is created for the object patch feature embedding distance between every track and detection pair. The feature patch embedding created is created for every new detection, and then added and averaged to the track.

There is also an appearance threshold filter, which rejects detections of distances larger than the threshold.

the likelyhood distance that the track location is within the 

### 3. Metric fusing

The two distance metrics (IoU and Embedding) are fused to create a single floating value, which is a weighted average between the two.
