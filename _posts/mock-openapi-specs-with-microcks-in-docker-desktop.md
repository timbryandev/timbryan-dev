---
title: Mock OpenApi Specs With Microcks In Docker Desktop
description: Microcks is a quick and easy way to an OpenAPI spec
posted: "2022-11-10"
updated: "2022-11-10"
image: https://microcks.io/images/microcks-round.png
credit: [Microcks, https://microcks.io/]
status: publish
---

## What are we trying to achieve?

Microcks allows us to take a spec file, such as an OpenAPI spec, and create a working server with local endpoints that we can mock, prototype and test against.

A great use case for this is a project I've worked on that has an API hosted in AWS. This could be expensive if we were developing features and writing tests that hit the live endpoint and rack up a huge AWS bill. Instead, we can point our dev and test code at our local instance of Microcks for a virtually identical <abbr title="Developer Experience">DevEx</abbr>

This post is a quick fly-over to getting your spec loaded in Microcks and takes a quick look at what you can expect, and why it could be useful to you on your next project. For a much deeper dive and more information, you should view <https://microcks.io/> and their [great documentation](https://microcks.io/documentation/)!

## Let's Get Started

### 1. Install Microcks with Docker Desktop

Within Docker Desktop, go to the extensions panel and click "Add Extensions" to view the extensions marketplace.

Within the marketplace, search for "microcks" and click install

![](/assets/images/posts/microcs-1-docker.png)

Then choose the Microcks plugin from the Extensions listing and click "Launch Microcks"

![](/assets/images/posts/microcs-2-docker.png)

If successful, you'll see the state change from "stopped" to "running" and you can then click the given URL to view the Microcks UI in your web browser (usually <http://localhost:8080>, but you can specify a different port if you require)

![](/assets/images/posts/microcs-3-docker.png)

### 2. Import a spec.yml

For our example, let's grab an example spec such as this one from [@lornajane](https://github.com/lornajane) which contains a demo with planets and webhooks: <https://github.com/lornajane/flask-planets-and-webhooks/blob/master/openapi.yaml>

Once you've saved your example, navigate to the Importers tab and click the "Upload" button

![](/assets/images/posts/microcs-4-import.png)

and click "Choose file" to upload our spec, followed by "Upload" to upload it

![](/assets/images/posts/microcs-5-import.png)

If successful, we should now see our API listed in the "APIs | Services" tab

![](/assets/images/posts/microcs-6-services.png)

### 3. Explore your API

In the "APIs | Services" tab, click the blue text belonging to your API. Doing so will take us to the overview page for your API

![](/assets/images/posts/microcs-7-services.png)

If we click on "View documentation" you'll be taken to a page that lists all of your API endpoints. Clicking on any of your endpoints will expand the view with relevant content. In the screenshots below, you can see that we get a human-readable and parse-able interpretation of the spec we added.

We can see key information such as the path parameters that the endpoint is expecting.

We can also see the response scheme that helps us understand and plan for the many types of responses we can trigger. For example, we can see here that a 200 response will return different data from the 400 response

![](/assets/images/posts/microcs-8-docs.png)

![](/assets/images/posts/microcs-9-docs.png)

We also can see in the above screenshot that we're given an example endpoint structure, including any URL params, and will give us some example responses based on the data in the spec.
