export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type productid = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export function savelocal(producto: Props): object {
  localStorage.setItem("user", JSON.stringify(producto));
  return {
    message:
      "Producto Guardado correctamente  -> " +
      producto.id +
      " " +
      producto.title +
      " " +
      producto.price +
      " " +
      producto.image,
  };
}

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
}

export async function getProductsbyid(codig: number): Promise<productid> {
  const res = await fetch(`https://fakestoreapi.com/products/${codig}`);

  const productsid = await res.json();
  console.log("este es el producto " + productsid.id);
  return productsid;
}

export type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
};

