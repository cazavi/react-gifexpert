import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]); // no usar condicionalmente los hooks

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // console.log(newCategory);
    // categories.push(newCategory);
    // setCategories(cat => [...cat, "Jojo's Bizarre Adventure"]);
    setCategories([newCategory, ...categories]);
  };

  // console.log(categories)

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={onAddCategory}
      />
        {categories.map((category) => (
          //no usar index como key porque por i react relaciona que elemento se elimina etc
          <GifGrid 
            key={category}
            category={category}
          />
          ))
        }
    </>
  );
};
