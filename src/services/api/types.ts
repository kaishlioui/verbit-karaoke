export interface ITranscript {
  id: number;
  name: string;
  audio_url: string;
  comment: string;
  paragraphs: IParagraph[];
  words: IWord[];
  speakers: ISpeaker[];
}

export interface ITranscripts {
  id: number;
  name: string;
}

export interface IParagraph {
  id: string;
  time: number;
  duration: number;
  speaker_id: string;
}

export interface ISpeaker {
  id: string;
  name: string;
}

export interface IWord {
  time: number;
  duration: number;
  text: string;
  paragraph_id: string;
}
