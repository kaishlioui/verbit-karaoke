import { useState } from "react";
import "./App.scss";
import { Layout } from "./components/Layout";
import { ReactQueryProvider } from "./providers";
import Transcript from "./components/Transcript";
import { TranscriptContext } from "./hooks/useTranscriptContext";

const App = () => {
  const [selectedTranscript, setSelectedTranscript] = useState<number>(1);

  return (
    <>
      <ReactQueryProvider>
        <TranscriptContext.Provider
          value={{ selectedTranscript, setSelectedTranscript }}
        >
          <Layout>
            <Transcript id={selectedTranscript} />
          </Layout>
        </TranscriptContext.Provider>
      </ReactQueryProvider>
    </>
  );
};

export default App;
