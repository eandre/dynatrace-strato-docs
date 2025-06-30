# ProgressBar

Use the `ProgressBar` component to show your users that a system operation such as downloading, uploading, or processing is progressing. The `ProgressBar` can be used to visualize determinate or indeterminate progress.

## Import

```jsx
import { ProgressBar } from '@dynatrace/strato-components/content';
```

## Indeterminate ProgressBar

If you don't provide numeric values for the `ProgressBar`, it will be indeterminate and the progress animation will loop continuously.

```jsx
import { ProgressBar } from '@dynatrace/strato-components/content';

const IndeterminateExample = () => {
  return <ProgressBar />;
};
```

## Determinate ProgressBar

Assign numeric values to show stages of progression. By default, the numeric values are percentages. If you don't want to use percentages, you'll need to set a proper `aria-valuetext` following A11y guidance. The value is clamped by the `min` and `max` values. These are 0 to 100 by default, as in this example.

```jsx
import { ProgressBar } from '@dynatrace/strato-components/content';

const DeterminateExample = () => {
  return <ProgressBar value={75} />;
};
```

## Set min and max values

You can adjust the progress animation by setting a `min` value, a `max` value, or both. This example uses 20 as the `min` value and 150 as the `max` value.

```jsx
import { ProgressBar } from '@dynatrace/strato-components/content';

const MinMaxExample = () => {
  return <ProgressBar min={20} max={150} value={100} />;
};
```

## Add more information

To display more information about the progress, use `ProgressBar` compounds. `ProgressBar.Label` can be used to describe what's happening (e.g. Downloading, Uploading, Processing). `ProgressBar.Icon` allows you to add visual icons. `ProgressBar.Value` displays the progress in numerical values.

```jsx
import { ProgressBar } from '@dynatrace/strato-components/content';
import { DownloadIcon } from '@dynatrace/strato-icons';

const MoreInfoExample = () => {
  return (
    <ProgressBar value={65}>
      <ProgressBar.Label>Downloading</ProgressBar.Label>
      <ProgressBar.Icon>
        <DownloadIcon />
      </ProgressBar.Icon>
      <ProgressBar.Value />
    </ProgressBar>
  );
};
```

## Change density

The `ProgressBar` can also be condensed. To enhance the layout, any additional information can be shown above the `ProgressBar`. If there's insufficient space to display the entire label or value text, it will be truncated automatically.

```jsx
import { ProgressBar } from '@dynatrace/strato-components/content';

const DensityExample = () => {
  return <ProgressBar density="condensed" value={50} />;
};
```

## Change color scheme

The `ProgressBar` can be rendered in different colors using the `color` prop. Color schemes: `neutral`, `primary`, `success`, `warning`, `critical`.

```jsx
import { ProgressBar } from '@dynatrace/strato-components/content';

const ColorExample = () => {
  return (
    <>
      <ProgressBar color="neutral" value={75} />
      <ProgressBar color="primary" value={75} />
      <ProgressBar color="success" value={75} />
      <ProgressBar color="warning" value={75} />
      <ProgressBar color="critical" value={75} />
    </>
  );
};
```

## Accessibility

### aria-label

Support usability by adding an `aria-label` to explain the progress that's represented. This step is particularly important if you aren't using a `ProgressBar.Label` within the `ProgressBar` compound component.

### aria-valuetext

If the `value` property of the `ProgressBar` is not a percentage (the default setting) you must add an `aria-valuetext` to explain what it conveys. Additionally, if it's unclear what meaning the value of the `ProgressBar` conveys, you can also add the `aria-valuetext`.

```jsx
import { ProgressBar } from '@dynatrace/strato-components/content';

const AccessibilityExample = () => {
  return (
    <ProgressBar
      value={3}
      min={0}
      max={10}
      aria-label="File upload progress"
      aria-valuetext="3 of 10 files uploaded"
    />
  );
};
``` 