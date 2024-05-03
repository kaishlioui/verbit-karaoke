interface IWordProps {
  text: string;
  time: number;
  duration: number;
  currentTime: number;
}

const Word = ({ text, time, duration, currentTime }: IWordProps) => {
  const threshold = 0.2;
  const isSelected =
    time - threshold <= currentTime &&
    currentTime <= time + duration + threshold;

  return (
    <span className="word" style={{ opacity: isSelected ? 1 : 0.5 }}>
      {text !== "." ? " " : ""}
      {text}
    </span>
  );
};

export default Word;
