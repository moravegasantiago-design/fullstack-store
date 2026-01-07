import type { ProductType } from "@/App";
import type { fromProps } from "@/caja-componentes/Checkout";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

type valueProps = {
  event: ChangeEvent<HTMLInputElement>;
  setFormCheckout: Dispatch<SetStateAction<fromProps>>;
};
type keyObj = keyof fromProps;
export const formValue = (props: valueProps) => {
  const { event, setFormCheckout } = props;
  const { value, name } = event.target;
  const keys = name.split("-") as [keyObj, string];
  setFormCheckout((prev) => {
    return {
      ...prev,
      [keys[0]]: {
        ...prev[keys[0]],
        [keys[1]]: value,
      },
    };
  });
};

export const valueEmpty = (props: { formCheckout: fromProps }) => {
  const { formCheckout } = props;
  const valueObj = Object.values(formCheckout)
    .flatMap((p) => Object.values(p))
    .filter((p) => p === 0 || p === "");
  return valueObj.length ? true : false;
};

export const transactionRequest = async (props: {
  data: ProductType[];
}): Promise<{ sucess: boolean; error: string }> => {
  const { data } = props;
  try {
    const req = await fetch("http://localhost:3000/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        products: [...data],
      }),
    });
    const res = await req.json();
    if (!res.sucess) return { sucess: false, error: "Datos Invalidos" };
    return { sucess: true, error: "" };
  } catch (error) {
    console.error(error);
    return { sucess: false, error: "Error en conexion" };
  }
};
