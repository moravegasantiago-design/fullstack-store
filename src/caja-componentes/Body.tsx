import { ShoppingCart, Heart, Star } from "lucide-react";
const Body = () => {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Productos Destacados
        </h2>
        <p className="text-gray-600">
          Descubre nuestra selección de productos premium
        </p>
      </div>

      {/* ========== TABS (solo botones estáticos) ========== */}
      <div className="mb-8 border-b border-gray-200">
        <div className="flex gap-1 overflow-x-auto pb-px">
          <button className="px-6 py-3 font-medium text-blue-600 border-b-2 border-blue-600 whitespace-nowrap">
            Todos
          </button>
          <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap">
            Electrónica
          </button>
          <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap">
            Moda
          </button>
          <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap">
            Hogar
          </button>
          <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap">
            Deportes
          </button>
          <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap">
            Libros
          </button>
        </div>
      </div>

      {/* ========== GRID DE PRODUCTOS ========== */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {/* ========== TARJETA 1 ========== */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group">
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
              alt="Auriculares"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <span className="absolute top-3 left-3 bg-red-500 text-white px-2.5 py-1 text-xs font-bold rounded-md shadow-lg">
              -25% OFF
            </span>
            <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full h-9 w-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg">
              <Heart className="h-4 w-4 text-gray-700 hover:text-red-500" />
            </button>
          </div>

          <div className="p-4">
            <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-2">
              Electrónica
            </p>

            <h3 className="font-bold text-sm leading-tight text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
              Auriculares Inalámbricos Premium Sony WH-1000XM5
            </h3>

            <div className="flex items-center gap-1 mb-3">
              <div className="flex gap-0.5">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <span className="text-xs text-gray-600 font-medium">(2,847)</span>
            </div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-gray-900">$299</span>
              <span className="text-sm text-gray-400 line-through">$399</span>
            </div>

            <button className="w-full h-10 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Agregar al carrito
            </button>
          </div>
        </div>

        {/* ========== TARJETA 2 ========== */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group">
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
              alt="Reloj"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <span className="absolute top-3 left-3 bg-green-500 text-white px-2.5 py-1 text-xs font-bold rounded-md shadow-lg">
              NUEVO
            </span>
            <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full h-9 w-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg">
              <Heart className="h-4 w-4 text-gray-700 hover:text-red-500" />
            </button>
          </div>

          <div className="p-4">
            <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-2">
              Wearables
            </p>

            <h3 className="font-bold text-sm leading-tight text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
              Apple Watch Series 9 GPS 45mm
            </h3>

            <div className="flex items-center gap-1 mb-3">
              <div className="flex gap-0.5">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-gray-300 text-gray-300" />
              </div>
              <span className="text-xs text-gray-600 font-medium">(1,234)</span>
            </div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-gray-900">$429</span>
            </div>

            <button className="w-full h-10 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Agregar al carrito
            </button>
          </div>
        </div>

        {/* ========== TARJETA 3 ========== */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group">
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400"
              alt="Gafas"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full h-9 w-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg">
              <Heart className="h-4 w-4 text-gray-700 hover:text-red-500" />
            </button>
          </div>

          <div className="p-4">
            <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-2">
              Accesorios
            </p>

            <h3 className="font-bold text-sm leading-tight text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
              Gafas de Sol Ray-Ban Polarizadas
            </h3>

            <div className="flex items-center gap-1 mb-3">
              <div className="flex gap-0.5">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <span className="text-xs text-gray-600 font-medium">(856)</span>
            </div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-gray-900">$189</span>
              <span className="text-sm text-gray-400 line-through">$250</span>
            </div>

            <button className="w-full h-10 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Agregar al carrito
            </button>
          </div>
        </div>

        {/* ========== TARJETA 4 ========== */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group">
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400"
              alt="Smartwatch"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <span className="absolute top-3 left-3 bg-purple-500 text-white px-2.5 py-1 text-xs font-bold rounded-md shadow-lg">
              EXCLUSIVO
            </span>
            <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full h-9 w-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg">
              <Heart className="h-4 w-4 text-gray-700 hover:text-red-500" />
            </button>
          </div>

          <div className="p-4">
            <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-2">
              Fitness
            </p>

            <h3 className="font-bold text-sm leading-tight text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
              Fitbit Charge 6 Monitor de Actividad
            </h3>

            <div className="flex items-center gap-1 mb-3">
              <div className="flex gap-0.5">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-gray-300 text-gray-300" />
              </div>
              <span className="text-xs text-gray-600 font-medium">(643)</span>
            </div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-gray-900">$149</span>
            </div>

            <button className="w-full h-10 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Agregar al carrito
            </button>
          </div>
        </div>

        {/* ========== TARJETA 5 ========== */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group">
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400"
              alt="Teclado"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <span className="absolute top-3 left-3 bg-orange-500 text-white px-2.5 py-1 text-xs font-bold rounded-md shadow-lg">
              -15%
            </span>
            <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full h-9 w-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg">
              <Heart className="h-4 w-4 text-gray-700 hover:text-red-500" />
            </button>
          </div>

          <div className="p-4">
            <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-2">
              Gaming
            </p>

            <h3 className="font-bold text-sm leading-tight text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
              Teclado Mecánico RGB Gaming
            </h3>

            <div className="flex items-center gap-1 mb-3">
              <div className="flex gap-0.5">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <span className="text-xs text-gray-600 font-medium">(1,932)</span>
            </div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-gray-900">$129</span>
              <span className="text-sm text-gray-400 line-through">$152</span>
            </div>

            <button className="w-full h-10 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Agregar al carrito
            </button>
          </div>
        </div>

        {/* ========== TARJETA 6 ========== */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group">
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400"
              alt="Cámara"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full h-9 w-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg">
              <Heart className="h-4 w-4 text-gray-700 hover:text-red-500" />
            </button>
          </div>

          <div className="p-4">
            <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-2">
              Fotografía
            </p>

            <h3 className="font-bold text-sm leading-tight text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
              Cámara Mirrorless Sony Alpha A7 IV
            </h3>

            <div className="flex items-center gap-1 mb-3">
              <div className="flex gap-0.5">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <span className="text-xs text-gray-600 font-medium">(412)</span>
            </div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-gray-900">$2,499</span>
            </div>

            <button className="w-full h-10 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
