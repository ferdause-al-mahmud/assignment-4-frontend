
export type IBike = {
  _id: string;
  name: string;
  brand: string;
  price: number;
  image?: string;
  category: 'Mountain' | 'Road' | 'Sport' | 'Electric' | 'Superbike';
  description: string;
  quantity: number;
  inStock: boolean;
  createdAt: string;
};

