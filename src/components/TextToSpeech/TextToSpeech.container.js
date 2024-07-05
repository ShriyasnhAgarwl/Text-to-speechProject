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
      const response = await fetch("http://localhost:5000/synthesize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Failed to convert text to speech.");
      }
      console.log(response);
      // Create a blob from the response data
      const audioData = await response.arrayBuffer(); // Use arrayBuffer() to get binary data

      // Create a blob from the response data
      const blob = new Blob([audioData], { type: "audio/mp3" });

      // Create a URL for the blob
      const audioUrl = URL.createObjectURL(blob);
      setAudioUrl(audioUrl);
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
