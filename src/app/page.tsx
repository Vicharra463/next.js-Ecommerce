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
            className="cursor-pointer px-6 py-2 bg-amber-600 text-white rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
            onClick={(e) => {
              e.currentTarget.blur(); // quita el foco
              router.push("/product");
            }}
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
      <div className="py-20 px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Ofertas Especiales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre nuestras promociones exclusivas y lleva a casa la magia
              de Totoro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm">
                -20%
              </div>
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  👚
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Ropa Exclusiva
                </h3>
                <p className="text-gray-600 mb-6">
                  Colección completa con 20% de descuento
                </p>
                <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors">
                  Ver Ofertas
                </button>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm">
                GRATIS
              </div>
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  🚚
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Envío Gratis
                </h3>
                <p className="text-gray-600 mb-6">
                  En compras mayores a $50 a todo el país
                </p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">
                  Comprar Ahora
                </button>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm">
                NUEVO
              </div>
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  ⭐
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Edición Limitada
                </h3>
                <p className="text-gray-600 mb-6">
                  Figuras coleccionables exclusivas
                </p>
                <button className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition-colors">
                  Descubrir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seccion de categorias */}
      <div className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Explora Nuestras Categorías
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde adorables peluches hasta figuras coleccionables, encuentra
              todo lo que necesitas para sumergirte en el mundo mágico de Totoro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative text-center">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-4xl">👕</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Ropa</h3>
                <p className="text-gray-600 mb-4">
                  Camisetas y accesorios únicos
                </p>
                <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                  Ver colección →
                </span>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative text-center">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-4xl">💎</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Joyas</h3>
                <p className="text-gray-600 mb-4">
                  Coleccionables de edición limitada
                </p>
                <span className="text-green-600 font-semibold group-hover:text-green-700">
                  Ver colección →
                </span>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative text-center">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-4xl">👨‍💻</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Electronica
                </h3>
                <p className="text-gray-600 mb-4">
                  Sets perfectos para ocasiones especiales
                </p>
                <span className="text-pink-600 font-semibold group-hover:text-pink-700">
                  Ver colección →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Seccion de testimonios */}
      <div className="py-20 px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Opiniones de Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre por qué nuestros clientes aman la electrónica, joyas y
              ropa inspiradas en Totoro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-400">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  JM
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-800">
                    Juan Martínez
                  </h4>
                  <div className="flex text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed">
                &ldquo;Compré unos audífonos edición Totoro y la calidad de
                sonido es increíble. ¡Perfectos para fans y amantes de la
                tecnología!&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-sm text-gray-500">
                  Compra verificada • Electrónica Totoro
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green-400">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  LC
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-800">
                    Laura Castillo
                  </h4>
                  <div className="flex text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed">
                &ldquo;Las joyas de Totoro son hermosas y de excelente calidad.
                Recibí mi collar muy rápido y en un empaque precioso.&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-sm text-gray-500">
                  Compra verificada • Collar Totoro
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-pink-400">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  RS
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-800">
                    Roberto Sánchez
                  </h4>
                  <div className="flex text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed">
                &ldquo;La ropa de Totoro es súper cómoda y original. Me encantó
                la camiseta y la atención al cliente fue excelente.&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-sm text-gray-500">
                  Compra verificada • Camiseta Totoro
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seccion de newsletter */}
      <div className="py-20 px-8 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-10 rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¡Únete a Nuestra Comunidad Totoro!
            </h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
              Sé el primero en conocer nuestras nuevas colecciones, ofertas
              exclusivas y contenido especial del mundo mágico de Totoro
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto">
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="tu-email@ejemplo.com"
                className="px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-amber-400 focus:outline-none text-gray-800 text-lg"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg">
                Suscribirse Ahora
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
              <span>🔒</span>
              <span>100% seguro • Sin spam • Cancela cuando quieras</span>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-8 text-amber-100">
            <div className="text-center">
              <div className="text-2xl font-bold">15K+</div>
              <div className="text-sm">Suscriptores</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24h</div>
              <div className="text-sm">Respuesta</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
