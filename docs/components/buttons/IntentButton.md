# IntentButton
The IntentButton is a dedicated button component for sending intents. It takes care of opening the intent dialog. An IntentButton only works in the AppShell context.


## Import
```
import { IntentButton } from '@dynatrace/strato-components/buttons';
```

## Open with

```
import { IntentButton } from '@dynatrace/strato-components/buttons';
import { IntentPayload } from '@dynatrace-sdk/navigation';

const Basic = () => {
  const intentPayload: IntentPayload = {
    'dt.query': 'fetch logs',
  };

  return <IntentButton payload={intentPayload}>Open with</IntentButton>;
};
```


## Send an intent
Use the payload prop to assign an intent payload object to the button.

```
import { IntentButton } from '@dynatrace/strato-components/buttons';
import { IntentPayload } from '@dynatrace-sdk/navigation';

const Intent = () => {
  const intentPayload: IntentPayload = {
    'dt.query': 'fetch logs',
  };

  return (
    <IntentButton payload={intentPayload}>
      Custom Label for the IntentButton
    </IntentButton>
  );
};
```


## Add label
IntentButtons can consist of a label and a suffix icon. Only use the aria-label if the button has no readable content, like when it only has an icon. In that case, the aria-label needs to be used to make the item accessible.

```
import { IntentButton } from '@dynatrace/strato-components/buttons';
import { IntentPayload } from '@dynatrace-sdk/navigation';

const IconOnly = () => {
  const intentPayload: IntentPayload = {
    'dt.query': 'fetch logs',
  };

  return (
    <IntentButton aria-label="Open query with..." payload={intentPayload} />
  );
};
```

## Recommend app
Providing an existent appId and intentId allows you to bypass the "Open with" dialog and open the app directly. If you provide a non-existent appId, the app shell will open the "Open with" dialog, allowing users to select a different app.

```
import { IntentButton } from '@dynatrace/strato-components/buttons';
import { IntentPayload } from '@dynatrace-sdk/navigation';

const IntentAppIdIntentId = () => {
  const intentPayload: IntentPayload = {
    'dt.query': 'describe logs',
  };

  return (
    <IntentButton
      payload={intentPayload}
      appId="dynatrace.dashboards"
      intentId="add-query-to-dashboard"
    >
      Open with
    </IntentButton>
  );
};
```
