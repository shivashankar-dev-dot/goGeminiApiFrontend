import React, { useEffect, useState } from "react";
import callGeminiViaBackend from "./utils";

const App = () => {
  const [prompt, setPrompt] = useState("");

  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const response = await callGeminiViaBackend(prompt).catch((error) => {
      console.error("Component error:", error);
    });

    setResponse(response);
  };

  return (
    <div>
      <label className="block text-sm/6 font-semibold text-gray-900">
        First name
      </label>
      <div className="mt-2.5">
        <input
          id="first-name"
          type="text"
          name="first-name"
          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>

      <div className="mt-10">
        <button
          onClick={handleSubmit}
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Let's talk
        </button>
      </div>

      <div>
        {response ? (
          <p>
            {((response as any).candidates as any[]).map((candidate) =>
              candidate.content.parts.map((part: any) => part.text)
            )}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default App;
