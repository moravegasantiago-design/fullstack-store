import type { userProps } from "@/App";
import { X, LogOut, User } from "lucide-react";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
type propsProfile = {
  SetViewLogin: Dispatch<SetStateAction<boolean>>;
  meProfile: userProps;
  viewLogin: boolean;
};
export const ProfilePanel = (props: propsProfile) => {
  const { SetViewLogin, meProfile, viewLogin } = props;
  const [historyShop, setHistoryShop] = useState<
    {
      product_id: string;
      quantity: string;
      name: string;
      image: string;
      price: number;
      date: string;
    }[]
  >([]);
  const { email } = meProfile;
  useEffect(() => {
    (async () => {
      try {
        const req = await fetch("http://localhost:3000/product/shop", {
          method: "GET",
          credentials: "include",
        });
        const res = await req.json();
        if (!res.date) return;
        console.log(res.date);
        setHistoryShop(res.date);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [viewLogin]);
  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        e.stopPropagation();
        SetViewLogin(false);
      }}
    >
      <div
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <User size={24} />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-800">
                Mi Perfil
              </h2>
              <p className="text-slate-500 text-sm">{email}</p>
            </div>
          </div>
          <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
            <X
              size={20}
              className="text-slate-500"
              onClick={() => SetViewLogin(false)}
            />
          </button>
        </div>

        {/* Contenido Scrolleable */}
        <div className="flex-1 overflow-y-auto">
          {/* Historial de Compras */}
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-800">Historial de Compras</h3>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Ver todo
              </button>
            </div>

            {historyShop.map((h, i) => (
              <div className="space-y-3" key={i}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 border border-slate-200 rounded-xl hover:border-slate-300 transition-colors">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200">
                      <img src={h.image} alt={h.name} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs text-slate-400 font-medium">
                          {`${h.product_id}-${h.date}`}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700">
                          Entregado
                        </span>
                      </div>
                      <p className="font-medium text-slate-800 text-sm truncate">
                        {h.name}
                      </p>
                      <p className="text-xs text-slate-500">{h.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <span className="font-bold text-slate-800">${h.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer del Panel */}
        <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6">
            <button
              className="flex items-center gap-2 px-3 py-2 text-sm 
            text-red-500 hover:text-red-600 hover:bg-white rounded-lg transition-colors"
              onClick={async () => {
                try {
                  const req = await fetch("http://localhost:3000/auth/closet", {
                    method: "POST",
                    credentials: "include",
                  });
                  const res = await req.json();
                  if (res.ok) return window.location.reload();
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Salir</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
