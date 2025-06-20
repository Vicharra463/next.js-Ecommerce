'use client';
import React from "react";
import { useRouter } from 'next/navigation';
import { Award, Users, Target, Heart, Star, CheckCircle, Sparkles } from "lucide-react";

export default function AboutPage() {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 px-4 py-16">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-blue-400/30">
                        <Sparkles className="w-4 h-4 text-blue-300" />
                        <span className="text-blue-200 text-sm font-medium">Conoce Nuestra Historia</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent mb-8 leading-tight">
                        Sobre Nosotros
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto">
                        Transformamos experiencias digitales con <span className="text-cyan-300 font-semibold">innovación</span>, 
                        <span className="text-blue-300 font-semibold"> calidad</span> y 
                        <span className="text-indigo-300 font-semibold"> pasión</span>
                    </p>
                </div>

                {/* Cards principales */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
                    {/* Card principal izquierda */}
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:transform hover:scale-105 transition-all duration-500">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Nuestra Misión</h2>
                        </div>
                        <p className="text-blue-100 text-lg leading-relaxed">
                            Revolucionar la experiencia de compra en línea mediante tecnología de vanguardia, 
                            productos excepcionales y un servicio que supere constantemente las expectativas de nuestros clientes.
                        </p>
                        <div className="mt-6 flex gap-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                        </div>
                    </div>

                    {/* Card principal derecha */}
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:transform hover:scale-105 transition-all duration-500">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Nuestra Visión</h2>
                        </div>
                        <p className="text-blue-100 text-lg leading-relaxed">
                            Ser la plataforma de comercio electrónico líder que conecte marcas innovadoras con 
                            consumidores exigentes, creando un ecosistema digital que inspire confianza y genere valor.
                        </p>
                        <div className="mt-6 flex gap-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Valores section */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestros Valores</h2>
                        <p className="text-blue-200 text-xl">Los principios que guían cada decisión</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Excelencia</h3>
                            <p className="text-blue-200 text-sm">Búsqueda constante de la perfección en cada detalle</p>
                        </div>
                        
                        <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Colaboración</h3>
                            <p className="text-blue-200 text-sm">Trabajo en equipo para lograr objetivos extraordinarios</p>
                        </div>
                        
                        <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Star className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Innovación</h3>
                            <p className="text-blue-200 text-sm">Pioneros en soluciones creativas y disruptivas</p>
                        </div>
                        
                        <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <CheckCircle className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Integridad</h3>
                            <p className="text-blue-200 text-sm">Transparencia y honestidad en todas nuestras acciones</p>
                        </div>
                    </div>
                </div>

                {/* Stats section */}
                <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-black text-cyan-300 mb-2">10K+</div>
                            <div className="text-blue-200 text-sm">Clientes Satisfechos</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-black text-blue-300 mb-2">50+</div>
                            <div className="text-blue-200 text-sm">Productos Premium</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-black text-indigo-300 mb-2">99.9%</div>
                            <div className="text-blue-200 text-sm">Uptime Garantizado</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-black text-purple-300 mb-2">24/7</div>
                            <div className="text-blue-200 text-sm">Soporte Técnico</div>
                        </div>
                    </div>
                </div>

                {/* Call to action final */}
                <div className="max-w-3xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 shadow-2xl border border-blue-400/30">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            ¡Únete a Nuestra Familia Digital!
                        </h3>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            Gracias por confiar en nosotros. Juntos construimos el futuro del comercio digital, 
                            una experiencia excepcional a la vez.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick = {() => 
                                router.push('/product')
                            }className="bg-white text-blue-600 font-bold py-4 px-8 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg cursor-pointer">
                                Conoce Nuestros Productos
                            </button>
                            <button className="bg-blue-500/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-2xl border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-300 hover:transform hover:scale-105">
                                Contáctanos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}