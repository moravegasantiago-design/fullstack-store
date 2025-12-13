import { ShoppingCart, Heart, Search, Menu, User } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">TechShop</h1>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
              <Heart className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                3
              </span>
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                5
              </span>
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <User className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Buscador móvil */}
        <div className="md:hidden pb-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
