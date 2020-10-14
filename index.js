/**
 * @file
 * Clickable block script.
 */
const defaultOptions = [
  {
    wrapper: '.clickable-block',
    link: '.clickable-block__link',
    excludedClass: '.contextual',
  }
];

export default ({
  options = defaultOptions,
  context = document,
} = {}) => {
  for (let i = 0; i < options.length; i++) {
    let excludedClass = options[i].excludedClass = 'undefined' ? '.contextual' : options[i].excludedClass;
    Array.prototype.slice.call(context.querySelectorAll(options[i].wrapper)).forEach((el) => {
      // Click.
      el.addEventListener('click', function (e) {
        goToUrl(el, e, excludedClass, options[i].link);
      });

      // Keyboard.
      el.addEventListener("keyup", function(event) {
        // Enter.
        if (event.keyCode === 13) {
          goToUrl(el, e, excludedClass, options[i].link);
        }
      });
    });
  }

  // Go to Url function.
  let goToUrl = (el, e, excludedClass, link) => {
    if (!e.target.closest(excludedClass)) {
      e.preventDefault();
      top.location.href = el.querySelector(link).getAttribute('href');
    }
  }
};
