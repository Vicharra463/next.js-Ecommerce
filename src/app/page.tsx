"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      {/* contenedor principal */}
      <div className="flex justify-between bg-amber-300 ">
        {/* contenedor de imagen */}
        <div className="my-8 ms-[150px]">
          <Image
            src="/shopping.svg"
            alt="icono"
            width={600}
            height={600}
            className="cursor-pointer"
          />
        </div>
        {/* contenedor principal */}
        <div className="z-40 content-center mx-8 text-center">
          <h1 className="text-4xl text-gray-700 font-bold mb-4">
            Bienvenido a Totoro Shop
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Aquí encontrarás una variedad de productos inspirados en Totoro y
            sus amigos.
          </p>
          <button
            className="cursor-pointer px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors "
            onClick={() => router.push("/product")}
          >
            Explorar Productos
          </button>
        </div>
        {/* contenedor imagen */}
        <div className="my-8 mr-[150px]">
          <Image
            src="/shopping-2.svg"
            alt="icono"
            width={600}
            height={600}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* Seccion de promociones */}
      <div className="mt-6">
        {/* Promociones */}
        <div>
          <h1 className="text-black font-bold text-[30px] ml-[260]">
            Promociones Destacadas
          </h1>

          <div>
            <div></div>

            <div></div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
