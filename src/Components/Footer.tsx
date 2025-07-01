import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ModernFooter() {


    return (
           
            <footer className="bg-gradient-to-r from-white via-gray-100 to-white text-gray-800 border-t-2 border-gray-200">
               
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                       
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                                Totoro Shop
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Tu tienda digital para ropa de hombre y mujer, y productos digitales exclusivos. ¡Descubre lo último en moda y tecnología!
                            </p>
                            <div className="flex space-x-4">
    
                            </div>
                        </div>

                        
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-blue-700">Enlaces Rápidos</h4>
                            <ul className="space-y-2">
                                {['Inicio', 'Catálogo', 'Ofertas', 'Blog', 'Contacto'].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                   
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-blue-700">Categorías</h4>
                            <ul className="space-y-2">
                                {['Ropa Hombre', 'Ropa Mujer', 'Productos Digitales', 'Accesorios', 'Novedades'].map((cat) => (
                                    <li key={cat}>
                                        <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                                            {cat}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-blue-700">Contacto</h4>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                    <span className="text-gray-600">Av. Digital 456, Ciudad Online</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                    <span className="text-gray-600">+34 900 123 456</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                    <span className="text-gray-600">hola@totoroshop.com</span>
                                </div>
                            </div>
                            
                           
                            <div className="mt-6">
                                <p className="text-sm text-gray-600 mb-3">Suscríbete para recibir novedades y ofertas</p>
                                <div className="flex">
                                    <input 
                                        type="email" 
                                        placeholder="Tu email"
                                        className="flex-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-400"
                                    />
                                    <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-r-lg transition-all duration-300 transform hover:scale-105 text-white">
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
                <div className="border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className="text-gray-500 text-sm">
                                © 2025 Totoro Shop. Todos los derechos reservados.
                            </p>
                            <div className="flex space-x-6 text-sm">
                                <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors duration-300">
                                    Política de Privacidad
                                </a>
                                <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors duration-300">
                                    Términos de Servicio
                                </a>
                                <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors duration-300">
                                    Cookies
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    
    );
}