# FocusScope

The `FocusScope` helps you manage the focus when opening any overlay. If you want to create a custom overlay, you can wrap the content of your overlay in the `FocusScope` to help you make the overlay accessible and handle focus appropriately.

## Import

```jsx
import { FocusScope } from '@dynatrace/strato-components/core';
```

## Basic usage

```jsx
import { FocusScope } from '@dynatrace/strato-components/core';

const BasicExample = () => {
  return (
    <FocusScope>
      <button>Focusable element 1</button>
      <button>Focusable element 2</button>
    </FocusScope>
  );
};
```

## Auto focus

To automatically set focus on the first focusable element within the `FocusScope`, use the `autoFocus` prop. This feature is particularly beneficial for overlays containing focusable elements, such as input fields. When the overlay opens, the input field will be focused automatically, allowing the user to start typing immediately.

```jsx
import { FocusScope } from '@dynatrace/strato-components/core';

const AutoFocusExample = () => {
  return (
    <FocusScope autoFocus>
      <input placeholder="This will be focused automatically" />
      <button>Other focusable element</button>
    </FocusScope>
  );
};
```

## Trap focus

To trap focus within the `FocusScope`, use the `trapFocus` prop. This feature is particularly useful for overlays, ensuring that keyboard users remain within the overlay until they explicitly close it. However, if there are no focusable elements within the `FocusScope`, trapping focus can hinder keyboard navigation. Therefore, ensure that focusable elements are present, or avoid using it in such cases to ensure keyboard users can still navigate.

```jsx
import { FocusScope } from '@dynatrace/strato-components/core';

const TrapFocusExample = () => {
  return (
    <FocusScope trapFocus>
      <button>Focusable element 1</button>
      <button>Focusable element 2</button>
      <button>Focusable element 3</button>
    </FocusScope>
  );
};
``` 