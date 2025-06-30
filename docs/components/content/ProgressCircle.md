# ProgressCircle

The `ProgressCircle` component is used to indicate the progress or completion status of a task or process.

## Import

```jsx
import { ProgressCircle } from '@dynatrace/strato-components/content';
```

## Basic ProgressCircle

If you don't provide a value to the `ProgressCircle`, it is indeterminate and keeps looping the progress animation.

```jsx
import { ProgressCircle } from '@dynatrace/strato-components/content';

const BasicExample = () => {
  return <ProgressCircle />;
};
```

## Determinate ProgressCircle

You can provide a value to animate the progress bar to a given position. By default, we assume that this numeric value always reflects a percentage. If it does not reflect a percentage value, a proper `aria-valuetext` needs to be set (see A11y). The value is clamped using the `min` and `max` value. These are by default `0` to `100`.

```jsx
import { ProgressCircle } from '@dynatrace/strato-components/content';

const DeterminateExample = () => {
  return <ProgressCircle value={75} />;
};
```

## Set min and max value

You can adjust the progress animation by setting a min value, max value, or both. This example uses the same value as in the above example, except that the min and max value are set differently.

```jsx
import { ProgressCircle } from '@dynatrace/strato-components/content';

const MinMaxExample = () => {
  return <ProgressCircle min={20} max={150} value={100} />;
};
```

## Add more information

To display more information about the progress, you can render any JSX inside the `ProgressCircle`.

```jsx
import { ProgressCircle } from '@dynatrace/strato-components/content';

const MoreInfoExample = () => {
  return (
    <ProgressCircle value={65}>
      <div>65%</div>
    </ProgressCircle>
  );
};
```

## Change the size

The `ProgressCircle` is also available in a smaller version.

```jsx
import { ProgressCircle } from '@dynatrace/strato-components/content';

const SizeExample = () => {
  return (
    <>
      <ProgressCircle size="default" value={75} />
      <ProgressCircle size="small" value={75} />
    </>
  );
};
```

## Change the color scheme

The `ProgressCircle` can be rendered in different colors. You can change the color scheme using the `color` prop.

```jsx
import { ProgressCircle } from '@dynatrace/strato-components/content';

const ColorExample = () => {
  return (
    <>
      <ProgressCircle color="neutral" value={75} />
      <ProgressCircle color="primary" value={75} />
      <ProgressCircle color="success" value={75} />
      <ProgressCircle color="warning" value={75} />
      <ProgressCircle color="critical" value={75} />
    </>
  );
};
```

## Accessibility

### aria-label

If there is no string set as `children` inside the `ProgressCircle` you should add an aria-label to explain what the progress represents.

### aria-valuetext

If the `value` property of the `ProgressCircle` does not reflect a percentage you need to provide more meaning for the value of the `ProgressCircle`. In that case, you should always add an `aria-valuetext`. Additionally, if it is unclear what meaning the value of the `ProgressCircle` conveys, you can also add the `aria-valuetext`.

```jsx
import { ProgressCircle } from '@dynatrace/strato-components/content';

const AccessibilityExample = () => {
  return (
    <ProgressCircle
      value={3}
      min={0}
      max={10}
      aria-label="File upload progress"
      aria-valuetext="3 of 10 files uploaded"
    />
  );
};
``` 