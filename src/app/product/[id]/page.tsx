
import { getProductsbyid } from "@/app/types/types";
import { productid } from "@/app/types/types";
import Image from "next/image";
import Boton from "@/Components/boton";
export default async function ProductPage({params,}: {params: Promise<{ id: string }> ;}) {
   const resolvedParams = await params; 
  const numero = Number(resolvedParams.id);
  const productos: productid = await getProductsbyid(numero);
  return (
    <div className="text-black bg-gray-100 py-12 px-6">
      <div
        key={productos.id}
        className="p-8 max-w-7xl mx-auto border-2 border-gray-300 bg-white rounded-lg shadow-lg "
      >
        <div className="flex gap-8">
          <div className="flex flex-col items-center flex-1 w-[350px] h-[500px] overflow-hidden bg-white">
            <Image
              src={productos.image}
              alt={productos.title}
              width={350}
              height={500}
              className="mb-6 rounded-lg border-2 border-gray-200 p-5 object-cover"
            />
          </div>

          <div className="  p-6 flex-1 rounded-lg py-[25px] ">
            <h3 className="text-3xl font-serif mb-6 text-center text-[27px]">
              {productos.title}
            </h3>

            <div className="flex items-center justify-between mb-6  ">
              <p className="text-blak mb-[5px] text-lg pl-[5px] mt-[10px] px-2 font-light">
                {" "}
                S/.{productos.price}
              </p>

              <div className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-300 ms-1 cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
                <svg
                  className="w-6 h-6 ms-1 text-gray-300 dark:text-gray-500 cursor-pointer"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
            </div>
            <div className="border-[2px] border-gray-300 mb-[15px]"></div>

            <p className="text-gray-800 mb-4 leading-relaxed">
              {productos.description}
            </p>
            <div className="border-[2px] border-gray-300 mb-[15px]"></div>
            <Boton
              id={productos.id}
              title={productos.title}
              price={productos.price}
              image={productos.image}
            />
        </div>
      </div>
    </div>
    </div>
  );
}
