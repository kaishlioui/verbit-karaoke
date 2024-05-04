import { useEffect, useState } from "react";
import { useTranscriptContext } from "../hooks/useTranscriptContext";
import { queryClient } from "../providers";
import { useQuery } from "@tanstack/react-query";
import { getTranscriptRandom } from "../services/api/api";
import { Loading } from "./Loading";

interface IRandomItemProps {
  name: string;
}

export const RandomItem = ({ name }: IRandomItemProps) => {
  const { setSelectedTranscript } = useTranscriptContext();
  const [allowRequest, setAllowRequest] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["transcript", "random"],
    queryFn: () => getTranscriptRandom(),
    enabled: allowRequest,
  });

  useEffect(() => {
    if (data) {
      setSelectedTranscript(data?.id);
    }
  }, [isLoading]);

  const handleRandom = () => {
    queryClient.invalidateQueries({ queryKey: ["transcript", "random"] });
    setAllowRequest(true);
    if (data) {
      setSelectedTranscript(data?.id);
    }
  };

  return (
    <li className="menu__item">
      <button className="menu__button" onClick={() => handleRandom()}>
        {name}
        {isLoading ? (
          <div
            className="loading__small
            "
          >
            <Loading />
          </div>
        ) : null}
      </button>
    </li>
  );
};
