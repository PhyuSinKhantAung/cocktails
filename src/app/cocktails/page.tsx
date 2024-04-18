import React from "react";
import SearchInput from "../components/CocktailsSearchInput";
import CocktailsList from "../components/CocktailsList";

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

const CocktailsPage = async ({
  searchParams,
}: {
  searchParams: {
    search?: string;
  };
}) => {
  const searchTerm = searchParams?.search || "";
  const query = { search: searchTerm };

  return (
    <div>
      <div className="flex justify-center my-4">
        <SearchInput placeholder="Search...." />
      </div>

      <CocktailsList query={query} />
    </div>
  );
};

export default CocktailsPage;
