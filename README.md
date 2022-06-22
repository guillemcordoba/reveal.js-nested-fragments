# reveal.js-nested-fragments

A [Reveal.js](https://revealjs.com/) plugin to enable nested fragments, as in, fragment inside other fragments.

## Installation

```bash
npm i reveal.js-nested-fragments
```

## Usage

You can have fragments inside fragments like this:

```html
<body>
  <div class="reveal">
    <div class="slides">
      <section>
        <div data-fragment-skip class="fragment fade-in-then-out">
          <li class="fragment">
            A first point
            <ul>
              <li class="fragment fade-in-then-semi-out">A first subpoint</li>
              <li class="fragment fade-in-then-semi-out">A second subpoint</li>
            </ul>
          </li>
        </div>

        <div data-fragment-skip class="fragment fade-in-then-out">
          <li class="fragment">
            A second point
            <ul>
              <li class="fragment fade-in-then-semi-out">A third subpoint</li>
              <li class="fragment fade-in-then-semi-out">A fourth subpoint</li>
            </ul>
          </li>
        </div>

        <div data-fragment-skip class="fragment fade-in-then-out">
          <li class="fragment">
            A third point
            <ul>
              <li class="fragment fade-in-then-semi-out">A fifth subpoint</li>
              <li class="fragment fade-in-then-semi-out">A sixth subpoint</li>
            </ul>
          </li>
        </div>
      </section>
    </div>
  </div>

  <script type="module">
    import RevealNestedFragments from "reveal.js-nested-fragments";

    import Reveal from "reveal.js";

    let deck = new Reveal({
      plugins: [RevealNestedFragments],
    });
    deck.initialize();
  </script>
</body>
```

This enables grouping behaviours like `fade-in-then-out`, while having the inner fragments have other behaviours like `fade-in-then-semi-out`.

Use `data-fragment-skip` if you want to skip the fragment when going back and forth in the presentation. This is useful if you are defining fragment groups only for the fragment behaviour, but you don't want to actually pause on it during the presentation.