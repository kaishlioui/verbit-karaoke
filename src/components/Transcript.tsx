import { useQuery } from "@tanstack/react-query";
import { getTranscript } from "../services/api/api";
import Paragraph from "./Paragraph";
import { useMemo, useRef, useState } from "react";
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

  const videoRef = useRef<HTMLVideoElement>(null);

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

  if (isLoading)
    return (
      <div className="loading">
        <Loading />
      </div>
    );
  if (!wordsCollection)
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
        >
          <source src={data?.audio_url} />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="paragraph__container">
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
