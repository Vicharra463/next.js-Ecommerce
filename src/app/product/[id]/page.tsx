import { getProductsbyid } from '@/app/types/types';
import { productid  } from '@/app/types/types';
import Image from 'next/image';
export default async function ProductPage({ params }: { params: { id: string } }) {
 const productos: productid = await getProductsbyid(Number(params.id));
  return (
     
    <div className="text-black">
      <div key={productos.id} className="p-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{productos.title}</h1>
        <Image
          src={productos.image}
          alt={productos.title}
          width={500}
          height={500}
          className="mb-4 rounded-lg" 
        />
        <p className="text-gray-600 mb-2">Price: ${productos.price}</p>
        <p className="text-gray-800 mb-4">{productos.description}</p>
        
      </div>
    </div>
    
  );
}
