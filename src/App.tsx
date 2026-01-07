import Header from "./caja-componentes/Header";
import Body, { Title, Nav, CardProduct } from "./caja-componentes/Body";
import Footer from "./caja-componentes/Footer";
import { useEffect, useState } from "react";
import Login from "./caja-componentes/login";
import { ProfilePanel } from "./caja-componentes/myProfile";
import { Checkout } from "./caja-componentes/Checkout";

export type ProductType = {
  id: string;
  name: string;
  price: number;
  precioOriginal: null | number;
  discount: 0 | number;
  category: string;
  tags: string[];
  image: string;
  rating: number;
  reviews: number;
  stock: boolean;
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
  const isCheckout = window.location.pathname === "/checkout";
  const [ProductFilter, SetProductFilter] = useState<ProductType[]>([]);
  const [product, SetProduct] = useState<ProductType[]>([]);
  const [option, SetOption] = useState("");
  const [cartShop, SetCartShop] = useState<ProductType[]>(() => {
    const store = localStorage.getItem("cartShop");
    return store ? JSON.parse(store) : [];
  });
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
        const re = await fetch(
          "https://fullstack-store-qvjr.onrender.com/product"
        );
        const data = await re.json();
        if (!data.data) return;
        SetProduct(data.data);
        SetProductFilter(data.data);
      } catch (err) {
        console.error(err);
      }
    };
    dataFetch();
  }, []);
  const verifyAuth = async () => {
    try {
      const req = await fetch("https://fullstack-store-qvjr.onrender.com/me", {
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
  }, [auth]);
  const loginInteface = auth ? (
    <ProfilePanel
      SetViewLogin={SetViewLogin}
      meProfile={meProfile}
      viewLogin={viewLogin}
    />
  ) : (
    <Login SetViewLogin={SetViewLogin} SetAuth={SetAuth} />
  );

  return isCheckout ? (
    <Checkout />
  ) : (
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
      {product.length ? (
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
      ) : (
        <div className="flex flex-col items-center justify-center py-12 gap-3">
          <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
          <p className="text-blue-600 text-sm font-medium">
            Cargando productos...
          </p>
        </div>
      )}
      <Footer />
    </>
  );
};

export default App;
