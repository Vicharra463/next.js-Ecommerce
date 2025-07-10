import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "./globals.css";
import { ShoppingcartProvider } from "@/context/index"; 

export const metadata = {
  title: 'Totoro Shop',
  description: 'Tienda Online de Ropa y Productos Digitales',
  icons: [
    { url: '/icono-pag.svg', type: 'image/svg+xml' } 
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
      <ShoppingcartProvider>
        <Header />
        {children}
        <Footer />
      </ShoppingcartProvider>
      </body>
    </html>
  );
}