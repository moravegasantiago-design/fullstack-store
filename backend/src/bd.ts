import {
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_NAME,
} from "./secretVariable";
import pkg from "pg";
import { userProps } from "./server";
const { Pool } = pkg;
export const pool = new Pool({
  host: DB_HOST,
  password: DB_PASSWORD,
  port: Number(DB_PORT),
  user: DB_USER,
  database: DB_NAME,
  ssl: { rejectUnauthorized: false },
});

export const userInsert = async (props: userProps): Promise<boolean> => {
  const { name, email, password, created_at } = props;
  const query =
    "INSERT INTO users (name, email, password, created_at) VALUES($1, $2, $3, $4)";
  try {
    const values = [name, email, password, created_at];
    await pool.query(query, values);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
type ProductType = {
  ref: string;
  nombre: string;
  precio: number;
  precioOriginal: null | number;
  descuento: 0 | number;
  categoria: string;
  tags: string[];
  imagen: string;
  rating: number;
  reviews: number;
  stock: boolean;
  favorite?: boolean;
  amount?: number;
};
export const selectUser = async (email: string): Promise<userProps | null> => {
  const query =
    "SELECT id, name, email, password, created_at FROM users WHERE email=$1";
  try {
    const req = await pool.query(query, [email]);
    return req.rows[0];
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const bringProducts = async (): Promise<ProductType[] | null> => {
  try {
    const query = `SELECT p.*, c.name AS category, array_agg(t.name) AS tags
    FROM products p JOIN products_tags pt ON p.id = pt.product_id
    JOIN categories c ON p.categorie_id = c.id
    JOIN tags t ON pt.tag_id = t.id GROUP BY p.id, c.name`;
    const req = await pool.query<ProductType>(query);
    return req.rows;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const createOrder = async (props: {
  userId: number;
}): Promise<number | undefined> => {
  const { userId } = props;
  try {
    const query = "INSERT INTO orders(user_id) VALUES($1) RETURNING id";
    const req = await pool.query<{ id: number }>(query, [userId]);
    return req.rows[0].id;
  } catch (err) {
    console.error(err);
    return;
  }
};
type itemsProps = {
  id: string;
  amount: number;
  price: number;
};
export const itemsOrder = async (props: {
  orderId: number;
  items: itemsProps;
}): Promise<boolean> => {
  try {
    const { orderId, items } = props;
    const query = `INSERT INTO orders_items (orders_id, product_id, quantity, price)
      VALUES ($1, $2, $3, $4)`;
    const values = [orderId, items.id, items.amount, items.price];
    await pool.query(query, values);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const bringShopProduct = async (props: {
  id: number;
}): Promise<
  | {
      product_id: string;
      name: string;
      image: string;
      quantity: string;
      price: number;
      date: string;
    }[]
  | null
> => {
  try {
    const { id } = props;
    const query = `SELECT i.product_id, i.quantity, i.price AS price, o.create_at AS date, p.name AS name, p.image AS image
    FROM orders_items i JOIN orders o ON o.id = i.orders_id
    JOIN products p ON p.id = i.product_id WHERE o.user_id=$1`;
    const data = await pool.query(query, [id]);
    return data.rows;
  } catch (error) {
    console.error(error);
    return null;
  }
};

