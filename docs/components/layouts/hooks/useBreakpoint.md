# useBreakpoint

The `useBreakpoint` hook allows you to respond to media queries in your React components.

## Import

```jsx
import { useBreakpoint } from '@dynatrace/strato-components/layouts';
```

## Single media query

A single media query can be passed in, similar to the following: `const above500 = useBreakpoint('(min-width: 500px)');`.

The result, `above500`, is a boolean indicating whether the media query matches successfully, so whether the minimum width of the window is 500px.

```jsx
import { useBreakpoint } from '@dynatrace/strato-components/layouts';

const SingleQueryExample = () => {
  const above500 = useBreakpoint('(min-width: 500px)');
  const isLargeScreen = useBreakpoint('(min-width: 1024px)');
  const prefersDark = useBreakpoint('(prefers-color-scheme: dark)');
  
  return (
    <div>
      <p>Screen is above 500px: {above500 ? 'Yes' : 'No'}</p>
      <p>Large screen: {isLargeScreen ? 'Yes' : 'No'}</p>
      <p>Prefers dark mode: {prefersDark ? 'Yes' : 'No'}</p>
    </div>
  );
};
```

## Multiple media queries

An array of media queries can also be passed in as follows:

`const [above500, above1000] = useBreakpoint(['(min-width: 500px)', '(min-width: 1000px)']);`

The result is an array, in which the first item `above500`, is a boolean indicating whether the first media query matches successfully, so whether or not the minimum width of the window is 500px, and the second item, `above1000`, is a boolean indicating whether the second media query matches successfully, so whether the minimum width of the window is 1000px.

```jsx
import { useBreakpoint } from '@dynatrace/strato-components/layouts';

const MultipleQueriesExample = () => {
  const [above500, above1000, above1500] = useBreakpoint([
    '(min-width: 500px)',
    '(min-width: 1000px)',
    '(min-width: 1500px)'
  ]);
  
  const getScreenSize = () => {
    if (above1500) return 'Extra Large';
    if (above1000) return 'Large';
    if (above500) return 'Medium';
    return 'Small';
  };
  
  return (
    <div>
      <h3>Current screen size: {getScreenSize()}</h3>
      <ul>
        <li>Above 500px: {above500 ? '✓' : '✗'}</li>
        <li>Above 1000px: {above1000 ? '✓' : '✗'}</li>
        <li>Above 1500px: {above1500 ? '✓' : '✗'}</li>
      </ul>
    </div>
  );
};
```

## Responsive design example

Here's a practical example showing how to use `useBreakpoint` for responsive design:

```jsx
import { useBreakpoint } from '@dynatrace/strato-components/layouts';
import { Flex } from '@dynatrace/strato-components/layouts';

const ResponsiveExample = () => {
  const isMobile = useBreakpoint('(max-width: 768px)');
  const isTablet = useBreakpoint('(min-width: 769px) and (max-width: 1024px)');
  const isDesktop = useBreakpoint('(min-width: 1025px)');
  
  return (
    <Flex 
      flexDirection={isMobile ? 'column' : 'row'} 
      gap={isMobile ? 8 : 16}
    >
      <div>Content 1</div>
      <div>Content 2</div>
      {!isMobile && <div>Content 3 (hidden on mobile)</div>}
    </Flex>
  );
};
```

The media query syntax is similar to the CSS one, which can be checked [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries). 