import { Facebook, Twitter, Instagram } from "lucide-react";
const Footer = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">TechShop</h3>
            <p className="text-sm mb-4 text-gray-400">
              Tu tienda de tecnología y electrónica de confianza. Los mejores
              productos a los mejores precios.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5 text-gray-300" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Twitter className="h-5 w-5 text-gray-300" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Instagram className="h-5 w-5 text-gray-300" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Comprar</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ofertas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Novedades
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Más Vendidos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Ayuda</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Envíos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Devoluciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-3 text-gray-400">
              Suscríbete para recibir ofertas exclusivas
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Enviar
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; 2024 TechShop. Todos los derechos reservados.</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
