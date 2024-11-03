export interface ProductsTypes {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
}

export type RatingType = {
  rate: number;
  count: number;
};
