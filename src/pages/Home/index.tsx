import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { getTranscript } from "../../services/api";
import { Container } from "./styles";

export const Home = () => {
  const [audioURL, setAudioURL] = useState<string>("");
  const [audiourlIsEmpty, setAudiourlIsEmpty] = useState<boolean>(true);
  const [textTranscripted, setTextTranscripted] = useState("");

  useEffect(() => {
    if (audioURL.trim() == "") {
      setAudiourlIsEmpty(true);
    } else {
      setAudiourlIsEmpty(false);
    }
  }, [audioURL]);

  const handleSubmit = () => {
    getTranscript(audioURL, function (x: string) {
      setTextTranscripted(x);
    });
  };

  return (
    <>
      <Header />
      <Container audiourlIsEmpty={audiourlIsEmpty}>
        <h1>SPEECH TO TEXT</h1>

        <input
          value={audioURL}
          onChange={(e) => setAudioURL(e.target.value)}
          type="text"
          placeholder="Cole aqui sua URL"
        />

        <button onClick={handleSubmit}>Enviar</button>

        <p>{textTranscripted}</p>
      </Container>
    </>
  );
};
