import { usePromoImages } from "../hooks/usePromoImages";
import { BannerProps } from "../types/Banner.type";

import Banner from "./Banner";
import ErrorComponent from "./ErrorComponent";
import Spinner from "./Spinner";

const Bannersection: React.FC = () => {
    const { data, error, isLoading } = usePromoImages();

    if (isLoading) return <Spinner />;
    if (error) return <ErrorComponent message="Failed to load banner." />;

    const banner = data.filter((banner: BannerProps) => banner.id == 3);
    return (
        <section className="promo-images flex flex-col gap-5 mb-10 px-0">

            <Banner
                id={banner.id}
                image={banner.image}
                imageResponsive={banner.imageResponsive}
                alt={banner.alt}
            />

        </section>
    );

}
export default Bannersection;