---
sidebar_position: 3
---

# Basic Usage

:::danger[Early Access]

This documentation is currently in early access, information and features may change.

:::

On this page you will see a simple usage example of fvuarjs.

### Let's include our package in our project

```jsx title="usage.js"
import Fvuar from 'fvuarjs';
```

Now let's take a new example from the Fvuar class.

```jsx title="usage.js"
import Fvuar from 'fvuarjs';

// highlight-next-line
const fvuar = new Fvuar();
```

Let's end this training with a simple example.
```jsx title="usage.js"
import Fvuar from 'fvuarjs';

const fvuar = new Fvuar();

// highlight-start
fvuar.new({
    text: "Your Alert is here",
    theme: "success",
    position: "bottom-center",
    displayTime: 3,
    clickToClose: false
})
// highlight-end
```

### Let's include our cdn in our project
```html title="your-html-file.html"
<html>
    <!-- ... -->
    <body>
        <!-- ... -->
        <script src="https://cdn.jsdelivr.net/npm/fvuarjs@latest/module/fvuar.min.js"></script>
        <!-- highlight-start -->
        <script>
            const fvuar = new Fvuar();
            fvuar.new({
                text: "Your Alert is here",
                theme: "success",
                position: "bottom-center",
                displayTime: 3,
                clickToClose: false
            })
        </script>
        <!-- highlight-end -->
    </body>
</html>
```