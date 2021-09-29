import {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [clicks, setClicks] = useState(0);
  const [title, setTitle] = useState('Placeholder Title');

  const ref = useRef<HTMLInputElement>(null);
  const counter = useRef<number>(1);

  useEffect(() => {
    console.log('Start');
  }, []);

  useEffect(() => {
    console.log('Has Clicked!');
  }, [clicks]);

  function log() {
    console.log(ref);

    if (ref.current) ref.current.value = 'done';
  }

  function increaseCounter() {
    if (counter.current) {
      counter.current = counter.current + 1;

      console.log(counter.current);
    }
  }

  function increaseClicks() {
    setClicks((prev) => prev + 1);
  }

  const calculate = useMemo(() => {
    const result = 1234567890 * 1987654321;
    console.log(result);
  }, []);

  const increaseCount = useCallback(() => {
    console.log('useCallback');
  }, []);

  increaseCount();

  return (
    <div className="App">
      {/* Simple Input */}
      Input:
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

      <br /><br />

      {/* Set Input Value */}
      Input Ref:
      <input id="test" type="text" ref={ref} />

      <button onClick={log}>Log</button>

      <br /><br />

      {/* Will't Update Value */}
      Counter Ref ({counter.current}):
      <input id="counter" type="text" />

      <button onClick={increaseCounter}>Increase</button>

      <br /><br />

      <h2>Clicks:</h2>
      <button onClick={increaseClicks}>Increase</button> {clicks}

      <hr />

      <Title title={title} />

      <br />

      Title Name: &nbsp;
      <input id="test" type="text" onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
}

export default App;

function Title(props: { title: string }) {
  return <h1>{props.title}</h1>;
}
