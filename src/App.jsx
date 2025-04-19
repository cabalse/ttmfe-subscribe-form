import { useState } from "react";

import { TTMFEButton, TTMFETextInput } from "@cabalse/ttmfe-component-lib";
import "@cabalse/ttmfe-component-lib/styles.css";

function App() {
  const [email, setMail] = useState("");

  const handleEMailChange = (value) => {
    setMail(value);
  };

  const handleSubmit = () => {
    console.log("Submit Email", email);
  };

  return (
    <div className="bg-slate-200 rounded-lg p-4">
      <div className="text-black font-bold text-2xl mb-4">Subscribe</div>
      <div className="flex flex-row">
        <div className="">
          <TTMFETextInput
            placeholder="Enter your email"
            onChange={handleEMailChange}
          />
        </div>
        <div className="ml-2">
          <TTMFEButton label={`Submit Email`} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default App;
