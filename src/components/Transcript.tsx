import { useQuery } from "@tanstack/react-query";
import { getTranscript } from "../services/api/api";
import Paragraph from "./Paragraph";
import { useEffect, useMemo, useRef, useState } from "react";
import { IWord } from "../services/api/types";
import { Loading } from "./Loading";

interface ITranscriptProps {
  id: number;
}

const Transcript = ({ id }: ITranscriptProps) => {
  const [currentTime, setCurrentTime] = useState(0);
  const { data, isLoading } = useQuery({
    queryKey: ["transcript", id],
    queryFn: () => getTranscript(id),
  });

  const paragraphTopRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setCurrentTime(0);
    if (paragraphTopRef.current) {
      paragraphTopRef.current.scrollIntoView();
    }
  }, [data?.audio_url, paragraphTopRef.current]);

  const onTimeUpdate = () => {
    if (videoRef.current?.currentTime) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const wordsCollection = useMemo(
    () =>
      data?.words.reduce((accumulator, current) => {
        if (!accumulator[current.paragraph_id])
          accumulator[current.paragraph_id] = [];
        accumulator[current.paragraph_id].push(current);
        return accumulator;
      }, {} as { [paragraphId: string]: IWord[] }),
    [data?.words]
  );

  if (isLoading || !wordsCollection)
    return (
      <div className="loading">
        <Loading />
      </div>
    );

  return (
    <div className="transcript__container">
      <div className="video__container">
        <video
          key={data?.audio_url}
          ref={videoRef}
          width="100%"
          height="100%"
          controls
          onTimeUpdate={onTimeUpdate}
          className="video__media"
        >
          <source src={data?.audio_url} />
          Your browser does not support the video tag.
        </video>
      </div>
      <div key={data?.audio_url} className="paragraph__container">
        <div className="paragraph__container__top" ref={paragraphTopRef} />
        {data?.paragraphs.map((item) => {
          return (
            <Paragraph
              key={item.id}
              {...item}
              words={wordsCollection[item.id]}
              currentTime={currentTime}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Transcript;
