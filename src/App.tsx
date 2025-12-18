import Header from "./caja-componentes/Header";
import Body, { Title, Nav, CardProduct } from "./caja-componentes/Body";
import Footer from "./caja-componentes/Footer";
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
  amount?: number;
};

const App = () => {
  const [ProductFilter, SetProductFilter] = useState<ProductType[]>([]);
  const [product, SetProduct] = useState<ProductType[]>([]);
  const [option, SetOption] = useState("");
  const [cartShop, SetCartShop] = useState<ProductType[]>([]);

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
        CartShop={cartShop}
        SetCartShop={SetCartShop}
        product={product}
        SetProductFilter={SetProductFilter}
        SetOption={SetOption}
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
        CardProduct={
          <CardProduct
            listProduct={ProductFilter}
            cartShop={cartShop}
            SetCartShop={SetCartShop}
          />
        }
      />
      <Footer />
    </>
  );
};

export default App;
