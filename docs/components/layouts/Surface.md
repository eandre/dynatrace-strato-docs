# Surface

The Surface component is used to structure content on a page.

## Import

```jsx
import { Surface } from '@dynatrace/strato-components/layouts';
```

## Basic usage

The Surface component offers different visual styles depending on the elevation level. By default, the elevation is set to `flat`.

```jsx
import { Surface } from '@dynatrace/strato-components/layouts';

const BasicExample = () => {
  return (
    <>
      <Surface elevation="flat">
        Flat elevation surface
      </Surface>
      
      <Surface elevation="raised">
        Raised elevation surface
      </Surface>
      
      <Surface elevation="overlay">
        Overlay elevation surface
      </Surface>
    </>
  );
};
```

## Use the selection style

The selection style can be applied with different `color`s, which is set to `neutral` by default. You should always consider the meaning behind the colors when changing this. The `color` also defines the color of the focus style that is applied when a Surface is interactive and is focused.

> **Note:** The selected border and the box-shadow grow outside of the component's size. When it is inside a container that hides the overflow, it cuts off the border. You will need to prevent this with padding or other CSS properties.

```jsx
import { Surface } from '@dynatrace/strato-components/layouts';

const SelectionExample = () => {
  return (
    <>
      <Surface selected color="neutral">
        Selected neutral surface
      </Surface>
      
      <Surface selected color="primary">
        Selected primary surface
      </Surface>
      
      <Surface selected color="success">
        Selected success surface
      </Surface>
      
      <Surface selected color="warning">
        Selected warning surface
      </Surface>
      
      <Surface selected color="critical">
        Selected critical surface
      </Surface>
    </>
  );
};
```

## Make the Surface interactive

In some cases, the surface itself shall be interactive. Most of the time, polymorphing it into a button or link should be the best way. One caveat is not to nest other interactive elements inside an already interactive surface since this leads to a11y implications.

However, the surface is not automatically considered interactive when a `tabIndex` of 0 is set, in this case the focus styles are applied but no other interactive styling.

```jsx
import { Surface } from '@dynatrace/strato-components/layouts';

const InteractiveExample = () => {
  return (
    <>
      <Surface as="button" onClick={() => alert('Surface clicked!')}>
        Clickable surface (button)
      </Surface>
      
      <Surface as="a" href="#example">
        Clickable surface (link)
      </Surface>
      
      <Surface tabIndex={0}>
        Focusable surface (with tabIndex)
      </Surface>
    </>
  );
};
```

## Polymorph the Surface component

By default, the Surface component is rendered as a standard `div` element. For layouting purposes, the component can be polymorphed to any other component. This can be used, for example, to create a Flex layout inside a Surface component. You can also polymorph the Surface into an interactive element, such as a button or link if you want users to interact with the Surface.

```jsx
import { Surface } from '@dynatrace/strato-components/layouts';
import { Flex } from '@dynatrace/strato-components/layouts';

const PolymorphExample = () => {
  return (
    <>
      <Surface as={Flex} flexDirection="column" gap={16}>
        <div>Item 1</div>
        <div>Item 2</div>
      </Surface>
      
      <Surface as="section">
        This renders as a section element
      </Surface>
      
      <Surface as="article">
        This renders as an article element
      </Surface>
    </>
  );
};
```

## Add layout styles to the Surface component

The Surface component has a default padding of 24px. This can be changed by setting any padding prop on the container. Similarly, the container also accepts any CSS margin and layout props, such as width or height.

```jsx
import { Surface } from '@dynatrace/strato-components/layouts';

const LayoutExample = () => {
  return (
    <>
      <Surface padding={16}>
        Surface with 16px padding
      </Surface>
      
      <Surface padding={0}>
        Surface with no padding
      </Surface>
      
      <Surface margin={16} width="300px" height="200px">
        Surface with margin, width and height
      </Surface>
      
      <Surface paddingTop={8} paddingBottom={32}>
        Surface with custom padding
      </Surface>
    </>
  );
};
``` 