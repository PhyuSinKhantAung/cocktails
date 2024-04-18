import React from "react";
import { Cocktail } from "../page";
import Image from "next/image";
import Link from "next/link";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleCocktailById = async (cocktailId: string) => {
  const response = await fetch(`${url}${cocktailId}`);
  if (!response.ok) throw new Error("Failed to fetch cocktail...");
  return response.json();
};

const SingleCocktail = async ({ params }: { params: { id: string } }) => {
  const data = await getSingleCocktailById(params.id);
  const [drink] = data.drinks as Cocktail[];

  console.log({ drink });
  return (
    <div className="flex flex-col md:flex-row gap-y-4 w-full my-4 mt-10">
      <div className="md:w-1/2 w-full flex justify-center">
        <Image
          src={drink.strDrinkThumb}
          width={400}
          height={100}
          alt="cocktail"
        ></Image>
      </div>
      <div className="md:w-1/2 w-full flex flex-col gap-y-4 p-10 lg:p-5">
        <h1 className="text-3xl font-bold">{drink.strDrink}</h1>
        <p>{drink.strInstructions}</p>
        <li>{drink.strIngredient1 || "Unknown"}</li>
        <li>{drink.strIngredient2 || "Unknown"}</li>
        <li>{drink.strIngredient3 || "Unknown"}</li>
        <Link href={`/cocktails`} className="btn btn-default">
          🔙 to all cocktails
        </Link>
      </div>
    </div>
  );
};

export default SingleCocktail;
