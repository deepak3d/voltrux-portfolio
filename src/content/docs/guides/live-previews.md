---
title: Live Code Previews
description: How to create live, editable code previews in your documentation.
---
import { Preview } from '@astrojs/starlight/components';

Starlight can render live previews of your code snippets, allowing users to see the output and edit the code directly in the browser. This feature is powered by the `<Preview>` component and requires the `@astrojs/mdx` integration.

## HTML Preview

To preview a snippet of HTML, pass the code to the `<Preview>` component.

<Preview>
```html
<div class="card">
  <h2>Voltrux V-12</h2>
  <p>The peak of electric performance.</p>
  <button>Learn More</button>
</div>

<style>
  .card {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    color: #333;
  }
  .card h2 {
    margin: 0 0 0.5rem;
    font-size: 1.5rem;
    color: #000;
  }
  .card button {
    background-color: #008080;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }
</style>
```
</Preview>

## JavaScript Preview

You can also include JavaScript. The script will be executed in a sandboxed environment. Use `console.log()` to output values, which will be visible in the preview's console tab.

<Preview>
```js
function greet(name) {
  return `Hello, ${name}! Welcome to the Voltrux documentation.`;
}

const message = greet('Developer');
console.log(message);

// You can also render DOM elements
const el = document.createElement('p');
el.textContent = message;
el.style.fontFamily = 'sans-serif';
document.body.append(el);
```
</Preview>
