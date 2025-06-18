// app/page.tsx
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    
    // Verificar si la respuesta es exitosa
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json(); // ← Agregado await aquí
    console.log("Respuesta positiva de la api");
    return data;
  } catch (error) {
    console.error('Error en cargar la api:', error);
    return []; // retorna array vacío si hay error
  }
}

export default async function Home() {
  const products = await getProducts();

  if (!products.length) {
    return (
      <div className="home p-4">
        <h1 className="text-2xl font-bold mb-4">Home</h1>
        <p className="text-red-500">Error al cargar los productos o no hay productos disponibles.</p>
      </div>
    );
  }

  return (
    <div className="home p-4 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Nuestra Tienda</h1>
        <p className="text-gray-600">Descubre nuestros productos destacados</p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <article 
            key={product.id} 
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="relative aspect-square bg-gray-50 flex items-center justify-center p-4">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="object-contain max-h-full max-w-full"
                priority={product.id <= 4} // prioriza las primeras 4 imágenes
              />
            </div>
            
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2 min-h-[3.5rem]">
                {product.title}
              </h2>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-green-600">
                  ${product.price}
                </span>
                
                {product.rating && (
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span>{product.rating.rate}</span>
                    <span className="ml-1">({product.rating.count})</span>
                  </div>
                )}
              </div>
              
              <p className="text-sm text-gray-500 capitalize mb-3">
                {product.category}
              </p>
              
              <button className="cursor-pointer w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
                Agregar al Carrito
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}