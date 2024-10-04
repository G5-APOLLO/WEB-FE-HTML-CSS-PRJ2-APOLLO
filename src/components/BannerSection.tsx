import Banner from "./Banner";
import { bannerImages } from "../data/BannerImages.data";
import { BannerSectionProps } from "../types/Banner.type";
const Bannersection: React.FC<BannerSectionProps> = ({ id }) => {

    const banner = bannerImages

    return (

        <Banner
            id={banner[id].id}
            image={banner[id].image}
            imageResponsive={banner[id].imageResponsive}
            alt={banner[id].alt}
        />
    );

}
export default Bannersection;