import { MenuItemType } from "../types/MenuItem.type";

export const menuItems: MenuItemType[] = [
  {
    category: "Tecnología",
    subcategories: [
      { id: 1, name: "Computadores", url: "/plp" },
      { id: 2, name: "Televisores", url: "/plp" },
      { id: 3, name: "Audio", url: "/plp" },
      { id: 4, name: "Video", url: "/plp" },
      { id: 5, name: "Impresión", url: "/plp" },
      { id: 6, name: "Cámaras", url: "/plp" },
    ],
  },
  {
    category: "Electrodomésticos",
    subcategories: [
      { id: 7, name: "Climatización", url: "/plp" },
      { id: 8, name: "Refrigeración", url: "/plp" },
      { id: 9, name: "Lavadoras/Secadoras", url: "/plp" },
    ],
  },
  {
    category: "Celulares",
    subcategories: [
      { id: 10, name: "Celulares", url: "/plp" },
      { id: 11, name: "Tabletas", url: "/plp" },
      { id: 12, name: "Smartwatch", url: "/plp" },
    ],
  },
  {
    category: "Hogar",
    subcategories: [
      { id: 13, name: "Salas", url: "/plp" },
      { id: 14, name: "Comedor", url: "/plp" },
      { id: 15, name: "Cocina", url: "/plp" },
      { id: 16, name: "Baño", url: "/plp" },
    ],
  },
];
