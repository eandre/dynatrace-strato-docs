# RunQueryButton

This button component is used for running queries. It supports four query states: idle, loading, success, and error.

## Import

```jsx
import { RunQueryButton } from '@dynatrace/strato-components-preview/buttons';
```

## Basic usage

```jsx
import { RunQueryButton } from '@dynatrace/strato-components-preview/buttons';

const BasicExample = () => {
  return (
    <RunQueryButton onClick={() => console.log('Query executed')}>
      Run Query
    </RunQueryButton>
  );
};
```

## Change button states

Use the `queryState` prop to transition between the button's states.

```jsx
import { RunQueryButton } from '@dynatrace/strato-components-preview/buttons';
import { useState } from 'react';

const StateExample = () => {
  const [queryState, setQueryState] = useState('idle');
  
  const handleRunQuery = () => {
    setQueryState('loading');
    
    // Simulate query execution
    setTimeout(() => {
      const success = Math.random() > 0.5;
      setQueryState(success ? 'success' : 'error');
      
      // Reset to idle after showing result
      setTimeout(() => setQueryState('idle'), 2000);
    }, 2000);
  };
  
  return (
    <>
      <RunQueryButton queryState="idle" onClick={handleRunQuery}>
        Idle State
      </RunQueryButton>
      
      <RunQueryButton queryState="loading">
        Loading State
      </RunQueryButton>
      
      <RunQueryButton queryState="success">
        Success State
      </RunQueryButton>
      
      <RunQueryButton queryState="error">
        Error State
      </RunQueryButton>
      
      <RunQueryButton queryState={queryState} onClick={handleRunQuery}>
        Dynamic State
      </RunQueryButton>
    </>
  );
};
``` 