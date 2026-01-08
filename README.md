#  TechShop - E-commerce Fullstack

E-commerce completo de productos tecnológicos desarrollado con React, Node.js, Express y PostgreSQL.

---

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Requisitos Previos](#requisitos-previos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación Local](#instalación-local)
- [Variables de Entorno](#variables-de-entorno)
- [Base de Datos](#base-de-datos)
- [Ejecutar el Proyecto](#ejecutar-el-proyecto)
- [API Endpoints](#api-endpoints)
- [Despliegue en Producción](#despliegue-en-producción)

---

## Descripción

TechShop es una tienda online fullstack con las siguientes funcionalidades:

- Catálogo de productos con categorías y filtros
- Sistema de búsqueda con sugerencias en tiempo real
- Carrito de compras persistente
- Autenticación de usuarios (registro/login)
- Proceso de checkout
- Historial de pedidos
- Panel de perfil de usuario

---

## Tecnologías

### Frontend
| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| React | 18.x | Librería UI |
| TypeScript | 5.x | Tipado estático |
| Tailwind CSS | 3.x | Framework CSS |
| Vite | 5.x | Build tool |
| Lucide React | - | Iconos |

### Backend
| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| Node.js | 18+ | Runtime |
| Express | 4.x | Framework HTTP |
| PostgreSQL | 15+ | Base de datos |
| JWT | - | Autenticación |
| bcrypt | - | Encriptación |
| cookie-parser | - | Manejo de cookies |

---

## Requisitos Previos

Antes de empezar, asegúrate de tener instalado:

- **Node.js** (v18 o superior) - [Descargar](https://nodejs.org/)
- **PostgreSQL** (v15 o superior) - [Descargar](https://www.postgresql.org/download/)
- **Git** - [Descargar](https://git-scm.com/)
- **npm** o **yarn**

Para verificar las versiones:

```bash
node --version
npm --version
psql --version
```

---

## Estructura del Proyecto

```
fullstack-store/
│
├── my-app/                    # Frontend (React + Vite)
│   ├── src/
│   │   ├── App.tsx            # Componente principal
│   │   ├── caja-componentes/  # Componentes React
│   │   │   ├── Header.tsx
│   │   │   ├── Body.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── CardSlider.tsx
│   │   │   ├── Checkout.tsx
│   │   │   ├── login.tsx
│   │   │   └── myProfile.tsx
│   │   └── utils/             # Lógica y utilidades
│   │       ├── CartShop.ts
│   │       ├── ProductLogic.tsx
│   │       ├── SearchSystem.ts
│   │       ├── loginSystem.ts
│   │       ├── checkout.ts
│   │       └── GetDiccionary.ts
│   ├── package.json
│   └── vercel.json            # Config de Vercel
│
├── backend/                   # Backend (Node + Express)
│   ├── src/
│   │   ├── server.ts          # Servidor Express y rutas
│   │   ├── bd.ts              # Conexión y queries PostgreSQL
│   │   ├── cookieSystem.ts    # Generación de JWT
│   │   ├── encryptPassword.ts # Hash de contraseñas
│   │   └── secretVariable.ts  # Variables de entorno
│   ├── .env                   # Variables de entorno (NO subir a Git)
│   └── package.json
│
└── README.md
```

---

## Instalación Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/moravegasantiago-design/fullstack-store.git
cd fullstack-store
```

### 2. Instalar dependencias del Backend

```bash
cd backend
npm install
```

### 3. Instalar dependencias del Frontend

```bash
cd ../my-app
npm install
```

---

## Variables de Entorno

### Backend (.env)

Crea un archivo `.env` dentro de la carpeta `backend/`:

```bash
cd backend
touch .env
```

Agrega las siguientes variables:

```env
# Servidor
PORT=3000

# Base de Datos PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_NAME=techshop
DB_USER=postgres
DB_PASSWORD=tu_password_de_postgres

# JWT (genera una clave secreta segura)
JWT_SECRET=TuClaveSecretaSeguraAqui123456789
```

#### Explicación de cada variable:

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `PORT` | Puerto del servidor backend | `3000` |
| `DB_HOST` | Host de PostgreSQL (local o remoto) | `localhost` |
| `DB_PORT` | Puerto de PostgreSQL | `5432` |
| `DB_NAME` | Nombre de la base de datos | `techshop` |
| `DB_USER` | Usuario de PostgreSQL | `postgres` |
| `DB_PASSWORD` | Contraseña de PostgreSQL | `tu_password` |
| `JWT_SECRET` | Clave secreta para firmar tokens JWT | `clave_segura_123` |

### Frontend

El frontend usa la URL del backend. Si trabajas localmente, ya está configurado para `http://localhost:3000`.

Si cambias el puerto o usas producción, actualiza las URLs de fetch en los archivos:

- `src/App.tsx`
- `src/caja-componentes/login.tsx`
- `src/caja-componentes/myProfile.tsx`
- `src/caja-componentes/Checkout.tsx`
- `src/utils/checkout.ts`

---

## Base de Datos

### 1. Crear la base de datos

Abre PostgreSQL (pgAdmin, psql, o tu cliente preferido) y ejecuta:

```sql
CREATE DATABASE techshop;
```

### 2. Conectar a la base de datos

```sql
\c techshop
```

### 3. Crear las tablas

Ejecuta el siguiente script SQL:

```sql
-- Tabla de usuarios
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de categorías
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

-- Tabla de tags
CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

-- Tabla de productos
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  "precioOriginal" DECIMAL(10,2),
  discount INTEGER DEFAULT 0,
  categorie_id INTEGER REFERENCES categories(id),
  image TEXT,
  rating DECIMAL(2,1) DEFAULT 0,
  reviews INTEGER DEFAULT 0,
  stock BOOLEAN DEFAULT true
);

-- Relación productos-tags (muchos a muchos)
CREATE TABLE products_tags (
  product_id INTEGER REFERENCES products(id),
  tag_id INTEGER REFERENCES tags(id),
  PRIMARY KEY (product_id, tag_id)
);

-- Tabla de órdenes
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  create_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de items de órdenes
CREATE TABLE orders_items (
  id SERIAL PRIMARY KEY,
  orders_id INTEGER REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL
);
```

### 4. Insertar datos de prueba

```sql
-- Categorías
INSERT INTO categories (name) VALUES 
  ('Audio'),
  ('Smartphones'),
  ('Laptops'),
  ('Gaming'),
  ('Wearables');

-- Tags
INSERT INTO tags (name) VALUES 
  ('auriculares'),
  ('bluetooth'),
  ('inalambrico'),
  ('apple'),
  ('samsung'),
  ('gaming'),
  ('portatil');

-- Productos de ejemplo
INSERT INTO products (name, price, "precioOriginal", discount, categorie_id, image, rating, reviews, stock) VALUES 
  ('Auriculares Sony WH-1000XM5', 349.99, 399.99, 13, 1, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500', 4.8, 250, true),
  ('iPhone 15 Pro Max', 1199.99, NULL, 0, 2, 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500', 4.9, 500, true),
  ('MacBook Pro M3', 1999.99, 2199.99, 9, 3, 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500', 4.7, 180, true),
  ('PlayStation 5', 499.99, 549.99, 9, 4, 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500', 4.6, 320, true),
  ('Apple Watch Series 9', 399.99, 449.99, 11, 5, 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500', 4.5, 200, true);

-- Relaciones productos-tags
INSERT INTO products_tags (product_id, tag_id) VALUES 
  (1, 1), (1, 2), (1, 3),
  (2, 4),
  (3, 4), (3, 7),
  (4, 6),
  (5, 4), (5, 3);
```

### 5. Verificar los datos

```sql
SELECT p.*, c.name AS category 
FROM products p 
JOIN categories c ON p.categorie_id = c.id;
```

---

## Ejecutar el Proyecto

### Opción 1: Terminales separadas

**Terminal 1 - Backend:**

```bash
cd backend
npm run dev
```

El servidor estará en: `http://localhost:3000`

**Terminal 2 - Frontend:**

```bash
cd my-app
npm run dev
```

La aplicación estará en: `http://localhost:5173`

### Verificar que funciona:

1. **Backend:** Abre `http://localhost:3000/product` - Debe mostrar los productos en JSON
2. **Frontend:** Abre `http://localhost:5173` - Debe mostrar la tienda

---

## API Endpoints

### Autenticación

| Método | Ruta | Descripción | Body |
|--------|------|-------------|------|
| POST | `/auth/register` | Registrar usuario | `{name, email, password}` |
| POST | `/auth/login` | Iniciar sesión | `{email, password}` |
| POST | `/auth/closet` | Cerrar sesión | - |
| GET | `/me` | Usuario actual | - |

### Productos

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/product` | Listar todos los productos |
| GET | `/product/shop` | Historial de compras del usuario |

### Checkout

| Método | Ruta | Descripción | Body |
|--------|------|-------------|------|
| POST | `/checkout` | Procesar compra | `{products: [...]}` |

### Ejemplos de uso:

**Registrar usuario:**

```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Juan","email":"juan@email.com","password":"123456"}'
```

**Obtener productos:**

```bash
curl http://localhost:3000/product
```

---

## Despliegue en Producción

### Frontend (Vercel)

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com) y conecta tu repositorio
3. Selecciona la carpeta `my-app` como root
4. Asegúrate de tener el archivo `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Backend (Render)

1. Ve a [render.com](https://render.com) y crea un nuevo Web Service
2. Conecta tu repositorio de GitHub
3. Configura:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`

4. Agrega las variables de entorno en **Environment**:

```env
PORT=3000
DB_HOST=tu-host-interno-de-postgres
DB_PORT=5432
DB_NAME=tu-database
DB_USER=tu-usuario
DB_PASSWORD=tu-password
JWT_SECRET=tu-clave-secreta
```

### Base de Datos (Render PostgreSQL)

1. Crea un nuevo PostgreSQL en Render
2. Usa el host **interno** para el backend (sin `.render.com`)
3. Crea las tablas usando el script SQL de arriba
4. Inserta los datos de prueba

### Configuración de Cookies para Producción

En `cookieSystem.ts`, asegúrate de tener:

```typescript
res.cookie("token", token, {
  httpOnly: true,
  secure: true,        // true para HTTPS
  sameSite: "none",    // Permite cross-domain
  maxAge: 24 * 60 * 60 * 1000,
});
```

### Actualizar URLs en Frontend

Cambia las URLs de `http://localhost:3000` a tu URL de Render en todos los fetch.

---

## Solución de Problemas

### Error: "CORS blocked"

Verifica que el frontend esté en la lista de `origin` en `server.ts`

### Error: "Connection refused" a PostgreSQL

- Verifica que PostgreSQL esté corriendo
- Verifica las credenciales en `.env`

### Error: "data: null" en /product

- Verifica que las tablas existan y tengan datos
- Revisa los logs del backend

### Error 404 en rutas de React (producción)

Asegúrate de tener `vercel.json` con los rewrites configurados

### Error: Cookies no funcionan en producción

- Usa `secure: true` y `sameSite: "none"` en las cookies
- Asegúrate de que el backend use HTTPS

---

## Licencia

Este proyecto está bajo la Licencia MIT.

---

## Autor

Desarrollado por [@moravegasantiago-design](https://github.com/moravegasantiago-design)

⭐ Si te gustó el proyecto, dale una estrella en GitHub!