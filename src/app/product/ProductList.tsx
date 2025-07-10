'use client';

import { Product } from '@/app/types/types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import Buton from "@/Components/Buton";

export default function ProductList({ products }: { products: Product[] }) {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/product/${id}`);
  };
  
  const [filter, setFilter] = useState('');

  const productofiltro = products.filter(p =>{ if(filter == ''){
    return true;
  }else{
    return p.category === filter;
  }
});
  
  return (
    <div className='flex'>
      <div className='border-2 border-amber-300 min-w-[250px] max-w-[300px] max-h-[240px] p-6 mr-6 space-y-4 rounded-md bg-amber-50'>
        <label className='flex items-center text-black space-x-2 cursor-pointer'>
          <input
            type="checkbox"
            checked={filter === "women's clothing"}
            onChange={() => setFilter("women's clothing")}
            className="accent-amber-600"
          />
          <span>women&apos;s clothing</span>
        </label>

        <label className='flex items-center text-black space-x-2 cursor-pointer'>
          <input
            type="checkbox"
            checked={filter === "men's clothing"}
            onChange={() => setFilter("men's clothing")}
            className="accent-amber-600"
          />
          <span>men&apos;s clothing</span>
        </label>

        <label className='flex items-center text-black space-x-2 cursor-pointer'>
          <input
            type="checkbox"
            checked={filter === "electronics"}
            onChange={() => setFilter("electronics")}
            className="accent-amber-600"
          />
          <span>electronics</span>
        </label>
        
        <label className='flex items-center text-black space-x-2 cursor-pointer'>
          <input
            type="checkbox"
            checked={filter === "jewelery"}
            onChange={() => setFilter("jewelery")}
            className="accent-amber-600"
          />
          <span>jewelery</span>
        </label>
     
        <button
          type='button'
          onClick={() => setFilter('')}
          className='h-[30px] min-w-[210px] max-w-[220px] px-4 border-2 bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700 rounded-md cursor-pointer text-white transition-colors duration-300'>
          Limpiar Filtro
        </button>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productofiltro.map((product) => (
          <article
            key={product.id}
            onClick={() => handleClick(product.id)}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer border border-amber-200 hover:border-amber-300"
          >
            <div className="relative aspect-square  flex items-center justify-center p-4">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="object-contain max-h-full max-w-full"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2 min-h-[3.5rem] text-gray-950 hover:text-amber-600">
                {product.title}
              </h2>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-green-600">
                  ${product.price}
                </span>
                {product.rating && (
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="text-amber-400 mr-1">★</span>
                    <span>{product.rating.rate}</span>
                    <span className="ml-1">({product.rating.count})</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-500 capitalize mb-3">{product.category}</p>
              <Buton prop={product} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
