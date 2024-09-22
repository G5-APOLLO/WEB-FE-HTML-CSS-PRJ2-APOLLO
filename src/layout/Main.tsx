import { Header } from "../components/Header";
import { Subheader } from "../components/Subheader";
import { menuItems } from "../data/Subheader.data.ts";
import Breadcrumb from "../components/Breadcrumb.tsx";
import Footer from '../components/Footer';

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
        <Footer companyName="CLICKY S.A.S." year={2022} nit="123456789-0" />
      </div>
    </>
  );
};
