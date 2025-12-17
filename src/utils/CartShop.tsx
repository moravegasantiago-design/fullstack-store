import { type ProductType } from "@/App";
import type { Dispatch, SetStateAction } from "react";

type CartProps = {
  product: ProductType;
  CartShop: ProductType[];
  SetCartShop: Dispatch<SetStateAction<ProductType[]>>;
};
export const AddCart = (props: CartProps) => {
  const { product, CartShop, SetCartShop } = props;
  if (CartShop.find((p) => p.ref === product.ref)) return;

  SetCartShop([...CartShop, { ...product, amount: 1 }]);
};
