# SkeletonText

The `SkeletonText` component renders a specified number of placeholder boxes for lines of text with an animated background.

## Import

```jsx
import { SkeletonText } from '@dynatrace/strato-components/content';
```

## Basic

You can use the `SkeletonText` without specifying any props. It will render a pre-set number of lines and use up the available width in the parent container.

```jsx
import { SkeletonText } from '@dynatrace/strato-components/content';

const BasicExample = () => {
  return <SkeletonText />;
};
```

## Setting the width

The `width` prop can be used to specify the width of the `SkeletonText`.

```jsx
import { SkeletonText } from '@dynatrace/strato-components/content';

const WidthExample = () => {
  return <SkeletonText width={300} />;
};
```

## Setting the number of lines

To render a given amount of lines, you can utilize the `lines` prop.

```jsx
import { SkeletonText } from '@dynatrace/strato-components/content';

const LinesExample = () => {
  return <SkeletonText lines={5} />;
};
``` 