export interface MenuItemType {
  category: string;
  subcategories: { id: number; name: string; url: string }[];
}