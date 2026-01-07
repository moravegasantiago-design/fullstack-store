import {
  useEffect,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { type ProductType } from "@/App";

type CardSliderProps = {
  CardHeaderCart: ReactNode;
  CardItemsCart: ReactNode;
  CardFooterCart: ReactNode;
  CartEvent: boolean;
};
const CartSlider = (props: CardSliderProps) => {
  const { CardHeaderCart, CardFooterCart, CardItemsCart, CartEvent } = props;
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl${
        CartEvent ? "transform translate-x-0" : "transform translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
        {CardHeaderCart}
      </div>
      <div
        className="flex-1 overflow-y-auto p-6 space-y-4"
        style={{ height: "calc(100vh - 240px)" }}
      >
        {CardItemsCart}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-200 space-y-4">
        {CardFooterCart}
      </div>
    </div>
  );
};
type HeaderCart = {
  SetCartEvent: Dispatch<SetStateAction<boolean>>;
};
export const CardHeaderCart = (props: HeaderCart) => {
  const { SetCartEvent } = props;
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900">Carrito</h2>
      <button
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        onClick={() => SetCartEvent(false)}
      >
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </>
  );
};
type CartItems = {
  CartShop: ProductType[];
  SetCartShop: Dispatch<SetStateAction<ProductType[]>>;
};
export const CardItemsCart = (props: CartItems) => {
  const { CartShop, SetCartShop } = props;
  const amountSistem = (props: {
    array: ProductType[];
    obj: ProductType;
    operator: number;
  }) => {
    const { array, obj, operator } = props;
    return array.map((p) => {
      if (p.id !== obj.id) return p;
      return {
        ...p,
        amount: p.amount ? p.amount + operator : 1,
      };
    });
  };
  const NotProduct = (
    <div className="col-span-full flex flex-col items-center justify-center py-6 px-4">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <svg
          className="w-10 h-10 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Tu carrito está vacío
      </h3>
      <p className="text-gray-500 text-center max-w-sm mb-4">
        Agrega productos para comenzar tu compra
      </p>
      <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md">
        Explorar productos
      </button>
    </div>
  );
  const product = (obj: ProductType) => (
    <div
      className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
      key={obj.id}
    >
      <img
        src={obj.image}
        alt={obj.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-1">
          {obj.name}
        </h3>
        <p className="text-xs text-gray-500 mb-2">{obj.category}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200">
            <button
              className="px-2 py-1 hover:bg-gray-50 text-gray-600"
              onClick={() =>
                SetCartShop((listShop) => {
                  if (obj.amount !== 1) {
                    return amountSistem({
                      array: listShop,
                      obj: obj,
                      operator: -1,
                    });
                  }
                  return listShop;
                })
              }
            >
              -
            </button>
            <span className="text-sm font-medium">{obj.amount}</span>
            <button
              className="px-2 py-1 hover:bg-gray-50 text-gray-600"
              onClick={() =>
                SetCartShop((listShop) =>
                  amountSistem({ array: listShop, obj: obj, operator: +1 })
                )
              }
            >
              +
            </button>
          </div>
          <span className="font-bold text-gray-900">
            ${obj.amount ? (obj.price * obj.amount).toLocaleString() : 1}
          </span>
        </div>
      </div>
      <button
        className="self-start p-1 hover:bg-red-50 rounded-full transition-colors"
        onClick={() => {
          const index = CartShop.findIndex((p) => p.id === obj.id);
          if (index === -1) return;
          SetCartShop((items) => items.filter((p) => p.id !== obj.id));
        }}
      >
        <svg
          className="w-5 h-5 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
  return <>{CartShop.length ? CartShop.map((p) => product(p)) : NotProduct}</>;
};

type CartFooter = {
  CartShop: ProductType[];
};
export const CardFooterCart = (props: CartFooter) => {
  const { CartShop } = props;
  useEffect(() => {
    localStorage.setItem("cartShop", JSON.stringify(CartShop));
  }, [CartShop]);
  const subTotal = CartShop.reduce((acum, product) => {
    return (
      (product.amount ? product.price * product.amount : product.price) + acum
    );
  }, 0);
  return (
    <>
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">Subtotal:</span>
        <span className="text-2xl font-bold text-gray-900">
          ${CartShop.length ? subTotal.toLocaleString() : 0}
        </span>
      </div>
      <button
        className={`w-full py-4 bg-gradient-to-r 
        from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl 
        transition-all shadow-lg hover:shadow-xl ${
          CartShop.length === 0 && "opacity-60"
        }`}
        disabled={CartShop.length === 0}
        onClick={() => {
          window.location.href = "/checkout";
        }}
      >
        Proceder al Pago
      </button>
    </>
  );
};
export default CartSlider;
