'use client';

import { Product } from '@/app/types/types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductList({ products }: { products: Product[] }) {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/product/${id}`);
  };

  const [filter, setFilter] = useState('');

  const productofiltro = products.filter(p =>
    filter === '' ? true : p.category === filter
  );

  return (
    <div className='flex'>
      <div className='border-2 border-gray-200 min-w-[250px] max-w-[300px] max-h-[210px] p-6 mr-6 space-y-4 rounded-md bg-white'>
        <label className='flex items-center text-black space-x-2'>
          <input
            type="checkbox"
            checked={filter === "women's clothing"}
            onChange={() => setFilter("women's clothing")}
          />
          <span>women&apos;s clothing</span>
        </label>

        <label className='flex items-center text-black space-x-2'>
          <input
            type="checkbox"
            checked={filter === "men's clothing"}
            onChange={() => setFilter("men's clothing")}
          />
          <span>men&apos;s clothing</span>
        </label>

        <label className='flex items-center text-black space-x-2'>
          <input
            type="checkbox"
            checked={filter === "electronics"}
            onChange={() => setFilter("electronics")}
          />
          <span>electronics</span>
        </label>
        
        <button
          type='button'
          onClick={() => setFilter('')}
          className=' h-[30px] min-w-[210px] max-w-[220px] px-4 bg- border-2 bg-blue-600 rounded-md cursor-pointer text-white'>
          Limpiar Filtro
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productofiltro.map((product) => (
          <article
            key={product.id}
            onClick={() => handleClick(product.id)}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
          >
            <div className="relative aspect-square bg-gray-50 flex items-center justify-center p-4">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="object-contain max-h-full max-w-full"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2 min-h-[3.5rem] text-gray-950">
                {product.title}
              </h2>

              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-green-600">
                  ${product.price}
                </span>

                {product.rating && (
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span>{product.rating.rate}</span>
                    <span className="ml-1">({product.rating.count})</span>
                  </div>
                )}
              </div>

              <p className="text-sm text-gray-500 capitalize mb-3">{product.category}</p>

              <button className="cursor-pointer w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
               onClick={
                (e) => {
                 e.stopPropagation();
                alert("haz agregado un producto al carrito")}}>
                Agregar al Carrito
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
