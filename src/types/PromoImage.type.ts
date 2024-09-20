export interface ProductProps {
  id: number;
  name: string;
  image: string;
  normalPrice: number;
  discountedPrice: number;
  discount: number;
  pdpLink: string;
}


export interface PromoImageProps   {
  image: string;
  imageResponsive: string;
  alt: string;
};
