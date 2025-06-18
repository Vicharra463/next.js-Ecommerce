import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children}
        <div className="border-indigo-500 border-4 flex items-center bg-amber-700 py-4 w-[400px] mx-auto">
          <form className="w-full">
            <h2 className="text-center text-white mb-4">Ingrese Nombre</h2>
            <input 
              type="text" 
              placeholder="Nombre" 
              className="bg-amber-600 mx-auto block px-3 py-2 rounded border text-white placeholder-amber-200 w-full max-w-xs"
            />
          </form>
        </div>
        <div className="bg-gradient-to-b from-gray-300 to-gray-500 h-96 w-full">
          {/* Contenido del gradiente */}
        </div>
      </body>
    </html>
  );
}