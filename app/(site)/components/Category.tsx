"use client";

import useUIState from "@/app/hooks/useUIState";
import { homeCategoryList } from "@/lib/dummyData";
import { cn } from "@/lib/utils";
import { useCallback } from "react";

interface HomeCategory {
  label: string;
  src: string;
}

type HomeCategoryList = HomeCategory[];

const Category = () => {
  const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();

  const homeCategories = homeCategoryList as HomeCategoryList;

  const isEqual = useCallback(
    (item) => homeCategory === item.label,
    [homeCategory],
  );

  const onClickCategory = (item: HomeCategory): void => {
    if (isEqual(item)) {
      setHeaderImageSrc("");
      setHomeCategory("");
    } else {
      setHeaderImageSrc(item.src);
      setHomeCategory(item.label);
    }
  };

  return (
    <ul className="flex flex-row gap-4 overflow-x-auto max-w-full">
      {homeCategories.map((item) => (
        <li
          onClick={() => onClickCategory(item)}
          key={`category-${item.label}`}
          className={cn(
            `h-10 min-w-fit px-3 flex justify-center
          items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)]
          hover:bg-[rgba(144,144,144,0.45)] cursor-pointer`,
            isEqual(item) && "bg-white text-black hover:bg-white",
          )}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default Category;
