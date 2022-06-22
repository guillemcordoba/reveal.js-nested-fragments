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

function getCurrentFragment() {
  const currentFragmentEls = document.querySelectorAll(".current-fragment");

  let highestIndex  =0;
  let currentFragment = undefined;

  for (const el of currentFragmentEls) {
    if (el.hasAttribute('data-fragment-index') && parseInt(el.attributes['data-fragment-index'].value) > highestIndex) {
      currentFragment = el;
      highestIndex = parseInt(el.attributes['data-fragment-index'].value);
    }
  }

  return currentFragment
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
      const currentFragment = getCurrentFragment();
      if (!currentFragment) return;

      if ( currentFragment.dataset.fragmentSkip !== undefined) {
        deck.prevFragment();
      } else {

        
          addFragmentToParents(currentFragment);
        }
    });
  },
});
