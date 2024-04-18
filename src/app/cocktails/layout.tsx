import React from "react";
import { Inter } from "next/font/google";
import CocktailsHeader from "../components/CocktailsHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cocktails",
  descriptions: "Enjoy your cocktail!",
};
const CocktailsLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CocktailsHeader />
        <main className="px-4 md:max-w-6xl w-full mx-auto">{children}</main>
      </body>
    </html>
  );
};

export default CocktailsLayout;
