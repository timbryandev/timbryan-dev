---
title: Mock OpenApi Specs With Microcks In Docker Desktop
description: Microcks is a quick and easy way to an OpenAPI spec
posted: "2022-11-10"
updated: "2022-11-10"
image: https://res.cloudinary.com/dg1mbzzfx/image/upload/v1669042191/TimBryan.dev/posts/microcks-round_o2yttd.png
credit: [Microcks, https://microcks.io/]
status: published
---

## What are we trying to achieve?

Microcks allows us to take a spec file, such as an OpenAPI spec, and create a working server with local endpoints that we can mock, prototype and test against.

A great use case for this is a project I've worked on that has an API hosted in AWS. This could be expensive if we were developing features and writing tests that hit the live endpoint and rack up a huge AWS bill. Instead, we can point our dev and test code at our local instance of Microcks for a virtually identical <abbr title="Developer Experience">DevEx</abbr>

This post is a quick fly-over to getting your spec loaded in Microcks and takes a quick look at what you can expect, and why it could be useful to you on your next project. For a much deeper dive and more information, you should view <https://microcks.io/> and their [great documentation](https://microcks.io/documentation/)!

## Let's Get Started

### 1. Install Microcks with Docker Desktop

Within Docker Desktop, go to the extensions panel and click "Add Extensions" to view the extensions marketplace.

Within the marketplace, search for "microcks" and click install

![](https://res.cloudinary.com/dg1mbzzfx/image/upload/v1668098134/TimBryan.dev/microcs-1-docker_kdfpl6.png)

Then choose the Microcks plugin from the Extensions listing and click "Launch Microcks"

![](https://res.cloudinary.com/dg1mbzzfx/image/upload/v1668098134/TimBryan.dev/microcs-2-docker_anublv.png)

If successful, you'll see the state change from "stopped" to "running" and you can then click the given URL to view the Microcks UI in your web browser (usually <http://localhost:8080>, but you can specify a different port if you require)

![](https://res.cloudinary.com/dg1mbzzfx/image/upload/v1668098135/TimBryan.dev/microcs-3-docker_tumpzt.png)

### 2. Import a spec.yml

For our example, let's grab an example spec such as this one from [@lornajane](https://github.com/lornajane) which contains a demo with planets and webhooks: <https://github.com/lornajane/flask-planets-and-webhooks/blob/master/openapi.yaml>

Once you've saved your example, navigate to the Importers tab and click the "Upload" button

![](https://res.cloudinary.com/dg1mbzzfx/image/upload/v1668098134/TimBryan.dev/microcs-4-import_xturn5.png)

and click "Choose file" to upload our spec, followed by "Upload" to upload it

![](https://res.cloudinary.com/dg1mbzzfx/image/upload/v1668098136/TimBryan.dev/microcs-5-import_kbq2x6.png)

If successful, we should now see our API listed in the "APIs | Services" tab

![](https://res.cloudinary.com/dg1mbzzfx/image/upload/v1668098135/TimBryan.dev/microcs-6-services_cbgdox.png)

### 3. Explore your API

In the "APIs | Services" tab, click the blue text belonging to your API. Doing so will take us to the overview page for your API

![](https://res.cloudinary.com/dg1mbzzfx/image/upload/v1668098136/TimBryan.dev/microcs-7-services_adhe9i.png)

If we click on "View documentation" you'll be taken to a page that lists all of your API endpoints. Clicking on any of your endpoints will expand the view with relevant content. In the screenshots below, you can see that we get a human-readable and parse-able interpretation of the spec we added.

We can see key information such as the path parameters that the endpoint is expecting.

We can also see the response scheme that helps us understand and plan for the many types of responses we can trigger. For example, we can see here that a 200 response will return different data from the 400 response

![](https://res.cloudinary.com/dg1mbzzfx/image/upload/v1668098136/TimBryan.dev/microcs-8-docs_x8tfd3.png)

![](https://res.cloudinary.com/dg1mbzzfx/image/upload/v1668098136/TimBryan.dev/microcs-9-docs_jzqd2p.png)

We also can see in the above screenshot that we're given an example endpoint structure, including any URL params, and will give us some example responses based on the data in the spec.
