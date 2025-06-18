
import "./globals.css";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="">
        {children}
        <div className="border-indigo-500 border-3 items-center bg-bg-amber-700 py-4 w-[400px] mx-auto">
        <form >
        <h2 className="text-center ">ingrese Nombre</h2>
        <input type="text" placeholder=" nombre" className="bg-amber-700 mx-auto block"/>
      </form>
      </div>
      <div className="mask-b-from-gray-300 mask-to-gray-500 bg-gradient-to-b from-gray-300 to-gray-500 h-96 w-full">

      </div>
      </body>
    </html>
  );
}
