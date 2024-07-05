import React from "react";

const TextToSpeechView = ({
  text,
  audioUrl,
  isLoading,
  error,
  handleTextChange,
  handleTextToSpeech,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Text to Speech</h1>
      <textarea
        className="w-full max-w-lg p-2 border border-gray-300 rounded mb-4"
        rows="5"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text here"
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={handleTextToSpeech}
        disabled={isLoading}
      >
        {isLoading ? "Converting..." : "Convert to Speech"}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {audioUrl && (
        <div className="mt-6">
          <audio controls src={audioUrl} className="w-full max-w-lg">
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default TextToSpeechView;
