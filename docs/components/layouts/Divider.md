# Divider

The `Divider` component visually separates groups of content.

## Import

```jsx
import { Divider } from '@dynatrace/strato-components/layouts';
```

## Basic usage

```jsx
import { Divider } from '@dynatrace/strato-components/layouts';

const BasicExample = () => {
  return (
    <div>
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
    </div>
  );
};
```

## Change the orientation

A vertical `Divider` creates a toolbar-like separation of two content sections. The `orientation` prop lets you control whether the divider should be `vertical` or `horizontal`.

```jsx
import { Divider } from '@dynatrace/strato-components/layouts';
import { Flex } from '@dynatrace/strato-components/layouts';

const OrientationExample = () => {
  return (
    <Flex>
      <p>Left content</p>
      <Divider orientation="vertical" />
      <p>Right content</p>
    </Flex>
  );
};
```

## Change the variant

Use the `variant` prop to create the different contextual divider variants.

```jsx
import { Divider } from '@dynatrace/strato-components/layouts';

const VariantExample = () => {
  return (
    <>
      <Divider variant="default" />
      <Divider variant="subtle" />
      <Divider variant="emphasized" />
    </>
  );
};
```

## Change the color

Use the `color` prop to change the color of the dividing line according to your context.

```jsx
import { Divider } from '@dynatrace/strato-components/layouts';

const ColorExample = () => {
  return (
    <>
      <Divider color="neutral" />
      <Divider color="primary" />
      <Divider color="success" />
      <Divider color="warning" />
      <Divider color="critical" />
    </>
  );
};
```

## Use it without flex styles

The `flexItem` prop allows you to control whether flex styles are applied for the `Divider`. Flex styles are enabled by default, ensuring the automatic application of the right styles for usage within a flex layout.

When using the `Divider` outside of a flex layout, you can set the `flexItem` prop to `false`. In this case, you need to wrap the `Divider` in a block-level HTML element and set the desired dimension on that element.

```jsx
import { Divider } from '@dynatrace/strato-components/layouts';

const FlexItemExample = () => {
  return (
    <div style={{ height: '200px' }}>
      <Divider flexItem={false} />
    </div>
  );
};
``` 