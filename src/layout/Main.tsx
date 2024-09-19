import { Header } from "../components/Header";
import { Subheader } from "../components/Subheader";
import { menuItems } from "../utils/data";
import Breadcrumb from "../components/breadcrumb";

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Subheader menuItems={menuItems} />
        <Breadcrumb />
        <main className="flex-grow">
          {children}
        </main>

      </div>
    </>
  );
};
