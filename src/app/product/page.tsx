
import ProductList from './ProductList';
import {Product} from '@/app/types/types';
import { getProducts } from '@/app/types/types';



export default async function Home() {
  const products: Product[] = await getProducts();

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-black">Productos Destacados</h1>
      <p className="text-gray-600 mb-6">Descubre nuestros productos más comprados</p>
      <ProductList products={products} />
      <br></br>
    </div>
  );
}
