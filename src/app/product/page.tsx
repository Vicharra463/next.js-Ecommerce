
import ProductList from './ProductList';
import {Product} from '@/app/types/types';
import { getProducts } from '@/app/types/types';
import Link from 'next/link';



export default async function Home() {
  const products: Product[] = await getProducts();

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-black">Productos Destacados</h1>
      <p className="text-gray-600 mb-6">Descubre nuestros productos más comprados</p>
             <nav 
  aria-label="Navegación de migas de pan" 
  className="mb-8"
>
  <ol className="flex items-center space-x-2 text-sm">
    <li>
      <Link 
        href="/" 
        className="text-gray-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
      >
        <svg 
          className="w-4 h-4 mr-1" 
          fill="currentColor" 
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        Inicio
      </Link>
    </li>
    
    <li className="flex items-center">
      <svg 
        className="w-4 h-4 text-gray-400 mx-2" 
        fill="currentColor" 
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
      <Link 
        href="/product" 
        className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
      >
        Productos
      </Link>
    </li>
  </ol>
</nav>
      <ProductList products={products} />
      <br></br>
    </div>
  );
}
