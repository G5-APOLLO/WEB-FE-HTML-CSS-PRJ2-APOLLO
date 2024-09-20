export const importImage = (imgName: string): string => new URL(`../assets/img/${imgName}`, import.meta.url).href;
