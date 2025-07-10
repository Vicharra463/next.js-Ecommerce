"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "@/context/index";
import { Product } from "@/app/types/types";

function definirprecio(cart: Product[]) {
  let precio = 0;
  let primero = 0;
  cart.forEach((Product) => {
    primero = +Product.price;
    precio = precio + primero;
  });
  return precio;
}

export default function Header() {
  const router = useRouter();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, removecart} = useContext(ShoppingCartContext);

  return (
    <>
      <header className="bg-amber-300 shadow-md p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo + Nombre */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-gray-800 transition-colors hover:text-amber-600"
          >
            <Image
              src="/icon.svg"
              alt="icono"
              width={32}
              height={32}
              className="cursor-pointer"
            />
            <span>Totoro Shop</span>
          </Link>

          {/* Navegación */}
          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-amber-600 transition-colors text-base"
            >
              Inicio
            </Link>
            <Link
              href="/product"
              className="text-gray-600 hover:text-amber-600 transition-colors text-base"
            >
              Productos
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-amber-600 transition-colors text-base"
            >
              Acerca de
            </Link>
          </nav>

          {/* Carrito */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Abrir carrito de compras"
          >
            {/* Ícono del carrito */}
            <Image
              src="/carro.svg"
              alt="Carrito de compras"
              width={24}
              height={24}
              className="cursor-pointer"
            />

            {/* Contador */}
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-[16px] bg-amber-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}

            {/* Texto "Carrito" */}
            <span className="ml-2 hover:text-amber-600 cursor-pointer">
              Carrito
            </span>
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Carrito Deslizable */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-amber-50 shadow-lg transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header del carrito */}
        <div className="flex items-center justify-between p-4 border-b border-amber-200 bg-amber-100">
          <h2 className="text-lg font-semibold text-gray-900">
            Carrito de Compras
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-md hover:bg-amber-200 transition-colors"
            aria-label="Cerrar carrito"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Contenido del carrito */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Aquí van los productos del carrito */}
          <div className="text-center py-8">
            {cart.map((product: Product) => (
              <div
                key={product.id}
                className="mb-4 flex items-center border-amber-300 border-2 p-2 rounded-lg gap-4 bg-white hover:bg-amber-50 transition-colors"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={80}
                  className="object-contain rounded-md"
                />
                <div className="flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-black hover:text-amber-600 cursor-pointer"
                  onClick={() => {router.push(`/product/${product.id}`);
                  setIsCartOpen(false);
                } }>
                    {product.title}
                  </h3>
                  <p className="text-black pb-[8px]">
                    Precio: ${product.price.toFixed(2)}
                  </p>
                  <button
                    className="self-center text-white bg-red-500 hover:bg-red-600 rounded-md px-3 py-1 cursor-pointer transition-colors"
                    onClick={() => removecart(product.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={() => setIsCartOpen(false)}
              className="cursor-pointer mt-4 bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors"
            >
              Continuar Comprando
            </button>
          </div>
        </div>

        {/* Footer del carrito */}
        <div className="border-t border-amber-200 p-4 bg-amber-100">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg text-black font-semibold">Total:</span>
            <span className="text-lg font-bold text-amber-700">
              ${definirprecio(cart)}
            </span>
          </div>
          <button
            className="cursor-pointer w-full bg-amber-600 text-white py-3 rounded-md hover:bg-amber-700 transition-colors font-medium"
            onClick={() => {
              router.push("/Carrito");
            }}
          >
            Proceder al Pago
          </button>
        </div>
      </div>
    </>
  );
}