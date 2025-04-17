import { useState } from "react";

import "./App.css";
import { TTMFEButton } from "@cabalse/ttmfe-component-lib";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TTMFEButton
        label={`Click Me ${count}`}
        onClick={() => setCount((prev) => prev + 1)}
      />
    </>
  );
}

export default App;
