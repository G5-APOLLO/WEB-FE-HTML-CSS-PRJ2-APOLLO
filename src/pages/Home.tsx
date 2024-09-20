import { Main } from "../layout/Main";
import FeaturedProductsList from "../components/FeaturedProductList";
import PromoImagesSection from "../components/PromoImagesSection";

export function Home() {
  return (
    <Main>
      <PromoImagesSection/>
      <div className="app font-poppins">
        <section className="featured-products mt-10">
          <FeaturedProductsList />
        </section>
      </div>
    </Main>
  );
}
