import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
     
        <Link href="/" className="p-1 flex text-2xl font-bold text-gray-800 transition-colors hover:text-blue-500">
            <Image 
       src="/icon.svg"   // ✅ sin /public
       alt="icono"
       width={32}        // 👈 obligatorio: width y height o layout="fill"
       height={32}
        />
          Totoro Shop
        </Link>
        
        <nav className="space-x-4">
          <Link href="/" className="text-gray-600  hover:text-blue-500 transition-colors text-base not-italic">
            Inicio
          </Link>
          <Link href="/product" className="text-gray-600  hover:text-blue-500 transition-colors">
            Productos
          </Link>
          <Link href="/about" className="text-gray-600  hover:text-blue-500 transition-colors">
            Acerca de
          </Link>
        </nav>
        
        <div className="flex items-center">
          <button 
            className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Abrir carrito de compras"
          >
            <Image
              src="/carro.svg"
              alt="Carrito de compras"
              width={24}
              height={24}
              priority={false}
            />
            <span className="text-gray-800 ml-2">Carrito</span>
          </button>
        </div>
      </div>
    </header>
  );
}