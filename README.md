

## DOM Manipulation - Tooltip & Table of Contents Generator

See the live version of this project (if deployed).

This project was created during my learning journey with the mentor program at devmentor.pl. It demonstrates the practical use of JavaScript to dynamically manipulate the DOM without modifying the original HTML or CSS files.

## Key Functionalities

Enhances elements with the .tooltip class by dynamically generating a proper tooltip structure using dataset attributes. It supports two types of tooltips:

Text-based tooltips – display a simple text box.

Image-based tooltips – display an image inside the tooltip box.

All elements are created dynamically using JavaScript, preserving the original content while enriching the interaction experience.

Example transformation:
```
<span class="tooltip"
      data-url="https://example.com"
      data-tooltip-type="text"
      data-tooltip-content="Extra info here">
  tooltip text
</span>
```

Becomes:
```
<span class="tooltip">
  <a href="https://example.com">tooltip text</a>
  <span class="tooltip__box tooltip__box--text">Extra info here</span>
</span>
```

## Table of Contents Generator

Generates a structured table of contents (<ul>) based on a dynamic JavaScript array of objects, which includes parent-child relationships between topics.

Top-level items are detected by parentId: null.

Nested items are inserted under their respective parent elements.

The system builds a nested list structure which is appended to the .article__list element in the DOM.

Handles changing input data without needing to manually update the HTML.


&nbsp;
 
## 💡 Technologies
<img src="https://skillicons.dev/icons?i=html,css,javascript" /><br/>


&nbsp;
 
## 💿 Installation
No installation required. Just open the index.html file in your browser, and make sure the scripts inside /assets/js/introduction.js and /assets/js/list.js are correctly loaded.


&nbsp;

## 💭 Conclusions from project

      • Dynamic DOM handling – Proper use of querySelectorAll, dataset, and event delegation is crucial for manipulating existing elements.
      • Flexible structure generation – Building nested trees from flat data arrays teaches the fundamentals of tree traversal and recursion.
      • Component-based thinking – Keeping functionality modular (e.g., separating tooltip logic from list generation) improves scalability.
      • Data-driven UI – The UI responds purely to data, not hardcoded markup.

This project highlights strong fundamentals in DOM manipulation, dataset handling, and dynamic HTML structure generation — essential skills for any aspiring frontend developer.

&nbsp;

## 🙋‍♂️ Feel free to Reach Out!
If you have questions, ideas, or just want to chat about code (or the meaning of life), don’t hesitate to contact me. Open an issue, drop me a pull request, or send a message—carrier pigeon works too, but GitHub might be faster. Let’s build something awesome together! 🚀




