import { useTranscriptContext } from "../hooks/useTranscriptContext";

interface IMenuItemProps {
  id: number;
  name: string;
  lengthList?: number;
}

export const MenuItem = ({ id, name }: IMenuItemProps) => {
  const { setSelectedTranscript } = useTranscriptContext();

  const random = Math.floor(Math.random() * 3) + 1;
  const handleSelect = (id: number) => {
    if (name === "Random") {
      setSelectedTranscript(random);
    } else {
      setSelectedTranscript(id);
    }
  };

  return (
    <li className="menu__item">
      <button className="menu__button" onClick={() => handleSelect(id)}>
        {name}
      </button>
    </li>
  );
};
