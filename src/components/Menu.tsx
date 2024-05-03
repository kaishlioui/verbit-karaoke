import { MenuItem } from "./MenuItem";
import { ITranscripts } from "../services/api/types";

export const Menu = ({ data }: { data: ITranscripts[] }) => {
  const lengthList = data?.length;
  const random = Math.floor(Math.random() * length) + 1;

  return (
    <aside className="menu__container">
      <ul className="menu__list">
        {data?.map(({ id, name }) => (
          <MenuItem key={id} id={id} name={name} />
        ))}
        <MenuItem
          key={random}
          id={random}
          name={"Random"}
          lengthList={lengthList}
        />
      </ul>
    </aside>
  );
};
