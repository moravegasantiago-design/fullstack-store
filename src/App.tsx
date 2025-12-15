import Header, {
  SearchDesklop,
  SearchMovil,
  BtnAccion,
} from "./caja-componentes/Header.tsx";
import Body, { Title, Nav, CardProduct } from "./caja-componentes/Body.tsx";
import Footer from "./caja-componentes/Footer.tsx";
import { useEffect, useState } from "react";
export type ProductType = {
  ref: string;
  nombre: string;
  precio: number;
  precioOriginal: null | number;
  descuento: 0 | number;
  categoria: string;
  tags: string[];
  imagen: string;
  rating: number;
  reviews: number;
  stock: boolean;
  favorite?: boolean;
};
const App = () => {
  const [ProductFilter, SetProductFilter] = useState<ProductType[]>([]);
  const [product, SetProduct] = useState<ProductType[]>([]);
  const [option, SetOption] = useState("");

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const re = await fetch("data/product.json");
        const data = await re.json();
        SetProduct(data);
        SetProductFilter(data);
      } catch (err) {
        console.error(err);
      }
    };
    dataFetch();
  }, []);
  return (
    <>
      <Header
        inputDesklop={<SearchDesklop />}
        inputMovil={<SearchMovil />}
        Buttons={<BtnAccion />}
      />
      <Body
        Title={<Title option={option} />}
        Nav={
          <Nav
            listProduct={product}
            SetOption={SetOption}
            SetProductFilter={SetProductFilter}
            option={option}
          />
        }
        CardProduct={<CardProduct listProduct={ProductFilter} />}
      />
      <Footer />
    </>
  );
};
export default App;
