interface ICaricatureItem {
  id: number;
  photo: string;
  name: string;
  quantity: number;
  price: number;
}

interface IProduct {
  id: string;
  name: string;
  price: number;
}

interface ICartItem {
  product: IProduct;
  quantity: number;
}

interface ICartState {
  caricature: ICaricatureItem;
  items: ICartItem[];
}

export type { ICartItem, ICartState, IProduct, ICaricatureItem };
