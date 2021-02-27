---
template: post
title: Deploying Metabase on Google Cloud Platform (GCP)
date: 2020-07-23T18:09:23.663Z
excerpt: >-
  I’m sure there are multiple ways to do this, but this is what I used to get
  Metabase up and running y’all with Google BigQuery as my…
thumb_img_path: >-
  images/Deploying-Metabase-on-Google-Cloud-Platform--GCP/1*H-Nnr2x75KNICuD7h3hOcw.png
---
I’m sure there are multiple ways to do this, but this is what I used to get Metabase up and running y’all with Google BigQuery as my reporting database.

#### GCloud Setup

Make sure you have gcloud setup (developer tools):

[**Installing Google Cloud SDK | Cloud SDK Documentation**  
*This page contains instructions for choosing and maintaining a Cloud SDK installation. Cloud SDK runs on Linux, macOS…*cloud.google.com](https://cloud.google.com/sdk/install "https://cloud.google.com/sdk/install")[](https://cloud.google.com/sdk/install)

and that you’ve done the login, but also that you’ve configured Docker to authenticate with whatever mechanism you’ve chosen.

    `gcloud auth login  
    gcloud auth configure-docker`

#### Deploy Metabase to Google Cloud Registry

Metabase docker images are on Dockerhub here. However, I wanted these in Google Cloud Registry for performance and reliability reasons.

[https://hub.docker.com/r/metabase/metabase/tags](https://hub.docker.com/r/metabase/metabase/tags)

Pull the docker image locally as follows:

    `docker pull metabase/metabase:latest`

Tag the docker image with the following:

*   hostname — eu.gcr.io
*   projectname — krustysfunhouse
*   Tag — metabase

    `docker tag metabase/metabase:latest eu.gcr.io/krustysfunhouse/metabase`

Deploy the Docker image to Google Cloud Registry with the following

    `docker push eu.gcr.io/krustysfunhouse/metabase:latest`

Create a Compute Engine instance, specify the GCR image (min 1GB of RAM required).

![](/images/Deploying-Metabase-on-Google-Cloud-Platform--GCP/1*H-Nnr2x75KNICuD7h3hOcw.png)

#### Console Login

Then login from gcloud via the console with the following:

    gcloud beta compute ssh --zone "europe-west2-c" "metabasereporting" --project "krustysfunhouse"

You’ll have a Container Optimized OS by default, more info on that here:

[https://cloud.google.com/container-optimized-os/docs](https://cloud.google.com/container-optimized-os/docs)

#### Setting up Metabase

Metabase runs as a Java app and starts-up on port 3000. If you want to get into installing Nginx or GCP load Balancing that’s a different story.

Add a new Firewall Rule to allow traffic to access tcp:3000 for now — example below. Then add this “name” to the machine VM instance as a network tag.

![](/images/Deploying-Metabase-on-Google-Cloud-Platform--GCP/1*jdoTEM6-XqfK94L_glpQ7w.png)

> That’s about it. Welcome to Super Metabase land.

![](/images/Deploying-Metabase-on-Google-Cloud-Platform--GCP/1*wGdsLM4k0rrem1SObG8RWA.png)

I work for HWIntegral as a CTO, architect and engineer, you can find out more here:

[**Data Strategy Help - HW Integral**  
*We have several years experience consulting in the analytics and data-space for companies. This includes teams working…*www.hwintegral.com](https://www.hwintegral.com/data-strategy-help "https://www.hwintegral.com/data-strategy-help")[](https://www.hwintegral.com/data-strategy-help)
