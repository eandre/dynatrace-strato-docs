# CategoricalBarChart

The `CategoricalBarChart` component is designed to visualize categorical data using horizontal or vertical bars. It's ideal for comparing values across different categories and supports various customization options including grouping, stacking, and color schemes.

## Import

```jsx
import { CategoricalBarChart } from '@dynatrace/strato-components-preview/charts';
```

## Basic usage

```jsx
import { CategoricalBarChart } from '@dynatrace/strato-components-preview/charts';

const BasicExample = () => {
  const data = [
    { category: 'Category A', value: 30 },
    { category: 'Category B', value: 45 },
    { category: 'Category C', value: 25 },
    { category: 'Category D', value: 60 }
  ];

  return (
    <CategoricalBarChart data={data}>
      <CategoricalBarChart.Series
        accessor="value"
        color="primary"
      />
    </CategoricalBarChart>
  );
};
```

## Size

By default, the chart will use all the available container size. You can control the dimensions using the `width` and `height` props.

```jsx
import { CategoricalBarChart } from '@dynatrace/strato-components-preview/charts';

const SizeExample = () => {
  const data = [
    { category: 'A', value: 30 },
    { category: 'B', value: 45 },
    { category: 'C', value: 25 }
  ];

  return (
    <CategoricalBarChart data={data} width={600} height={400}>
      <CategoricalBarChart.Series accessor="value" />
    </CategoricalBarChart>
  );
};
```

## Change the layout

The chart can be displayed in either horizontal or vertical orientation using the `layout` prop.

```jsx
import { CategoricalBarChart } from '@dynatrace/strato-components-preview/charts';

const LayoutExample = () => {
  const data = [
    { category: 'Product A', value: 30 },
    { category: 'Product B', value: 45 },
    { category: 'Product C', value: 25 }
  ];

  return (
    <>
      <CategoricalBarChart data={data} layout="vertical">
        <CategoricalBarChart.Series accessor="value" />
      </CategoricalBarChart>
      
      <CategoricalBarChart data={data} layout="horizontal">
        <CategoricalBarChart.Series accessor="value" />
      </CategoricalBarChart>
    </>
  );
};
```

## Change the group mode

The chart supports different grouping modes for multiple series: `grouped` and `stacked`.

```jsx
import { CategoricalBarChart } from '@dynatrace/strato-components-preview/charts';

const GroupModeExample = () => {
  const data = [
    { category: 'Q1', sales: 30, marketing: 20 },
    { category: 'Q2', sales: 45, marketing: 25 },
    { category: 'Q3', sales: 35, marketing: 30 },
    { category: 'Q4', sales: 50, marketing: 35 }
  ];

  return (
    <>
      {/* Grouped bars */}
      <CategoricalBarChart data={data} groupMode="grouped">
        <CategoricalBarChart.Series accessor="sales" color="primary" />
        <CategoricalBarChart.Series accessor="marketing" color="secondary" />
      </CategoricalBarChart>
      
      {/* Stacked bars */}
      <CategoricalBarChart data={data} groupMode="stacked">
        <CategoricalBarChart.Series accessor="sales" color="primary" />
        <CategoricalBarChart.Series accessor="marketing" color="secondary" />
      </CategoricalBarChart>
    </>
  );
};
```

## Change the chart colors

The chart supports various color schemes and custom colors for individual series.

```jsx
import { CategoricalBarChart } from '@dynatrace/strato-components-preview/charts';

const ColorsExample = () => {
  const data = [
    { category: 'Success', value: 80 },
    { category: 'Warning', value: 15 },
    { category: 'Error', value: 5 }
  ];

  return (
    <CategoricalBarChart data={data}>
      <CategoricalBarChart.Series 
        accessor="value" 
        colors={['success', 'warning', 'critical']}
      />
    </CategoricalBarChart>
  );
};
```

## Tooltip customization

Customize the tooltip content and appearance.

```jsx
import { CategoricalBarChart } from '@dynatrace/strato-components-preview/charts';

const TooltipExample = () => {
  const data = [
    { category: 'Product A', value: 30, details: 'Best seller' },
    { category: 'Product B', value: 45, details: 'New launch' }
  ];

  const customTooltip = (data) => (
    <div>
      <strong>{data.category}</strong>
      <p>Value: {data.value}</p>
      <small>{data.details}</small>
    </div>
  );

  return (
    <CategoricalBarChart data={data}>
      <CategoricalBarChart.Tooltip template={customTooltip} />
      <CategoricalBarChart.Series accessor="value" />
    </CategoricalBarChart>
  );
};
```

## Chart states

### Error state

Handle error states gracefully with the `ErrorState` component.

```jsx
import { CategoricalBarChart } from '@dynatrace/strato-components-preview/charts';

const ErrorExample = () => {
  return (
    <CategoricalBarChart data={[]}>
      <CategoricalBarChart.ErrorState>
        Failed to load chart data. Please try again.
      </CategoricalBarChart.ErrorState>
    </CategoricalBarChart>
  );
};
```

### EmptyState

Display an empty state when no data is available.

```jsx
import { CategoricalBarChart } from '@dynatrace/strato-components-preview/charts';

const EmptyExample = () => {
  return (
    <CategoricalBarChart data={[]}>
      <CategoricalBarChart.EmptyState>
        No data available for the selected period.
      </CategoricalBarChart.EmptyState>
    </CategoricalBarChart>
  );
};
```

### Loading

Show a loading indicator while data is being fetched.

```jsx
import { CategoricalBarChart } from '@dynatrace/strato-components-preview/charts';

const LoadingExample = () => {
  return <CategoricalBarChart data={[]} loading />;
};
``` 