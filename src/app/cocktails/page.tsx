import React from "react";
import Image from "next/image";

// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=abc
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

type Cocktail = {
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

const CocktailsPage = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const drinks = data.drinks as Cocktail[];

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
            <Image
              src={drink.strDrinkThumb}
              width={300}
              height={200}
              alt="cocktail-image"
              className="w-full"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default CocktailsPage;
