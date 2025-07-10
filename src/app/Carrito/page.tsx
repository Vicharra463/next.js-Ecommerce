"use client"
import { ShoppingCartContext } from "@/context";
import { useContext, useState } from "react";
import { Product } from '@/app/types/types';
import { CreditCard, Lock, User, Mail, MapPin, Phone } from 'lucide-react';

function calcularTotal(cart: Product[]) {
  return cart.reduce((total, product) => total + parseFloat(product.price.toString()), 0);
}

function calcularImpuestos(subtotal: number) {
  return subtotal * 0.18;
}

export default function CarritoResumen() {
  const { cart } = useContext(ShoppingCartContext);
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    apellido: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    numeroTarjeta: '',
    fechaVencimiento: '',
    cvv: '',
    nombreTarjeta: ''
  });

  const subtotal = calcularTotal(cart);
  const impuestos = calcularImpuestos(subtotal);
  const total = subtotal + impuestos;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Procesando pago:', formData);
    alert('¡Pago procesado exitosamente!');
  };

  return (
    <div className="min-h-screen bg-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Resumen del pedido */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg border border-amber-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CreditCard className="w-6 h-6 mr-2 text-amber-600" />
                Resumen del Pedido
              </h2>
              
              <div className="space-y-4 mb-6">
                {cart.map((product: Product) => (
                  <div key={product.id} className="flex items-center space-x-4 border-b border-amber-100 pb-4">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-16 h-16 object-contain rounded-md bg-amber-50"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-500 capitalize">
                        {product.category}
                      </p>
                      <p className="text-lg font-bold text-amber-700">
                        ${parseFloat(product.price.toString()).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t border-amber-200 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Impuestos (18%):</span>
                  <span className="text-gray-900">${impuestos.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-amber-200 pt-2">
                  <span className="text-gray-900">Total:</span>
                  <span className="text-amber-700">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-100 rounded-lg">
                <div className="flex items-center text-sm text-amber-800">
                  <Lock className="w-4 h-4 mr-2" />
                  Tus datos están protegidos con encriptación SSL
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de pago */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Información de contacto */}
              <div className="bg-white rounded-lg shadow-lg border border-amber-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-amber-600" />
                  Información de Contacto
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-1 text-amber-600" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1 text-amber-600" />
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="+51 999 999 999"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Juan"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 ">
                      Apellido
                    </label>
                    <input
                      type="text"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Pérez"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Dirección de envío */}
              <div className="bg-white rounded-lg shadow-lg border border-amber-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-amber-600" />
                  Dirección de Envío
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dirección
                    </label>
                    <input
                      type="text"
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Av. Ejemplo 123, Distrito"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ciudad
                      </label>
                      <input
                        type="text"
                        name="ciudad"
                        value={formData.ciudad}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Lima"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Código Postal
                      </label>
                      <input
                        type="text"
                        name="codigoPostal"
                        value={formData.codigoPostal}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="15001"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Información de pago */}
              <div className="bg-white rounded-lg shadow-lg border border-amber-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-amber-600" />
                  Información de Pago
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número de Tarjeta
                    </label>
                    <input
                      type="text"
                      name="numeroTarjeta"
                      value={formData.numeroTarjeta}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre en la Tarjeta
                    </label>
                    <input
                      type="text"
                      name="nombreTarjeta"
                      value={formData.nombreTarjeta}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Juan Pérez"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fecha de Vencimiento
                      </label>
                      <input
                        type="text"
                        name="fechaVencimiento"
                        value={formData.fechaVencimiento}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón de pago */}
              <div className="bg-white rounded-lg shadow-lg border border-amber-200 p-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Lock className="w-5 h-5 inline mr-2" />
                  Procesar Pago - ${total.toFixed(2)}
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-3">
                  Al hacer clic en &quot;Procesar Pago&quot;, aceptas nuestros términos y condiciones
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
   