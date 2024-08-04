---
title: What is Fvuarjs?
description: This is my first post on Fvuarjs.
slug: welcome
authors: ahmetcanisik
tags: [welcome]
hide_table_of_contents: false
---

Fvuarjs is an alert message library.
It contains customizable warning messages to be displayed to the user.
It is very easy to use and has a structure that everyone from 7 to 70 can understand.

## Can you give a simple example?

First of all, [Install fvuarjs in your project according to the instructions here.](/docs/installation)

Then add the following lines to your javascript file to see the warning message.

```jsx title="script.js"
import Fvuar from 'fvuarjs';

const fv = new Fvuar();

// highlight-start
fv.new({
    position: "bottom-center",
    text: "This warning message was created with fvuarjs!"
})
// highlight-end
```

here is a usage example

### Check out our [Documentation](/docs/intro) for more