import React, { type Dispatch, type SetStateAction } from "react";
import {
  X,
  User,
  Mail,
  Phone,
  MapPin,
  Package,
  ShoppingBag,
  Gamepad2,
  Trophy,
  Coins,
  Zap,
  Target,
  LogOut,
  Star,
} from "lucide-react";
type perfilProps = {
  SetViewLogin: Dispatch<SetStateAction<boolean>>;
};
const PerfilEcommerce = (props: perfilProps) => {
  const { SetViewLogin } = props;
  return (
    <div
      className="fixed inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm flex items-end sm:items-center justify-center z-50"
      onClick={() => SetViewLogin(false)}
    >
      <div
        className="bg-white w-full sm:max-w-lg sm:rounded-3xl rounded-t-[2rem] max-h-[95vh] overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-5 z-50 bg-red-500 hover:bg-red-600 text-white rounded-full p-2.5 shadow-xl transition-transform hover:scale-110 active:scale-95"
          onClick={() => SetViewLogin(false)}
        >
          <X size={22} strokeWidth={2.5} />
        </button>

        {/* Header Moderno */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-6 pt-8 pb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl ring-4 ring-white/30">
                <User size={36} className="text-indigo-600" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 border-4 border-white rounded-full"></div>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white mb-1">
                María González
              </h1>
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <Mail size={14} />
                <span>maria.gonzalez@email.com</span>
              </div>
            </div>
          </div>

          {/* Badge Nivel */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-400 rounded-xl p-2">
                  <Trophy size={24} className="text-yellow-900" />
                </div>
                <div>
                  <p className="text-white/80 text-xs font-medium">
                    Tu nivel actual
                  </p>
                  <p className="text-white text-2xl font-bold">Nivel 12</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white/80 text-xs">XP</p>
                <p className="text-white text-lg font-bold">2,150/3,000</p>
              </div>
            </div>
            <div className="mt-3 bg-white/20 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-yellow-300 to-yellow-400 h-full rounded-full transition-all duration-500"
                style={{ width: "72%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Contenido Scrollable */}
        <div
          className="overflow-y-auto"
          style={{ maxHeight: "calc(95vh - 280px)" }}
        >
          <div className="p-6 space-y-6">
            {/* Estadísticas Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-5 border-2 border-yellow-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-yellow-400 rounded-xl p-2">
                    <Coins size={20} className="text-yellow-900" />
                  </div>
                </div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-1">
                  Balance
                </p>
                <p className="text-gray-900 text-3xl font-bold mb-1">$2,450</p>
                <p className="text-green-600 text-xs font-bold">
                  +$150 esta semana
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border-2 border-purple-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-purple-400 rounded-xl p-2">
                    <Star size={20} className="text-purple-900" />
                  </div>
                </div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-1">
                  Puntos
                </p>
                <p className="text-gray-900 text-3xl font-bold mb-1">8,750</p>
                <p className="text-purple-600 text-xs font-bold">
                  +320 puntos hoy
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 border-2 border-blue-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-blue-400 rounded-xl p-2">
                    <Gamepad2 size={20} className="text-blue-900" />
                  </div>
                </div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-1">
                  Juegos
                </p>
                <p className="text-gray-900 text-3xl font-bold mb-1">47</p>
                <p className="text-blue-600 text-xs font-bold">
                  5 juegos activos
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border-2 border-green-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-green-400 rounded-xl p-2">
                    <ShoppingBag size={20} className="text-green-900" />
                  </div>
                </div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-1">
                  Pedidos
                </p>
                <p className="text-gray-900 text-3xl font-bold mb-1">23</p>
                <p className="text-green-600 text-xs font-bold">3 este mes</p>
              </div>
            </div>

            {/* Acción Rápida */}
            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl p-5 shadow-lg transition-all active:scale-[0.98]">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-white/90 text-sm font-medium mb-1">
                    ¿Listo para jugar?
                  </p>
                  <p className="text-white text-lg font-bold">
                    Gana dólares ahora
                  </p>
                </div>
                <div className="bg-white/20 rounded-xl p-3">
                  <Gamepad2 size={28} className="text-white" />
                </div>
              </div>
            </button>

            {/* Juegos Activos */}
            <div>
              <h2 className="text-gray-900 text-lg font-bold mb-4">
                Juegos Activos
              </h2>
              <div className="space-y-3">
                <div className="bg-white rounded-2xl p-4 border-2 border-blue-100 shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-blue-500 rounded-xl p-2.5 flex-shrink-0">
                      <Target size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 font-bold text-base mb-0.5">
                        Trivia Diaria
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Responde preguntas y gana hasta $50
                      </p>
                    </div>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex-shrink-0">
                      +$15
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-blue-900 text-sm font-semibold">
                        Progreso hoy
                      </span>
                      <span className="text-blue-700 text-sm font-bold">
                        5/10
                      </span>
                    </div>
                    <div className="bg-blue-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-blue-600 h-full rounded-full transition-all duration-500"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 border-2 border-purple-100 shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-purple-500 rounded-xl p-2.5 flex-shrink-0">
                      <Zap size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 font-bold text-base mb-0.5">
                        Ruleta de la Suerte
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Gira la ruleta y gana hasta $100
                      </p>
                    </div>
                    <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold flex-shrink-0">
                      +$45
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-xl font-bold shadow-md transition-all active:scale-[0.98]">
                    Girar ruleta ahora
                  </button>
                </div>

                <div className="bg-white rounded-2xl p-4 border-2 border-orange-100 shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-orange-500 rounded-xl p-2.5 flex-shrink-0">
                      <Trophy size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 font-bold text-base mb-0.5">
                        Desafío Semanal
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Completa 10 misiones • Premio: $200
                      </p>
                    </div>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-orange-900 text-sm font-semibold">
                        Misiones completadas
                      </span>
                      <span className="text-orange-700 text-sm font-bold">
                        7/10
                      </span>
                    </div>
                    <div className="bg-orange-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-orange-600 h-full rounded-full transition-all duration-500"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pedidos Recientes */}
            <div>
              <h2 className="text-gray-900 text-lg font-bold mb-4">
                Pedidos Recientes
              </h2>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 rounded-xl p-2.5 flex-shrink-0">
                      <Package size={20} className="text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-bold text-sm mb-0.5">
                        Auriculares Bluetooth
                      </p>
                      <p className="text-gray-500 text-xs">
                        #8945 • Entregado el 15 Dic
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-gray-900 font-bold text-base mb-1">
                        $89
                      </p>
                      <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                        ✓
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-xl p-2.5 flex-shrink-0">
                      <Package size={20} className="text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-bold text-sm mb-0.5">
                        Smartwatch Deportivo
                      </p>
                      <p className="text-gray-500 text-xs">
                        #8946 • En tránsito
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-gray-900 font-bold text-base mb-1">
                        $145
                      </p>
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-full">
                        🚚
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 rounded-xl p-2.5 flex-shrink-0">
                      <Package size={20} className="text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-bold text-sm mb-0.5">
                        Teclado Mecánico RGB
                      </p>
                      <p className="text-gray-500 text-xs">
                        #8940 • Entregado el 8 Dic
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-gray-900 font-bold text-base mb-1">
                        $120
                      </p>
                      <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                        ✓
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Información */}
            <div>
              <h2 className="text-gray-900 text-lg font-bold mb-4">
                Mi Información
              </h2>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-100 rounded-xl p-2.5">
                      <Mail size={20} className="text-gray-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-medium mb-0.5">
                        Email
                      </p>
                      <p className="text-gray-900 font-semibold text-sm">
                        maria.gonzalez@email.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-100 rounded-xl p-2.5">
                      <Phone size={20} className="text-gray-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-medium mb-0.5">
                        Teléfono
                      </p>
                      <p className="text-gray-900 font-semibold text-sm">
                        +57 312 456 7890
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border-2 border-indigo-200">
                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-100 rounded-xl p-2.5 flex-shrink-0">
                      <MapPin size={20} className="text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-gray-700 text-xs font-semibold uppercase tracking-wide">
                          Dirección de envío
                        </p>
                        <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          ACTIVA
                        </span>
                      </div>
                      <p className="text-gray-900 font-bold text-sm mb-1">
                        Carrera 15 #85-23, Apto 804
                      </p>
                      <p className="text-gray-700 text-sm">
                        Usaquén, Bogotá D.C.
                      </p>
                      <p className="text-gray-600 text-sm">Colombia - 110111</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 bg-white px-6 py-4 flex items-center justify-center">
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-bold text-base shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <LogOut size={20} />
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfilEcommerce;
