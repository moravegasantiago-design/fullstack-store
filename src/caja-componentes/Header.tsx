import { ShoppingCart, Heart, Search, Menu, User } from "lucide-react";
import { useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import { type ProductType } from "@/App";
import CartSlider, {
  CardFooterCart,
  CardHeaderCart,
  CardItemsCart,
}  from "./CardSlider";
type HeaderProps = {
  inputDesklop : ReactNode;
  inputMovil : ReactNode;
  Buttons : (props : {CartShop: ProductType[], SetCartEvent : Dispatch<SetStateAction<boolean>>}
  ) => ReactNode;
  CartShop : ProductType[];
  SetCartShop : Dispatch<SetStateAction<ProductType[]>>
}
const Header = (props: HeaderProps) => {
  const {inputDesklop, inputMovil, Buttons, CartShop, SetCartShop} = props;
  const [CartEvent, SetCartEvent] = useState(false);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">TechShop</h1>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8">{inputDesklop}</div>

          <div className="flex items-center gap-2">{Buttons({CartShop, SetCartEvent})}</div>
        </div>

        <div className="md:hidden pb-4">{inputMovil}</div>
      </div>
      <CartSlider
        CartEvent = {CartEvent}
        CardFooterCart={<CardFooterCart CartShop={CartShop}/>}
        CardItemsCart={<CardItemsCart CartShop = {CartShop} SetCartShop={SetCartShop}/>}
        CardHeaderCart={<CardHeaderCart SetCartEvent={SetCartEvent}/>}
      />
    </>
  );
};
export const SearchDesklop = () => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder="Buscar productos..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export const SearchMovil = () => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder="Buscar productos..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

type BtnProps = {
  CartShop : ProductType[];
  SetCartEvent : Dispatch<SetStateAction<boolean>>
}
export const BtnAccion = (props : BtnProps) => {
  const { CartShop, SetCartEvent } = props;
  return (
    <>
      <button className="p-2 hover:bg-gray-100 rounded-lg relative">
        <Heart className="h-6 w-6 text-gray-700" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
          3
        </span>
      </button>

      <button className="p-2 hover:bg-gray-100 rounded-lg relative" onClick={() => SetCartEvent(true)}>
        <ShoppingCart className="h-6 w-6 text-gray-700" />
        <span className={`absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold ${CartShop.length ? "" : "hidden"}`}>
          {CartShop.length ?? 0}
        </span>
      </button>

      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <User className="h-6 w-6 text-gray-700" />
      </button>
    </>
  );
};

export default Header;
