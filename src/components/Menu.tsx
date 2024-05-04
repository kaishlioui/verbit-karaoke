import { MenuItem } from "./MenuItem";
import { ITranscripts } from "../services/api/types";
import { useEffect, useState } from "react";
import { useTranscriptContext } from "../hooks/useTranscriptContext";
import { RandomItem } from "./RandomItem";

export const Menu = ({ data }: { data: ITranscripts[] }) => {
  const { selectedTranscript } = useTranscriptContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [selectedTranscript]);

  return (
    <>
      <button
        className={`menu__toggler ${
          isMenuOpen ? " menu__toggler--opened" : ""
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <aside
        className={`menu__container${
          isMenuOpen ? " menu__container--opened" : ""
        }`}
      >
        <ul className="menu__list">
          {data?.map(({ id, name }) => (
            <MenuItem key={id} id={id} name={name} />
          ))}
          <RandomItem key="random" name="Random" />
        </ul>
      </aside>
    </>
  );
};
