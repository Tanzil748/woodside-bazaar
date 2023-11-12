export interface ProductType {
  name: string;
  img: string;
  price: number;
  category: string;
  store: string;
  quantity: number;
}

// state that is passed when using useSelector to call data from cart store
export interface StateProp {
  cart: {
    productData: [];
    userInfo: {};
    orderData: {
      order: ProductType[];
    };
  };
}
