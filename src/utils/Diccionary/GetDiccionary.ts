export const CATEGORY_INFO = {
  Audio: {
    title: "Audio y Sonido",
    description: "Auriculares, micrófonos y altavoces de alta calidad",
  },
  Wearables: {
    title: "Wearables",
    description: "Smartwatches y dispositivos para llevar contigo",
  },
  Fitness: {
    title: "Fitness y Salud",
    description: "Monitores de actividad y rastreadores deportivos",
  },
  Laptops: {
    title: "Laptops y Portátiles",
    description: "Las mejores laptops para trabajo y gaming",
  },
  Smartphones: {
    title: "Smartphones",
    description: "Los últimos modelos de iPhone, Samsung y Google",
  },
  Tablets: {
    title: "Tablets",
    description: "iPads y tablets Android para trabajo y entretenimiento",
  },
  Cámaras: {
    title: "Cámaras y Fotografía",
    description: "Cámaras profesionales y accesorios fotográficos",
  },
  Drones: {
    title: "Drones",
    description: "Drones para fotografía aérea y recreación",
  },
  Accesorios: {
    title: "Accesorios Tech",
    description: "Cables, cargadores y accesorios esenciales",
  },
  Gaming: {
    title: "Gaming",
    description: "Periféricos, consolas y accesorios para gamers",
  },
  Monitores: {
    title: "Monitores",
    description: "Pantallas 4K, gaming y profesionales",
  },
  Consolas: {
    title: "Consolas de Videojuegos",
    description: "PlayStation, Xbox, Nintendo y accesorios",
  },
  Streaming: {
    title: "Streaming y Creación",
    description: "Equipo profesional para streamers y creadores",
  },
  "Smart Home": {
    title: "Casa Inteligente",
    description: "Dispositivos para automatizar tu hogar",
  },
  Almacenamiento: {
    title: "Almacenamiento",
    description: "SSDs, HDDs y soluciones de almacenamiento",
  },
  Redes: {
    title: "Redes y Conectividad",
    description: "Routers, mesh systems y equipos de red",
  },
  VR: {
    title: "Realidad Virtual",
    description: "Cascos VR y experiencias inmersivas",
  },
  Componentes: {
    title: "Componentes PC",
    description: "Todo para armar o mejorar tu computadora",
  },
  Mobiliario: {
    title: "Mobiliario Gaming y Oficina",
    description: "Sillas, escritorios y muebles ergonómicos",
  },
} as const;

export const GetDiccinary = (option?: string) => {
  const item = option
    ? CATEGORY_INFO[option as keyof typeof CATEGORY_INFO] || {
        title: option,
        description: "Contenido relacionado con tu búsqueda",
      }
    : undefined;
  return (
    item ?? {
      title: "Productos Destacados",
      description: "Descubre nuestra selección de productos premium",
    }
  );
};

export default GetDiccinary;
