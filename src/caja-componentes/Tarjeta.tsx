import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star } from "lucide-react";

export function Tarjeta() {
  return (
    <Card className="w-full max-w-md overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
      <div className="relative h-96 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
          alt="Producto"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <Badge className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1.5 text-sm font-bold">
          -25% OFF
        </Badge>

        <Button
          size="icon"
          variant="secondary"
          className="absolute top-4 right-4 rounded-full h-12 w-12 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>

      <CardHeader className="pb-4 pt-6 px-6">
        <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider mb-2">
          Electrónica Premium
        </p>

        <h3 className="font-bold text-2xl leading-tight mb-3 text-gray-900">
          Auriculares Inalámbricos Sony WH-1000XM5
        </h3>

        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-0.5">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          </div>
          <span className="text-sm font-medium text-gray-700">
            4.9 <span className="text-gray-500">(2,847 reseñas)</span>
          </span>
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        <p className="text-base text-gray-600 leading-relaxed mb-6">
          Experimenta un sonido excepcional con cancelación de ruido
          inteligente. Diseño premium, cómodo para todo el día. Batería de hasta
          30 horas.
        </p>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl font-bold text-gray-900">$299.99</span>
          <span className="text-xl text-gray-400 line-through">$399.99</span>
          <Badge variant="secondary" className="ml-auto">
            Ahorra $100
          </Badge>
        </div>

        <div className="flex gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>En stock</span>
          </div>
          <span>•</span>
          <span>Envío gratis</span>
          <span>•</span>
          <span>Garantía 2 años</span>
        </div>
      </CardContent>

      <CardFooter className="gap-3 px-6 pb-6 pt-0">
        <Button className="flex-1 h-12 text-base font-semibold gap-2 bg-blue-600 hover:bg-blue-700">
          <ShoppingCart className="h-5 w-5" />
          Agregar al carrito
        </Button>

        <Button
          size="icon"
          variant="outline"
          className="rounded-full h-12 w-12 border-2 hover:border-blue-600 hover:text-blue-600"
        >
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}
