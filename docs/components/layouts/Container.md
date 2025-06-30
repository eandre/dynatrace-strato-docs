# Container

The `Container` component provides a consistent container for your content with predefined styling options.

## Import

```jsx
import { Container } from '@dynatrace/strato-components/layouts';
```

## Change the Container variant

```jsx
import { Container } from '@dynatrace/strato-components/layouts';

const VariantExample = () => {
  return (
    <>
      <Container variant="default">Default container</Container>
      <Container variant="surface">Surface container</Container>
    </>
  );
};
```

## Change the Container color

```jsx
import { Container } from '@dynatrace/strato-components/layouts';

const ColorExample = () => {
  return (
    <>
      <Container color="neutral">Neutral container</Container>
      <Container color="primary">Primary container</Container>
    </>
  );
};
```

## Polymorph the Container component

```jsx
import { Container } from '@dynatrace/strato-components/layouts';

const PolymorphExample = () => {
  return (
    <Container as="section">
      This renders as a section element
    </Container>
  );
};
```

## Add layout styles to the Container component

```jsx
import { Container } from '@dynatrace/strato-components/layouts';

const LayoutExample = () => {
  return (
    <Container padding={16} margin={8}>
      Container with padding and margin
    </Container>
  );
};
``` 