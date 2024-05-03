import { Menu } from "./Menu";
import { useQuery } from "@tanstack/react-query";
import { getTranscripts } from "../services/api/api";
import { Loading } from "./Loading";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["transcripts"],
    queryFn: getTranscripts,
  });
  if (isLoading || data == undefined)
    return (
      <div className="loading">
        <Loading />
      </div>
    );

  return (
    <div className="layout">
      <Menu data={data} />
      <main className="main">{children}</main>
    </div>
  );
};
