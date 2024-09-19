import { MenuItemType } from "../types/MenuItem.type";
const url = "/plp"
export const menuItems: MenuItemType[] = [
  {
    category: "Tecnología",
    subcategories: [
      { id: 1, name: "Computadores", url },
      { id: 2, name: "Televisores", url },
      { id: 3, name: "Audio", url },
      { id: 4, name: "Video", url },
      { id: 5, name: "Impresión", url },
      { id: 6, name: "Cámaras", url },
    ],
  },
  {
    category: "Electrodomésticos",
    subcategories: [
      { id: 7, name: "Climatización", url },
      { id: 8, name: "Refrigeración", url },
      { id: 9, name: "Lavadoras/Secadoras", url },
    ],
  },
  {
    category: "Celulares",
    subcategories: [
      { id: 10, name: "Celulares", url },
      { id: 11, name: "Tabletas", url },
      { id: 12, name: "Smartwatch", url },
    ],
  },
  {
    category: "Hogar",
    subcategories: [
      { id: 13, name: "Salas", url },
      { id: 14, name: "Comedor", url },
      { id: 15, name: "Cocina", url },
      { id: 16, name: "Baño", url },
    ],
  },
];
