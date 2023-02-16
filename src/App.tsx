import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Card from './Card';
import useCopyToClipboard from './UseClipboardHook';
import { GrAdd } from 'react-icons/gr';

function App() {
  const [clipboard, setClipboard] = useState<number[]>([0]);
  const [copiedValueIndex, setCopiedValueIndex] = useState(-1);
  const [value, copy] = useCopyToClipboard();

  useEffect(() => {
    if (copiedValueIndex > -1) {
    }
  }, [copiedValueIndex]);

  function addClipboard() {
    setClipboard((state) => [...state, clipboard.length]);
  }

  function onReset() {
    setClipboard([0]);
  }

  return (
    <>
      <div className='App'>
        {clipboard.map((board, idx) => (
          <Card
            key={idx}
            onClick={() => setCopiedValueIndex(idx)}
            copied={copiedValueIndex === idx}
            copy={copy}
          />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <button
          onClick={addClipboard}
          className='CopyButton'
          style={{ width: '100px'}}
        >
          Add Clipboard
        </button>
        <button
          onClick={onReset}
          className='ResetButton'
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
