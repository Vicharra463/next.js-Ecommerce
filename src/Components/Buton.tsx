'use client';

import Image from "next/image";
import { Props } from "@/app/types/types";
import { savelocal } from "@/app/types/types";

export default function Boton({id , title, price, image} : Props) {

     const producto = {
      id,
      title,
      price,
      image
    };
  
    return(
      <div className="flex items-center justify-between mb-6">
                 <button
                   type="button"
                   className="flex items-center gap-2  mt-[40px]  px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-800 w-[200px]  justify-center"
                   onClick={(e) => {
                    e.stopPropagation();
                    console.log( savelocal(producto));
                    }}
                 >
                   <Image
                     src="/Carro.svg"
                     alt="Ícono de carro"
                     width={24}
                     height={24}
                   />
                   Agregar
                 </button>
          
         </div>
    );
}