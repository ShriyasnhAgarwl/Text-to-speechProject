import React from "react";

const TextToSpeechView = (props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
      <h1 className="text-3xl font-[600] mb-6">Text to Speech Conversion</h1>
      <textarea
        className="w-full max-w-lg p-2 border border-gray-300 rounded-md mb-4 text-blue-500 "
        rows="8"
        value={props.text}
        onChange={props.handleTextChange}
        placeholder="Enter text here"
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white font-[600] hover:scale-[1.2] duration-500  rounded-lg hover:bg-green-500"
        onClick={props.handleTextToSpeech}
        disabled={props.isLoading}
      >
        {props.isLoading ? "Converting..." : "Convert to Speech"}
      </button>
      {props.error && <p className="text-red-500 mt-4">{props.error}</p>}
      {props.audioUrl && (
        <div className="mt-6 bg-red w-full flex flex-col items-center ">
          <audio controls src={props.audioUrl} className="w-full max-w-lg">
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default TextToSpeechView;
