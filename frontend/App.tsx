import { RunQueryButton } from '@dynatrace/strato-components-preview/buttons';

export default function App() {
  const handleRunQuery = () => {
    console.log('Query executed!');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Hello World - Dynatrace Strato Demo
        </h1>
        <div className="flex justify-center">
          <RunQueryButton onClick={handleRunQuery}>
            Run Query
          </RunQueryButton>
        </div>
      </div>
    </div>
  );
}
