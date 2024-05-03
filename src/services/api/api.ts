import axios from "axios";
import { ITranscript, ITranscripts } from "./types";
import { ENDPOINTS, VITE_API_URL } from "../../constants";

const api = axios.create({ baseURL: VITE_API_URL });

export const getTranscripts = async (): Promise<ITranscripts[]> =>
  (await api.get(`${ENDPOINTS.TRANSCRIPTS}`)).data;

export const getTranscript = async (id: number): Promise<ITranscript> =>
  (await api.get(`${ENDPOINTS.TRANSCRIPTS}/${id}`)).data;

export const getTranscriptRandom = async (): Promise<ITranscript> =>
  (await api.get(`${ENDPOINTS.TRANSCRIPTS}/random`)).data;

export default api;
