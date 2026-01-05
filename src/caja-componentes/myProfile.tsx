import type { userProps } from "@/App";
import {
  X,
  Truck,
  CheckCircle,
  MapPin,
  CreditCard,
  Bell,
  Settings,
  LogOut,
  Timer,
  Eye,
  RotateCcw,
  User,
  ImageIcon,
} from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
type propsProfile = {
  SetViewLogin: Dispatch<SetStateAction<boolean>>;
  meProfile: userProps;
};
export const ProfilePanel = (props: propsProfile) => {
  const { SetViewLogin, meProfile } = props;
  const { email } = meProfile;
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
        {/* Header del Panel */}
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
          {/* Barra de Seguimiento */}
          <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-50 to-slate-100/50">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* En Camino */}
              <div className="flex-1 bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-amber-600">
                    <Truck size={18} />
                    <span className="font-semibold text-sm">En Camino</span>
                  </div>
                  <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                    2
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
                      <ImageIcon size={16} className="text-slate-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-800 text-sm truncate">
                        MacBook Air M3
                      </p>
                      <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                        <Timer size={10} />
                        <span>Llega: 3 Ene</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full w-3/4" />
                      </div>
                      <span className="text-[10px] text-slate-400">75%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
                      <ImageIcon size={16} className="text-slate-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-800 text-sm truncate">
                        Logitech MX Master
                      </p>
                      <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                        <Timer size={10} />
                        <span>Llega: 6 Ene</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full w-1/4" />
                      </div>
                      <span className="text-[10px] text-slate-400">25%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ya Llegaron */}
              <div className="flex-1 bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <CheckCircle size={18} />
                    <span className="font-semibold text-sm">Entregados</span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                    3
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
                      <ImageIcon size={16} className="text-slate-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-800 text-sm truncate">
                        Sony WH-1000XM5
                      </p>
                      <p className="text-xs text-slate-500">18 Dic 2024</p>
                    </div>
                    <CheckCircle size={16} className="text-emerald-500" />
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
                      <ImageIcon size={16} className="text-slate-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-800 text-sm truncate">
                        AirPods Pro 2
                      </p>
                      <p className="text-xs text-slate-500">2 Dic 2024</p>
                    </div>
                    <CheckCircle size={16} className="text-emerald-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Historial de Compras */}
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-800">Historial de Compras</h3>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Ver todo
              </button>
            </div>

            <div className="space-y-3">
              {/* Compra 1 */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 border border-slate-200 rounded-xl hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200">
                    <ImageIcon size={20} className="text-slate-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs text-slate-400 font-medium">
                        TS-2024-001
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700">
                        Entregado
                      </span>
                    </div>
                    <p className="font-medium text-slate-800 text-sm truncate">
                      Sony WH-1000XM5
                    </p>
                    <p className="text-xs text-slate-500">15 Dic 2024</p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <span className="font-bold text-slate-800">$399</span>
                  <div className="flex gap-2">
                    <button className="p-2 border border-slate-200 hover:border-slate-300 rounded-lg transition-colors">
                      <Eye size={16} className="text-slate-500" />
                    </button>
                    <button className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                      <RotateCcw size={16} className="text-slate-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Compra 2 */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 border border-slate-200 rounded-xl hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200">
                    <ImageIcon size={20} className="text-slate-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs text-slate-400 font-medium">
                        TS-2024-002
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700">
                        Entregado
                      </span>
                    </div>
                    <p className="font-medium text-slate-800 text-sm truncate">
                      AirPods Pro 2da Generación
                    </p>
                    <p className="text-xs text-slate-500">28 Nov 2024</p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <span className="font-bold text-slate-800">$249</span>
                  <div className="flex gap-2">
                    <button className="p-2 border border-slate-200 hover:border-slate-300 rounded-lg transition-colors">
                      <Eye size={16} className="text-slate-500" />
                    </button>
                    <button className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                      <RotateCcw size={16} className="text-slate-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Compra 3 */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 border border-slate-200 rounded-xl hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-3 flex-1">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center border-2 border-white shadow-sm">
                      <ImageIcon size={14} className="text-slate-400" />
                    </div>
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center border-2 border-white shadow-sm">
                      <ImageIcon size={14} className="text-slate-400" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs text-slate-400 font-medium">
                        TS-2024-003
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700">
                        Entregado
                      </span>
                    </div>
                    <p className="font-medium text-slate-800 text-sm truncate">
                      Apple Watch, Bose QC 45
                    </p>
                    <p className="text-xs text-slate-500">
                      10 Oct 2024 • 2 productos
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <span className="font-bold text-slate-800">$758</span>
                  <div className="flex gap-2">
                    <button className="p-2 border border-slate-200 hover:border-slate-300 rounded-lg transition-colors">
                      <Eye size={16} className="text-slate-500" />
                    </button>
                    <button className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                      <RotateCcw size={16} className="text-slate-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Compra 4 */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 border border-slate-200 rounded-xl hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200">
                    <ImageIcon size={20} className="text-slate-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs text-slate-400 font-medium">
                        TS-2024-000
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700">
                        Entregado
                      </span>
                    </div>
                    <p className="font-medium text-slate-800 text-sm truncate">
                      iPhone 15 Pro Max 256GB
                    </p>
                    <p className="text-xs text-slate-500">5 Sep 2024</p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <span className="font-bold text-slate-800">$1,199</span>
                  <div className="flex gap-2">
                    <button className="p-2 border border-slate-200 hover:border-slate-300 rounded-lg transition-colors">
                      <Eye size={16} className="text-slate-500" />
                    </button>
                    <button className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                      <RotateCcw size={16} className="text-slate-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer del Panel */}
        <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6">
            <button className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-white rounded-lg transition-colors">
              <MapPin size={16} />
              <span className="hidden sm:inline">Direcciones</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-white rounded-lg transition-colors">
              <CreditCard size={16} />
              <span className="hidden sm:inline">Pagos</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-white rounded-lg transition-colors">
              <Bell size={16} />
              <span className="hidden sm:inline">Notificaciones</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-white rounded-lg transition-colors">
              <Settings size={16} />
              <span className="hidden sm:inline">Configuración</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:text-red-600 hover:bg-white rounded-lg transition-colors">
              <LogOut size={16} />
              <span className="hidden sm:inline">Salir</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
