import { useRef, useState } from "react";

import { TTMFEButton, TTMFETextInput } from "@cabalse/ttmfe-component-lib";
import useCount from "../store";

import "@cabalse/ttmfe-component-lib/styles.css";
import "./subscribe-form.css";
import axios from "axios";

const SubscribeForm = () => {
  const [email, setEMail] = useState("");
  const [, setCount] = useCount(0);
  const ref = useRef(null);

  const handleEMailChange = (value) => {
    setEMail(value);
  };

  const handleSubmit = async () => {
    console.log("Submitting email:", email);

    try {
      await axios.post("http://localhost:3000/subscribe", {
        email: email,
      });
    } catch (error) {
      console.error("Error subscribing:", error);
    }
    setEMail("");
    ref.current?.clear();
    setCount((prev) => prev + 1);
  };

  return (
    <div className="bg-slate-200 rounded-lg p-4">
      <div className="text-black font-bold text-2xl mb-4">Subscribe</div>
      <div className="flex flex-row">
        <div className="">
          <TTMFETextInput
            ref={ref}
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
};

export default SubscribeForm;
