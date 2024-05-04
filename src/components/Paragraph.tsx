import { useEffect, useRef } from "react";
import { IWord } from "../services/api/types";
import Word from "./Word";

interface IParagraphProps {
  id: string;
  time: number;
  duration: number;
  speaker_id: string;
  words: IWord[];
  currentTime: number;
}

const Paragraph = ({
  id,
  time,
  duration,
  speaker_id,
  words,
  currentTime,
}: IParagraphProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isSelected = time <= currentTime && currentTime <= time + duration;

  useEffect(() => {
    if (isSelected && ref.current) {
      ref.current.scrollIntoView({ block: "center" });
    }
  }, [isSelected, ref.current]);

  return (
    <p ref={ref} className="paragraph__item">
      {words.map((item, i) => (
        <Word
          key={`${i}${item.text}${item.time}`}
          {...item}
          currentTime={currentTime}
        />
      ))}
    </p>
  );
};

export default Paragraph;
