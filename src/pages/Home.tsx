import { Main } from "../layout/Main";
import FeaturedProductsList from "../components/FeaturedProductList";

export function Home() {
  return (
    <Main>
      <div className="app font-poppins">
        <section className="featured-products mt-10">
          <FeaturedProductsList />
        </section>
      </div>
    </Main>
  );
}
