# Skeleton

The `Skeleton` component renders a colored block with an animated background, indicating that something is loading.

## Import

```jsx
import { Skeleton } from '@dynatrace/strato-components/content';
```

## Basic

In its most basic version, you can use the `Skeleton` as a self-closing tag, without providing any further props. It will use up whatever space is available in the parent container.

```jsx
import { Skeleton } from '@dynatrace/strato-components/content';

const BasicExample = () => {
  return <Skeleton />;
};
```

## Setting the dimensions

To specify the dimensions of the `Skeleton`, you can provide the `width` and `height` prop.

```jsx
import { Skeleton } from '@dynatrace/strato-components/content';

const DimensionsExample = () => {
  return <Skeleton width={200} height={50} />;
};
```

## Changing the variant

The `Skeleton` can be rendered in different variants using the `variant` prop.

```jsx
import { Skeleton } from '@dynatrace/strato-components/content';

const VariantExample = () => {
  return (
    <>
      <Skeleton variant="rectangular" width={200} height={50} />
      <Skeleton variant="circular" width={50} height={50} />
      <Skeleton variant="text" width={200} />
    </>
  );
};
``` 