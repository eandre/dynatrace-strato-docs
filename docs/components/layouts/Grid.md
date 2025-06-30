# Grid

The `Grid` component can be used to layout its children with the help of CSS Grid. The component can be customized with CSS grid props.

More information about [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout).

## Import

```jsx
import { Grid } from '@dynatrace/strato-components/layouts';
```

## Basic usage

```jsx
import { Grid } from '@dynatrace/strato-components/layouts';

const BasicExample = () => {
  return (
    <Grid gridTemplateColumns="repeat(3, 1fr)" gap={16}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
      <div>Item 6</div>
    </Grid>
  );
};
```

## Grid props

In the example below the `gridTemplateColumns` prop is used. The same approach can be used for other CSS grid properties.

```jsx
import { Grid } from '@dynatrace/strato-components/layouts';

const GridPropsExample = () => {
  return (
    <>
      <Grid gridTemplateColumns="200px 1fr 100px" gap={16}>
        <div>Fixed 200px</div>
        <div>Flexible</div>
        <div>Fixed 100px</div>
      </Grid>
      
      <Grid 
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" 
        gap={16}
      >
        <div>Responsive item 1</div>
        <div>Responsive item 2</div>
        <div>Responsive item 3</div>
        <div>Responsive item 4</div>
      </Grid>
      
      <Grid 
        gridTemplateRows="auto 1fr auto" 
        gridTemplateColumns="200px 1fr"
        gap={16}
        height="400px"
      >
        <div>Header</div>
        <div>Header Right</div>
        <div>Main Content</div>
        <div>Sidebar</div>
        <div>Footer</div>
        <div>Footer Right</div>
      </Grid>
    </>
  );
};
```

## Grid item

The prop `gridItem` can be set on any `Grid` component to mark it as a child of another `Grid` component. When a `Grid` component is set to `gridItem`, properties for CSS grid items can be used on that component.

```jsx
import { Grid } from '@dynatrace/strato-components/layouts';

const GridItemExample = () => {
  return (
    <Grid gridTemplateColumns="repeat(3, 1fr)" gap={16}>
      <Grid gridItem gridColumn="1 / 3">
        Spans 2 columns
      </Grid>
      <Grid gridItem>
        Normal item
      </Grid>
      <Grid gridItem gridRow="2 / 4">
        Spans 2 rows
      </Grid>
      <Grid gridItem>
        Normal item
      </Grid>
      <Grid gridItem>
        Normal item
      </Grid>
    </Grid>
  );
};
``` 