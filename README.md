# clickable-block

## Example:

### Include js code:

```javascript
import clickableBlock from  '@skilld/clickable-block';

const options = [
  {
    wrapper: '.wrapper-example',
    link: '.link-example',
    excludedClass: '.contextual', // Only if need to use another class. Now this parameter allows to click on the contextual links.
  }
];

(({ behaviors }) => {
  behaviors.theme_ClickableBlock = {
    attach(context) {
      clickableBlock({options, context});
    },
  };
})(Drupal);
```

### Include css code:

```css
@import "@skilld/clickable-block/index.css";

.wrapper-example {
  @extend %clickable-block;
}
``` 