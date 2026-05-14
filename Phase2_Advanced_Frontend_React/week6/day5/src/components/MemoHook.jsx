import { useMemo, useState } from "react";

function slowFunction(num) {
  console.log("Calculating...");

  for (let i = 0; i < 1000000000; i++) {}

  return num * 2;
}

function MemoHook() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const result = useMemo(() => {
    return slowFunction(count);
  }, [count]);

  return (
    <>
      <h1>{result}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default MemoHook;