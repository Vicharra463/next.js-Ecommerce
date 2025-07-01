"use client";

import { useState } from "react";
import Image from "next/image";
import { Props } from "@/app/types/types";
import { savelocal } from "@/app/types/types";


export default function Boton({ id, title, price, image }: Props) {
  const [cantidad, setCantidad] = useState(1);
  const producto = {
    id,
    title,
    price,
    image,
    cantidad,
  };
  const handleIncrease = () => {
    setCantidad(cantidad + 1);
  };
  const handleDecrease = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    } else {
    }
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <button
        type="button"
        className="flex items-center gap-2  mt-[40px]  px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-800"
        onClick={() => {
          console.log(savelocal(producto));
        }}
      >
        <Image src="/Carro.svg" alt="Ícono de carro" width={24} height={24} />
        Agregar
      </button>
      <div className="w-[250px] max-w-sm relative mt-4">
        <label className="block mb-1 text-sm text-slate-600">Cantidad</label>
        <div className="relative">
          <button
            id="decreaseButton"
            type="button"
            className="absolute right-9 top-1 rounded-md border border-transparent p-1.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={handleDecrease}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
            </svg>
          </button>

          <input
            id="amountInput"
            type="number"
            value={cantidad}
            readOnly
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />

          <button
            id="increaseButton"
            type="button"
            className="absolute right-1 top-1 rounded-md border border-transparent p-1.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={handleIncrease}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
