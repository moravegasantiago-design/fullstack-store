import { ShoppingCart, Heart } from "lucide-react";
import { type Dispatch, type ReactNode, type SetStateAction } from "react";
import GetDiccinary from "@/utils/Diccionary/GetDiccionary";
import type { ProductType } from "src/App";
import { SistemStar } from "@/utils/ProductLogic";
type BodyProps = {
  Title: ReactNode;
  Nav: ReactNode;
  CardProduct: ReactNode;
};
const Body = (props: BodyProps) => {
  const { Title, Nav, CardProduct } = props;
  return (
    <>
      {/* ========== HEADER========== */}
      <div className="mb-8">{Title}</div>
      {/* ========== NAV ========== */}
      <div className="mb-8 border-b border-gray-200">
        <div className="flex gap-1 overflow-x-auto pb-px">{Nav}</div>
      </div>
      {/* ========== PRODUCT ========== */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {CardProduct}
      </div>
    </>
  );
};

type TitleProps = {
  option?: string;
};
export const Title = (props: TitleProps) => {
  const { option } = props;
  const Key = option || "Preterminate";
  const ObjHeader = GetDiccinary(Key);
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        {ObjHeader.title}
      </h2>
      <p className="text-gray-600">{ObjHeader.description}</p>
    </>
  );
};

type NavProps = {
  listProduct: ProductType[];
  SetProductFilter : Dispatch<SetStateAction<ProductType[]>>;
  SetOption: Dispatch<SetStateAction<string>>;
  option ?: string;
  
};
export const Nav = (props: NavProps) => {
  const { listProduct, SetOption, SetProductFilter } = props;
  const listCategory = [...new Set(listProduct.flatMap((p) => p.categoria))];
  return (
    <>
      {listCategory.map((p, i) => (
        <button
          className="px-6 py-3 font-medium text-blue-600 border-b-2 border-blue-600 whitespace-nowrap"
          key={i}
          onClick={() => {
            SetOption(p);
            const FilterList = listProduct.filter((product) => product.categoria === p);
            SetProductFilter([...FilterList]);
          }}
        >
          {p}
        </button>
      ))}
    </>
  );
};

type ProductProps = {
  listProduct: ProductType[];
};
export const CardProduct = (props: ProductProps) => {
  const { listProduct } = props;
  return listProduct.map((p) => {
    const listOfStar = SistemStar({ rating: p.rating });
    return (
      <div
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
        key={p.ref}
      >
        <div className="relative aspect-video overflow-hidden bg-gray-100">
          <img
            src={p.imagen}
            alt={p.nombre}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <span
            className={`absolute top-2 left-2 bg-red-500 text-white px-1.5 py-0.5 text-[10px] font-bold rounded shadow-lg ${
              p.precioOriginal ? "block" : "hidden"
            }`}
          >
            -%{p.descuento ?? 0}
          </span>
          <button className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full h-7 w-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg">
            <Heart className="h-3 w-3 text-gray-700 hover:text-red-500" />
          </button>
        </div>

        <div className="p-2.5">
          <p className="text-[9px] text-blue-600 font-semibold uppercase tracking-wider mb-1">
            {p.categoria}
          </p>

          <h3 className="font-bold text-xs leading-tight text-gray-900 mb-1.5 line-clamp-2 min-h-[2rem]">
            {p.nombre}
          </h3>

          <div className="flex items-center gap-0.5 mb-2">
            <div className="flex gap-0.5">
              {listOfStar.map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            <span className="text-[10px] text-gray-600 font-medium">
              ({p.rating})
            </span>
          </div>

          <div className="flex items-baseline gap-1.5 mb-2.5">
            <span className="text-lg font-bold text-gray-900">{p.precio}</span>
            <span
              className={`text-[10px] text-gray-400 line-through ${
                p.precioOriginal ? "block" : "hidden"
              }`}
            >
              {p.precioOriginal || 0}
            </span>
          </div>

          <button className="w-full h-8 bg-gray-900 text-white rounded-lg text-xs font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-1.5">
            <ShoppingCart className="h-3.5 w-3.5" />
            Agregar
          </button>
        </div>
      </div>
    );
  });
};
export default Body;
