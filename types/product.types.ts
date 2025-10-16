export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  brand: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
