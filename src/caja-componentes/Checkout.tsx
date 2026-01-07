import type { ProductType } from "@/App";
import { formValue, transactionRequest, valueEmpty } from "@/utils/checkout";
import { AlertCircle } from "lucide-react";
import { useState, type Dispatch, type SetStateAction } from "react";

export const Checkout = () => {
  const [checkShop, setCheShop] = useState<boolean>(false);
  const divCheck = checkShop ? (
    <CheckoutTrue />
  ) : (
    <FromCheckout setCheShop={setCheShop} />
  );
  return divCheck;
};
export type fromProps = {
  contactInformation: {
    email: string;
    phone: string;
  };
  mailingAddress: {
    name: string;
    lastName: string;
    address: string;
    description: string;
    city: string;
    state: string;
    cp: number;
  };
  paymentMethods: {
    cardNumber: number;
    name: string;
    dateOfIssue: string;
    cvv: number;
  };
};
const FromCheckout = (props: {
  setCheShop: Dispatch<SetStateAction<boolean>>;
}) => {
  const { setCheShop } = props;
  const store = localStorage.getItem("cartShop");
  const data: ProductType[] | [] = store ? JSON.parse(store) : [];
  const subTotal = data.reduce((a, b) => (b.amount || 1) * b.price + a, 0);
  const [fromCheckout, setFromChechout] = useState<fromProps>({
    contactInformation: { email: "", phone: "" },
    mailingAddress: {
      name: "",
      lastName: "",
      address: "",
      description: "",
      city: "",
      state: "",
      cp: 0,
    },
    paymentMethods: { cardNumber: 0, name: "", dateOfIssue: "", cvv: 0 },
  });
  const [loddingBtn, setloddingBtn] = useState<boolean>(false);
  const isDisabled = valueEmpty({ formCheckout: fromCheckout });
  const [messageError, setMessageError] = useState<{
    sucess: boolean;
    error: string;
  }>({ sucess: true, error: "" });
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Finalizar Compra
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Formulario */}
          <div className="lg:col-span-2 space-y-6">
            {/* Información de contacto */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Información de Contacto
              </h2>
              <div className="space-y-4">
                <input
                  type="email"
                  name="contactInformation-email"
                  placeholder="Correo electrónico"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                  focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  value={fromCheckout.contactInformation.email}
                  onChange={(e) =>
                    formValue({ event: e, setFormCheckout: setFromChechout })
                  }
                />
                <input
                  type="tel"
                  name="contactInformation-phone"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  value={fromCheckout.contactInformation.phone}
                  onChange={(e) =>
                    formValue({ event: e, setFormCheckout: setFromChechout })
                  }
                />
              </div>
            </div>

            {/* Dirección de envío */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Dirección de Envío
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="mailingAddress-name"
                    placeholder="Nombre"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    value={fromCheckout.mailingAddress.name}
                    onChange={(e) =>
                      formValue({ event: e, setFormCheckout: setFromChechout })
                    }
                  />
                  <input
                    type="text"
                    name="mailingAddress-lastName"
                    placeholder="Apellido"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    value={fromCheckout.mailingAddress.lastName}
                    onChange={(e) =>
                      formValue({ event: e, setFormCheckout: setFromChechout })
                    }
                  />
                </div>
                <input
                  type="text"
                  name="mailingAddress-address"
                  placeholder="Dirección"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  value={fromCheckout.mailingAddress.address}
                  onChange={(e) =>
                    formValue({ event: e, setFormCheckout: setFromChechout })
                  }
                />
                <input
                  type="text"
                  name="mailingAddress-description"
                  placeholder="Apartamento, suite, etc"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  value={fromCheckout.mailingAddress.description}
                  onChange={(e) =>
                    formValue({ event: e, setFormCheckout: setFromChechout })
                  }
                />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="mailingAddress-city"
                    placeholder="Ciudad"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    value={fromCheckout.mailingAddress.city}
                    onChange={(e) =>
                      formValue({ event: e, setFormCheckout: setFromChechout })
                    }
                  />
                  <input
                    type="text"
                    name="mailingAddress-state"
                    placeholder="Estado"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    value={fromCheckout.mailingAddress.state}
                    onChange={(e) =>
                      formValue({ event: e, setFormCheckout: setFromChechout })
                    }
                  />
                  <input
                    type="text"
                    name="mailingAddress-cp"
                    placeholder="CP"
                    className="col-span-2 sm:col-span-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    value={fromCheckout.mailingAddress.cp}
                    onChange={(e) =>
                      formValue({ event: e, setFormCheckout: setFromChechout })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Método de pago */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Método de Pago
              </h2>

              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                  alt="Visa"
                  className="h-8"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="Mastercard"
                  className="h-8"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                  className="h-8"
                />
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    name="paymentMethods-cardNumber"
                    placeholder="Número de tarjeta"
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    value={fromCheckout.paymentMethods.cardNumber}
                    onChange={(e) =>
                      formValue({ event: e, setFormCheckout: setFromChechout })
                    }
                  />
                  <svg
                    className="w-6 h-6 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="paymentMethods-name"
                  placeholder="Nombre en la tarjeta"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  value={fromCheckout.paymentMethods.name}
                  onChange={(e) =>
                    formValue({ event: e, setFormCheckout: setFromChechout })
                  }
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="paymentMethods-dateOfIssue"
                    placeholder="MM/AA"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    value={fromCheckout.paymentMethods.dateOfIssue}
                    onChange={(e) =>
                      formValue({ event: e, setFormCheckout: setFromChechout })
                    }
                  />
                  <div className="relative">
                    <input
                      type="number"
                      name="paymentMethods-cvv"
                      placeholder="CVV"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      value={fromCheckout.paymentMethods.cvv}
                      onChange={(e) =>
                        formValue({
                          event: e,
                          setFormCheckout: setFromChechout,
                        })
                      }
                    />
                    <svg
                      className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 cursor-help"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resumen del pedido */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Resumen del Pedido
              </h2>

              {data.map((p, i) => (
                <div key={i} className="space-y-4 mb-6">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">
                        {p.name}
                      </p>
                      <p className="text-xs text-gray-500">{p.amount}</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {p.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>${subTotal}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Envío</span>
                  <span>$15.00</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-800 pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>${subTotal + 15}.00</span>
                </div>
              </div>
              {!messageError.sucess && (
                <span className="flex items-center gap-1.5 text-sm text-red-600 font-medium">
                  <AlertCircle className="w-4 h-4" />
                  {messageError.error}
                </span>
              )}
              <button
                className={`w-full mt-6 bg-blue-600 hover:bg-blue-700
                text-white font-semibold py-4 rounded-lg transition flex items-center justify-center gap-2 ${
                  isDisabled || data.length === 0 || loddingBtn
                    ? "opacity-60"
                    : ""
                }`}
                disabled={isDisabled || data.length === 0 || loddingBtn}
                onClick={async () => {
                  try {
                    setloddingBtn(true);
                    const transaction = await transactionRequest({
                      data: data,
                    });
                    if (!transaction.sucess)
                      return setMessageError({ ...transaction });
                    setMessageError({ ...transaction });
                    setCheShop(true);
                    localStorage.removeItem("cartShop");
                  } catch (error) {
                    console.error(error);
                  } finally {
                    setloddingBtn(false);
                  }
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                {loddingBtn ? "Cargando..." : "Pagar Ahora"}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Pago seguro con encriptación SSL
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const CheckoutTrue = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        {/* Icono de éxito */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          ¡Compra Exitosa!
        </h1>
        <p className="text-gray-500 mb-6">
          Gracias por tu compra. Hemos enviado la confirmación a tu correo.
        </p>

        {/* Botones */}
        <div className="space-y-3">
          <button
            className="w-full bg-gray-100 hover:bg-gray-200 
          text-gray-700 font-semibold py-3 rounded-lg transition"
            onClick={() => (window.location.href = "/")}
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    </div>
  );
};
