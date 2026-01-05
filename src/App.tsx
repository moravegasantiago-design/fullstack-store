import Header from "./caja-componentes/Header";
import Body, { Title, Nav, CardProduct } from "./caja-componentes/Body";
import Footer from "./caja-componentes/Footer";
import { useEffect, useState } from "react";
import Login from "./caja-componentes/login";
import { ProfilePanel } from "./caja-componentes/myProfile";

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
export type userProps = {
  id?: number;
  name: string;
  email: string;
  password?: string;
  created_at?: Date;
  cartShop: ProductType[];
};
const App = () => {
  const [ProductFilter, SetProductFilter] = useState<ProductType[]>([]);
  const [product, SetProduct] = useState<ProductType[]>([]);
  const [option, SetOption] = useState("");
  const [cartShop, SetCartShop] = useState<ProductType[]>([]);
  const [viewLogin, SetViewLogin] = useState<boolean>(false);
  const [auth, SetAuth] = useState<boolean>(false);
  const [meProfile, setMeProfile] = useState<userProps>({
    name: "preterminado",
    email: "predeterminado@gmail.com",
    created_at: new Date(),
    cartShop: [],
  });
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
  const verifyAuth = async () => {
    try {
      const req = await fetch("http://localhost:3000/me", {
        method: "GET",
        credentials: "include",
      });
      const res = await req.json();
      if (res.success) {
        SetAuth(true);
        setMeProfile(res.data);
      }
    } catch (err) {
      SetAuth(false);
      console.error(err);
    }
  };
  useEffect(() => {
    const checkAuth = async () => {
      await verifyAuth();
    };
    checkAuth();
  }, []);
  const loginInteface = auth ? (
    <ProfilePanel SetViewLogin={SetViewLogin} meProfile={meProfile} />
  ) : (
    <Login SetViewLogin={SetViewLogin} SetAuth={SetAuth} />
  );

  return (
    <>
      <Header
        CartShop={cartShop}
        SetCartShop={SetCartShop}
        product={product}
        SetProductFilter={SetProductFilter}
        SetOption={SetOption}
        SetViewLogin={SetViewLogin}
      />
      {viewLogin && loginInteface}
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
