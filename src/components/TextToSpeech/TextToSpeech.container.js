import React, { useState } from "react";
import TextToSpeechView from "./TextToSpeech.view";

const TextToSpeechContainer = () => {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleTextToSpeech = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("/api/text-to-speech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setAudioUrl(data.audioUrl);
    } catch (error) {
      setError("Failed to convert text to speech.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TextToSpeechView
      text={text}
      audioUrl={audioUrl}
      isLoading={isLoading}
      error={error}
      handleTextChange={handleTextChange}
      handleTextToSpeech={handleTextToSpeech}
    />
  );
};

export default TextToSpeechContainer;
