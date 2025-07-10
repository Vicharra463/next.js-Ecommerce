"use client";
import React, { createContext, useEffect, useState } from "react";
import { Product } from "@/app/types/types";

// Define el tipo de contexto
interface ShoppingCartContextType {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
  removecart: (productId: number) => void;
}

// Aquí creas el contexto correctamente
export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  cart: [],
  setCart: () => {},
  removecart: () => {},
  addToCart: () => {},
});

// Proveedor del contexto
export const ShoppingcartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  useEffect (() => {
    const store = localStorage.getItem("user");
    if (store) {
      setCart(JSON.parse(store));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(cart));
  }, [cart])
  
  const removecart = (productId : number) => {
    setCart((prev => prev.filter((product) => product.id !== productId)))
  }

  return (
    <ShoppingCartContext.Provider value={{ cart, setCart, addToCart,removecart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
