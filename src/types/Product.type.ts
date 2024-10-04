interface ProductSpecification {
  feature: string;
  value: string;
}

export interface ProductProps {
  id: number;
  optionId: number;
  image: string;
  name: string;
  rating: number;
  description: string;
  normalPrice: number; // Puede ser number o string si los precios a veces son representados como string
  discountedPrice: number;
  specifications: ProductSpecification[];
  discount?: number; // El campo "discount" es opcional
}
