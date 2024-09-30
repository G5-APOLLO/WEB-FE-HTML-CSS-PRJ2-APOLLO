import { Header } from "../components/Header";
import { Subheader } from "../components/Subheader";
import { menuItems } from "../data/Subheader.data.ts";
import Breadcrumb from "../components/Breadcrumb.tsx";
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { bannerImages } from '../data/BannerImages.data';



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
        <Banner
          image={bannerImages[0].image}
          imageResponsive={bannerImages[0].imageResponsive}
          alt={bannerImages[0].alt} />
        <Footer />
      </div>
    </>
  );
};
