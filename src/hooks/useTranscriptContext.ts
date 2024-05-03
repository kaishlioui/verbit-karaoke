import { createContext, useContext } from "react";

export type TranscriptState = {
  selectedTranscript: number;
  setSelectedTranscript: (x: number) => void;
};

export const TranscriptContext = createContext<TranscriptState>({
  selectedTranscript: 1,
  setSelectedTranscript: () => {},
});

export const useTranscriptContext = () => useContext(TranscriptContext);
