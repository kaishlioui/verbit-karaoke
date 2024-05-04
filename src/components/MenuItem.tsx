import { useTranscriptContext } from "../hooks/useTranscriptContext";
interface IMenuItemProps {
  id: number;
  name: string;
}

export const MenuItem = ({ id, name }: IMenuItemProps) => {
  const { selectedTranscript, setSelectedTranscript } = useTranscriptContext();

  const handleSelect = (id: number) => {
    setSelectedTranscript(id);
  };

  return (
    <li className="menu__item">
      <button className="menu__button" onClick={() => handleSelect(id)}>
        {name}
        {selectedTranscript === id ? (
          <div className="menu__item__active-indicator" />
        ) : null}
      </button>
    </li>
  );
};
