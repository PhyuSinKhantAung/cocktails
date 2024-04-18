import React from "react";
import Image from "next/image";
import Link from "next/link";
// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=abc
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export type Cocktail = {
  idDrink: string;
  strDrink: string;
  strInstructions: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strMeasure1: string;
  strMeasure2: string;
  strDrinkThumb: string;
};

const fetchCocktails: any = async () => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch drinks");
  const data = await response.json();
  return data;
};

const CocktailsPage = async () => {
  const data = await fetchCocktails();
  const drinks = data?.drinks as Cocktail[];

  console.log({ drinks });

  return (
    <div>
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full max-w-xs input-sm"
        />
      </div>

      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-4">
        {drinks.map((drink) => (
          <div className="w-full relative " key={drink.idDrink}>
            <Link href={`/cocktails/${drink.idDrink}`}>
              <Image
                src={drink.strDrinkThumb}
                width={300}
                height={200}
                alt="cocktail-image"
                className="rounded-md object-cover w-full"
              />
              <div
                className="
            bg-[#ff11c7] text-white font-bold w-20 px-2 py-2
             absolute
             right-0 bottom-0
            "
              >
                {drink.strDrink}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CocktailsPage;
