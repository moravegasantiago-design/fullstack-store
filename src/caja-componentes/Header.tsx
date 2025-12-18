import { ShoppingCart, Heart, Search, Menu, User } from "lucide-react";
import {
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { type ProductType } from "@/App";
import CartSlider, {
  CardFooterCart,
  CardHeaderCart,
  CardItemsCart,
} from "./CardSlider";
import { SearchSistem, SistemOfSuggestion } from "@/utils/Diccionary/SearchSistem";

export type SistemSearchFn = (props: {
  eventClick: string;
  array: ProductType[];
}) => [string, number][];


type HeaderProps = {
  CartShop: ProductType[];
  SetCartShop: Dispatch<SetStateAction<ProductType[]>>;
  product: ProductType[];
  SetProductFilter: Dispatch<SetStateAction<ProductType[]>>;
  SetOption: Dispatch<SetStateAction<string>>;
};

const Header = (props: HeaderProps) => {
  const {
    CartShop,
    SetCartShop,
    product,
    SetOption,
    SetProductFilter,
  } = props;
  const [cartEvent, SetCartEvent] = useState(false);
  const [suggestionInput, SetSuggestionInput] = useState(false);
  const [LisSuggestion, SetListSuggestion] = useState<[string, number][]>([]);
  
  const SistemSearch = (props: {
    eventClick: string;
    array: ProductType[];
  }) => {
    const { eventClick, array } = props;
    const cleanedInput = eventClick.trim().toLowerCase();
    const flattenArray = array
      .flatMap((p) => [...(p.tags ?? []), p.nombre])
      .filter((p) => p.trim().includes(cleanedInput));
    const filterSearch = flattenArray.reduce<Record<string, number>>(
      (acum, product) => {
        acum[product] = acum[product] ? acum[product] + 1 : 1;
        return acum;
      },
      {}
    );
    return Object.entries(filterSearch).sort((a, b) => b[1] - a[1]) ?? [];
  };

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

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <SearchInput
              SistemSearch={SistemSearch}
              product={product}
              SetSuggestionInput={SetSuggestionInput}
              SetListSuggestion={SetListSuggestion}
              LisSuggestion={LisSuggestion}
              suggestionInput={suggestionInput}
              SetOption={SetOption}
              SetProductFilter={SetProductFilter}
            />
          </div>

          <div className="flex items-center gap-2">
            <BtnAccion CartShop={CartShop} SetCartEvent={SetCartEvent} />
          </div>
        </div>

        <div className="md:hidden pb-4">
          <SearchInput
            SistemSearch={SistemSearch}
            product={product}
            SetSuggestionInput={SetSuggestionInput}
            SetListSuggestion={SetListSuggestion}
            LisSuggestion={LisSuggestion}
            suggestionInput={suggestionInput}
            SetOption={SetOption}
            SetProductFilter={SetProductFilter}
          />
        </div>
      </div>
      <CartSlider
        CartEvent={cartEvent}
        CardFooterCart={<CardFooterCart CartShop={CartShop} />}
        CardItemsCart={
          <CardItemsCart CartShop={CartShop} SetCartShop={SetCartShop} />
        }
        CardHeaderCart={<CardHeaderCart SetCartEvent={SetCartEvent} />}
      />
    </>
  );
};

type SearchProps = {
  SistemSearch: SistemSearchFn;
  SetSuggestionInput: Dispatch<SetStateAction<boolean>>;
  product: ProductType[];
  LisSuggestion: [string, number][];
  SetListSuggestion: Dispatch<SetStateAction<[string, number][]>>;
  suggestionInput: boolean;
  SetProductFilter: Dispatch<SetStateAction<ProductType[]>>;
  SetOption: Dispatch<SetStateAction<string>>;
};

export const SearchInput = (props: SearchProps) => {
  const {
    SistemSearch,
    SetSuggestionInput,
    product,
    SetListSuggestion,
    LisSuggestion,
    suggestionInput,
    SetOption,
    SetProductFilter,
  } = props;
  
  return (
    <div className="relative w-full group">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
      </div>
      <input
        type="text"
        placeholder="Buscar productos, marcas o categorías..."
        className="w-full pl-10 pr-4 py-3 md:py-2.5 bg-gray-50 md:bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-500 md:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200 md:shadow-sm md:hover:shadow-md"
        onChange={(e) => {
          SistemOfSuggestion({
            event: e.target.value,
            SetListSuggestion: SetListSuggestion,
            SetSuggestionInput: SetSuggestionInput,
            SistemSearch: SistemSearch,
            product: product,
          });
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key !== "Enter") return;
          SearchSistem({
            InputValue: e.currentTarget.value,
            SetOption: SetOption,
            SetProductFilter: SetProductFilter,
            product: product,
            SetSuggestionInput: SetSuggestionInput,
          });
        }}
      />
      <SearchSuggestions
        array={LisSuggestion}
        suggestionInput={suggestionInput}
        SetOption={SetOption}
        SetProductFilter={SetProductFilter}
        product={product}
        SetSuggestionInput={SetSuggestionInput}
      />
    </div>
  );
};

type listSuggestion = {
  array: [string, number][];
  suggestionInput: boolean;
  SetOption: Dispatch<SetStateAction<string>>;
  SetProductFilter: Dispatch<SetStateAction<ProductType[]>>;
  product: ProductType[];
  SetSuggestionInput: Dispatch<SetStateAction<boolean>>;
};

export const SearchSuggestions = (props: listSuggestion) => {
  const { array, suggestionInput, product, SetOption, SetProductFilter, SetSuggestionInput } = props;
  
  return (
    <div
      className={`absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg md:shadow-lg shadow-xl border border-gray-100 overflow-hidden z-50 ${
        suggestionInput ? "" : "hidden"
      }`}
    >
      <div className="py-1 md:py-2">
        <div className="space-y-0.5">
          {array.map((p, i) => (
            <button
              className="w-full px-3 md:px-4 py-3 md:py-2.5 active:bg-gray-100 md:hover:bg-gray-50 flex items-center gap-3 transition-colors duration-150 group"
              key={i}
              onClick={() =>
                SearchSistem({
                  InputValue: p[0],
                  SetOption: SetOption,
                  SetProductFilter: SetProductFilter,
                  product: product,
                  SetSuggestionInput: SetSuggestionInput,
                })
              }
            >
              <Search className="h-4 w-4 text-gray-400 flex-shrink-0 md:group-hover:text-blue-500 md:transition-colors" />
              <span className="text-sm text-gray-700 flex-1 text-left">
                <span className="font-semibold text-gray-900">{p[0]}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};


type BtnProps = {
  CartShop: ProductType[];
  SetCartEvent: Dispatch<SetStateAction<boolean>>;
};

export const BtnAccion = (props: BtnProps) => {
  const { CartShop, SetCartEvent } = props;
  return (
    <>
      <button className="p-2 hover:bg-gray-100 rounded-lg relative">
        <Heart className="h-6 w-6 text-gray-700" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
          3
        </span>
      </button>

      <button
        className="p-2 hover:bg-gray-100 rounded-lg relative"
        onClick={() => SetCartEvent(true)}
      >
        <ShoppingCart className="h-6 w-6 text-gray-700" />
        <span
          className={`absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold ${
            CartShop.length ? "" : "hidden"
          }`}
        >
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