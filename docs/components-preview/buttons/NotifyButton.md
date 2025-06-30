# NotifyButton

The `NotifyButton` allows users to turn notifications about updates of resources on or off. Common use cases include notifications about updates of saved filters, workflows, or entities. Users will be notified via e-mail.

## Import

```jsx
import { NotifyButton } from '@dynatrace/strato-components-preview/buttons';
```

## Basic usage

```jsx
import { NotifyButton } from '@dynatrace/strato-components-preview/buttons';

const BasicExample = () => {
  return <NotifyButton />;
};
```

## Change the variant

Use the `variant` prop to create the different contextual button variants. When no `variant` is specified, it's set to `default`.

```jsx
import { NotifyButton } from '@dynatrace/strato-components-preview/buttons';

const VariantExample = () => {
  return (
    <>
      <NotifyButton variant="default" />
      <NotifyButton variant="emphasized" />
      <NotifyButton variant="accent" />
    </>
  );
};
```

## Change the size

Use the `size` prop to change the size of the button. When no `size` is specified, it's set to `default`.

```jsx
import { NotifyButton } from '@dynatrace/strato-components-preview/buttons';

const SizeExample = () => {
  return (
    <>
      <NotifyButton size="small" />
      <NotifyButton size="default" />
      <NotifyButton size="large" />
    </>
  );
};
```

## Make the NotifyButton read-only

The `readOnly` prop makes the button read-only, which disables toggling the overlay. The button is still focusable.

```jsx
import { NotifyButton } from '@dynatrace/strato-components-preview/buttons';

const ReadOnlyExample = () => {
  return <NotifyButton readOnly />;
};
```

## Show label

Use the `showLabel` prop to show the "Notifications" translated text next to the `NotifyButton` icon.

```jsx
import { NotifyButton } from '@dynatrace/strato-components-preview/buttons';

const ShowLabelExample = () => {
  return <NotifyButton showLabel />;
};
```

## Customize the overlay content

Use the `NotifyButton.Content` component to customize the content of the overlay. Add the `aria-describedby` prop and `id` prop to connect the trigger to the custom content. In most cases, the heading of the overlay provides the best description for the trigger, as shown in the example.

```jsx
import { NotifyButton } from '@dynatrace/strato-components-preview/buttons';

const CustomContentExample = () => {
  return (
    <NotifyButton aria-describedby="custom-content">
      <NotifyButton.Content>
        <h3 id="custom-content">Custom Notification Settings</h3>
        <p>Configure how you want to be notified about updates.</p>
      </NotifyButton.Content>
    </NotifyButton>
  );
};
``` 