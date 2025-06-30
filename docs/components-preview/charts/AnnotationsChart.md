# AnnotationsChart

The `AnnotationsChart` is a visualization tool designed to highlight significant events or data points on a timeline or other graph types. It allows the user to annotate specific moments with labels or markers, providing additional context or insights directly within the chart. This chart can be used standalone or integrated with other chart types, such `HistogramChart` or `TimeseriesChart`, to enrich the data presentation by drawing attention to each event.

## Import

```jsx
import { AnnotationsChart } from '@dynatrace/strato-components-preview/charts';
```

## Basic usage

The `AnnotationsChart` consists of at least one track, each containing a collection of markers.

```jsx
import { AnnotationsChart } from '@dynatrace/strato-components-preview/charts';

const BasicExample = () => {
  const data = [
    {
      title: 'Deployment',
      start: new Date('2024-01-01T10:00:00'),
      color: 'primary'
    },
    {
      title: 'Alert',
      start: new Date('2024-01-01T14:00:00'),
      color: 'critical'
    }
  ];

  return (
    <AnnotationsChart>
      <AnnotationsChart.Track label="Events">
        {data.map((marker, index) => (
          <AnnotationsChart.Marker
            key={index}
            title={marker.title}
            start={marker.start}
            color={marker.color}
          />
        ))}
      </AnnotationsChart.Track>
    </AnnotationsChart>
  );
};
```

## Size

By default, the chart will use all the available container size up to the maximum height required to show all the tracks. This maximum height can be changed by providing a value in the `height` prop of the `AnnotationsChart`.

```jsx
import { AnnotationsChart } from '@dynatrace/strato-components-preview/charts';

const SizeExample = () => {
  return (
    <AnnotationsChart height={300}>
      <AnnotationsChart.Track label="Events">
        <AnnotationsChart.Marker title="Event 1" start={new Date()} />
      </AnnotationsChart.Track>
    </AnnotationsChart>
  );
};
```

## AnnotationsChart.Track

Tracks in the AnnotationsChart are horizontal bands that group related markers. Each track can have a `label`, which is displayed on the left side, and can represent a specific category of data.

Label width for tracks can be set by `labelWidth` property in AnnotationsChart component.

```jsx
import { AnnotationsChart } from '@dynatrace/strato-components-preview/charts';

const TrackExample = () => {
  return (
    <AnnotationsChart labelWidth={150}>
      <AnnotationsChart.Track label="Deployments" color="primary">
        <AnnotationsChart.Marker title="v1.0.0" start={new Date('2024-01-01')} />
        <AnnotationsChart.Marker title="v1.1.0" start={new Date('2024-01-15')} />
      </AnnotationsChart.Track>
      <AnnotationsChart.Track label="Alerts" color="critical">
        <AnnotationsChart.Marker title="High CPU" start={new Date('2024-01-03')} />
        <AnnotationsChart.Marker title="Memory Leak" start={new Date('2024-01-10')} />
      </AnnotationsChart.Track>
    </AnnotationsChart>
  );
};
```

## AnnotationsChart.Marker

Markers are the individual data points or events within a track, which can represent a single value or a range. Each marker can have a `title`, `symbol`, and `description` to provide more context.

```jsx
import { AnnotationsChart } from '@dynatrace/strato-components-preview/charts';
import { DeploymentIcon, AlertIcon } from '@dynatrace/strato-icons';

const MarkerExample = () => {
  return (
    <AnnotationsChart>
      <AnnotationsChart.Track label="Events">
        <AnnotationsChart.Marker
          title="Deployment"
          symbol={<DeploymentIcon />}
          description="Application deployment v2.1.0"
          start={new Date('2024-01-01T10:00:00')}
          color="primary"
        />
        <AnnotationsChart.Marker
          title="Alert"
          symbol={<AlertIcon />}
          description="High CPU usage detected"
          start={new Date('2024-01-01T14:00:00')}
          end={new Date('2024-01-01T16:00:00')}
          color="critical"
        />
      </AnnotationsChart.Track>
    </AnnotationsChart>
  );
};
```

## AnnotationsChart.Tooltip

It's possible to customize the tooltip by providing a custom HTML template.

```jsx
import { AnnotationsChart } from '@dynatrace/strato-components-preview/charts';

const TooltipExample = () => {
  const customTooltip = (data) => (
    <div>
      <h4>{data.marker.title}</h4>
      <p>{data.marker.description}</p>
      <small>Start: {data.marker.start.toLocaleString()}</small>
    </div>
  );

  return (
    <AnnotationsChart>
      <AnnotationsChart.Tooltip template={customTooltip} />
      <AnnotationsChart.Track label="Events">
        <AnnotationsChart.Marker
          title="Deployment"
          description="Application deployment"
          start={new Date()}
        />
      </AnnotationsChart.Track>
    </AnnotationsChart>
  );
};
```

## Chart states

### Error state

The `ErrorState` subcomponent is responsible for handling errors in a graceful manner.

```jsx
import { AnnotationsChart } from '@dynatrace/strato-components-preview/charts';

const ErrorExample = () => {
  return (
    <AnnotationsChart>
      <AnnotationsChart.ErrorState>
        Failed to load chart data. Please try again.
      </AnnotationsChart.ErrorState>
    </AnnotationsChart>
  );
};
```

### EmptyState

The `EmptyState` subcomponent serves as a fallback when there is no data available to display.

```jsx
import { AnnotationsChart } from '@dynatrace/strato-components-preview/charts';

const EmptyExample = () => {
  return (
    <AnnotationsChart>
      <AnnotationsChart.EmptyState>
        No events found for the selected time range.
      </AnnotationsChart.EmptyState>
    </AnnotationsChart>
  );
};
```

### Loading

The `AnnotationsChart` is able to show the default loading indicator by setting the `loading` prop to `true`.

```jsx
import { AnnotationsChart } from '@dynatrace/strato-components-preview/charts';

const LoadingExample = () => {
  return <AnnotationsChart loading />;
};
```

## X-axis

The `AnnotationsChart` component provides a `AnnotationsChart.XAxis` subcomponent to configure chart's X-Axis and scale.

```jsx
import { AnnotationsChart } from '@dynatrace/strato-components-preview/charts';

const XAxisExample = () => {
  return (
    <AnnotationsChart>
      <AnnotationsChart.XAxis
        min={new Date('2024-01-01')}
        max={new Date('2024-12-31')}
        scale="time"
      />
      <AnnotationsChart.Track label="Events">
        <AnnotationsChart.Marker title="Event" start={new Date('2024-06-01')} />
      </AnnotationsChart.Track>
    </AnnotationsChart>
  );
};
``` 