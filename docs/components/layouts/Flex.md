# Flex

The `Flex` component can be used to layout its children with Flexbox. The component can be customized with flexbox props.

More information about [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox).

## Import

```jsx
import { Flex } from '@dynatrace/strato-components/layouts';
```

## Basic usage

```jsx
import { Flex } from '@dynatrace/strato-components/layouts';

const BasicExample = () => {
  return (
    <Flex>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Flex>
  );
};
```

## Flex props

In the example below the `flexDirection` prop is used. The same approach can be used for other flexbox properties.

```jsx
import { Flex } from '@dynatrace/strato-components/layouts';

const FlexPropsExample = () => {
  return (
    <>
      <Flex flexDirection="row" gap={16}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
      
      <Flex flexDirection="column" gap={8}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
      
      <Flex justifyContent="space-between" alignItems="center">
        <div>Start</div>
        <div>Center</div>
        <div>End</div>
      </Flex>
    </>
  );
};
```

## Flex item

The prop `flexItem` can be set on any Flex component to mark it as a child of another Flex component. When a Flex component is set to `flexItem`, properties for flexbox items can be used on that component.

```jsx
import { Flex } from '@dynatrace/strato-components/layouts';

const FlexItemExample = () => {
  return (
    <Flex>
      <Flex flexItem flex={1}>
        Item 1 (flex: 1)
      </Flex>
      <Flex flexItem flex={2}>
        Item 2 (flex: 2)
      </Flex>
      <Flex flexItem alignSelf="flex-end">
        Item 3 (align-self: flex-end)
      </Flex>
    </Flex>
  );
};
``` 