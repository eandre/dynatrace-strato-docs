# Button
Buttons allow users to trigger actions or events with a single click anywhere within the button container. Users can also trigger a button by pressing Enter or Space while the button has focus.

## Import
```
import { Button } from '@dynatrace/strato-components/buttons';
```

## Basic button

```
import { Button } from '@dynatrace/strato-components/buttons';

const Basic = () => {
  return (
    <Button
      onClick={() => {
        /* Trigger logic goes here */
      }}
    >
      Basic Button
    </Button>
  );
};
```

## Add label and icons

Buttons can consist of a label, a prefix icon, and a suffix icon. Buttons should always use a label unless the icon displayed is universally understood and accessible. If a button uses only an icon, it should be placed in the prefix or suffix slot and have an aria-label applied.

It's advised to only use the aria-label if the button has no readable content, like when it only has an icon. In that case, the aria-label needs to be used to make the item accessible.

```
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  AccountIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@dynatrace/strato-icons';

const PrefixSuffixLabel = () => {
  return (
    <Flex>
      <Button variant="emphasized">
        <Button.Prefix>
          <ChevronLeftIcon />
        </Button.Prefix>
        With Prefix
      </Button>
      <Button variant="emphasized">
        <Button.Suffix>
          <ChevronRightIcon />
        </Button.Suffix>
        With Suffix
      </Button>
      <Button variant="emphasized">Label only</Button>
      <Button variant="emphasized" aria-label="Enter your account area.">
        <Button.Prefix>
          <AccountIcon />
        </Button.Prefix>
      </Button>
    </Flex>
  );
};
```

## Change the Button variant

Use the variant prop to create the different contextual button variants. When no variant is specified, it's set to default.

```
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';

const Variants = () => {
  return (
    <Flex>
      <Button variant="accent">Accent</Button>
      <Button variant="emphasized">Emphasized</Button>
      <Button variant="default">Default</Button>
    </Flex>
  );
};
```

## Change the Button color
By default, the button has the color neutral. You should always consider the meaning behind the colors when changing this.

```
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';

const Colors = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <Flex>
        <Button color="neutral" variant="accent">
          Neutral
        </Button>
        <Button color="primary" variant="accent">
          Primary
        </Button>
        <Button color="success" variant="accent">
          Success
        </Button>
        <Button color="warning" variant="accent">
          Warning
        </Button>
        <Button color="critical" variant="accent">
          Critical
        </Button>
      </Flex>
      <Flex>
        <Button color="neutral" variant="emphasized">
          Neutral
        </Button>
        <Button color="primary" variant="emphasized">
          Primary
        </Button>
        <Button color="success" variant="emphasized">
          Success
        </Button>
        <Button color="warning" variant="emphasized">
          Warning
        </Button>
        <Button color="critical" variant="emphasized">
          Critical
        </Button>
      </Flex>
      <Flex>
        <Button color="neutral" variant="default">
          Neutral
        </Button>
        <Button color="primary" variant="default">
          Primary
        </Button>
        <Button color="success" variant="default">
          Success
        </Button>
        <Button color="warning" variant="default">
          Warning
        </Button>
        <Button color="critical" variant="default">
          Critical
        </Button>
      </Flex>
    </Flex>
  );
};
```

## Disable the Button
The disabled prop disables a button, applying the native disabled attribute to the button element.

```
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';

const Disabled = () => {
  return (
    <Flex alignItems="center" gap={8}>
      <Button disabled variant="accent">
        Accent
      </Button>
      <Button disabled variant="emphasized">
        Emphasized
      </Button>
      <Button disabled variant="default">
        Default
      </Button>
    </Flex>
  );
};
```

## Change the Button width
The button is as wide as its content by default. When the prop is set to full, it takes the width of its parent container. The width prop also supports any CSS width value.


```
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';

const Width = () => {
  return (
    <Flex flexDirection="column">
      <Button variant="emphasized" width="content">
        Width: content
      </Button>
      <Button variant="emphasized" width="full">
        Width: full
      </Button>
      <Button variant="emphasized" width="300px">
        Width: 300px
      </Button>
      <Button variant="emphasized" width="50%">
        Width: 50%
      </Button>
    </Flex>
  );
};
```

## Change the Button size
The size of the button can be changed with the size prop. It supports two different sizes, default and condensed.
```
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';

const Size = () => {
  return (
    <Flex>
      <Button variant="emphasized" size="default">
        Default
      </Button>
      <Button variant="emphasized" size="condensed">
        Condensed
      </Button>
    </Flex>
  );
};
```

## Change the text alignment within the Button
By default, the text content is centered inside a button. The alignment can be changed by setting the textAlign prop to start. This only affects the button if its width is set to any value bigger than the button content.

```
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import { ChevronDownIcon, PlusIcon } from '@dynatrace/strato-icons';

const TextAlign = () => {
  return (
    <Flex flexDirection="column">
      <Flex>
        <Button variant="emphasized" width="full" textAlign="center">
          <Button.Prefix>
            <PlusIcon />
          </Button.Prefix>
          TextAlign center
          <Button.Suffix>
            <ChevronDownIcon />
          </Button.Suffix>
        </Button>
      </Flex>
      <Flex>
        <Button variant="emphasized" width="full" textAlign="start">
          <Button.Prefix>
            <PlusIcon />
          </Button.Prefix>
          TextAlign start
          <Button.Suffix>
            <ChevronDownIcon />
          </Button.Suffix>
        </Button>
      </Flex>
    </Flex>
  );
};
```

## Set the loading state
You can set the Button state to loading by adding the prop loading. By default, it's set to false, so the button contents are shown. If true, it shows an indeterminate ProgressCircle, styled depending on the color and variant props. You also can't interact with the button, which acts as disabled while loading is true and doesn't fire any trigger events.

```
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';

const Loading = () => {
  return (
    <Flex flexDirection="column">
      <Flex>
        <Flex alignItems="center">Accent variant:</Flex>
        <Button variant="accent" loading>
          Loading
        </Button>
      </Flex>
      <Flex>
        <Flex alignItems="center">Emphasized variant:</Flex>
        <Button variant="emphasized" loading>
          Loading
        </Button>
      </Flex>
      <Flex>
        <Flex alignItems="center">Default variant:</Flex>
        <Button variant="default" loading>
          Loading
        </Button>
      </Flex>
      <Flex>
        <Flex alignItems="center">Primary color:</Flex>
        <Button color="primary" variant="emphasized" loading>
          Loading
        </Button>
      </Flex>
    </Flex>
  );
};
```
