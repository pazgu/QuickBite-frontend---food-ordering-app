
import Header from "../components/Header";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({children}: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto flex-1 py-10">{children}</div>
    </div>
  );
};

export default Layout;