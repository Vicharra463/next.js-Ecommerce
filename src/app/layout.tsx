import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
       
        
        <Footer />
      </body>
    </html>
  );
}