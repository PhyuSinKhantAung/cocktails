import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cocktail } from "../cocktails/page";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchCocktails: any = async (query: { search?: string }) => {
  let response;
  if (query?.search) {
    response = await fetch(`${url}${query.search}`);
  } else {
    response = await fetch(url);
  }

  if (!response.ok) throw new Error("Failed to fetch drinks");
  const data = await response.json();
  return data;
};

const CocktailsList = async ({
  query,
}: {
  query: {
    search?: string;
  };
}) => {
  const data = await fetchCocktails(query);
  const drinks = data?.drinks as Cocktail[];

  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-4">
      {drinks?.map((drink) => (
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
  );
};

export default CocktailsList;
