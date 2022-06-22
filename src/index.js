function getParents(elem) {
  // Set up a parent array
  var parents = [];

  // Push each parent element to the array
  for (; elem && elem !== document; elem = elem.parentNode) {
    parents.push(elem);
  }

  // Return our parent array
  return parents;
}

function hasClass(elem, clas) {
  return elem.classList.contains(clas);
}

function addFragmentToParents(elem) {
  // event.fragment = the fragment DOM element
  const parentFragments = getParents(elem).filter((e) =>
    hasClass(e, "fragment")
  );
  for (const el of parentFragments) {
    el.classList.add("current-fragment");
  }
}

export default () => ({
  id: "nested-fragments",
  init: (deck) => {
    deck.on("fragmentshown", (event) => {
      if (event.fragment.dataset.fragmentSkip !== undefined) {
        deck.nextFragment();
      }

      addFragmentToParents(event.fragment.parentNode);
    });
    deck.on("fragmenthidden", (event) => {
      if (event.fragment.dataset.fragmentSkip !== undefined) {
        deck.prevFragment();
      }

      const currentFragmentEls = document.querySelectorAll(".current-fragment");
      const currentFragment = currentFragmentEls.item(
        currentFragmentEls.length - 1
      );

      addFragmentToParents(currentFragment);
    });
  },
});
