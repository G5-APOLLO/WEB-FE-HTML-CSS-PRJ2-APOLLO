import bannerImage from '../assets/img/banner.png';
import bannerImageRes from '../assets/img/banner-res.png';
import bannerPlpImage from '../assets/img/banner_plp.png';
import bannerPlpImageRes from '../assets/img/banner-plp-res.png';

export const bannerImages = [
  {
    id: 1,
    image: bannerImage, // Importa la imagen directamente
    imageResponsive: bannerImageRes, // Importa la imagen responsive
    alt: 'Banner Publicitario',
  },
  {
    id: 2,
    image: bannerPlpImage, // Importa la imagen directamente
    imageResponsive: bannerPlpImageRes, // Importa la imagen responsive
    alt: 'Banner PLPL'
  }
];
