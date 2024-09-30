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
  id :number
  image: string;
  imageResponsive: string;
  alt: string;
};
