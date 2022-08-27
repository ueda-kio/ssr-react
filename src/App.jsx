import { useCallback, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  return (
    <>
    <div>
      <button onClick={increment}>increment</button>
      <p>count: {count}</p>
    </div>
    </>
  );
}

export default App;