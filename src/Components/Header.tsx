"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo + Nombre */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-gray-800 transition-colors hover:text-blue-500"
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
              className="text-gray-600 hover:text-blue-500 transition-colors text-base"
            >
              Inicio
            </Link>
            <Link
              href="/product"
              className="text-gray-600 hover:text-blue-500 transition-colors text-base"
            >
              Productos
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-500 transition-colors text-base"
            >
              Acerca de
            </Link>
          </nav>

          {/* Carrito */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Abrir carrito de compras"
          >
            <Image
              src="/carro.svg"
              alt="Carrito de compras"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <span className="ml-2 hover:text-blue-600 cursor-pointer">
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
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header del carrito */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">
            Carrito de Compras
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
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
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <p className="mt-2 text-gray-500">Tu carrito está vacío</p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Continuar Comprando
            </button>
          </div>
        </div>

        {/* Footer del carrito */}
        <div className="border-t p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg text-black font-semibold">Total:</span>
            <span className="text-lg font-bold text-blue-600">$0.00</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
            Proceder al Pago
          </button>
        </div>
      </div>
    </>
  );
}
