type ImageEntity = {
  alt: string;
  src: string;
};
export type ProductsStructure = {
  galleries: ImageEntity[];
  lists: {
    images: ImageEntity[];
    duration: string;
    title: string;
    organizedBy: string;
    description: string;
    prices: {
      initial: string;
      discount: string;
    };
    href: string;
  }[];
};
export type DataStructure = {
  galleries: ProductsStructure['galleries'];
  lists: ProductsStructure['lists'];
  success: boolean;
  code: number;
  message: string;
};
