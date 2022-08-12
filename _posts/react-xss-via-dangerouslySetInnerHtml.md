---
title: Mitigate XSS exploits when using React's dangerouslySetInnerHTML
description: With the great power of dangerouslySetInnerHTML, comes great responsibility
posted: "2022-08-13"
image: /assets/images/posts/lautaro-andreani-xkBaqlcqeb4-unsplash.jpg
credit:
  [
    Lautaro Andreani,
    https://unsplash.com/@lautaroandreani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,
  ]
status: draft
---

**TL: DR;** Blinding dumping content into `dangerouslySetInnerHTML` is exactly that - dangerous. Make sure you are sanitising any input you pass to dangerouslySetInnerHTML unless you have explicit control of the input.

The following component serves as a simple example of mitigating the risk of an XSS attack via dangerouslySetInnerHTML:

```jsx
//https://github.com/cure53/DOMPurify
import React from "react";
import DOMPurify from "dompurify";

const sanitize = (dirty) => DOMPurify.sanitize(dirty);

const DangerousHtml = ({ innerHTML, Tag }) => {
  const clean = sanitize(innerHTML);

  if (typeof Tag === "undefined") {
    return <div dangerouslySetInnerHTML={{ __html: clean }} />;
  }
  return <Tag dangerouslySetInnerHTML={{ __html: clean }} />;
};

export default DangerousHtml;
```

By using our bespoke `DangerousHtml` component, we can dramatically reduce the risk of an XSS exploit as we're sanitising our input before it gets to the actual `dangerouslySetInnerHTML` prop

Below are some brief examples of how the exploits could take place:

## Script Tag

XSS is possible as React will not strip out the script tag which points to a malicious payload.

You can verify this be looking in the network tab of devtool for the (failed) HTTP request to `https://example.com/malicious-script-or-page`.

Using our DangerousHTML component instead, means that

### Original

```html
<p>
  Hi
  <script src="https://example.com/malicious-script-or-page"></script>
  Fiona
</p>
```

### _dangerouslySetInnerHTML_

This:

```jsx
<div
  dangerouslySetInnerHTML={{
    __html: `<p>
  Hi
  <script src="https://example.com/malicious-script-or-page"></script>
  Fiona
</p>`,
  }}
/>
```

Becomes:

```html
<div>
  <p>
    Hi
    <script src="https://example.com/malicious-script-or-page"></script>
    Fiona
  </p>
</div>
```

### Sanitized _dangerouslySetInnerHTML_

This:

```jsx
<DangerousHtml innerHTML={markup} />
```

Becomes:

```jsx
<div>
  <p>Hi Fiona</p>
</div>
```

## iFrames Tag

We really shouldn't be passing iFrames in this way.

Rather, we should pass the URL and any other "safe" attributes as a props and render it ourselves in an iFrame tag to retain control of it's rendering ability's and source, or have a dedicated iFrame component.

### Original

```html
<p>
  Hello
  <iframe src="https://example.com/malicious-script-or-page"></iframe>
  Dave
</p>
```

### _dangerouslySetInnerHTML_

This:

```jsx
<div
  dangerouslySetInnerHTML={{
    __html: `
<p>
  Hello
  <iframe src='https://example.com/malicious-script-or-page'></iframe>
  Dave
</p>
    `,
  }}
/>
```

Becomes:

```html
<div>
  <p>
    Hello
    <iframe src="https://example.com/malicious-script-or-page"></iframe>
    Dave
  </p>
</div>
```

### Sanitized _dangerouslySetInnerHTML_

This:

```jsx
<DangerousHtml innerHTML={markup} />
```

Becomes:

```html
<div>
  <p>Hello Dave</p>
</div>
```

## Attribute manipulation/poisoning

Some DOM elements have special attributes that we can abuse that we should protect ourselves against.

In this example, we can run some JS on an `<image>` tag's `onerror`.

Similar to the above example, if we want to render an image we should pass the URL as a prop and explicitly render the image with its properties from the component props.

### Original

```html
<p>
  Hola
  <img src="none.png" onerror='alert("Rainbow mode FTW!")' />
  Sharon
</p>
```

### _dangerouslySetInnerHTML_

This:

```jsx
<div
  dangerouslySetInnerHTML={{
    __html: `
<p>
  Hola
  <img
    src='none.png'
    onerror='alert("Rainbow mode FTW!")'
  />
  Sharon
</p>`,
  }}
/>
```

Becomes:

```html
<div>
  <p>
    Hola
    <img src="none.png" onerror='alert("Rainbow mode FTW!")' />
    Sharon
  </p>
</div>
```

### Sanitized _dangerouslySetInnerHTML_

This:

```jsx
<DangerousHtml innerHTML={markup} />
```

Becomes:

```jsx
<div>
  <p>
    Hola
    <img src="none.png" />
    Sharon
  </p>
</div>
```

Given the argument that we may genuinely want to execute some JS to show a fallback image, we should again not be trusting raw, unsanitized HTML to do this for us and would be better served either having a `fallbackImageURL` or `onError` prop that we can explicitly add to our image tag

```html
<img
  src="invalid_link"
  onerror="this.onerror=null; this.src='https://placeimg.com/200/300/animals'"
/>
```
