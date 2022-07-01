---
title: "Create a free Picture-In-Picture video feature on desktop"
description: Don't pay for this premium feature when you can make it yourself.
date: "2022-01-06"
modified_date: "2022-06-29"
image: /assets/images/posts/charlesdeluvio-h6OLeuqZ6mg-unsplash.jpg
status: published
---

Cover photo by [charlesdeluvio](https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText") on [Unsplash](https://unsplash.com/)

---

Some websites & video streaming services have a feature that allows you to watch videos in Picture-in-Picture mode, but they lock this feature behind some kind of paywall or make it a perk of having a subscription.

Some websites just don't have this feature altogether!

I find this infuriating, as this is a feature that is built into all modern web browsers and is free to use for those who know how to do it with no special effort, purchases, plugins or hack.

Here's how to do it:

## Option 1 - Enter the code via your web browsers dev tools

- Open your web browser's dev tools ( usually press F12 key / right-click & choose Inspect Element)
- Go to the Console tab
- Paste the following code:

```javascript
// find the video element (may not work on sites with multiple video elements, but works for most of the main sites)
var vid = document.querySelector("video");

// remove the attribute that might stop us from launching the video in PiP
vid.removeAttribute("disablePictureInPicture");

// finally, request the PiP
vid.requestPictureInPicture();
```

All being well, you should now have the video pop-out

## Option 2 - Create a Bookmark button to launch PiP

This code is the same as the example in Option 1, but stripped down to one line to one line so it can be executed as a URL.

To use it, simply:

- Select all of the following and drag and drop into your browser's bookmarks bar, or
- Create a new bookmark called PiP and paste the following as the bookmark's URL:
  `javascript: var vid=document.querySelector('video');vid.removeAttribute('disablePictureInPicture');vid.requestPictureInPicture();)`
- Click the bookmark to launch PiP

## How does a "Bookmarklet" work?

> A bookmark normally takes you to a new web page. A bookmarklet is a bookmark that runs javascript on the current page instead of taking you to a new page. To declare that it is a bookmarklet, the "location" it points to starts with javascript:.
>
> &mdash; [caseywatts](https://gist.github.com/caseywatts/c0cec1f89ccdb8b469b1)

The magic here, is the addition of `javascript` to the beginning of the URL. This tells the browser to perform an action on the current page, rather than taking you to a new page.

For more info on bookmarklets and getting more creative with them, see this great explanation from [@caseywatts](https://gist.github.com/caseywatts) on [Making Bookmarklets](https://gist.github.com/caseywatts/c0cec1f89ccdb8b469b1)
