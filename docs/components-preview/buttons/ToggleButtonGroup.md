# ToggleButtonGroup

The `ToggleButtonGroup` is used to group related options. The group consists of at least two `ToggleButtonGroupItems`. The `ToggleButtonGroup` supports exclusive selection only. That means that selecting one option deselects any other.

## Import

```jsx
import { ToggleButtonGroup } from '@dynatrace/strato-components-preview/buttons';
```

## Basic usage

```jsx
import { ToggleButtonGroup } from '@dynatrace/strato-components-preview/buttons';

const BasicExample = () => {
  return (
    <ToggleButtonGroup defaultValue="option1">
      <ToggleButtonGroup.Item value="option1">Option 1</ToggleButtonGroup.Item>
      <ToggleButtonGroup.Item value="option2">Option 2</ToggleButtonGroup.Item>
      <ToggleButtonGroup.Item value="option3">Option 3</ToggleButtonGroup.Item>
    </ToggleButtonGroup>
  );
};
```

## Disable options

The toggle button group can either be completely disabled or alternatively just specific options can be disabled. Both can be done by applying the `disabled` prop to the corresponding item (the group or the button itself).

```jsx
import { ToggleButtonGroup } from '@dynatrace/strato-components-preview/buttons';

const DisableExample = () => {
  return (
    <>
      {/* Completely disabled group */}
      <ToggleButtonGroup disabled defaultValue="option1">
        <ToggleButtonGroup.Item value="option1">Option 1</ToggleButtonGroup.Item>
        <ToggleButtonGroup.Item value="option2">Option 2</ToggleButtonGroup.Item>
        <ToggleButtonGroup.Item value="option3">Option 3</ToggleButtonGroup.Item>
      </ToggleButtonGroup>
      
      {/* Specific items disabled */}
      <ToggleButtonGroup defaultValue="option1">
        <ToggleButtonGroup.Item value="option1">Option 1</ToggleButtonGroup.Item>
        <ToggleButtonGroup.Item value="option2" disabled>Option 2 (Disabled)</ToggleButtonGroup.Item>
        <ToggleButtonGroup.Item value="option3">Option 3</ToggleButtonGroup.Item>
      </ToggleButtonGroup>
    </>
  );
};
```

## Control the state

To observe the value and act on its changes it's also possible to listen to changes and manually set the value accordingly.

```jsx
import { ToggleButtonGroup } from '@dynatrace/strato-components-preview/buttons';
import { useState } from 'react';

const ControlledExample = () => {
  const [selectedValue, setSelectedValue] = useState('option1');
  
  return (
    <div>
      <p>Selected value: {selectedValue}</p>
      <ToggleButtonGroup 
        value={selectedValue} 
        onValueChange={setSelectedValue}
      >
        <ToggleButtonGroup.Item value="option1">Option 1</ToggleButtonGroup.Item>
        <ToggleButtonGroup.Item value="option2">Option 2</ToggleButtonGroup.Item>
        <ToggleButtonGroup.Item value="option3">Option 3</ToggleButtonGroup.Item>
      </ToggleButtonGroup>
    </div>
  );
};
``` 