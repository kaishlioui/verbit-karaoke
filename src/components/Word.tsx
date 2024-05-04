interface IWordProps {
  text: string;
  time: number;
  duration: number;
  currentTime: number;
}

const Word = ({ text, time, duration, currentTime }: IWordProps) => {
  const delay = 0.15;
  const isSelected =
    time - delay <= currentTime && currentTime <= time + duration + delay;

  return (
    <span
      className="word"
      style={{ color: isSelected ? "#212121" : "#d5d3cd" }}
    >
      {text !== "." ? " " : ""}
      {text}
    </span>
  );
};

export default Word;
