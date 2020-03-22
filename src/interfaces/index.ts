import { Materials } from '@/enums/materials';
import { Tags } from '@/enums/tags';

export interface Product {
  name: string;
  image: string;
  url: string;
  material?: Materials;
  tags?: Tags[];
}

interface Price {
  price: number;
  date: Date;
}

export interface ProductFull extends Product {
  inStock: number;
  prices: Price[];
  visits: Visit[];
}

interface Visit {
  ip: string;
  date: Date;
}

export interface Shop {
  name: string;
  route: string;
  logo: string;
  address: string;
  coordinates: [number,number];
  url?: string;
  visits: Visit[];
  products: ProductFull[];
}

