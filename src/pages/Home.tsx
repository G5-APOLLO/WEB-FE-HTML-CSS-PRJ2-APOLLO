import { Main } from "../layout/Main";
import FeaturedProductsList from "../components/FeaturedProductList";
import PromoImagesSection from "../components/PromoImagesSection";
import Bannersection from "../components/BannerSection";


export function Home() {
  return (
    <Main>
      <PromoImagesSection />
      <div className="app font-poppins">
        <section className="featured-products mt-10">
          <FeaturedProductsList />
        </section>
      </div>
      <Bannersection id={0} />
    </Main>
  );
}
