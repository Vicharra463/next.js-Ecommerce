"use client";

import Image from "next/image";
import React, { useContext } from "react";
import { ShoppingCartContext } from "@/context/index"; 
import { Product } from '@/app/types/types';

interface ButonProps {
  prop: Product;
}

export default function Boton({ prop }: ButonProps) {

  const { addToCart } = useContext(ShoppingCartContext); 

  return (
    <div className="flex items-center justify-between mb-6">
      <button
        type="button"
        className="flex items-center gap-2 mt-[40px] px-4 py-2 bg-amber-400 text-white rounded-lg cursor-pointer hover:bg-gray-200 w-[200px] justify-center"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addToCart(prop);
        }}
      >
        <Image src="/Carro.svg" alt="Ícono de carro" width={24} height={24} />
        Agregar
      </button>
    </div>
  );
}
